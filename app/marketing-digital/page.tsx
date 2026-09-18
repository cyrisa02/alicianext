import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Marketing Digital & IA | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Stratégie, veille concurrentielle et création de contenu automatisée pour votre marketing. Boostez votre visibilité à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "marketing digital IA",
    "veille concurrentielle",
    "création de contenu automatisée",
    "web scraping marketing",
    "SEO local",
    "campagnes publicitaires IA",
    "gestion réseaux sociaux",
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
    "agence marketing IA",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Marketing Digital & IA | AlicIA-GPT",
    description:
      "Stratégie, veille concurrentielle et création de contenu automatisée. Boostez votre visibilité à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Digital & IA | AlicIA-GPT",
    description:
      "Stratégie, veille concurrentielle et création de contenu automatisée. Boostez votre visibilité à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const MarketingDigitalPage = () => {
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

  // Gère le cas où on arrive directement avec une ancre (ex: /marketing#web-scraping)
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
          Marketing Digital — Stratégie, Veille Concurrentielle, Création de
          Contenu Automatisée & Web Scraping
        </h1>

        {/* Citation introductive */}
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
              d="M13 7h8v6a6 6 0 01-12 0V7m6 12a6 6 0 006-6H7a6 6 0 006 6z"
            />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “Le marketing digital n’est pas un luxe — c’est votre vitrine
            permanente. Créez du contenu qui vend, même quand vous dormez.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-12">
          Vous êtes artisan, commerçant, prestataire ou association locale, et
          vous avez besoin d’une présence digitale efficace, mais vous ne savez
          pas par où commencer ?<br />
          Vos concurrents sont mieux référencés ? Vos réseaux sociaux sont
          inactifs ? Vous n’avez pas le temps de créer du contenu régulièrement
          ?<br />
          <strong>
            Nous vous accompagnons pour mettre en place une stratégie digitale
            simple, automatisée et performante — sans jargon, sans stress, avec
            des résultats mesurables.
          </strong>
        </p>

        {/* --- Section : Web Scraping --- */}
        <section
          id="web-scraping"
          className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="mr-3">🔍</span>
            Le Web Scraping : Votre Arme Secrète pour Dominer le Marché
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            <strong>
              Et si vous pouviez analyser vos concurrents en un clic — sans y
              passer des heures ?
            </strong>
          </p>
          <p className="text-gray-400 mb-4">
            À Soissons comme ailleurs, les artisans, PME et commerçants qui
            réussissent ne se fient plus uniquement à leur intuition. Ils
            s’appuient sur <strong>des données réelles</strong> pour :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
            <li>
              Connaître les prix exacts pratiqués par la concurrence (et ajuster
              les vôtres en temps réel)
            </li>
            <li>
              Repérer les tendances locales (ex. : hausse des recherches «
              réparation vélo électrique à Soissons »)
            </li>
            <li>
              Identifier les opportunités de marché invisibles à l’œil nu (ex. :
              un concurrent qui arrête une activité)
            </li>
            <li>
              Mesurer la satisfaction client sur les avis Google, Facebook ou
              PagesJaunes
            </li>
          </ul>

          <div className="bg-gray-800/60 p-4 rounded-lg border-l-4 border-blue-500 mb-5">
            <p className="text-gray-200 font-medium">
              🤖 Le web scraping, c’est l’extraction automatisée de données
              publiques sur le web.
              <br />
              Nous transformons cette masse d’informations en{" "}
              <span className="text-blue-300">
                tableaux simples, alertes personnalisées et recommandations
                concrètes
              </span>{" "}
              — directement utiles à votre quotidien.
            </p>
          </div>

          <p className="text-gray-400 italic">
            <strong>Exemple concret :</strong> Un agent immobilier de l'Oise
            utilise notre veille annonces pour détecter en temps réel les biens
            sous-évalués sur Leboncoin et SeLoger. En croisant ces données avec
            les délais moyens de vente dans chaque quartier, il identifie les
            opportunités <em>avant</em> ses concurrents — et ajuste ses
            arguments commerciaux avec des comparatifs actualisés. Résultat :
            +30 % de mandats signés en 3 mois.
          </p>
        </section>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements marketing pour entrepreneurs locaux
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Stratégie digitale personnalisée</strong> : cible,
              canaux, calendrier — adapté à votre activité et votre territoire
              (Soissons, Fère-en-Tardenois, etc.).
            </p>
            <p>
              ✅ <strong>Veille concurrentielle intelligente</strong> : analyse
              automatisée de vos concurrents locaux (prix, offres, avis,
              fréquence de publication).
            </p>
            <p>
              ✅ <strong>Création de contenu automatisée</strong> : posts,
              stories, newsletters — générés avec IA + validation humaine (ton
              aligné sur votre image).
            </p>
            <p>
              ✅ <strong>Gestion proactive des réseaux sociaux</strong> :
              planification, publication, modération, réponse aux messages — clé
              en main.
            </p>
            <p>
              ✅ <strong>Campagnes Google & Meta Ads locales</strong> :
              géociblage précis, budget maîtrisé, ROI mesuré.
            </p>
            <p>
              ✅ <strong>Reporting mensuel clair</strong> : chiffres +
              traduction en actions concrètes (ex. : « Vos stories ont +40 %
              d’engagement : on en fait plus ! »).
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
              <strong>Audit marketing initial</strong> : 150 € (présence
              digitale + benchmark concurrents + plan d’action).
            </li>
            <li>
              <strong>Setup contenu automatisé</strong> : 250 € (outils,
              templates, premiers contenus — 1 mois offert).
            </li>
            <li>
              <strong>Formule « Marketing Serein »</strong> : 199 €/mois
              (stratégie + contenu + veille + reporting + 1h de support/mois).
            </li>
            <li>
              <strong>Module « Veille Data »</strong> : +99 €/mois (suivi
              prix/concurrents + alertes tendances locales).
            </li>
            <li>
              <strong>Campagne publicitaire ponctuelle</strong> : 300 €
              (création + gestion + suivi pendant 1 mois).
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé — sans condition.
          </p>
        </section>

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            📍 À Soissons et ses environs
          </h2>
          <p className="text-gray-300">
            Nous accompagnons les artisans, commerçants et associations locales
            dans leur développement digital.
            <br />
            <strong>Discrétion, réactivité et expertise locale</strong> sont nos
            engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Vous voulez savoir combien de prospects vous perdez — faute de
            visibilité, de données ou de contenu régulier ?
          </p>
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-4 bg-[#6366F1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#4f52c4] transition-colors duration-300 text-lg"
          >
            Demandez un audit gratuit
          </button>
        </div>
      </main>
    </div>
  );
};

export default MarketingDigitalPage;
