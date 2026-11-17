import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default:
      "Agence IA Aisne (02) | AlicIA-GPT — Consulting IA à Soissons, Laon, Saint-Quentin",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Agence de consulting en intelligence artificielle basée à Soissons (02). Accompagnement des TPE, PME et artisans de l'Aisne : automatisation, chatbots, formation IA, souveraineté des données. Intervention à Laon, Saint-Quentin, Château-Thierry, Tergnier.",
  keywords: [
    "agence IA Aisne",
    "consultant IA Soissons",
    "intelligence artificielle Laon",
    "automatisation PME Aisne",
    "formation IA Saint-Quentin",
    "chatbot entreprise 02",
    "IA souveraine Hauts-de-France",
    "transformation digitale Aisne",
    "automatisation processus TPE",
    "RGPD IA entreprise",
    "IA Act conformité",
    "Soissons",
    "Laon",
    "Saint-Quentin",
    "Château-Thierry",
    "Tergnier",
    "Chauny",
    "Hirson",
    "Bohain-en-Vermandois",
    "Aisne",
    "02",
    "Hauts-de-France",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Agence IA Aisne (02) | AlicIA-GPT",
    description:
      "Votre partenaire IA de proximité dans l'Aisne. Audit, automatisation, formation et solutions souveraines pour TPE, PME et artisans à Soissons, Laon, Saint-Quentin.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence IA Aisne (02) | AlicIA-GPT",
    description:
      "Votre partenaire IA de proximité dans l'Aisne. Audit, automatisation, formation et solutions souveraines pour TPE, PME et artisans.",
  },
};

