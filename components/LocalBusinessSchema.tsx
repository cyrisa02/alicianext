// components/LocalBusinessSchema.tsx
import React from "react";

type LocalBusinessSchemaProps = {
  name: string;
  areaServed: string;
  addressLocality: string;
  postalCode: string;
  addressRegion?: string;
  telephone: string;
  url: string;
  description: string;
};

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  areaServed,
  addressLocality,
  postalCode,
  addressRegion = "FR",
  telephone,
  url,
  description,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url,
    telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality,
      postalCode,
      addressRegion,
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "State",
      name: areaServed,
    },
    sameAs: ["https://www.linkedin.com/in/cyril-gourdon/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
