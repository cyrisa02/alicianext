import type { Metadata } from "next";
import Link from "next/link";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default:
      "Consultant IA Seine-et-Marne (77) | AlicIA-GPT — Meaux, Coulommiers, Fontainebleau",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Consultant en intelligence artificielle intervenant en Seine-et-Marne (77) : Meaux, Coulommiers, Fontainebleau, Melun, Marne-la-Vallée. Audit, automatisation, chatbots et formation IA pour PME, logistique et artisans. Solutions souveraines, conformes RGPD et IA Act.",
  keywords: [
    "consultant IA Seine-et-Marne",
    "agence IA Meaux",
    "intelligence artificielle Coulommiers",
    "IA Fontainebleau",
    "automatisation logistique Marne-la-Vallée",
    "formation IA Melun",
    "chatbot entreprise 77",
    "IA Brie",
    "automatisation processus Sénart",
    "IA artisan Seine-et-Marne",
    "RGPD IA entreprise",
    "IA Act conformité",
    "Meaux",
    "Coulommiers",
    "Fontainebleau",
    "Melun",
    "Chelles",
    "Torcy",
    "Bussy-Saint-Georges",
    "Sénart",
    "Seine-et-Marne",
    "77",
    "Île-de-France",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Consultant IA Seine-et-Marne (77) | AlicIA-GPT",
    description:
      "Votre partenaire IA de proximité en Seine-et-Marne. Audit, automatisation et formation pour les entreprises de Meaux, Coulommiers, Fontainebleau et Marne-la-Vallée.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultant IA Seine-et-Marne (77) | AlicIA-GPT",
    description:
      "Votre partenaire IA de proximité en Seine-et-Marne. Audit, automatisation et formation pour les entreprises de Meaux, Coulommiers, Fontainebleau et Marne-la-Vallée.",
  },
};

const ConsultantIASeineEtMarnePage = () => {
  // Données structurées JSON-LD pour le SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AlicIA-GPT — Consultant IA Seine-et-Marne",
    description:
      "Consultant en intelligence artificielle intervenant en Seine-et-Marne (77) : Meaux, Coulommiers, Fontainebleau, Melun, Marne-la-Vallée. Audit, automatisation, chatbots, formation et solutions souveraines conformes RGPD & IA Act.",
    url: "https://alicia-gpt.com/consultant-ia-seine-et-marne",
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
      { "@type": "City", name: "Meaux" },
      { "@type": "City", name: "Coulommiers" },
      { "@type": "City", name: "Fontainebleau" },
      { "@type": "City", name: "Melun" },
      { "@type": "City", name: "Chelles" },
      { "@type": "City", name: "Torcy" },
      { "@type": "City", name: "Bussy-Saint-Georges" },
      { "@type": "City", name: "Sénart" },
      { "@type": "AdministrativeArea", name: "Seine-et-Marne (77)" },
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
            Votre Consultant IA de proximité en Seine-et-Marne (77)
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            AlicIA-GPT : l'intelligence artificielle au service des entreprises
            de Seine-et-Marne
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Basée à Soissons, à la porte de la Seine-et-Marne, notre agence
            accompagne les TPE, PME, plateformes logistiques et artisans du
            département (Meaux, Coulommiers, Fontainebleau, Melun,
            Marne-la-Vallée…) avec des solutions IA concrètes, souveraines et
            rentables.
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            « De la logistique de Marne-la-Vallée aux commerces de Meaux et
            Coulommiers, l'IA n'est plus un luxe parisien : c'est le levier qui
            manquait aux PME de Seine-et-Marne pour rivaliser avec les grands
            groupes. »
          </p>
        </div>

        {/* Section Pourquoi un consultant IA local */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Pourquoi choisir un consultant IA qui connaît la Seine-et-Marne ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les prestataires parisiens ne saisissent pas vos réalités : les
              pics logistiques autour de Sénart et Marne-la-Vallée, la
              saisonnalité touristique de Fontainebleau, les contraintes d'un
              artisan de la Brie ou d'un commerçant de Meaux face à la
              concurrence de la métropole, ou encore les enjeux de mobilité de
              vos équipes.
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
                  <strong className="text-white">Ancrage francilien</strong> :
                  intervention sur site à Meaux, Coulommiers, Fontainebleau,
                  Melun, Chelles, Torcy, Bussy-Saint-Georges, Sénart…
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
                  automatisation des bordereaux logistiques, devis artisans,
                  chatbots pour sites touristiques, support interne.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>
                <span>
                  <strong className="text-white">Tarifs transparents</strong> :
                  éligibles OPCO, FAFCEA (artisans) et aides Région
                  Île-de-France.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos prestations pour les entreprises de Seine-et-Marne
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
                Demi-journée sur site en Seine-et-Marne ou en visio.
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
              📍 Nous intervenons partout en Seine-et-Marne
            </h2>
            <p className="text-gray-400 text-sm">
              De la Brie au Gâtinais, en passant par la vallée de la Marne et
              les pôles logistiques, nous couvrons votre bassin économique avec
              la même réactivité.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                ville: "Meaux",
                code: "77100",
                label: "Cœur historique & Brie",
              },
              {
                ville: "Coulommiers",
                code: "77120",
                label: "Brie & agroalimentaire",
              },
              {
                ville: "Fontainebleau",
                code: "77300",
                label: "Tourisme & tertiaire",
              },
              { ville: "Melun", code: "77000", label: "Préfecture & services" },
              { ville: "Chelles", code: "77500", label: "Pôle urbain Est" },
              { ville: "Torcy", code: "77200", label: "Marne-la-Vallée" },
              {
                ville: "Bussy-Saint-Georges",
                code: "77600",
                label: "Technopole & tertiaire",
              },
              {
                ville: "Sénart",
                code: "77170",
                label: "Pôle logistique majeur",
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
            Et également : Lagny-sur-Marne, Brie-Comte-Robert, Nemours,
            Montereau-Fault-Yonne, Provins, Dammartin-en-Goële…
          </p>

          {/* Maillage interne */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400 mb-3">
              Vous êtes à la frontière Seine-et-Marne / Oise / Aisne ? Découvrez
              aussi :
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
                href="/consultant-ia-oise"
                className="text-[#6366F1] hover:text-[#00FFB3] transition-colors"
              >
                → Consultant IA Oise (60)
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
              Des formules claires, adaptées aux TPE et PME du 77
            </h2>
            <p className="text-gray-400 text-sm">
              Toutes nos prestations peuvent faire l'objet d'une prise en charge
              via vos dispositifs de financement (OPCO, FAFCEA pour les
              artisans, aides Région Île-de-France).
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
                ✓ Sur site à Meaux, Coulommiers, Fontainebleau ou visio
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
            tout le département de Seine-et-Marne.
          </div>
        </section>

        {/* Section Ancrage Local renforcée */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🏙️ Au cœur du tissu économique de Seine-et-Marne
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm leading-relaxed">
            La Seine-et-Marne est un département à la croisée des enjeux :
            plateformes logistiques majeures (Sénart, Marne-la-Vallée,
            Dammartin), tourisme international (Fontainebleau, Disneyland),
            agriculture et agroalimentaire de la Brie, et un tissu de TPE/PME
            périurbaines en pleine mutation. Notre mission : vous donner les
            leviers IA pour automatiser, vendre et produire mieux, sans jamais
            délocaliser vos données.
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

export default ConsultantIASeineEtMarnePage;
