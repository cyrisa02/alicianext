import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aliciagpt-six.vercel.app';
  const routes = [
    '', '/audit-conseil', '/formations', '/rh', '/administration',
    '/marketing-digital', '/comptabilite', '/support-commercial', '/juridique',
    '/sites-seo-local', '/soutien-createurs', '/soutien-etudiants', '/soutien-seniors',
    '/mentions-legales', '/politique-confidentialite', '/conditions-generales-de-vente',
    '/conditions-generales-d-utilisation', '/conformite-ia-act',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}