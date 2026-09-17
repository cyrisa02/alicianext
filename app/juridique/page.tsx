"use client"; // Indispensable pour les hooks et useRouter

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Veille Juridique & Conformité IA Act | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Veille juridique, conformité RGPD et IA Act pour sécuriser votre activité. Accompagnement sur-mesure à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "veille juridique",
    "conformité RGPD",
    "IA Act",
    "loi IA européenne",
    "protection des données",
    "mentions légales",
    "politique de confidentialité",
    "CGU CGV",
    "registre des traitements",
    "CNIL",
    "audit RGPD",
    "consultant juridique IA",
    "conformité numérique",
    "artisans",
    "TPE",
    "PME",
    "Soissons",
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
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Veille Juridique & Conformité IA Act | AlicIA-GPT",
    description:
      "Veille juridique, conformité RGPD et IA Act pour sécuriser votre activité. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veille Juridique & Conformité IA Act | AlicIA-GPT",
    description:
      "Veille juridique, conformité RGPD et IA Act pour sécuriser votre activité. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const JuridiquePage = () => {
  // 1. Remplacement des hooks React Router par les hooks Next.js
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Compense le header fixe
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (id: string) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  };

  // Gère le cas où on arrive directement avec une ancre (ex: /juridique#contact)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 150);
    }
  }, [pathname]);

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      {/* 
         ⚠️ Header, Footer et Chatbot supprimés d'ici. 
         Ils sont déjà rendus de manière globale par le layout.tsx racine.
      */}
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Veille Juridique & Conformité RGPD / IA Act — Pour Entreprises Locales
        </h1>

        {/* Icône symbolique */}
        <div className="mb-8 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <svg
            className="w-12 h-12 mx-auto text-blue-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6l3 1m0 0l-3 1m3-1v2m5-3l3 1m0 0l-3 1m3-1v2m5-3l3 1m0 0l-3 1m3-1v2m2 13H7m0 0l-3-3m3 3l3-3"
            />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “La conformité n’est pas un frein — c’est votre bouclier. Protégez
            votre entreprise, pas vos clients.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou association locale, et
          vous avez besoin de vous mettre en conformité avec la{" "}
          <strong>RGPD</strong>, la <strong>loi IA Act</strong>, ou les
          obligations légales liées à votre activité ?
          <br />
          Votre site ne mentionne pas vos CGU ? Vous collectez des données sans
          consentement ? Vos contrats sont obsolètes ?
          <br />
          <strong>
            Nous vous accompagnons pas à pas pour vous mettre en règle —
            simplement, efficacement, sans jargon juridique.
          </strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements juridiques pour entrepreneurs locaux
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Conformité RGPD</strong> : politique de
              confidentialité, mentions légales, consentement des utilisateurs,
              registre des traitements.
            </p>
            <p>
              ✅ <strong>Loi IA Act (IA européenne)</strong> : évaluation des
              risques, transparence, droit à l’explication — pour les outils
              d’IA utilisés dans votre activité.
            </p>
            <p>
              ✅ <strong>CGU & CGV</strong> : création ou mise à jour de vos
              conditions générales pour votre site, boutique en ligne ou
              service.
            </p>
            <p>
              ✅ <strong>Veille juridique mensuelle</strong> : alertes sur les
              changements de loi qui impactent votre secteur (artisanat,
              commerce, services…).
            </p>
            <p>
              ✅ <strong>Contrats & factures</strong> : modèles personnalisés
              (prestation, partenariat, sous-traitance, vente de produits).
            </p>
            <p>
              ✅ <strong>Accompagnement en cas de réclamation</strong> : réponse
              aux plaintes, gestion des litiges, relation avec la CNIL ou les
              autorités compétentes.
            </p>
          </div>
        </section>

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            Nos formules simples et transparentes
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <strong>Audit de conformité RGPD</strong> : 250 € (rapport
              détaillé + recommandations).
            </li>
            <li>
              <strong>Création de CGU/CGV</strong> : 180 € (personnalisées à
              votre activité).
            </li>
            <li>
              <strong>Formule « Conformité Sereine »</strong> : 99 €/mois
              (veille juridique + 1h de support/mois + mise à jour des
              documents).
            </li>
            <li>
              <strong>Accompagnement IA Act</strong> : 350 € (audit +
              documentation obligatoire + formation interne).
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé — sans condition.
          </p>
        </section>

        {/* Témoignage Google */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-700 rounded-xl text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-gray-200 italic text-lg">
            « J’ai reçu un courrier de la CNIL — en 48h, ils ont tout mis en
            ordre. Je me sens enfin protégé. »
          </blockquote>
          <p className="text-gray-400 mt-2">
            — Thomas, auto-entrepreneur en rénovation, Soissons
          </p>
        </section>

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            📍 À Soissons et ses environs
          </h2>
          <p className="text-gray-300">
            Nous accompagnons les artisans, commerçants et associations locales
            dans leurs obligations juridiques.
            <br />
            <strong>Discrétion, rigueur et expertise locale</strong> sont nos
            engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Vous voulez savoir si votre site ou votre activité est en conformité
            ?
          </p>
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-4 bg-[#6366F1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#4f52c4] transition-colors duration-300"
          >
            Demandez un audit gratuit
          </button>
        </div>
      </main>
    </div>
  );
};

export default JuridiquePage;
