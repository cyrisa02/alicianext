import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentManager from "@/components/CookieConsentManager";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import { company } from "@/data/company";
import { buildGlobalSchema } from "@/lib/schema";

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
    "IA",
    "chatbot",
    "voicebot",
    "devis automatisé",
    "agents IA",
    "accompagnement IA",
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

const globalJsonLd = buildGlobalSchema();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen bg-[#0A0A0A] text-gray-300 antialiased">
        {/* JSON-LD global : entité + site (Knowledge Graph / NER) */}
        <script
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
