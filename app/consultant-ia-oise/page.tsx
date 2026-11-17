import type { Metadata } from "next";
import Link from "next/link";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default:
      "Consultant IA Oise (60) | AlicIA-GPT — Compiègne, Creil, Senlis, Beauvais",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Consultant en intelligence artificielle intervenant dans l'Oise (60) : Compiègne, Creil, Senlis, Beauvais, Chantilly, Clermont. Audit, automatisation, chatbots et formation IA pour PME, artisans et industries. Solutions souveraines, conformes RGPD et IA Act.",
  keywords: [
    "consultant IA Oise",
    "agence IA Compiègne",
    "intelligence artificielle Creil",
    "IA Senlis",
    "automatisation PME Beauvais",
    "formation IA Chantilly",
    "chatbot entreprise Oise",
    "IA aéronautique Creil",
    "IA logistique Oise",
    "RGPD IA entreprise",
    "IA Act conformité",
    "Compiègne",
    "Creil",
    "Senlis",
    "Beauvais",
    "Chantilly",
    "Clermont",
    "Nogent-sur-Oise",
    "Méru",
    "Oise",
    "60",
    "Hauts-de-France",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Consultant IA Oise (60) | AlicIA-GPT",
    description:
      "Votre partenaire IA de proximité dans l'Oise. Audit, automatisation et formation pour les entreprises de Compiègne, Creil, Senlis, Beauvais et Chantilly.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultant IA Oise (60) | AlicIA-GPT",
    description:
      "Votre partenaire IA de proximité dans l'Oise. Audit, automatisation et formation pour les entreprises de Compiègne, Creil, Senlis, Beauvais et Chantilly.",
  },
};

