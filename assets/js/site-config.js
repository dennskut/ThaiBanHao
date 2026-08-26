window.TBH_CONFIG = {
  // Replace with your Google Maps API key.
  // Keep API key restricted in Google Cloud to your domain only.
  GOOGLE_MAPS_API_KEY: "AIzaSyAq0JGVoyrREcuXDe_MakGTfj7k32ILX2M",

  // Manual fallback reviews used when Google only returns a limited subset.
  GOOGLE_FALLBACK_REVIEWS: [
    {
      author_name: "Annika Soderdahl",
      rating: 5,
      text: "Basta kyckling rod curryn"
    },
    {
      author_name: "Sofia Nilsson",
      rating: 5,
      text: "Jattegod mat, jattegullig tjej i kassan, kommer absolut tillbaka!"
    },
    {
      author_name: "Homer Nordgren",
      rating: 5,
      text: "Valdigt god mat och bra service!"
    },
    {
      author_name: "Kjersti Astad",
      rating: 5,
      text: "Beste thaimaten vi har smakt i hele Sverige. Rask service og fin liten restaurant"
    },
    {
      author_name: "Nazli",
      rating: 5,
      text: "Supergott och autentiskt! Aven barnen alskade det!"
    },
    {
      author_name: "Stephan Berg",
      rating: 5,
      text: "Meget laekkert og hjemmelavet mad til fa penge"
    },
    {
      author_name: "Niklas",
      rating: 5,
      text: "Jag och min sambo kommer fran Hoga Kusten i norra Sverige och har nu atit har tva ganger under var semester pa Gotland. Maten har varit helt fantastisk bada gangerna.\n\nDen stora Som Tum var helt utsokt och perfekt att dela pa. Personalen ar otroligt trevlig, hjalpsam och far en att kanna sig varmt valkommen.\n\nEnligt oss ar detta en av de absolut basta restaurangerna pa Gotland. Vi kommer definitivt tillbaka och rekommenderar varmt restaurangen till alla.\n\nAven fullstandiga rattigheter for det som onskar nagon alkoholhaltig dryck till maten.\n\nStort tack for fantastisk mat och ett underbart bemotande!"
    },
    {
      author_name: "Kjell Tommerdal",
      rating: 5,
      text: "Nydelig mat tusen takk"
    }
  ],

  // Reusable global notice shown in hero + sticky strip under header.
  // Date format: YYYY-MM-DD (inclusive). Leave start/end empty to always show when enabled=true.
  NOTICE: {
    enabled: true,
    startDate: "2026-08-03",
    endDate: "2026-08-08",
    eyebrow: "Tillfällig information",
    title: "Endast takeaway lördag 8/8",
    message: "Lördag 8/8 har vi endast takeaway då restaurangen är bokad för privat tillställning.",
    stickyText: "Lördag 8/8: Endast takeaway. Restaurangen är bokad för privat tillställning.",
    ctaLabel: "Beställ takeaway",
    ctaHref: "#takeaway"
  }
};
