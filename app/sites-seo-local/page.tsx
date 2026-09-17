"use client"; // Indispensable pour les hooks et useRouter
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Création de Sites & SEO Local | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Création de sites vitrines, e-commerce et référencement local pour votre entreprise. Boostez votre visibilité à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "création de site web",
    "site vitrine professionnel",
    "e-commerce local",
    "boutique en ligne",
    "SEO local",
    "référencement local",
    "Google My Business",
    "optimisation SEO",
    "site mobile-friendly",
    "création site Soissons",
    "site internet artisan",
    "site internet TPE",
    "site internet PME",
    "hébergement site web",
    "maintenance site web",
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
    "agence web locale",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Création de Sites & SEO Local | AlicIA-GPT",
    description:
      "Création de sites vitrines, e-commerce et référencement local. Boostez votre visibilité à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de Sites & SEO Local | AlicIA-GPT",
    description:
      "Création de sites vitrines, e-commerce et référencement local. Boostez votre visibilité à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const SitesSeoLocalPage = () => {
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

  // Gère le cas où on arrive directement avec une ancre (ex: /sites-seo-local#contact)
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
          Sites & SEO Local — Votre Visibilité Numérique à Soissons et ses
          Environs
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
              d="M9.75 17L9 20l-1.75-3M9 13a3 3 0 110-6h1.068a4 4 0 117.932 0H18A3 3 0 119 13z"
            />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “Un site bien référencé, c’est un client qui vous trouve avant même
            que vous ne l’appeliez.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou association locale, et
          vous avez besoin d’un site internet qui attire des clients{" "}
          <strong>
            à Soissons, Fère-en-Tardenois, Laon, ou dans votre secteur
          </strong>{" "}
          ?
          <br />
          Votre site n’apparaît pas sur Google ? Vous n’avez pas encore de
          boutique en ligne ? Vos clients ne vous trouvent pas facilement ?
          <br />
          <strong>
            Nous créons pour vous des sites simples, performants et optimisés
            localement — sans jargon, sans stress, avec résultats garantis.
          </strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements pour votre visibilité locale
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Création de site vitrine</strong> : design moderne,
              mobile-friendly, rapide à charger, avec formulaire de contact et
              carte Google Maps.
            </p>
            <p>
              ✅ <strong>E-commerce local</strong> : boutique en ligne simple
              avec paiement sécurisé (Stripe, PayPal), livraison locale ou
              retrait en magasin.
            </p>
            <p>
              ✅ <strong>Référencement local (SEO)</strong> : optimisation pour
              “plombier à Soissons”, “coiffeur près de chez moi”, “restaurant
              Fère-en-Tardenois”…
            </p>
            <p>
              ✅ <strong>Fiches Google My Business</strong> : création,
              optimisation, gestion des avis, photos professionnelles, réponse
              aux commentaires.
            </p>
            <p>
              ✅ <strong>Intégration réseaux sociaux</strong> : liens vers
              Facebook, Instagram, WhatsApp — pour capter les clients où ils
              sont.
            </p>
            <p>
              ✅ <strong>Maintenance & mises à jour</strong> : sécurité,
              performances, sauvegardes — tout est géré pour vous.
            </p>
          </div>
        </section>

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            Nos formules transparentes
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <strong>Site vitrine basique</strong> : 450 € (tout compris : nom
              de domaine, hébergement 1 an, design, SEO local, formation).
            </li>
            <li>
              <strong>Boutique en ligne</strong> : 750 € (avec paiement,
              catalogue produits, gestion commandes).
            </li>
            <li>
              <strong>Formule « Visibilité Locale »</strong> : 150 €/mois
              (maintenance + optimisation SEO + gestion Google My Business + 1h
              de support/mois).
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première semaine satisfait ou remboursé — sans condition.
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
            « En 3 semaines, j’ai eu mon site, ma fiche Google et 12 nouveaux
            clients grâce au SEO local. Un vrai changement ! »
          </blockquote>
          <p className="text-gray-400 mt-2">
            — Sophie, coiffeuse indépendante, Soissons
          </p>
        </section>

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            {" "}
            À Soissons et ses environs
          </h2>
          <p className="text-gray-300">
            Nous travaillons avec les artisans, commerçants et associations
            locales.
            <br />
            <strong>Discrétion, réactivité et expertise locale</strong> sont nos
            priorités.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Vous voulez voir ce que votre site pourrait rapporter en visibilité
            locale ?
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

export default SitesSeoLocalPage;
