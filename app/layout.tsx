import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentManager from "@/components/CookieConsentManager";
import ClarityAnalytics from "@/components/ClarityAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AlicIA-GPT | Agence & Consultant en Intelligence Artificielle",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Expert en Intelligence Artificielle, automatisation et chatbots pour professionnels et particuliers. Accompagnement sur-mesure à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "consultant IA",
    "intelligence artificielle",
    "automatisation des processus",
    "création de chatbot",
    "formation IA générative",
    "Soissons",
    "ia",
    "IA",
    "chatbot",
    "voicebot",
    "devis automatisé",
    "agents IA",
    "accompagnement IA",
    "intégration",
    "refonte de site web",
    "création de site web",
    "Laon",
    "Villers-Cotterêts",
    "Château-Thierry",
    "Chauny",
    "Meaux",
    "Compiègne",
    "Fismes",
    "Reims",
    "Aisne",
    "Oise",
    "Marne",
    "Seine-et-Marne",
    "audit IA entreprise",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "AlicIA-GPT | Agence & Consultant en Intelligence Artificielle",
    description:
      "Expert en IA, automatisation et chatbots. Accompagnement sur-mesure à Soissons, Aisne, Oise, Marne et nord Seine-et-Marne 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlicIA-GPT | Agence & Consultant en Intelligence Artificielle",
    description:
      "Expert en IA, automatisation et chatbots. Accompagnement sur-mesure à Soissons, Aisne, Oise, Marne et nord Seine-et-Marne 77.",
  },
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.alicia-gpt.com/#organization",
      name: "AlicIA-GPT",
      url: "https://www.alicia-gpt.com",
      logo: "https://www.alicia-gpt.com/images/logo.png",
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
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33-6-15-60-33-44",
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: "French",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Soissons",
        postalCode: "02200",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      sameAs: ["https://www.linkedin.com/in/cyril-gourdon/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.alicia-gpt.com/#website",
      url: "https://www.alicia-gpt.com",
      name: "AlicIA-GPT",
      publisher: {
        "@id": "https://www.alicia-gpt.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* JSON-LD global pour le NER / Knowledge Graph */}
        <Script
          id="global-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentManager />
        <ClarityAnalytics />
      </body>
    </html>
  );
}
