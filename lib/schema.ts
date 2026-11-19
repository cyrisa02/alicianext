import { company, ENTITY_IDS } from "@/data/company";

/**
 * Schéma global = ProfessionalService + WebSite via @graph.
 * Les @id créent le graphe de connaissances (Knowledge Graph / NER).
 */
export function buildGlobalSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
        "@type": "WebSite",
        "@id": ENTITY_IDS.website,
        url: company.url,
        name: company.name,
        inLanguage: "fr-FR",
        publisher: { "@id": ENTITY_IDS.organization },
      },
    ],
  };
}

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

/**
 * Schéma SoftwareApplication — pour les outils SaaS (/outils/*).
 * @param data { name, description, applicationCategory, url, offers? }
 * applicationCategory : "BusinessApplication" | "FinanceApplication" | etc.
 */
export function buildSoftwareApplicationSchema(data: {
  name: string;
  description: string;
  applicationCategory: string;
  url: string;
  offers?: {
    price: string;
    priceCurrency: string;
    description?: string;
    availability?: string;
    eligibleRegion?: string;
    priceValidUntil?: string;
  };
}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.name,
    description: data.description,
    url: data.url,
    applicationCategory: data.applicationCategory,
    operatingSystem: "Web",
    provider: { "@id": ENTITY_IDS.organization },
  };

  if (data.offers) {
    return {
      ...base,
      offers: {
        "@type": "Offer",
        price: data.offers.price,
        priceCurrency: data.offers.priceCurrency,
        description: data.offers.description ?? data.description,
        availability: data.offers.availability ?? "https://schema.org/InStock",
        eligibleRegion: data.offers.eligibleRegion ?? "FR",
        seller: { "@id": ENTITY_IDS.organization },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: data.offers.price,
          priceCurrency: data.offers.priceCurrency,
          valueAddedTaxIncluded: false, // HT
        },
        ...(data.offers.priceValidUntil && {
          priceValidUntil: data.offers.priceValidUntil,
        }),
      },
    };
  }

  return base;
}
