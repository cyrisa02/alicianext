import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

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

const AdministrationPage = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Administration Automatisée — Newsletters, Reportings & Devis sans
          Stress
        </h1>

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
            "L'administration n'est pas une corvée — c'est votre moteur.
            Automatisez-la, et gagnez du temps pour ce qui compte vraiment."
          </p>
        </div>

        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou petite entreprise
          locale, et vous perdez du temps à créer des devis, rédiger des
          newsletters, ou compiler des reportings ?
          <br />
          Vos documents sont manuels, désorganisés, ou vous n'avez jamais le
          temps de les faire ?
          <br />
          <strong>
            Nous vous accompagnons pour automatiser vos tâches administratives —
            simplement, efficacement, avec des outils intelligents qui
            travaillent pour vous.
          </strong>
        </p>

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

        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            Nos formules simples et transparentes
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <strong>Audit administratif initial</strong> : 150 € (analyse de
              vos process actuels + plan d'automatisation).
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

        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Vous voulez savoir combien de temps vous perdez chaque semaine sur
            l'administration ?
          </p>
          <ContactCTAButton label="Demandez un audit gratuit" />
        </div>
      </main>
    </div>
  );
};

export default AdministrationPage;
