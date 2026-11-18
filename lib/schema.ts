import { company, ENTITY_IDS } from "@/data/company";

/**
 * Schéma global = ProfessionalService (LocalBusiness) + WebSite.
 * À injecter une seule fois dans le layout.tsx racine.
 * Le @id crée le graphe de connaissances qui lie l'entité au site et à la FAQ.
 */
export function buildGlobalSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": ENTITY_IDS.organization,
      name: company.name,
      legalName: company.legalName,
      description: company.description,
      url: company.url,
      logo: `${company.url}${company.logo}`,
      image: company.images.map((img) => `${company.url}${img}`),
      vatID: company.vatID,
      taxID: company.taxID,
      email: company.email,
      telephone: company.telephone,
      priceRange: company.priceRange,
      currenciesAccepted: company.currenciesAccepted,
      paymentAccepted: company.paymentAccepted,
      address: company.address,
      geo: company.geo,
      openingHoursSpecification: company.openingHours,
      areaServed: company.areaServed,
      founder: company.founder,
      sameAs: company.sameAs,
      // Lien vers le site (graphe)
      mainEntityOfPage: { "@id": ENTITY_IDS.website },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": ENTITY_IDS.website,
      url: company.url,
      name: company.name,
      inLanguage: "fr-FR",
      publisher: { "@id": ENTITY_IDS.organization },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${company.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

/**
 * Schéma FAQ — à injecter dans /faq.
 * Le @id + isPartOf lient la FAQ à l'entité (graphe de connaissances).
 */
export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": ENTITY_IDS.faqPage,
    inLanguage: "fr-FR",
    isPartOf: { "@id": ENTITY_IDS.website },
    about: [
      { "@type": "Thing", name: "Intelligence artificielle" },
      { "@type": "Thing", name: "Automatisation des processus" },
      { "@type": "Thing", name: "RGPD" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Artisans, TPE, PME",
      geographicArea: "Soissons, Aisne, Oise, Marne, Seine-et-Marne",
    },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/**
 * Schéma Service — à injecter sur /rh, /comptabilite, /marketing-digital, etc.
 * @param data { name, description, serviceType, url }
 */
export function buildServiceSchema(data: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    serviceType: data.serviceType,
    provider: { "@id": ENTITY_IDS.organization },
    areaServed: company.areaServed,
    url: data.url,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: data.url,
    },
  };
}

/**
 * Schéma BreadcrumbList — à injecter sur les pages profondes (outils, services, géo).
 */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${company.url}${item.url}`,
    })),
  };
}
