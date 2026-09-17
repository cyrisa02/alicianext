import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ⬇️ Ajoute ces imports (adapte le chemin si tu n'utilises pas l'alias @)
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

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
  authors: [{ name: "Cyril Gourdon" }], // Renforce la confiance (E-E-A-T) pour Google
  openGraph: {
    title: "AlicIA-GPT | Agence & Consultant en Intelligence Artificielle",
    description:
      "Expert en IA, automatisation et chatbots. Accompagnement sur-mesure à Soissons, Aisne, Oise, Marne et nord Seine et Marne 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
    // Tu pourras ajouter une image ici plus tard : images: ['/og-image.jpg']
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
      <body className={inter.className}>
        {/* ⬇️ Tes composants sont maintenant bien définis */}
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
