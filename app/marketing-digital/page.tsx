import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Marketing Digital, Veille & IA pour TPE/PME | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Stratégie digitale, veille concurrentielle par web scraping (Immo Signal) et création de contenu automatisée. Solutions souveraines et conformes RGPD à Soissons, dans l'Aisne, l'Oise, la Marne et la Seine-et-Marne (77).",
  keywords: [
    "marketing digital IA",
    "veille concurrentielle",
    "création de contenu automatisée",
    "web scraping marketing",
    "SEO local",
    "Immo Signal",
    "données DVF",
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
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Marketing Digital, Veille Concurrentielle et Web Scraping par IA",
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
      "Stratégie marketing, automatisation de contenus et veille concurrentielle par web scraping éthique (ex: Immo Signal croisé DVF) pour TPE, PME et artisans.",
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
            Visibilité & Intelligence Marché
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Marketing Digital & Veille IA : Dominez votre marché local sans
            effort
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stratégie digitale, web scraping éthique et création de contenu
            automatisée pour attirer plus de clients dans l'Aisne, la Marne,
            l'Oise et la Seine-et-Marne.
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            “Le marketing digital ne doit pas être une corvée subie, mais une
            vitrine permanente qui génère des prospects qualifiés, même lorsque
            vous êtes sur le terrain.”
          </p>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vos concurrents captent tous les clients en ligne pendant que vos
              réseaux restent inactifs ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Faute de temps, de compétences en référencement ou de données
              précises sur les prix pratiqués localement, de nombreuses
              entreprises locales passent à côté d'opportunités de croissance
              majeures.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Grâce à un parcours combinant{" "}
              <strong className="text-white">
                25 ans d'expérience industrielle
              </strong>{" "}
              et une expertise technique de pointe, je vous propose des outils
              d'analyse de marché et de génération de contenus rigoureusement
              conformes au{" "}
              <strong className="text-[#00FFB3]">
                RGPD et aux règles de souveraineté
              </strong>
              .
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nous mettons en place pour vous :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Veille
                concurrentielle automatisée (prix, tendances et positionnement).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Web scraping
                éthique (ex : détection de pépites immobilières avec Immo
                Signal).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Création de
                contenus réguliers (posts, newsletters) validés en un clin
                d'œil.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Optimisation
                de votre visibilité locale (SEO / GEO sur les moteurs IA).
              </li>
            </ul>
          </div>
        </div>

        {/* --- Section : Web Scraping & Arme Secrète --- */}
        <section
          id="web-scraping"
          className="mb-16 p-8 bg-gray-900/50 border border-gray-800 rounded-2xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Le Web Scraping : Votre arme secrète pour dominer le marché local
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            <strong>
              Et si vous pouviez analyser vos concurrents en un clic, sans y
              passer des heures ?
            </strong>
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            À Soissons comme dans toute la région, les entreprises qui
            réussissent ne se fient plus à leur intuition. Elles s'appuient sur
            des{" "}
            <strong className="text-white">données publiques et réelles</strong>{" "}
            pour ajuster leurs prix en temps réel, repérer les hausses de
            demandes locales et identifier les angles morts de la concurrence.
          </p>

          <div className="bg-gray-800/60 p-6 rounded-xl border-l-4 border-[#6366F1] mb-6">
            <p className="text-gray-200 font-medium leading-relaxed">
              Le web scraping consiste à extraire de manière automatisée des
              données publiques sur le web. Nous transformons cette masse
              d'informations en{" "}
              <span className="text-[#00FFB3]">
                tableaux de bord simples, alertes ciblées et recommandations
                actionnables
              </span>{" "}
              pour votre activité.
            </p>
          </div>
        </section>

        {/* --- Section : Exemple Concret Immo Signal --- */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                Cas d'Usage Métier
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                🏠 Immo Signal : Détection automatique de biens sous-évalués
              </h2>
              <p className="text-gray-300 text-sm">
                Un outil sur-mesure pour devancer la concurrence immobilière
                locale.
              </p>
            </div>

            {/* Image infographique */}
            <div className="relative mb-8 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
              <img
                src="/images/immo1.jpg"
                alt="Immo Signal - Assistant d'alerte immobilière avec IA et croisement DVF"
                className="w-full h-auto object-cover max-h-[400px]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-gray-300 mb-8">
              <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-red-400">🎯</span> Le Défi
                </h3>
                <p className="text-sm leading-relaxed">
                  Les professionnels passent un temps considérable à scruter les
                  portails d'annonces. Les meilleures affaires partent en moins
                  de 48 heures, souvent avant qu'une analyse approfondie ne soit
                  possible.
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-[#00FFB3]">💡</span> La Solution
                </h3>
                <p className="text-sm leading-relaxed">
                  Un système d'alerte intelligent qui capture les flux
                  d'annonces, extrait instantanément les caractéristiques clés
                  et les croise avec la base DVF (ventes réelles notariées) pour
                  générer un argumentaire de négociation immédiat.
                </p>
              </div>
            </div>

            {/* Étapes du processus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 text-center">
                <div className="text-2xl mb-2">📧</div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  1. Alertes en continu
                </h4>
                <p className="text-xs text-gray-400">
                  Écoute légale des portails d'annonces ciblés
                </p>
              </div>
              <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  2. Analyse IA
                </h4>
                <p className="text-xs text-gray-400">
                  Extraction instantanée des données clés du bien
                </p>
              </div>
              <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 text-center">
                <div className="text-2xl mb-2">⚖️</div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  3. Croisement DVF
                </h4>
                <p className="text-xs text-gray-400">
                  Comparaison avec les transactions notariales réelles
                </p>
              </div>
              <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  4. Notification
                </h4>
                <p className="text-xs text-gray-400">
                  Alerte avec argumentaire de négociation prêt à l'emploi
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#00FFB3]/10 border border-[#00FFB3]/30 rounded-xl text-center">
              <p className="text-sm text-[#00FFB3] font-medium">
                <strong>Résultat mesuré :</strong> Détection de biens
                sous-évalués de 20 à 40% avant la concurrence. Solution 100%
                légale et conforme RGPD.
              </p>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire Transparente & Financements */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules simples et transparentes
            </h2>
            <p className="text-gray-400 text-sm">
              Profitez d'un accompagnement stratégique éligible aux dispositifs
              de formation et d'aide à la transformation numérique (**OPCO**,
              **France Num**).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Setup Digital
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Audit Marketing & Benchmark
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  150 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Analyse complète de votre présence en ligne, étude de vos
                  concurrents locaux et remise d'un plan d'action prioritaire.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Idéal pour repartir sur des bases solides
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus populaire
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Visibilité Continue
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Marketing Serein »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  199 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Stratégie éditoriale, création de contenu automatisée, veille
                  concurrentielle, reporting mensuel et 1h de support dédiée.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Tranquillité et régularité garanties
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première heure satisfait ou remboursé — Interventions de
            proximité dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
          </div>
        </section>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Ancrage local en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous accompagnons les artisans, commerçants et
            structures locales dans leur développement digital. Réactivité,
            proximité et rigueur garanties dans l'Aisne (02), la Marne (51),
            l'Oise (60) et la Seine-et-Marne (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à booster votre visibilité et devancer vos concurrents ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez dès maintenant votre diagnostic marketing offert de 20
            minutes et identifiez vos leviers de croissance immédiats.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un audit marketing gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketingDigitalPage;
