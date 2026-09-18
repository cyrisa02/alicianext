//"use client"; // Indispensable pour les hooks et useRouter
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Automatisation Administrative | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Automatisation de newsletters, reportings et devis grâce à l'intelligence artificielle. Gagnez du temps et simplifiez votre gestion à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "automatisation administrative",
    "génération de devis IA",
    "newsletters automatisées",
    "reportings automatiques",
    "gestion administrative IA",
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
    "consultant IA administration",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Automatisation Administrative | AlicIA-GPT",
    description:
      "Automatisation de newsletters, reportings et devis grâce à l'IA. Simplifiez votre gestion à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatisation Administrative | AlicIA-GPT",
    description:
      "Automatisation de newsletters, reportings et devis grâce à l'IA. Simplifiez votre gestion à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const AdministrationPage = () => {
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

  // Gère le cas où on arrive directement avec une ancre (ex: /administration#contact)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 150);
    }
  }, [pathname]);

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      {/* 
         ️ Header, Footer et Chatbot supprimés d'ici. 
         Ils sont déjà rendus par le layout.tsx racine.
      */}
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Administration Automatisée — Newsletters, Reportings & Devis sans
          Stress
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
            “L’administration n’est pas une corvée — c’est votre moteur.
            Automatisez-la, et gagnez du temps pour ce qui compte vraiment.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou petite entreprise
          locale, et vous perdez du temps à créer des devis, rédiger des
          newsletters, ou compiler des reportings ?
          <br />
          Vos documents sont manuels, désorganisés, ou vous n’avez jamais le
          temps de les faire ?
          <br />
          <strong>
            Nous vous accompagnons pour automatiser vos tâches administratives —
            simplement, efficacement, avec des outils intelligents qui
            travaillent pour vous.
          </strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements administratifs pour entrepreneurs locaux
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Automatisation des devis</strong> : modèles
              personnalisés, envoi automatique, suivi des signatures,
              intégration avec votre CRM.
            </p>
            <p>
              ✅ <strong>Newsletters intelligentes</strong> : création,
              personnalisation, planification, envoi — avec IA pour générer du
              contenu pertinent.
            </p>
            <p>
              ✅ <strong>Reportings automatisés</strong> : tableaux de bord
              mensuels, indicateurs clés (CA, clients, délais), export PDF/Excel
              — sans effort.
            </p>
            <p>
              ✅ <strong>Gestion des factures & relances</strong> : envoi
              automatique, rappels, suivi des paiements — tout est géré pour
              vous.
            </p>
            <p>
              ✅ <strong>Intégration outils</strong> : connexion entre vos
              outils (Google Workspace, Notion, Trello, Mailchimp, etc.) pour
              fluidifier votre workflow.
            </p>
            <p>
              ✅ <strong>Formation rapide</strong> : apprenez à utiliser vos
              nouveaux outils en 1h — sans jargon, avec des exemples concrets de
              votre activité.
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
              <strong>Audit administratif initial</strong> : 150 € (analyse de
              vos process actuels + plan d’automatisation).
            </li>
            <li>
              <strong>Setup devis automatisés</strong> : 250 € (modèles +
              configuration + premier mois gratuit).
            </li>
            <li>
              <strong>Formule « Admin Serein »</strong> : 120 €/mois (devis +
              newsletters + reportings + 1h de support/mois).
            </li>
            <li>
              <strong>Newsletter ponctuelle</strong> : 80 €/envoi (création +
              personnalisation + envoi — pour une campagne ciblée).
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé — sans condition.
          </p>
        </section>

        {/* Témoignage Google (adapté) 
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-700 rounded-xl text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-gray-200 italic text-lg">
            “J’ai passé 5h/semaine sur mes devis… maintenant, je passe 10min. Et ils sont plus professionnels qu’avant !”
          </blockquote>
          <p className="text-gray-400 mt-2">— Julien, électricien indépendant, Soissons</p>
        </section>*/}

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            📍 À Soissons et ses environs
          </h2>
          <p className="text-gray-300">
            Nous accompagnons les artisans, commerçants et associations locales
            dans leur gestion administrative.
            <br />
            <strong>Discrétion, rigueur et expertise locale</strong> sont nos
            engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Vous voulez savoir combien de temps vous perdez chaque semaine sur
            l’administration ?
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

export default AdministrationPage;
