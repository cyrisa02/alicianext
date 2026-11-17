import type { Metadata } from "next";
import Link from "next/link";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default:
      "IA Locale & Souveraine pour PME | AlicIA-GPT — Sans fuite RGPD, sans cloud GAFAM",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Installez l'IA dans votre entreprise sans que vos données ne quittent vos serveurs. Solutions 100% locales (Ollama, Mistral), conformes RGPD et IA Act. Alternative souveraine aux agences cloud à Soissons, Aisne, Oise, Marne et Seine-et-Marne.",
  keywords: [
    "IA locale entreprise",
    "IA souveraine PME",
    "intelligence artificielle sans cloud",
    "RGPD IA entreprise",
    "IA Act conformité",
    "Ollama entreprise",
    "Mistral AI local",
    "alternative OpenAI",
    "données confidentielles IA",
    "IA on-premise",
    "hébergement IA local",
    "fuite données IA",
    "souveraineté numérique PME",
    "consultant IA souverain",
    "AlicIA-GPT",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "IA Locale & Souveraine pour PME | AlicIA-GPT",
    description:
      "Installez l'IA dans votre entreprise sans que vos données ne quittent vos serveurs. Solutions 100% locales, conformes RGPD et IA Act.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Locale & Souveraine pour PME | AlicIA-GPT",
    description:
      "Installez l'IA dans votre entreprise sans que vos données ne quittent vos serveurs. Solutions 100% locales, conformes RGPD et IA Act.",
  },
};

