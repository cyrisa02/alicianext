import type { Metadata } from "next";
import Image from "next/image";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Ressources Humaines & IA | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Agents IA pour l'analyse de CV, l'onboarding et l'automatisation RH. Simplifiez votre recrutement et votre gestion des talents à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "ressources humaines IA",
    "automatisation RH",
    "analyse de CV par IA",
    "onboarding intelligent",
    "recrutement automatisé",
    "gestion des talents",
    "tri automatique des candidatures",
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
    "consultant RH IA",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Ressources Humaines & IA | AlicIA-GPT",
    description:
      "Agents IA pour l'analyse de CV, l'onboarding et l'automatisation RH. Simplifiez votre recrutement à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ressources Humaines & IA | AlicIA-GPT",
    description:
      "Agents IA pour l'analyse de CV, l'onboarding et l'automatisation RH. Simplifiez votre recrutement à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const RHPage = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ressources Humaines Intelligentes — Agents IA pour l'Analyse de CV,
          Onboarding & Gestion Simplifiée
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
              d="M17 20h-8v-2a6 6 0 0112 0v2zM5 8h14v4H5V8z"
            />
          </svg>
          <p className="text-gray-300 text-lg italic">
            "Recruter n'est plus une corvée — c'est une opportunité. Laissez
            l'IA faire le tri, vous faites la différence."
          </p>
        </div>

        {/* Hero : Image MemoBot PME + résumé */}
        <section className="mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50">
            <Image
              src="/images/memobot.jpg"
              alt="MemoBot PME - Assistant interne sécurisé pour PME : sécurisation des documents, RAG & analyse IA, chat collaborateur"
              width={1200}
              height={600}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-6 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              MemoBot PME — Votre assistant interne sécurisé
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              MemoBot PME est un SaaS qui transforme vos documents internes
              (PDF, Word) en une <strong>base de connaissances vivante</strong>,
              accessible par vos collaborateurs via un chat en langage naturel.
              Téléversez vos procédures, contrats et guides : notre moteur RAG
              les analyse, les mémorise et répond instantanément aux questions
              de vos équipes — en toute confidentialité.
            </p>
          </div>
        </section>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou petite entreprise
          locale, et vous avez besoin d'embaucher, mais vous ne savez pas par où
          commencer ?
          <br />
          Vos CV s'accumulent ? Vous perdez du temps à les lire ? Vous n'avez
          pas de processus d'onboarding ? Vous ne savez pas gérer les contrats
          ou les congés ?
          <br />
          <strong>
            Nous vous accompagnons pour automatiser votre gestion RH —
            simplement, efficacement, avec des agents IA qui travaillent pour
            vous.
          </strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements RH pour entrepreneurs locaux
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Analyse de CV par IA</strong> : tri automatique, score
              de pertinence, comparaison avec le poste — en quelques secondes.
            </p>
            <p>
              ✅ <strong>Onboarding intelligent</strong> : checklist
              personnalisée, documents automatisés, accueil digital, formation
              rapide — pour que votre nouveau collaborateur soit opérationnel
              dès J+1.
            </p>
            <p>
              ✅ <strong>Gestion des contrats & congés</strong> : modèles
              personnalisés, suivi des dates, alertes — tout est géré pour vous.
            </p>
            <p>
              ✅ <strong>Reporting RH mensuel</strong> : absences, formations,
              salaires, indicateurs clés — sans effort, export PDF/Excel.
            </p>
            <p>
              ✅ <strong>Intégration outils RH</strong> : connexion entre vos
              outils (Google Workspace, Trello, Notion, etc.) pour fluidifier
              votre gestion des équipes.
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
              <strong>Audit RH initial</strong> : 150 € (analyse de votre
              process actuel + plan d'automatisation).
            </li>
            <li>
              <strong>Setup analyse CV IA</strong> : 250 € (configuration +
              premier mois gratuit).
            </li>
            <li>
              <strong>Formule « RH Serein »</strong> : 150 €/mois (analyse CV +
              onboarding + gestion contrats + reporting + 1h de support/mois).
            </li>
            <li>
              <strong>Onboarding ponctuel</strong> : 120 €/collaborateur
              (checklist + documents + accueil digital — pour un nouveau
              salarié).
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
            dans leur gestion des ressources humaines.
            <br />
            <strong>Discrétion, rigueur et expertise locale</strong> sont nos
            engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Vous voulez savoir combien de temps vous perdez chaque mois sur la
            gestion RH ?
          </p>
          <ContactCTAButton label="Demandez un audit gratuit" />
        </div>
      </main>
    </div>
  );
};

export default RHPage;
