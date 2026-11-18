export const company = {
  name: "AlicIA-GPT",
  legalName: "AlicIA-GPT — Agence IA & Consulting",
  description:
    "Agence de conseil en intelligence artificielle rayonnant depuis Soissons. Nous accompagnons artisans, TPE et PME dans l'automatisation de leurs tâches administratives, comptables, RH et marketing grâce à des agents IA sur-mesure, déployés localement pour une conformité totale au RGPD.",
  url: "https://www.alicia-gpt.com",
  logo: "/logo.jpeg",
  images: [
    "/images/consultant-ia-soissons.png",
    "/images/atelier-formation-ia.png",
    "/images/bureau-alicia-gpt.png",
  ],
  vatID: "FR86827987595",
  taxID: "82798759500028",
  founder: {
    "@type": "Person",
    "@id": "https://www.alicia-gpt.com/#person",
    name: "Cyril Gourdon",
    jobTitle: "Fondateur et Consultant en Intelligence Artificielle",
    sameAs: [
      "https://www.linkedin.com/in/cyril-gourdon/",
      "https://github.com/cyrisa02",
    ],
  },
  email: "contact@alicia-gpt.fr",
  telephone: "+33615603344",
  // Siège légal = Beauvais (obligation mentions légales + cohérence GBP)
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 avenue Jean Rostand",
    addressLocality: "Beauvais",
    addressRegion: "Hauts-de-France",
    postalCode: "60000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.4294,
    longitude: 2.0787,
  },
  openingHours: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  // Rayonnement commercial = Soissons + zone de prospection
  areaServed: [
    { "@type": "City", name: "Soissons" },
    { "@type": "City", name: "Laon" },
    { "@type": "City", name: "Villers-Cotterêts" },
    { "@type": "City", name: "Château-Thierry" },
    { "@type": "City", name: "Chauny" },
    { "@type": "City", name: "Fismes" },
    { "@type": "City", name: "Reims" },
    { "@type": "City", name: "Beauvais" },
    { "@type": "City", name: "Compiègne" },
    { "@type": "City", name: "Meaux" },
    { "@type": "AdministrativeArea", name: "Aisne (02)" },
    { "@type": "AdministrativeArea", name: "Oise (60)" },
    { "@type": "AdministrativeArea", name: "Marne (51)" },
    { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
  ],
  priceRange: "150 € à 120 €/mois",
  currenciesAccepted: "EUR",
  paymentAccepted: "Virement, Carte bancaire, Chèque",
  sameAs: ["https://www.linkedin.com/in/cyril-gourdon/"],
} as const;

export const ENTITY_IDS = {
  organization: `${company.url}/#organization`,
  website: `${company.url}/#website`,
  faqPage: `${company.url}/faq/#faq`,
} as const;
