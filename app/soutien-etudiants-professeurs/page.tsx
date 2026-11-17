import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Outils IA pour Étudiants & Enseignants | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Outils IA pour l'apprentissage académique et solutions de correction automatique pour enseignants (30 copies en 4 min). Accompagnement à Soissons, dans l'Aisne, l'Oise, la Marne et la Seine-et-Marne (77).",
  keywords: [
    "outils IA étudiants",
    "correcteur IA enseignants",
    "correction automatique copies",
    "productivité académique",
    "aide aux devoirs IA",
    "résumé de cours IA",
    "NoteBookLM étudiants",
    "formation IA étudiants",
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
    "consultant IA éducation",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Outils IA pour Étudiants & Enseignants | AlicIA-GPT",
    description:
      "Outils et applications IA pour l'apprentissage et la recherche, ainsi que des solutions de correction pour enseignants à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outils IA pour Étudiants & Enseignants | AlicIA-GPT",
    description:
      "Outils et applications IA pour l'apprentissage et la recherche, ainsi que des solutions de correction pour enseignants à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const SoutienEtudiantsPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Soutien Numérique Étudiants et Solutions IA pour Enseignants",
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
    description:
      "Accompagnement numérique pour étudiants et outil innovant de correction automatique de copies par IA (30 copies en 4 minutes) pour enseignants.",
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
            Éducation & Innovation Pédagogique
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Soutien Numérique Étudiants & Correcteur IA pour Enseignants
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez les outils d'intelligence artificielle pour booster votre
            réussite académique ou diviser par dix votre temps de correction
            (Aisne, Marne, Oise, 77).
          </p>
        </div>

        {/* Visuel d'illustration Étudiants */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-950 relative">
          <img
            src="/images/Einsteinjunior.png"
            alt="Soutien numérique et outils IA pour étudiants et enseignants - AlicIA-GPT"
            className="w-full h-auto object-cover max-h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Productivité Académique
            </span>
            <p className="text-white text-sm sm:text-base font-medium italic">
              “L’intelligence artificielle ne remplace pas l'effort ou la
              pédagogie — elle structure, épure et libère du temps pour
              l'essentiel.”
            </p>
          </div>
        </div>

        {/* Section Problématique / Promesse Étudiants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Étudiants : Apprenez à exploiter l'IA de manière efficace et
              éthique
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Face à la masse de cours, de bibliographies et de mémoires à
              rédiger, savoir structurer ses recherches avec des outils comme
              ChatGPT, Claude ou NoteBookLM fait toute la différence pour
              réussir ses examens sans s'épuiser.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nous vous accompagnons pas à pas pour configurer vos espaces de
              travail, automatiser vos fiches de révision et sécuriser vos
              données personnelles.
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nous maîtrisons ensemble :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Usage
                éthique et puissant des LLMs (ChatGPT, Claude, Perplexity).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Création
                d'espaces de révision intelligents (NoteBookLM, Notion,
                Obsidian).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Assistance à
                la structuration de mémoires et rapports universitaires.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Sauvegarde
                sécurisée et bonnes pratiques numériques.
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================ */}
        {/* NOUVELLE SECTION : Correcteur IA Enseignants */}
        {/* ============================================ */}
        <section className="mb-16 p-8 bg-gradient-to-br from-purple-950/40 to-blue-950/40 border border-purple-500/30 rounded-2xl shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Innovation Pédagogique
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Enseignants : 30 copies corrigées en 4 minutes avec l'IA
            </h2>
            <p className="text-gray-300 text-sm">
              La correction représente 40% du métier et 80% du temps perdu.
              Découvrez l'outil conçu pour redonner du temps aux professeurs.
            </p>
          </div>

          {/* Visuel du correcteur */}
          <div className="mb-8 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <img
              src="/images/correcteur.jpg"
              alt="Correcteur IA - Application de correction automatique de copies manuscrites"
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8 text-gray-300">
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-red-400">⚠️</span> Le problème quotidien
              </h3>
              <p className="text-sm leading-relaxed">
                Vous avez 30 copies de dissertation à évaluer. Chaque copie fait
                plusieurs pages. Vous devez lire attentivement, identifier les
                erreurs, évaluer l'argumentation, attribuer une note juste et
                rédiger un feedback constructif. Résultat : 3 heures minimum,
                souvent reportées au week-end.
              </p>
            </div>

            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-[#00FFB3]">💡</span> La solution apportée
              </h3>
              <p className="text-sm leading-relaxed">
                L'élève pose sa copie sur la table, vous la photographiez page
                par page, vous indiquez le sujet et le barème. L'IA analyse
                instantanément l'écriture manuscrite et génère une évaluation
                complète et structurée.
              </p>
            </div>
          </div>

          <div className="bg-black/50 p-6 rounded-xl border border-gray-800 mb-8">
            <h4 className="text-white font-semibold mb-4">
              Ce que génère l'outil en 30 secondes par copie :
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                ✅ Note précise sur le barème
              </div>
              <div className="flex items-center gap-2">
                ✅ Appréciation générale type bulletin
              </div>
              <div className="flex items-center gap-2">
                ✅ Identification des points forts
              </div>
              <div className="flex items-center gap-2">
                ✅ Axes d'amélioration ciblés
              </div>
              <div className="flex items-center gap-2">
                ✅ Analyse des erreurs et citations
              </div>
              <div className="flex items-center gap-2">
                ✅ Évaluation de la structure (intro/développement)
              </div>
            </div>
          </div>

          <div className="p-4 bg-purple-900/20 border border-purple-700/30 rounded-xl text-center">
            <p className="text-sm text-purple-200 font-medium italic">
              “L'IA ne remplace pas le professeur. Elle lui redonne du temps
              pour ce qui compte vraiment : accompagner, expliquer et inspirer
              ses élèves.”
            </p>
          </div>
        </section>
        {/* ============================================ */}
        {/* FIN SECTION Enseignants                      */}
        {/* ============================================ */}

        {/* Grille Tarifaire Transparente */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules simples et accessibles
            </h2>
            <p className="text-gray-400 text-sm">
              Tarifs adaptés aux étudiants et ateliers de proximité pour
              progresser sans se ruiner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Libre
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  À la Séance
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  30 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / heure
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Aide ciblée sur un projet, configuration de logiciels ou prise
                  en main d'outils de révision sans engagement.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Paiement au besoin
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Populaire
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Suivi Mensuel
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Réussite »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  80 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / 3 heures par mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Accompagnement régulier (soit 26,60€/h) pour structurer vos
                  travaux et progresser sereinement tout au long du semestre.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Régularité et soutien constant
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages Étudiants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-200 italic text-base mb-4">
                “J'avais un livre de psycho de 30 chapitres. On m'a montré
                comment utiliser NoteBookLM pour faire mes fiches de révision.
                Tous les matins, je reçois un quiz par mail. Un gain de temps
                incroyable !”
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              — Alice, étudiante en Psychologie à Soissons (faculté de
              Reims)[cite: 16]
            </p>
          </div>

          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-200 italic text-base mb-4">
                “Grâce à leur aide, j’ai pu structurer mon mémoire avec Notion
                et utiliser les bons outils pour rédiger mes synthèses. Un vrai
                soulagement pour valider mon année.”
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              — Camille, étudiante en Droit à Laon (faculté de Reims)[cite: 16]
            </p>
          </div>
        </div>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Accompagnement de proximité en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous intervenons à domicile ou en visioconférence
            pour soutenir les étudiants et enseignants. Flexibilité, efficacité
            et respect de votre rythme dans l'Aisne (02), la Marne (51), l'Oise
            (60) et la Seine-et-Marne (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Besoin d'un coup de pouce pour vos études ou d'un outil de
            correction pour vos classes ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Discutons de vos besoins lors d'un premier échange offert de 20
            minutes.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un audit ou une démo gratuite" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SoutienEtudiantsPage;