const ConsultantIAOisePage = () => {
  // Données structurées JSON-LD pour le SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AlicIA-GPT — Consultant IA Oise",
    description:
      "Consultant en intelligence artificielle intervenant dans l'Oise (60) : Compiègne, Creil, Senlis, Beauvais, Chantilly, Clermont. Audit, automatisation, chatbots, formation et solutions souveraines conformes RGPD & IA Act.",
    url: "https://alicia-gpt.com/consultant-ia-oise",
    telephone: "+33615603344",
    email: "contact@alicia-gpt.com",
    founder: {
      "@type": "Person",
      name: "Cyril Gourdon",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Soissons",
      postalCode: "02200",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Compiègne" },
      { "@type": "City", name: "Creil" },
      { "@type": "City", name: "Senlis" },
      { "@type": "City", name: "Beauvais" },
      { "@type": "City", name: "Chantilly" },
      { "@type": "City", name: "Clermont" },
      { "@type": "City", name: "Nogent-sur-Oise" },
      { "@type": "City", name: "Méru" },
      { "@type": "AdministrativeArea", name: "Oise (60)" },
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
            Votre Consultant IA de proximité dans l'Oise (60)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            AlicIA-GPT : l'intelligence artificielle au service des entreprises
            de l'Oise
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Basée à Soissons, à la frontière de l'Oise, notre agence accompagne
            les TPE, PME, industries et artisans du département (Compiègne,
            Creil, Senlis, Beauvais, Chantilly, Clermont…) avec des solutions IA
            concrètes, souveraines et rentables.
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            « De l'aéronautique creilloise aux PME de Senlis, en passant par les
            plateformes logistiques de l'A1 : l'IA n'est plus une option, c'est
            un levier de compétitivité pour chaque entreprise de l'Oise. »
          </p>
        </div>

        {/* Section Pourquoi un consultant IA local */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Pourquoi choisir un consultant IA qui connaît l'Oise ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les prestataires parisiens ou les plateformes généralistes ne
              saisissent pas vos réalités : les cadences de production
              aéronautique à Creil, les pics logistiques autour de Compiègne et
              de l'A1, la saisonnalité touristique de Chantilly et Senlis, ou
              encore les contraintes d'un artisan de Méru ou de Beauvais.
            </p>
            <p className="text-gray-300 leading-relaxed">
              AlicIA-GPT est{" "}
              <strong className="text-white">
                à taille humaine et géographiquement proche
              </strong>
              . Fort de 25 ans d'expérience industrielle et d'une double culture
              artisan/ingénieur, j'interviens{" "}
              <strong className="text-[#00FFB3]">
                en présentiel ou en visio
              </strong>{" "}
              avec une garantie absolue : vos données clients, vos process et
              vos savoir-faire restent chez vous, conformes RGPD et IA Act.
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
                  <strong className="text-white">Ancrage oisien</strong> :
                  intervention sur site à Compiègne, Creil, Senlis, Beauvais,
                  Chantilly, Clermont, Nogent-sur-Oise, Méru…
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>
                <span>
                  <strong className="text-white">
                    Souveraineté des données
                  </strong>{" "}
                  : solutions locales (Ollama, Mistral) pour protéger vos
                  fichiers clients et vos process, aucune fuite vers le cloud
                  GAFAM.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>
                <span>
                  <strong className="text-white">Cas d'usage métier</strong> :
                  automatisation des devis, tri de bordereaux logistiques,
                  chatbots pour sites touristiques, support interne.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>
                <span>
                  <strong className="text-white">Tarifs transparents</strong> :
                  éligibles OPCO, FAFCEA (artisans) et aides Région
                  Hauts-de-France.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos prestations pour les entreprises de l'Oise
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
                Analyse de vos processus (devis, factures, planning,
                logistique…) et plan d'action chiffré avec ROI clair.
                Demi-journée sur site dans l'Oise ou en visio.
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
                Déploiement sur-mesure : chatbot client, scan de factures,
                générateur de devis, veille concurrentielle. Intégré à vos
                outils existants.
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
                ateliers prompts métier et bonnes pratiques RGPD. Dans vos
                locaux ou à Soissons.
              </p>
            </div>
          </div>
        </section>

        {/* Zone d'intervention détaillée */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              📍 Nous intervenons partout dans l'Oise
            </h2>
            <p className="text-gray-400 text-sm">
              Du Pays de Compiègne au Pays de Senlis, en passant par le
              Beauvaisis et la Vallée de la Bresle, nous couvrons votre bassin
              économique avec la même réactivité.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                ville: "Compiègne",
                code: "60200",
                label: "Pôle universitaire & industriel",
              },
              {
                ville: "Creil",
                code: "60100",
                label: "Aéronautique & Vallée de l'Oise",
              },
              {
                ville: "Senlis",
                code: "60300",
                label: "Tourisme & périurbain IDF",
              },
              {
                ville: "Beauvais",
                code: "60000",
                label: "Préfecture & aéroport",
              },
              {
                ville: "Chantilly",
                code: "60500",
                label: "Tourisme luxe & hippodrome",
              },
              {
                ville: "Clermont",
                code: "60600",
                label: "Cœur du département",
              },
              {
                ville: "Nogent-sur-Oise",
                code: "60180",
                label: "Pôle industriel",
              },
              {
                ville: "Méru",
                code: "60110",
                label: "Tabletterie & ameublement",
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
            Et également : Pont-Sainte-Maxence, Crepy-en-Valois, Noyon,
            Liancourt, Mouy, Bresles, Crèvecœur-le-Grand…
          </p>

          {/* Maillage interne */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400 mb-3">
              Vous êtes à la frontière Oise–Aisne ou Oise–Seine-et-Marne ?
              Découvrez aussi :
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="/agence-ia-aisne"
                className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
              >
                → Agence IA Aisne (Soissons)
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/consultant-ia-seine-et-marne"
                className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
              >
                → Consultant IA Seine-et-Marne (77)
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/audit-conseil"
                className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
              >
                → Notre méthode d'audit IA
              </Link>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules claires, adaptées aux TPE et PME de l'Oise
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
                ✓ Sur site à Compiègne, Creil, Senlis, Beauvais ou visio
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
            tout le département de l'Oise.
          </div>
        </section>

        {/* Section Ancrage Local renforcée */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            ✈️ Au cœur du tissu économique oisien
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm leading-relaxed">
            L'Oise est un département à la croisée des enjeux : aéronautique et
            mécanique de précision à Creil (Safran, Ratier-Figeac), plateformes
            logistiques majeures le long de l'A1 et de l'A16, tourisme haut de
            gamme à Chantilly et Senlis, pôle universitaire et numérique à
            Compiègne (UTC), artisanat d'art à Méru (tabletterie, ameublement).
            Notre mission : vous donner les leviers IA pour rester compétitifs
            sans jamais délocaliser vos données.
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

export default ConsultantIAOisePage;
