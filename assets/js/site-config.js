window.TBH_CONFIG = {
  // Reviews copied manually from Google Maps. Shown three at a time, rotating every 10 seconds.
  // Only 5-star reviews are displayed. Newest first.
  REVIEWS: [
    {
      author_name: "Josefin Lennartsson",
      rating: 5,
      text: "Bästa thaimaten jag ätit i Visby!"
    },
    {
      author_name: "Jonathan Höglund",
      rating: 5,
      text: "Take away tog 15 minuter, kommer in till restaurangen och det är fullsatt, mysig stämning! Vi beställde Pad Thai och Pad Bami, lagom/stora portioner! Maten var supergod! Personalen var positiva och trevliga."
    },
    {
      author_name: "Hody Chan",
      rating: 5,
      text: "Jättebra thaimat! Den bäst thairestaurang i Visby och Stockholm! 😋😋😋"
    },
    {
      author_name: "Annika Söderdahl",
      rating: 5,
      text: "Bästa kycklingröd curryn"
    },
    {
      author_name: "Sofia Nilsson",
      rating: 5,
      text: "Jättegod mat, jättegullig tjej i kassan, kommer absolut tillbaka!"
    },
    {
      author_name: "Homer Nordgren",
      rating: 5,
      text: "Väldigt god mat och bra service!"
    },
    {
      author_name: "Kjersti Åstad",
      rating: 5,
      text: "Beste thaimaten vi har smakt i hele Sverige. Rask service og fin liten restaurant"
    },
    {
      author_name: "Nazli",
      rating: 5,
      text: "Supergott och autentiskt! Även barnen älskade det!"
    },
    {
      author_name: "Stephan Berg",
      rating: 5,
      text: "Meget lækkert og hjemmelavet mad til få penge"
    },
    {
      author_name: "Niklas",
      rating: 5,
      text: "Jag och min sambo kommer från Höga Kusten i norra Sverige och har nu ätit här två gånger under vår semester på Gotland. Maten har varit helt fantastisk båda gångerna.\n\nDen stora Som Tum var helt utsökt och perfekt att dela på. Personalen är otroligt trevlig, hjälpsam och får en att känna sig varmt välkommen.\n\nEnligt oss är detta en av de absolut bästa restaurangerna på Gotland. Vi kommer definitivt tillbaka och rekommenderar varmt restaurangen till alla.\n\nÄven fullständiga rättigheter för det som önskar någon alkoholhaltig dryck till maten.\n\nStort tack för fantastisk mat och ett underbart bemötande!"
    },
    {
      author_name: "Kjell Tømmerdal",
      rating: 5,
      text: "Nydelig mat tusen takk"
    }
  ],

  // Opening hours switch automatically on the configured date.
  // Date format: YYYY-MM-DD (inclusive).
  OPENING_HOURS: {
    activeFrom: "2026-08-31",
    current: [
      { label: "Alla dagar", hours: "11:00 – 21:00" }
    ],
    upcoming: [
      { label: "Måndag-Torsdag", hours: "11:00 – 20:00" },
      { label: "Fredag-Söndag", hours: "11:00 – 21:00" }
    ]
  },

  // Reusable global notice shown in hero + sticky strip under header.
  // Date format: YYYY-MM-DD (inclusive). Leave start/end empty to always show when enabled=true.
  NOTICE: {
    enabled: true,
    startDate: "",
    endDate: "",
    eyebrow: "Premiär fredag 16 oktober",
    title: "Snart kommer sushi till Thai Ban Hao!",
    message: "Vi finslipar menyn just nu. Sushi-premiär fredag 16 oktober, mer information kommer snart.",
    stickyText: "SUSHI-PREMIÄR FREDAG 16 OKTOBER",
    ctaLabel: "",
    ctaHref: "#menu"
  }
};