const IALocaleSouverainePage = () => {
  // Données structurées JSON-LD — type Service (page différenciatrice transversale)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Déploiement d'Intelligence Artificielle Locale et Souveraine pour PME",
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
      "Déploiement de solutions IA 100% locales (Ollama, Mistral) sur vos infrastructures. Aucune donnée ne quitte votre entreprise. Conformité RGPD et IA Act garantie.",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Aisne (02)" },
      { "@type": "AdministrativeArea", name: "Marne (51)" },
      { "@type": "AdministrativeArea", name: "Oise (60)" },
      { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
    ],
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
            🛡️ Souveraineté Numérique & Conformité
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            IA Locale & Souveraine : installez l'intelligence artificielle
            <span className="text-[#00FFB3]">
              {" "}
              sans que vos données ne quittent votre entreprise
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            La plupart des agences IA vous vendent du cloud OpenAI, Anthropic ou
            Google. Chez AlicIA-GPT, nous déployons des modèles locaux (Ollama,
            Mistral) directement sur vos infrastructures. Vos devis, vos
            factures, vos process clients restent chez vous — conformes RGPD et
            IA Act.
          </p>
        </div>

        {/* Encadré d'accroche — argument choc */}
        <div className="mb-12 p-8 bg-gradient-to-r from-red-950/30 to-gray-900/60 border border-red-900/40 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            « Quand vous envoyez un devis client à ChatGPT, ce devis transite
            par des serveurs américains, est stocké, et peut servir à entraîner
            des modèles concurrents. Avec une IA locale,{" "}
            <strong className="text-[#00FFB3] not-italic">
              rien ne sort de chez vous
            </strong>
            . Jamais. »
          </p>
        </div>

        {/* Section Le problème du cloud */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Le cloud IA : une boîte noire pour vos données sensibles
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les solutions cloud (ChatGPT Enterprise, Claude, Gemini) sont
              pratiques. Mais elles impliquent que vos données traversent
              l'Atlantique, soient stockées sur des serveurs étrangers, et
              potentiellement réutilisées pour entraîner des modèles — y compris
              ceux de vos concurrents.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pour une PME qui manipule des{" "}
              <strong className="text-white">
                devis clients, des factures fournisseurs, des process internes
                ou des données personnelles
              </strong>
              , c'est un risque juridique (RGPD), commercial (fuite de
              savoir-faire) et stratégique (dépendance à un fournisseur
              américain).
            </p>
          </div>
          <div className="bg-red-950/20 p-6 rounded-xl border border-red-900/40 space-y-4">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              ⚠️ Les risques du cloud IA :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✗</span>
                <span>
                  <strong className="text-white">Transfert hors UE</strong> :
                  vos données partent aux États-Unis (Cloud Act américain).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✗</span>
                <span>
                  <strong className="text-white">
                    Entraînement des modèles
                  </strong>{" "}
                  : vos prompts peuvent servir à améliorer l'IA de vos
                  concurrents.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✗</span>
                <span>
                  <strong className="text-white">Dépendance tarifaire</strong> :
                  abonnements mensuels en $, indexés sur le cours du dollar.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✗</span>
                <span>
                  <strong className="text-white">Indisponibilité</strong> :
                  panne du fournisseur = arrêt de votre production.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✗</span>
                <span>
                  <strong className="text-white">Non-conformité IA Act</strong>{" "}
                  : certaines utilisations ne respectent pas le règlement
                  européen.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Notre approche souveraine */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Notre approche : l'IA qui reste chez vous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-[#00FFB3]/30 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#00FFB3]/20 flex items-center justify-center text-[#00FFB3] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Modèles locaux (Ollama, Mistral)
              </h3>
              <p className="text-sm text-gray-400">
                Nous installons des LLM open-source directement sur votre
                machine ou serveur. L'IA tourne en local, sans connexion
                internet requise pour l'inférence.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-[#00FFB3]/30 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#00FFB3]/20 flex items-center justify-center text-[#00FFB3] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Conteneurisation Docker
              </h3>
              <p className="text-sm text-gray-400">
                Déploiement reproductible et isolé via Docker. Votre
                environnement IA est portable, sauvegardable, et ne dépend
                d'aucun fournisseur externe.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-[#00FFB3]/30 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#00FFB3]/20 flex items-center justify-center text-[#00FFB3] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Conformité RGPD & IA Act
              </h3>
              <p className="text-sm text-gray-400">
                Aucune donnée personnelle ne transite hors de votre
                infrastructure. Documentation de conformité fournie, registre de
                traitement à jour.
              </p>
            </div>
          </div>
        </section>

        {/* Tableau comparatif Cloud vs Local */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Cloud vs IA Locale : le comparatif honnête
            </h2>
            <p className="text-gray-400 text-sm">
              Nous ne diabolisons pas le cloud : il a ses usages. Mais pour des
              données sensibles, le choix est clair.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Critère
                  </th>
                  <th className="text-center py-3 px-4 text-red-400 font-semibold">
                    Cloud (OpenAI, Claude…)
                  </th>
                  <th className="text-center py-3 px-4 text-[#00FFB3] font-semibold">
                    IA Locale (AlicIA-GPT)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-3 px-4 text-gray-300 font-medium">
                    Localisation des données
                  </td>
                  <td className="py-3 px-4 text-center text-red-300">
                    Serveurs US / UE
                  </td>
                  <td className="py-3 px-4 text-center text-[#00FFB3]">
                    Votre machine
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300 font-medium">
                    Coût récurrent
                  </td>
                  <td className="py-3 px-4 text-center text-red-300">
                    Abonnement mensuel $
                  </td>
                  <td className="py-3 px-4 text-center text-[#00FFB3]">
                    One-shot + maintenance
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300 font-medium">
                    Dépendance internet
                  </td>
                  <td className="py-3 px-4 text-center text-red-300">
                    Obligatoire
                  </td>
                  <td className="py-3 px-4 text-center text-[#00FFB3]">
                    Aucune
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300 font-medium">
                    Conformité RGPD
                  </td>
                  <td className="py-3 px-4 text-center text-red-300">
                    Complexe à prouver
                  </td>
                  <td className="py-3 px-4 text-center text-[#00FFB3]">
                    Native
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300 font-medium">
                    Conformité IA Act
                  </td>
                  <td className="py-3 px-4 text-center text-red-300">
                    Zone grise
                  </td>
                  <td className="py-3 px-4 text-center text-[#00FFB3]">
                    Full compliance
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300 font-medium">
                    Performance (modèles récents)
                  </td>
                  <td className="py-3 px-4 text-center text-[#00FFB3]">
                    ⭐⭐⭐⭐⭐
                  </td>
                  <td className="py-3 px-4 text-center text-[#00FFB3]">
                    ⭐⭐⭐⭐
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300 font-medium">
                    Confidentialité commerciale
                  </td>
                  <td className="py-3 px-4 text-center text-red-300">
                    ⚠️ Risque de réutilisation
                  </td>
                  <td className="py-3 px-4 text-center text-[#00FFB3]">
                    ✓ Garantie
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 italic mt-6">
            Nous restons honnêtes : pour certaines tâches (recherche web,
            multimodal avancé), le cloud garde un avantage. Nous proposons
            souvent une architecture{" "}
            <strong className="text-white">hybride</strong> : local pour le
            sensible, cloud pour le reste.
          </p>
        </section>

        {/* Cas d'usage critiques */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Quand choisir impérativement une IA locale ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📄</span>
                <h3 className="text-lg font-semibold text-white">
                  Devis & Factures clients
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Vos tarifs, vos marges, vos conditions commerciales sont le cœur
                de votre business. Les confier à une IA cloud, c'est prendre un
                risque concurrentiel majeur.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">👥</span>
                <h3 className="text-lg font-semibold text-white">
                  Données personnelles (RGPD)
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Fichiers clients, dossiers RH, informations médicales ou
                juridiques : le transfert vers un cloud non-UE est juridiquement
                encadré, voire interdit.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚙️</span>
                <h3 className="text-lg font-semibold text-white">
                  Process industriels & savoir-faire
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Procédures de fabrication, formules, méthodes : votre avantage
                concurrentiel ne doit jamais quitter vos murs.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏛️</span>
                <h3 className="text-lg font-semibold text-white">
                  Secteurs réglementés
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Santé, droit, finance, défense : l'IA Act impose des contraintes
                strictes que seule une IA locale peut garantir sans compromis.
              </p>
            </div>
          </div>
        </section>

        {/* Section Stack technique */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              🔧 Notre stack souveraine
            </h2>
            <p className="text-gray-400 text-sm">
              Des outils open-source, auditables, sans licence propriétaire.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { nom: "Ollama", desc: "Exécution locale de LLM" },
              { nom: "Mistral", desc: "Modèles français open-weight" },
              { nom: "Docker", desc: "Conteneurisation isolée" },
              { nom: "n8n", desc: "Automatisation self-hosted" },
            ].map((outil) => (
              <div
                key={outil.nom}
                className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 text-center hover:border-[#00FFB3]/40 transition-colors"
              >
                <p className="text-white font-semibold text-sm">{outil.nom}</p>
                <p className="text-[#00FFB3] text-xs mt-1">{outil.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Grille Tarifaire */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Investissement souverain, rentable sur le long terme
            </h2>
            <p className="text-gray-400 text-sm">
              Contrairement au cloud (abonnement mensuel à vie), l'IA locale est
              un investissement amorti. Pas de dépendance, pas de hausse
              tarifaire unilatérale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Audit Souveraineté
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Diagnostic Cloud vs Local (Demi-journée)
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  210 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Analyse de vos flux de données sensibles, identification des
                  risques RGPD/IA Act, recommandation d'architecture (locale,
                  hybride ou cloud maîtrisé).
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Livrable : cartographie des risques + plan d'action
              </div>
            </div>
            <div className="p-6 bg-gray-900 border border-[#00FFB3]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#00FFB3]/10">
              <div className="absolute -top-3 right-6 bg-[#00FFB3] text-black text-xs font-bold px-3 py-1 rounded-full">
                Souveraineté totale
              </div>
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Déploiement Clé en Main
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  IA Locale Installée & Configurée
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  Sur devis{" "}
                  <span className="text-xs font-normal text-gray-400">
                    (à partir de 1 500 € HT)
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Installation Ollama/Mistral sur votre infrastructure,
                  conteneurisation Docker, intégration à vos outils existants,
                  formation équipes, documentation de conformité RGPD.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Propriété totale de la solution — Aucune redevance
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 italic">
            🛡️ ROI moyen constaté : amortissement en 8 à 14 mois vs abonnement
            cloud équivalent.
          </div>
        </section>

        {/* Section Ancrage + Maillage interne */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🇪🇺 Une démarche européenne, ancrée localement
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm leading-relaxed mb-4">
            La souveraineté numérique n'est pas qu'un concept : c'est un choix
            stratégique pour les PME qui veulent rester maîtresses de leur
            données. Basés à Soissons, nous déployons cette approche dans
            l'Aisne (02), la Marne (51), l'Oise (60) et la Seine-et-Marne (77).
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm pt-4 border-t border-gray-800">
            <Link
              href="/agence-ia-aisne"
              className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
            >
              → Agence IA Aisne
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/agence-ia-reims-marne"
              className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
            >
              → Agence IA Marne
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/consultant-ia-oise"
              className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
            >
              → Consultant IA Oise
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/consultant-ia-seine-et-marne"
              className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
            >
              → Consultant IA 77
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/audit-conseil"
              className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
            >
              → Audit & Conseil IA
            </Link>
          </div>
        </section>

        {/* Appel à l'action final */}
        <div className="text-center bg-gradient-to-r from-[#00FFB3]/10 via-gray-900 to-[#6366F1]/10 p-10 rounded-2xl border border-[#00FFB3]/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à reprendre le contrôle de vos données ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez votre diagnostic souveraineté de 20 minutes offert. On
            analyse ensemble vos flux sensibles et je vous propose une
            architecture adaptée — sans engagement.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Réserver mon diagnostic souveraineté (20 min)" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default IALocaleSouverainePage;
