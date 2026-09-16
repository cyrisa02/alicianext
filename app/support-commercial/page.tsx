"use client"; // Indispensable pour les hooks et useRouter

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const SupportCommercialPage = () => {
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

  // Gère le cas où on arrive directement avec une ancre (ex: /commercial#contact)
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
          Support Commercial — Qualifiez vos Leads, Relancez vos Clients &
          Automatisez votre CRM
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
              d="M9 17V7m0 10a2 2 0 002 2h6a2 2 0 002-2M9 7a2 2 0 002-2h6a2 2 0 002 2m0 10V7m0 10a2 2 0 002 2h6a2 2 0 002-2M9 7a2 2 0 002-2h6a2 2 0 002 2"
            />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “Un lead non qualifié est une opportunité perdue. Un client non
            relancé, un revenu qui s’évapore.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous avez des prospects, mais vous ne savez pas les qualifier ? Vos
          clients ne reviennent pas ? Votre CRM est vide ou désorganisé ?
          <br />
          Vous perdez du temps à relancer manuellement, sans système, sans
          suivi, sans résultats ?
          <br />
          <strong>
            Nous vous accompagnons pour mettre en place un support commercial
            simple, efficace et automatisé — même si vous êtes seul à gérer
            votre activité.
          </strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements commerciaux pour entrepreneurs locaux
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Qualification de leads</strong> : questionnaires,
              scores, segmentation — pour savoir qui est prêt à acheter.
            </p>
            <p>
              ✅ <strong>Relances intelligentes</strong> : emails automatisés,
              SMS, rappels téléphoniques — selon le comportement du client.
            </p>
            <p>
              ✅ <strong>CRM intelligent</strong> : mise en place d’un outil
              simple (HubSpot, Notion, ou Google Sheets avancé) avec suivi des
              contacts, tâches et pipelines.
            </p>
            <p>
              ✅ <strong>Script de vente & argumentaire</strong> : création de
              réponses types, objections traitées, phrases d’ouverture
              percutantes.
            </p>
            <p>
              ✅ <strong>Reporting mensuel</strong> : suivi des taux de
              conversion, délais de relance, chiffre d’affaires généré — pour
              ajuster votre stratégie.
            </p>
            <p>
              ✅ <strong>Formation rapide</strong> : apprenez à utiliser votre
              CRM en 1h — sans jargon, avec des exemples concrets.
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
              <strong>Audit commercial</strong> : 150 € (analyse de vos leads,
              relances, CRM actuel + plan d’action).
            </li>
            <li>
              <strong>Setup CRM basique</strong> : 250 € (configuration +
              formation + 3 templates de relance).
            </li>
            <li>
              <strong>Formule « Commercial Serein »</strong> : 120 €/mois (CRM +
              relances automatisées + reporting + 1h de support/mois).
            </li>
            <li>
              <strong>Qualification de leads</strong> : 80 €/heure (par session
              de 1h — pour trier vos prospects en profondeur).
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
            Nous accompagnons les artisans, commerçants et prestataires locaux
            dans leur développement commercial.
            <br />
            <strong>Discrétion, réactivité et expertise terrain</strong> sont
            nos engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Vous voulez savoir combien de leads vous perdez chaque mois faute de
            relance ?
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

export default SupportCommercialPage;
