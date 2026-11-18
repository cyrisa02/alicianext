interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Next.js App Router : ce script est hoisté dans le <head> automatiquement
      // via React Server Components. Pas de blocage du rendu.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
