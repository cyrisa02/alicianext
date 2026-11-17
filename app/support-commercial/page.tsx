import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Support Commercial & CRM Intelligent | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Qualification de leads, relances clients automatisées et CRM intelligent. Boostez vos ventes en toute sécurité (RGPD) à Soissons, dans l'Aisne, l'Oise, la Marne et la Seine-et-Marne (77).",
  keywords: [
    "support commercial IA",
    "CRM intelligent",
    "qualification de leads",
    "relances clients automatisées",
    "automatisation prospection",
    "gestion pipeline de vente",
    "IA pour commerciaux",
    "scoring de leads",
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
    "consultant CRM IA",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Support Commercial & CRM Intelligent | AlicIA-GPT",
    description:
      "Qualification de leads, relances clients et CRM intelligent pour booster vos ventes. Automatisez votre prospection à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Commercial & CRM Intelligent | AlicIA-GPT",
    description:
      "Qualification de leads, relances clients et CRM intelligent pour booster vos ventes. Automatisez votre prospection à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const SupportCommercialPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Support Commercial, Qualification de Leads et CRM Intelligent par IA",
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
      "Solutions d'automatisation commerciale pour TPE, PME et artisans : qualification de prospects, relances intelligentes et gestion de pipeline CRM sécurisée.",
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
            Performance Commerciale & Conversion
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Support Commercial & CRM : Qualifiez vos leads et relancez sans
            effort
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ne laissez plus aucune opportunité s'évaporer. Automatisez votre
            prospection et structurez votre pipeline de vente (Aisne, Marne,
            Oise, 77).
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            “Un lead non qualifié est une opportunité perdue. Un client non
            relancé, un revenu qui s’évapore. Structurons votre démarche pour
            transformer l'intérêt en chiffre d'affaires.”
          </p>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous manquez de temps pour relancer vos devis et trier vos
              prospects ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Entre les demandes entrantes qu'il faut qualifier rapidement et
              les devis en attente de signature qui s'entassent, votre
              prospection manque souvent de régularité par manque de temps.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fort de{" "}
              <strong className="text-white">
                plus de 25 ans d'expérience en B2B industriel et
                technico-commercial
              </strong>
              , je vous aide à déployer des processus de vente fluides, basés
              sur des outils simples et rigoureusement conformes au{" "}
              <strong className="text-[#00FFB3]">
                RGPD (protection absolue de vos fichiers clients)
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
                <span className="text-[#00FFB3] font-bold">✓</span> Scoring et
                qualification automatique des leads entrants.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Séquences de
                relances intelligentes par e-mail et SMS au bon moment.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> CRM
                sur-mesure (HubSpot, Notion ou Google Sheets avancé) sans usine
                à gaz.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Tableaux de
                bord de suivi du pipeline commercial.
              </li>
            </ul>
          </div>
        </div>

        {/* Services proposés */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos solutions d'accompagnement commercial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Qualification des Leads
              </h3>
              <p className="text-sm text-gray-400">
                Mise en place de formulaires et de critères de notation pour
                identifier instantanément les prospects les plus chauds et prêts
                à signer.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Relances Automatisées
              </h3>
              <p className="text-sm text-gray-400">
                Scénarios de relance personnalisés pour vos devis et
                propositions en attente, déclenchés automatiquement selon le
                comportement de vos clients.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                CRM & Pipeline Visuel
              </h3>
              <p className="text-sm text-gray-400">
                Structuration de votre portefeuille client dans un outil
                intuitif et formation de vos équipes pour un suivi sans faille
                des affaires en cours.
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
              Profitez d'un accompagnement sur-mesure éligible aux dispositifs
              de financement professionnels (**OPCO**).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Setup CRM
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Configuration CRM & Templates
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  250 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Paramétrage de votre outil de suivi, création de 3 templates
                  de relance sur-mesure et formation de prise en main (1h).
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Prêt à l'emploi pour vos équipes
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus populaire
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Suivi Continu
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Commercial Serein »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  120 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Maintenance du CRM, optimisation des scénarios de relance,
                  reporting mensuel des conversions et 1 heure de support
                  dédiée.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Optimisation continue de vos ventes
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première heure satisfait ou remboursé — Accompagnement de
            proximité dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
          </div>
        </section>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Ancrage local en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous intervenons auprès des artisans, commerçants
            et PME locales pour dynamiser leur activité. Discrétion, réactivité
            et expertise terrain garanties dans l'Aisne (02), la Marne (51),
            l'Oise (60) et la Seine-et-Marne (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à booster votre taux de conversion et sécuriser vos ventes ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez votre diagnostic commercial offert de 20 minutes et
            identifiez vos axes d'amélioration immédiats.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un audit commercial gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportCommercialPage;
