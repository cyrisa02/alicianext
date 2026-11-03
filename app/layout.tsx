import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentManager from "../components/CookieConsentManager";

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
    "ia Soissons",
    "Soissons ia",
    "Soissons IA",
    "IA Soissons",
    "chatbot",
    "voicebot",
    "devis automatisé",
    "agents IA",
    "accompagnement IA",
    "intégration",
    "refonte de site web",
    "création de site web",
    "Laon",
    "Villers Cotterêt",
    "Château Thierry",
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
      "Expert en IA, automatisation et chatbots. Accompagnement sur-mesure à Soissons, Aisne, Oise, Marne et nord Seine et Marne 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlicIA-GPT | Agence & Consultant en Intelligence Artificielle",
    description:
      "Expert en IA, automatisation et chatbots. Accompagnement sur-mesure à Soissons, Aisne, Oise, Marne et nord Seine et Marne 77.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentManager />
      </body>
    </html>
  );
}
