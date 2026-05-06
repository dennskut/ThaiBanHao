param(
  [Parameter(Mandatory = $true)]
  [string]$BaseUrl
)

$ErrorActionPreference = "Stop"

function Test-Endpoint {
  param(
    [Parameter(Mandatory = $true)][string]$Url,
    [Parameter(Mandatory = $true)][int]$ExpectedStatus,
    [string]$ContainsText
  )

  try {
    $response = Invoke-WebRequest -Uri $Url -Method Get -UseBasicParsing -MaximumRedirection 5
    $statusOk = ($response.StatusCode -eq $ExpectedStatus)
    $contentOk = $true

    if ($ContainsText) {
      $contentOk = $response.Content -match [regex]::Escape($ContainsText)
    }

    [PSCustomObject]@{
      Url = $Url
      StatusCode = $response.StatusCode
      StatusOk = $statusOk
      ContentOk = $contentOk
      Passed = ($statusOk -and $contentOk)
    }
  }
  catch {
    [PSCustomObject]@{
      Url = $Url
      StatusCode = -1
      StatusOk = $false
      ContentOk = $false
      Passed = $false
    }
  }
}

$base = $BaseUrl.TrimEnd('/')

$checks = @(
  @{ Url = "$base/"; ExpectedStatus = 200; ContainsText = "Thai Ban Hao" },
  @{ Url = "$base/healthz.json"; ExpectedStatus = 200; ContainsText = '"status": "ok"' },
  @{ Url = "$base/assets/images/hero-front.jpeg"; ExpectedStatus = 200; ContainsText = $null },
  @{ Url = "$base/assets/images/logo.png"; ExpectedStatus = 200; ContainsText = $null },
  @{ Url = "$base/assets/images/menu/pad-thai.jpeg"; ExpectedStatus = 200; ContainsText = $null }
)

$results = foreach ($check in $checks) {
  Test-Endpoint -Url $check.Url -ExpectedStatus $check.ExpectedStatus -ContainsText $check.ContainsText
}

$results | Format-Table -AutoSize

$failed = $results | Where-Object { -not $_.Passed }
if ($failed.Count -gt 0) {
  Write-Error "One or more checks failed."
}

# Optional header check on homepage
try {
  $home = Invoke-WebRequest -Uri "$base/" -Method Get -UseBasicParsing -MaximumRedirection 5
  $headersToInspect = @(
    'Content-Security-Policy',
    'X-Content-Type-Options',
    'Referrer-Policy'
  )

  Write-Host "\nHeader snapshot:" -ForegroundColor Cyan
  foreach ($h in $headersToInspect) {
    $val = $home.Headers[$h]
    if ($val) {
      Write-Host "$h: $val"
    }
    else {
      Write-Host "$h: (missing)"
    }
  }
}
catch {
  Write-Warning "Could not inspect response headers."
}

Write-Host "\nAll required endpoint checks passed." -ForegroundColor Green
