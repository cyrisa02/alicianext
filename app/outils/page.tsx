import type { Metadata } from "next";
import Link from "next/link";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Nos Outils IA | AlicIA-GPT — DevisFlow IA & FactureScan IA",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Découvrez nos outils IA sur-mesure pour artisans et PME : DevisFlow IA (devis en 10 secondes) et FactureScan IA (comptabilité automatisée). Solutions souveraines, conformes RGPD et IA Act.",
  keywords: [
    "outils IA artisans",
    "DevisFlow IA",
    "FactureScan IA",
    "automatisation devis",
    "automatisation factures",
    "IA comptabilité",
    "IA devis artisan",
    "logiciel IA PME",
    "SaaS IA souverain",
    "RGPD IA",
    "IA Act",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Nos Outils IA | AlicIA-GPT",
    description:
      "DevisFlow IA et FactureScan IA : deux outils IA souverains pour automatiser vos devis et votre comptabilité.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Outils IA | AlicIA-GPT",
    description:
      "DevisFlow IA et FactureScan IA : deux outils IA souverains pour automatiser vos devis et votre comptabilité.",
  },
};

const OutilsPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Outils IA AlicIA-GPT",
    description:
      "Collection d'outils IA souverains pour artisans et PME : DevisFlow IA et FactureScan IA.",
    url: "https://alicia-gpt.com/outils",
    isPartOf: {
      "@type": "WebSite",
      name: "AlicIA-GPT",
      url: "https://alicia-gpt.com",
    },
  };

  const outils = [
    {
      slug: "devisflow-ia",
      titre: "DevisFlow IA",
      sousTitre: "Le devis artisan en 10 secondes",
      description:
        "Votre client prend une photo de son problème, tape deux lignes, et reçoit un devis complet (diagnostic, prix, délais, garanties) en moins de 10 secondes. Vous recevez l'email en même temps : il ne vous reste plus qu'à rappeler pour conclure.",
      image: "/images/devis2.jpg",
      benefices: [
        "Zéro prospect perdu, même le dimanche soir",
        "Devis propres et complets, plus de bâclage à 23h",
        "30 à 60 min gagnées par jour",
        "Multi-métiers : plomberie, électricité, maçonnerie, peinture",
      ],
      couleur: "#6366F1",
    },
    {
      slug: "facture-ia",
      titre: "FactureScan IA",
      sousTitre: "La pré-comptabilité automatisée",
      description:
        "Prenez une photo de votre facture ou ticket de caisse : l'IA extrait automatiquement les lignes (HT, TVA, TTC, fournisseur) et les range dans votre tableau comptable en 5 secondes. Synchronisation Google Sheets ou export prêt pour votre expert-comptable.",
      image: "/images/compta.jpg",
      benefices: [
        "Finis les classeurs papier qui débordent",
        "Suivi TVA en temps réel avec alertes avant échéances",
        "Export structuré pour votre comptable",
        "Tableau de bord trésorerie pour anticiper vos charges",
      ],
      couleur: "#00FFB3",
    },
    {
      slug: "memobot",
      titre: "MemoBot",
      sousTitre: "L'assistant IA qui répond à la place du dirigeant",
      description:
        "MemoBot ingère vos documents internes (procédures, fiches techniques, CGV, historique client) et devient un assistant IA sécurisé qui répond aux questions de vos équipes et clients avec des réponses sourcées, sans hallucination.",
      image: "/images/memobot.jpg",
      benefices: [
        "Vos équipes trouvent l'info en 5 secondes au lieu de 20 minutes",
        "Réponses sourcées : chaque réponse cite le document d'origine",
        "Zéro hallucination : l'IA ne répond que sur ce qu'elle connaît",
        "Données protégées : tout reste chez vous, conforme RGPD",
      ],
      couleur: "#F59E0B",
    },
    {
      slug: "immo-alert-ia",
      titre: "ImmoAlert IA",
      sousTitre: "Détectez les opportunités immobilières avant tout le monde",
      description:
        "Un outil qui surveille vos alertes SeLoger et Leboncoin, compare chaque bien aux ventes réelles du secteur, et ne vous envoie que les vraies bonnes affaires. Fini le tri manuel de 200 annonces pour en trouver 2 intéressantes.",
      image: "/images/immosniper.jpg",
      benefices: [
        "Alertes en temps réel sur SeLoger, Leboncoin et plus",
        "Comparaison automatique aux ventes réelles (DVF)",
        "Score d'opportunité calculé par l'IA",
        "Multi-profils : investisseurs, agents, particuliers",
      ],
      couleur: "#EC4899",
    },
  ];

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
            🛠️ Nos Outils IA Sur-Mesure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Des logiciels IA pensés pour les artisans et les PME
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Deux outils souverains, hébergés en Europe, conformes RGPD et IA
            Act. Conçus pour éliminer vos tâches répétitives et vous rendre du
            temps de production.
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            « Pas de SaaS américain, pas de fuite de données : nos outils
            tournent sur une infrastructure maîtrisée, et vous gardez la
            propriété de vos données clients, de vos tarifs et de vos process. »
          </p>
        </div>

        {/* Cartes des outils */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {outils.map((outil) => (
            <Link
              key={outil.slug}
              href={`/outils/${outil.slug}`}
              className="group block bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#00FFB3]/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={outil.image}
                  alt={outil.titre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: outil.couleur }}
                >
                  SaaS Souverain
                </span>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-1">
                  {outil.titre}
                </h2>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: outil.couleur }}
                >
                  {outil.sousTitre}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {outil.description}
                </p>

                {/* Bénéfices */}
                <ul className="space-y-2 mb-5">
                  {outil.benefices.map((benefice, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span
                        className="font-bold flex-shrink-0 mt-0.5"
                        style={{ color: outil.couleur }}
                      >
                        ✓
                      </span>
                      <span>{benefice}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                  <span style={{ color: outil.couleur }}>
                    Découvrir {outil.titre}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    style={{ color: outil.couleur }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Pourquoi des outils souverains */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              🛡️ Pourquoi choisir nos outils plutôt qu'un SaaS américain ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-950/20 p-5 rounded-xl border border-red-900/40">
              <h3 className="text-lg font-semibold text-red-400 mb-3">
                ⚠️ Les SaaS cloud classiques
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✗ Données hébergées aux États-Unis (Cloud Act)</li>
                <li>✗ Abonnements en $, indexés sur le dollar</li>
                <li>✗ Vos prompts peuvent servir à entraîner leurs modèles</li>
                <li>✗ Dépendance totale à un fournisseur externe</li>
              </ul>
            </div>
            <div className="bg-[#00FFB3]/5 p-5 rounded-xl border border-[#00FFB3]/30">
              <h3 className="text-lg font-semibold text-[#00FFB3] mb-3">
                ✓ Nos outils souverains
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Hébergement Europe, conformité RGPD native</li>
                <li>✓ Tarifs en €, stables et prévisibles</li>
                <li>✓ Aucune réutilisation de vos données</li>
                <li>✓ Support humain basé à Soissons, en français</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appel à l'action final */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Un de ces outils correspond à votre besoin ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez un échange de 30 minutes pour identifier vos tâches à
            automatiser et voir une démo en direct.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Réserver un échange de 30 min" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OutilsPage;
