import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.alicia-gpt.com";

  const routes = [
    // 🏠 Pages principales
    { route: "/", priority: 1.0, changeFrequency: "weekly" as const },
    {
      route: "/audit-conseil",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/formations",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/ia-locale-souveraine-pme",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },

    // 🛠️ Services
    { route: "/rh", priority: 0.7, changeFrequency: "monthly" as const },
    {
      route: "/administration",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/marketing-digital",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/comptabilite",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/support-commercial",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    { route: "/juridique", priority: 0.7, changeFrequency: "monthly" as const },
    {
      route: "/sites-seo-local",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },

    // 🎯 Pages de soutien
    {
      route: "/soutien-createurs",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/soutien-etudiants-professeurs",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/soutien-seniors",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },

    // 🗺️ Pages piliers géographiques (SEO Local)
    {
      route: "/agence-ia-aisne",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/agence-ia-reims-marne",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/consultant-ia-oise",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/consultant-ia-seine-et-marne",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },

    // 🔧 Outils IA
    { route: "/outils", priority: 0.8, changeFrequency: "monthly" as const },
    {
      route: "/outils/devisflow-ia",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/outils/facture-ia",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/outils/memobot",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/outils/immo-alert-ia",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },

    // 📝 Blog
    { route: "/blog", priority: 0.7, changeFrequency: "weekly" as const },

    // ⚖️ Pages légales
    {
      route: "/mentions-legales",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      route: "/politique-confidentialite",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      route: "/conditions-generales-de-vente",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      route: "/conditions-generales-d-utilisation",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      route: "/conformite-ia-act",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    { route: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
