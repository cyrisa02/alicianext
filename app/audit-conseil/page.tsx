import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Audit & Conseil IA pour TPE/PME | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Feuille de route IA personnalisée et audit de processus pour dirigeants, artisans et PME. Solutions souveraines, conformes RGPD et IA Act à Soissons, dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne (77).",
  keywords: [
    "audit IA",
    "conseil en intelligence artificielle",
    "analyse de processus",
    "feuille de route IA",
    "automatisation des processus",
    "transformation digitale",
    "consultant IA",
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
    "diagnostic IA entreprise",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Audit & Conseil IA | AlicIA-GPT",
    description:
      "Analyse de vos processus et feuille de route IA personnalisée. Identifiez les leviers d'automatisation à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit & Conseil IA | AlicIA-GPT",
    description:
      "Analyse de vos processus et feuille de route IA personnalisée. Identifiez les leviers d'automatisation à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const AuditConseilPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Audit et Conseil en Intelligence Artificielle pour TPE/PME",
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
      "Audit de processus, feuille de route IA et intégration de solutions souveraines conformes RGPD pour artisans, commerçants et dirigeants.",
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
            Stratégie & ROI Immédiat
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Audit & Conseil IA : Transformez vos processus en leviers de
            croissance
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Gagnez 5 à 10 heures par semaine sur votre administratif grâce à une
            feuille de route claire, sur-mesure et 100% sécurisée pour votre
            entreprise (Aisne, Marne, Oise, 77).
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            “Un bon audit IA ne liste pas des technologies abstraites : il
            élimine vos tâches chronophages pour vous rendre du temps et de la
            marge financière dès la première semaine.”
          </p>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous croulez sous les tâches répétitives sans savoir par où
              commencer ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Devis à rédiger en urgence, factures à trier, relances impayés
              oubliées, e-mails chronophages... En tant que dirigeant, artisan
              ou responsable de PME, votre temps est trop précieux pour le
              passer sur des tâches administratives à faible valeur ajoutée.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fort de{" "}
              <strong className="text-white">
                25 ans d'expérience en industrie/ERP
              </strong>{" "}
              et d'une solide culture terrain, je vous accompagne avec une
              approche pragmatique, sans jargon informatique, et une garantie
              absolue :{" "}
              <strong className="text-[#00FFB3]">
                vos données restent strictement confidentielles et souveraines
                (RGPD & IA Act)
              </strong>
              .
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nous analysons :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Vos flux
                commerciaux et la rapidité de création de vos devis.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Votre
                gestion comptable et le traitement de vos factures fournisseurs.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Votre
                visibilité locale (Google Business, SEO, réseaux de
                prospection).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Vos goulets
                d'étranglement administratifs et humains.
              </li>
            </ul>
          </div>
        </div>

        {/* Livrables de l'audit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Ce que comprend votre accompagnement sur-mesure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Audit Flash de Processus
              </h3>
              <p className="text-sm text-gray-400">
                Cartographie précise de vos gisements de productivité et
                identification immédiate des tâches automatisables sans risque.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Feuille de Route ROI
              </h3>
              <p className="text-sm text-gray-400">
                Plan d'action opérationnel échelonné (court/moyen terme) avec
                sélection des outils adaptés à votre budget et chiffrage des
                gains de temps.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Mise en Route & Suivi
              </h3>
              <p className="text-sm text-gray-400">
                Accompagnement au déploiement des premiers cas d'usage (ex :
                DevisFlow IA, FactureScan IA) et sécurisation des pratiques en
                interne.
              </p>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire Transparente & Financements */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules claires, adaptées aux TPE et PME
            </h2>
            <p className="text-gray-400 text-sm">
              Toutes nos prestations de conseil et de formation peuvent faire
              l'objet d'une prise en charge via vos dispositifs de financement
              (OPCO, FAFCEA pour les artisans).
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
                  Analyse ciblée de 1 à 2 processus prioritaires (ex : gestion
                  des devis ou tri des factures) et plan d'action rapide.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Idéal pour un premier diagnostic sans engagement
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
            l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
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
                “En 1 journée, ils ont identifié 5 tâches que je faisais
                manuellement. Aujourd'hui, elles sont automatisées et j'ai gagné
                plus de 4 heures par semaine sur ma gestion.”
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              — Colette, Consultante indépendante, Soissons (02)
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
                “Un accompagnement ultra-pratique, ancré dans nos réalités
                locales. L'approche sécurisée et respectueuse du RGPD nous a
                immédiatement mis en confiance.”
              </blockquote>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              — Dirigeant de PME industrielle, Aisne
            </p>
          </div>
        </div>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Intervention de proximité en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous intervenons directement sur site ou en
            visioconférence dans l'Aisne (02), la Marne (51), l'Oise (60) et la
            Seine-et-Marne (77). Discrétion, réactivité et engagement local
            garantis.
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à libérer du temps pour votre entreprise ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez dès maintenant votre diagnostic initial de 20 minutes
            offert pour identifier vos premiers gains de productivité.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Réserver mon diagnostic IA gratuit (20 min)" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuditConseilPage;
