# Thai Ban Hao - GitHub Pages + One.com Guide

Denna guide ar fokuserad pa GitHub Pages och egen doman fran one.com.

## Innan du borjar
1. Ha ett GitHub-konto klart.
2. Ha din doman aktiv i one.com.
3. Jobba fran mappen publish-ready.

## Innehall i publish-ready
- index.html
- assets/images/*
- assets/js/site-config.js
- healthz.json
- scripts/check-live-site.ps1

## Steg 1 - Konfigurera Google API-nyckel
1. Oppna assets/js/site-config.js.
2. Ersatt REPLACE_WITH_GOOGLE_MAPS_API_KEY med din nyckel.
3. I Google Cloud, satt restriktioner:
   - Application restriction: HTTP referrers
   - Tillat endast:
       - https://banhao.se/*
       - https://www.banhao.se/*
         - https://thaibanhao.banhao.se/*
         - https://dennskut.github.io/*
   - API restriction: Maps JavaScript API och Places API

## Steg 2 - Publicera till GitHub Pages
1. Skapa ett nytt GitHub-repo, exempel: thai-ban-hao-site.
2. Lagg in allt innehall fran publish-ready i repo-roten.
3. Commit och push till main.
4. Ga till repo: Settings -> Pages.
5. Source: Deploy from a branch.
6. Branch: main, Folder: /(root).
7. Vanta tills sidan ar live pa github.io-url.

## Steg 3 - Koppla din one.com-doman
1. I GitHub: Settings -> Pages -> Custom domain.
2. Skriv: banhao.se
3. Aktivera Enforce HTTPS nar certifikatet blivit klart.

Obs: GitHub Pages har en primar custom domain per site. Eftersom du ager banhao.se (och inte thaibanhao.se) anvander vi banhao.se som primar doman.

Viktigt: Du kan inte anvanda thaibanhao.se utan att registrera den domanen. Om du vill ha "thaibanhao" i adressen med nuvarande doman kan du anvanda subdomanen thaibanhao.banhao.se.

## Steg 4 - DNS i one.com
Skapa/uppdatera DNS-poster hos one.com enligt nedan.

For apex-doman (banhao.se):
- A 185.199.108.153
- A 185.199.109.153
- A 185.199.110.153
- A 185.199.111.153

For www-subdoman:
- CNAME www -> dennskut.github.io

Valfritt IPv6 (om one.com stodjer AAAA):
- AAAA 2606:50c0:8000::153
- AAAA 2606:50c0:8001::153
- AAAA 2606:50c0:8002::153
- AAAA 2606:50c0:8003::153

Valfritt: thaibanhao.banhao.se som alias
1. Skapa subdomanen thaibanhao i one.com.
2. Valt upplagg A (rekommenderat): 301 redirect
   - Från: https://thaibanhao.banhao.se
   - Till: https://banhao.se
   - Typ: Permanent (301)
3. Valt upplagg B (direkt mot GitHub Pages):
   - CNAME thaibanhao -> dennskut.github.io
   - Obs: Halls enklare om du istallet redirectar till banhao.se.

## Steg 5 - CNAME-fil i repot
Skapa filen CNAME i repo-roten med endast din doman, exempel:
banhao.se

## Sakerhet som ar implementerad
- API-nyckel ligger i separat konfigfil, inte hardkodad i HTML.
- Content Security Policy ar satt via meta tag i index.html.
- Referrer policy ar satt via meta tag i index.html.
- Externa lankar med target=_blank anvander noopener noreferrer.

## Viktigt om GitHub Pages och headers
GitHub Pages tillater inte egna server-headers som _headers/.htaccess.
Darfor anvands meta-baserad hardening i index.html.

## Efter publicering - verifiering
1. Hard refresh i browser: Cmd+Shift+R.
2. Testa:
   - /assets/images/hero-front.jpeg
   - /assets/images/logo.png
   - /assets/images/menu/pad-thai.jpeg
   - /healthz.json
3. Kor health check lokalt:
   pwsh ./scripts/check-live-site.ps1 -BaseUrl "https://banhao.se"

## Vanliga fel
- 404 pa bilder: filer ar inte i repo-roten med ratt struktur.
- Domanen visar inte sidan: DNS-propagation kan ta tid (upp till 24-48h).
- Google-recensioner syns inte: API-nyckel/referer-restriktioner blockerar.