const AgenceIAAisnePage = () => {
  // Données structurées JSON-LD pour le SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AlicIA-GPT — Agence IA Aisne",
    description:
      "Agence de consulting en intelligence artificielle basée à Soissons (02). Accompagnement des TPE, PME et artisans de l'Aisne dans leur transformation IA : audit, automatisation, chatbots, formation, souveraineté des données.",
    url: "https://alicia-gpt.com/agence-ia-aisne",
    telephone: "+33615603344",
    email: "contact@alicia-gpt.com",
    founder: {
      "@type": "Person",
      name: "Cyril Gourdon",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Soissons",
      addressLocality: "Soissons",
      postalCode: "02200",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Soissons",
      },
      {
        "@type": "City",
        name: "Laon",
      },
      {
        "@type": "City",
        name: "Saint-Quentin",
      },
      {
        "@type": "City",
        name: "Château-Thierry",
      },
      {
        "@type": "City",
        name: "Tergnier",
      },
      {
        "@type": "City",
        name: "Chauny",
      },
      {
        "@type": "City",
        name: "Hirson",
      },
      {
        "@type": "AdministrativeArea",
        name: "Aisne (02)",
      },
    ],
    priceRange: "€€",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: ["https://www.linkedin.com/in/cyril-gourdon/"],
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
            Votre Agence IA de proximité dans l'Aisne (02)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            AlicIA-GPT : l'intelligence artificielle au service des entreprises
            de l'Aisne
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Basée à Soissons, notre agence accompagne les TPE, PME et artisans
            de tout le département (Laon, Saint-Quentin, Château-Thierry,
            Tergnier…) dans leur transformation IA avec des solutions concrètes,
            souveraines et rentables.
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            « Pas de promesse creuse, pas de techno pour la techno : on
            identifie vos vrais goulets d'étranglement et on déploie des
            solutions IA qui rapportent du temps et de la marge dès la première
            semaine. »
          </p>
        </div>

        {/* Section Pourquoi une agence IA locale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Pourquoi choisir une agence IA ancrée dans l'Aisne ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les grandes agences parisiennes ou les freelances loin de votre
              territoire ne comprennent pas vos réalités : tissu économique
              local, saisonnalité, contraintes des artisans, spécificités des
              bassins d'emploi de Soissons, Laon ou Saint-Quentin.
            </p>
            <p className="text-gray-300 leading-relaxed">
              AlicIA-GPT est{" "}
              <strong className="text-white">née dans l'Aisne</strong>, pour
              l'Aisne. Fort de 25 ans d'expérience industrielle et d'une double
              culture artisan/ingénieur, je vous accompagne{" "}
              <strong className="text-[#00FFB3]">
                en présentiel ou en visio
              </strong>{" "}
              avec une garantie absolue : vos données restent chez vous,
              conformes RGPD et IA Act.
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce qui nous différencie :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>
                <span>
                  <strong className="text-white">Ancrage territorial</strong> :
                  intervention sur site à Soissons, Laon, Saint-Quentin,
                  Château-Thierry, Tergnier, Chauny, Hirson…
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>
                <span>
                  <strong className="text-white">
                    Souveraineté des données
                  </strong>{" "}
                  : solutions locales (Ollama, Mistral) ou cloud maîtrisé,
                  aucune fuite vers les GAFAM.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>
                <span>
                  <strong className="text-white">Pédagogie terrain</strong> :
                  pas de jargon, des cas d'usage concrets adaptés à votre métier
                  (artisan, commerce, industrie, services).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>
                <span>
                  <strong className="text-white">Tarifs transparents</strong> :
                  éligibles OPCO, FAFCEA (artisans) et aides régionales
                  Hauts-de-France.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos prestations pour les entreprises de l'Aisne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Audit & Feuille de route IA
              </h3>
              <p className="text-sm text-gray-400">
                Analyse de vos processus (devis, factures, relances, planning…)
                et plan d'action chiffré avec ROI clair. Demi-journée sur site
                ou en visio.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Automatisation & Agents IA
              </h3>
              <p className="text-sm text-gray-400">
                Déploiement de solutions sur-mesure : scan de factures,
                générateur de devis, chatbot client, veille concurrentielle.
                Intégration dans votre environnement existant.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Formation & Montée en compétence
              </h3>
              <p className="text-sm text-gray-400">
                Formations IA générative pour vos équipes (1 à 3 jours),
                ateliers prompts métier, bonnes pratiques RGPD. Dans vos locaux
                ou à Soissons.
              </p>
            </div>
          </div>
        </section>

        {/* Zone d'intervention détaillée */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              📍 Nous intervenons partout dans l'Aisne
            </h2>
            <p className="text-gray-400 text-sm">
              De la Thiérache au Soissonnais, en passant par le Laonnois et le
              Saint-Quentinois, nous couvrons l'ensemble du département avec la
              même réactivité.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { ville: "Soissons", code: "02200", label: "Siège" },
              { ville: "Laon", code: "02000", label: "Préfecture" },
              {
                ville: "Saint-Quentin",
                code: "02100",
                label: "Sous-préfecture",
              },
              {
                ville: "Château-Thierry",
                code: "02400",
                label: "Sous-préfecture",
              },
              { ville: "Tergnier", code: "02700", label: "Pôle ferroviaire" },
              { ville: "Chauny", code: "02300", label: "Bassin industriel" },
              { ville: "Hirson", code: "02500", label: "Thiérache" },
              {
                ville: "Bohain-en-Vermandois",
                code: "02110",
                label: "Vermandois",
              },
            ].map((ville) => (
              <div
                key={ville.ville}
                className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 text-center hover:border-[#00FFB3]/40 transition-colors"
              >
                <p className="text-white font-semibold text-sm">
                  {ville.ville}
                </p>
                <p className="text-[#00FFB3] text-xs mt-1">{ville.code}</p>
                <p className="text-gray-500 text-xs mt-1">{ville.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 italic mt-6">
            Et également : Vervins, Guise, Villers-Cotterêts, Gauchy,
            Essigny-le-Grand, Belleu, Cuffies, Mercin-et-Vaux…
          </p>
        </section>

        {/* Grille Tarifaire */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules claires, adaptées aux TPE et PME de l'Aisne
            </h2>
            <p className="text-gray-400 text-sm">
              Toutes nos prestations peuvent faire l'objet d'une prise en charge
              via vos dispositifs de financement (OPCO, FAFCEA pour les
              artisans, aides Région Hauts-de-France).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Format Express
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Audit Express (Demi-journée)
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  210 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Analyse ciblée de 1 à 2 processus prioritaires et plan
                  d'action rapide. Idéal pour un premier diagnostic sans
                  engagement.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Sur site à Soissons, Laon, Saint-Quentin ou visio
              </div>
            </div>
            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus populaire
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Transformation Totale
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Audit Complet & Stratégie (1 Jour)
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  450 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Analyse complète de 3 à 5 processus, remise d'une feuille de
                  route détaillée et présentation des solutions sur-mesure.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Éligible prise en charge OPCO / FAFCEA
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première heure satisfait ou remboursé — Proximité garantie dans
            tout le département de l'Aisne.
          </div>
        </section>

        {/* Témoignages Clients locaux */}
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
                « En une demi-journée sur mon atelier à Laon, Cyril a identifié
                3 tâches que je faisais à la main depuis des années. Trois
                semaines plus tard, tout est automatisé. Je gagne 6h par
                semaine. »
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              — Marc, artisan menuisier, Laon (02)
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
                « On avait peur de confier nos données à une IA cloud.
                AlicIA-GPT nous a déployé une solution 100% locale avec Ollama.
                Nos devis clients restent chez nous, et le bot répond aux
                questions fréquentes 24h/24. »
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              — Sophie, dirigeante de PME industrielle, Saint-Quentin (02)
            </p>
          </div>
        </div>

        {/* Section Ancrage Local renforcée */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🏭 Au cœur du tissu économique axonais
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm leading-relaxed">
            L'Aisne est un département riche de son tissu industriel
            (automobile, agroalimentaire, verre, plastique), de son artisanat
            dynamique et de son agriculture de pointe. Nous comprenons vos
            enjeux : compétitivité face aux grands groupes, pénurie de
            main-d'œuvre, transition numérique. Notre mission : vous donner les
            leviers IA pour rester compétitifs sans délocaliser vos données.
          </p>
        </section>

        {/* Appel à l'action final */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à transformer votre entreprise avec l'IA ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez votre diagnostic initial de 20 minutes offert. On échange
            sur vos enjeux, je vous propose 2-3 pistes d'action concrètes — sans
            engagement.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Réserver mon diagnostic IA gratuit (20 min)" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgenceIAAisnePage;
