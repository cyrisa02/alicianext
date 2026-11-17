import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Accompagnement Créateurs d'Entreprise & PropTech | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Conseil, organisation, setup numérique et outils PropTech sur-mesure (Immo Sniper, Immo Signal) pour créateurs d'entreprise. Accompagnement à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "accompagnement créateur d'entreprise",
    "lancement de startup",
    "agent immobilier",
    "veille immobilière",
    "chasseur immobilier",
    "investisseur immobilier",
    "Immo Sniper",
    "Immo Signal",
    "bac à sable IA",
    "organisation entrepreneur",
    "conseil création d'entreprise",
    "outils IA pour entrepreneurs",
    "setup numérique pro",
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
    "consultant IA startup",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Accompagnement Créateurs d'Entreprise & PropTech | AlicIA-GPT",
    description:
      "Conseil, organisation et outils PropTech pour donner vie à vos idées. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accompagnement Créateurs d'Entreprise & PropTech | AlicIA-GPT",
    description:
      "Conseil, organisation et outils PropTech pour donner vie à vos idées. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const SoutienCreateursPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Accompagnement des Créateurs d'Entreprise et Solutions PropTech par IA",
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
      "Setup numérique, sécurité, sites web et outils PropTech clés en main (Immo Sniper, Immo Signal) pour sécuriser le lancement des créateurs d'entreprise.",
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
            Lancement & Innovation PropTech
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Soutien Numérique et Outils PropTech pour Créateurs d'Entreprise
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sécurisez vos fondations informatiques et dotez votre activité
            d'outils d'IA opérationnels dès le premier jour (Aisne, Marne, Oise,
            77).
          </p>
        </div>

        {/* Visuel d'illustration */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-950 relative">
          <img
            src="/images/createur.png"
            alt="Accompagnement de proximité pour créateurs d'entreprise et entrepreneurs - AlicIA-GPT"
            className="w-full h-auto object-cover max-h-[400px] md:max-h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Allié Numérique de Confiance
            </span>
            <p className="text-white text-sm sm:text-base font-medium italic">
              “Concevez votre entreprise sur des bases solides et gagnez un
              temps précieux grâce à nos solutions sur-mesure.”
            </p>
          </div>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous lancez votre projet et la complexité technique vous fait
              perdre un temps précieux ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Messagerie pro, configuration du cloud, sécurisation des données,
              mise en place du site web et synchronisation des agendas : les
              premiers pas d'un entrepreneur ressemblent souvent à un parcours
              du combattant informatique.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fort de{" "}
              <strong className="text-white">
                25 ans d'expérience industrielle et de management
              </strong>{" "}
              et d'une expertise technique de pointe, je vous accompagne dans
              vos fondamentaux numériques tout en vous proposant des{" "}
              <strong className="text-[#00FFB3]">
                outils métiers propriétaires (PropTech, agents IA)
              </strong>{" "}
              pour vous démarquer immédiatement.
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nous sécurisons dès le premier jour :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Setup
                numérique pro (Google Workspace, Notion, gestionnaires de mots
                de passe).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Sécurité
                maximale (antivirus, pare-feu, sauvegardes cloud automatiques).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Création
                d'un site web vitrine rapide et optimisé SEO local.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Assistants
                IA personnalisés pour automatiser vos comptes-rendus et agendas.
              </li>
            </ul>
          </div>
        </div>

        {/* Services proposés */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos solutions d'accompagnement pour entrepreneurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Setup & Infrastructure
              </h3>
              <p className="text-sm text-gray-400">
                Installation et paramétrage de vos outils de travail
                collaboratif, messageries professionnelles et environnements
                cloud sécurisés.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Automatisation & Workflows
              </h3>
              <p className="text-sm text-gray-400">
                Connexion de vos applications (N8N, Make) pour éliminer les
                doubles saisies et centraliser la gestion de vos to-do-lists et
                rendez-vous.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Solutions PropTech IA
              </h3>
              <p className="text-sm text-gray-400">
                Déploiement d'outils verticaux ultra-performants (veille
                immobilière, analyse DVF, scoring d'opportunités) pour chasseurs
                et investisseurs.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION Cas d'usage PropTech                 */}
        {/* ============================================ */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Avantage Différenciant
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              🏠 Solutions PropTech clés en main
            </h2>
            <p className="text-gray-400 text-sm">
              Nous ne faisons pas que du conseil théorique : nous livrons des
              outils IA opérationnels qui travaillent 24h/24 pour détecter les
              meilleures affaires avant vos concurrents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Carte Immo Sniper */}
            <div className="bg-gray-900/60 border border-[#6366F1]/40 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-xl font-bold text-white">Immo Sniper</h3>
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Assistant IA de veille immobilière en temps réel. Détectez les
                  opportunités sous-évaluées grâce à l'analyse géospatiale
                  (PostGIS), aux données DVF et à l'IA avancée.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Veille
                    </p>
                    <p className="text-white font-bold text-sm">24h / 24</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Cible
                    </p>
                    <p className="text-white font-bold text-sm">
                      Écart &lt; -10%
                    </p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Analyse
                    </p>
                    <p className="text-white font-bold text-sm">
                      PostGIS + DVF
                    </p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Canal
                    </p>
                    <p className="text-white font-bold text-sm">
                      Telegram & Email
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-6">
                  <strong className="text-gray-300">Stack :</strong> Next.js,
                  PostgreSQL + PostGIS, Docker, Playwright, Leaflet.
                </p>
              </div>

              <a
                href="/docs/immosniper-mode-emploi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-opacity-90 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Télécharger le mode d'emploi (PDF)
              </a>
            </div>

            {/* Carte Immo Signal */}
            <div className="bg-gray-900/60 border border-[#6366F1]/40 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📡</span>
                  <h3 className="text-xl font-bold text-white">Immo Signal</h3>
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Veille immobilière automatisée. Analyse continue des alertes
                  SeLoger et Leboncoin, qualification par IA et génération
                  instantanée d'argumentaires de négociation.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Collecte
                    </p>
                    <p className="text-white font-bold text-sm">IMAP Gmail</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Scoring
                    </p>
                    <p className="text-white font-bold text-sm">
                      Haute / Moy. / Faible
                    </p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Référentiel
                    </p>
                    <p className="text-white font-bold text-sm">
                      Base DVF Notaires
                    </p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-3 text-center border border-gray-800">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                      Pitch
                    </p>
                    <p className="text-white font-bold text-sm">
                      Négociation auto
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-6">
                  <strong className="text-gray-300">Stack :</strong> Next.js,
                  TypeScript, PostgreSQL + PostGIS, Docker, JWT Auth.
                </p>
              </div>

              <a
                href="/docs/immosignal-mode-emploi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-opacity-90 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all shadow-md"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Télécharger le mode d'emploi (PDF)
              </a>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 border border-gray-800 rounded-2xl text-center">
            <p className="text-gray-200 text-sm leading-relaxed">
              <strong className="text-white">
                💡 Pourquoi choisir AlicIA-GPT ?
              </strong>{" "}
              Contrairement aux agences généralistes, nous ne vendons pas de
              simples conseils théoriques. Nous livrons des{" "}
              <strong className="text-[#00FFB3]">
                produits finis, déployés et opérationnels
              </strong>{" "}
              taillés pour performer dès le premier jour.
            </p>
          </div>
        </section>

        {/* Grille Tarifaire Transparente & Financements */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules simples et transparentes
            </h2>
            <p className="text-gray-400 text-sm">
              Un accompagnement adapté à chaque étape de votre démarrage, sans
              engagement lourd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Libre
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  À la Séance
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  50 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / heure
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Intervention ciblée, dépannage express ou conseil ponctuel
                  sans aucun engagement.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Paiement au temps passé
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Suivi Mensuel
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Démarrage Pro »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  180 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  4 heures d'accompagnement par mois (soit 45€/h), priorité
                  d'intervention et 1h offerte au 3e mois.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Tranquillité et support prioritaire
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus complet
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Clé en Main
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Forfait « Business Setup »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  350 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Configuration messagerie, création du site vitrine, mise en
                  place de la sécurité et formation personnalisée.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Tout compris pour démarrer sereinement
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première heure satisfait ou remboursé — Accompagnement de
            proximité dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
          </div>
        </section>

        {/* Témoignages Clients */}
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
                « En 2h, j'ai eu la maquette de mon site, ma messagerie et mes
                sauvegardes automatisées. Je me sens enfin sereine pour me
                lancer dans mon activité. »
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              — Michèle, coach de vie, Soissons (02)
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
                « Cyril m'a développé une IA sur mesure. Je reçois un débrief
                tous les matins sur mon Gmail. Je gagne un temps fou, tout est
                centralisé. Je commence la journée du bon pied ! »
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              — Thierry, entrepreneur, Villers-Cotterêts
            </p>
          </div>
        </div>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Interventions de proximité en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous intervenons à votre bureau, chez vous ou en
            visioconférence. Confidentialité, réactivité et professionnalisme
            garantis dans l'Aisne (02), la Marne (51), l'Oise (60) et la
            Seine-et-Marne (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à lancer votre projet sur des bases techniques irréprochables ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez votre diagnostic initial offert de 20 minutes et discutons
            de vos besoins de setup ou de solutions PropTech.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un audit de lancement gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SoutienCreateursPage;
