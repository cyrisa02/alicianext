import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Formations IA Génératives pour Équipes | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Rendez vos équipes opérationnelles sur les IA génératives avec nos formations sur-mesure. Solutions souveraines, conformes RGPD et IA Act à Soissons, dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne (77).",
  keywords: [
    "formation IA générative",
    "formation ChatGPT",
    "formation Gemini",
    "formation Claude IA",
    "formation IA entreprise",
    "formation IA équipes",
    "formation prompt engineering",
    "formation IA sur-mesure",
    "formation IA Soissons",
    "formation IA Aisne",
    "formation IA Oise",
    "formation IA Marne",
    "formation IA Seine-et-Marne",
    "artisans",
    "TPE",
    "PME",
    "Soissons",
    "Laon",
    "Château-Thierry",
    "Compiègne",
    "Meaux",
    "Reims",
    "Aisne",
    "Oise",
    "Marne",
    "Seine-et-Marne",
    "consultant formation IA",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Formations IA Génératives | AlicIA-GPT",
    description:
      "Rendez vos équipes opérationnelles sur les IA génératives avec nos formations sur-mesure. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations IA Génératives | AlicIA-GPT",
    description:
      "Rendez vos équipes opérationnelles sur les IA génératives avec nos formations sur-mesure. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const FormationsPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Formations IA Génératives pour TPE, PME et Artisans",
    description:
      "Formations pratiques aux IA génératives (ChatGPT, Claude, Gemini) adaptées aux métiers de l'artisanat, du commerce et des services. Éligible OPCO / FAFCEA.",
    provider: {
      "@type": "LocalBusiness",
      name: "AlicIA-GPT",
      founder: "Cyril Gourdon",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Soissons",
        postalCode: "02200",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      areaServed: ["Aisne", "Marne", "Oise", "Seine-et-Marne"],
    },
  };

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen pt-24 pb-16">
      {/* Injection du schéma JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* En-tête de page */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#00FFB3] font-semibold text-sm uppercase tracking-wider mb-3">
            Montée en Compétences & ROI
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Formations IA Génératives : Rendez vos équipes opérationnelles en 1
            à 3 jours
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez les outils d'intelligence artificielle sans jargon
            technique. Des formations sur-mesure ancrées dans vos cas d'usage
            réels à Soissons, dans l'Aisne, la Marne, l'Oise et la
            Seine-et-Marne.
          </p>
        </div>

        {/* Visuel d'illustration */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative">
          <img
            src="/images/formation.png"
            alt="Formation IA en entreprise - Accompagnement de proximité pour dirigeants et équipes"
            className="w-full h-auto object-cover max-h-[400px] md:max-h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Pédagogie 100% Pratique
            </span>
            <p className="text-white text-sm sm:text-base font-medium italic">
              “L’IA n’est pas un outil réservé aux technophiles — c’est un
              levier de productivité immédiat pour chaque collaborateur.”
            </p>
          </div>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vos collaborateurs disposent d'outils puissants sans savoir
              comment les exploiter ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ChatGPT, Claude, Gemini... Vos équipes entendent parler d'IA tous
              les jours, mais peinent à structurer leurs requêtes, perdent du
              temps sur des essais infructueux ou craignent de commettre des
              erreurs de confidentialité.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Grâce à un parcours combinant{" "}
              <strong className="text-white">
                25 ans d'expérience industrielle et managériale
              </strong>{" "}
              et une expertise technique de pointe, je forme vos équipes aux
              bonnes pratiques, au prompt engineering utile et au respect strict
              du{" "}
              <strong className="text-[#00FFB3]">
                RGPD et de la souveraineté des données
              </strong>
              .
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Les bénéfices concrets pour votre structure :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Rédaction
                instantanée de propositions commerciales et e-mails complexes.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Synthèse
                rapide de rapports longs et structuration de documents internes.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>{" "}
                Automatisation des tâches de routine et des comptes-rendus de
                réunion.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Maîtrise des
                règles de sécurité pour éviter toute fuite de données sensibles.
              </li>
            </ul>
          </div>
        </div>

        {/* Programme des formations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos modules de formation adaptés à votre réalité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Fondamentaux & Prompts
              </h3>
              <p className="text-sm text-gray-400">
                Comprendre le fonctionnement des LLMs, maîtriser l'art du prompt
                engineering et automatiser la rédaction de courriers et
                synthèses en 1 jour.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Cas Métiers Spécifiques
              </h3>
              <p className="text-sm text-gray-400">
                Adaptation directe à vos départements (administratif, comptable,
                commercial ou technique) sur 2 à 3 jours avec ateliers pratiques
                ancrés sur vos dossiers.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Accompagnement & Suivi
              </h3>
              <p className="text-sm text-gray-400">
                Support post-formation sur 3 mois, accès à des guides de prompts
                testés et validation des acquis sur le terrain pour ancrer
                durablement les bonnes habitudes.
              </p>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire Transparente & Financements */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des tarifs transparents et finançables
            </h2>
            <p className="text-gray-400 text-sm">
              Toutes nos sessions de formation en présentiel (dans vos locaux ou
              à Soissons) ou en visioconférence sont éligibles aux prises en
              charge de formation professionnelle (**OPCO**, **FAFCEA** pour les
              artisans).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Essentiel Équipe
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formation IA Base (1 Jour)
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  450 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / équipe (jusqu'à 5 pers.)
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Initiation complète aux IA génératives, bonnes pratiques de
                  prompting et cas d'usage transverses.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Présentiel ou Visio au choix
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus complet
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Immersion Métier
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formation Métier & Pratique (2-3 Jours)
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  800 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / équipe (jusqu'à 5 pers.)
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Ateliers pratiques poussés, intégration des processus propres
                  à votre secteur et exercices sur-mesure.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Éligible prise en charge OPCO / FAFCEA
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première heure satisfait ou remboursé — Interventions rigoureuses
            dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
          </div>
        </section>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Formations de proximité en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous intervenons directement dans vos locaux
            professionnels ou en visioconférence pour former vos équipes dans
            l'Aisne (02), la Marne (51), l'Oise (60) et la Seine-et-Marne (77).
          </p>
        </section>

        {/* Section Ressources & Documents Téléchargeables */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-4">
            📄 Documentation & Ressources pédagogiques
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/docs/formation1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800/80 rounded-xl hover:bg-gray-800 transition-all duration-200 text-gray-300 border border-gray-700/50 group"
            >
              <svg
                className="w-6 h-6 text-[#6366F1] flex-shrink-0 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.5l2 2H19a2 2 0 012 2v6"
                />
              </svg>
              <div>
                <strong className="block text-white text-sm">
                  Plan de formation détaillé
                </strong>
                <span className="text-xs text-gray-400">
                  Maîtriser l’IA au quotidien (PDF)
                </span>
              </div>
            </a>

            <a
              href="/docs/questionnaire.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800/80 rounded-xl hover:bg-gray-800 transition-all duration-200 text-gray-300 border border-gray-700/50 group"
            >
              <svg
                className="w-6 h-6 text-[#00FFB3] flex-shrink-0 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <div>
                <strong className="block text-white text-sm">
                  Questionnaire pré-formation
                </strong>
                <span className="text-xs text-gray-400">
                  Évaluer les besoins de vos équipes (PDF)
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à rendre vos équipes autonomes sur l'IA ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Discutons dès maintenant de vos objectifs de formation et concevons
            un programme sur-mesure pour votre structure.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un programme sur-mesure" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormationsPage;
