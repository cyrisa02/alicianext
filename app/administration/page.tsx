import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Automatisation Administrative & Devis IA | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Automatisation de devis, newsletters et reportings grâce à des solutions IA souveraines et conformes RGPD. Gagnez du temps à Soissons, dans l'Aisne, l'Oise, la Marne et la Seine-et-Marne (77).",
  keywords: [
    "automatisation administrative",
    "génération de devis IA",
    "DevisFlow IA",
    "FactureScan IA",
    "newsletters automatisées",
    "reportings automatiques",
    "gestion administrative IA",
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
    "consultant IA administration",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Automatisation Administrative | AlicIA-GPT",
    description:
      "Automatisation de newsletters, reportings et devis grâce à l'IA. Simplifiez votre gestion à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatisation Administrative | AlicIA-GPT",
    description:
      "Automatisation de newsletters, reportings et devis grâce à l'IA. Simplifiez votre gestion à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const AdministrationPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Automatisation Administrative et Génération de Devis par IA",
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
      "Solutions d'automatisation administrative pour TPE, PME et artisans : devis instantanés (DevisFlow IA), reportings et gestion des relances sécurisées.",
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
            Efficacité & Sérénité Administrative
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Administration Automatisée : Devis, reportings et gestion sans
            stress
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Éliminez les tâches répétitives et gagnez 5 à 10 heures par semaine
            grâce à des outils IA sur-mesure et souverains (Aisne, Marne, Oise,
            77).
          </p>
        </div>

        {/* Visuel d'illustration */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 relative">
          <img
            src="/images/devis2.jpg"
            alt="Générateur de devis automatisé par l'IA pour artisans et PME - AlicIA-GPT"
            className="w-full h-auto object-contain max-h-[500px] md:max-h-[600px] transition-transform duration-500 hover:scale-101"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Outils Métiers Propriétaires
            </span>
            <p className="text-white text-sm sm:text-base font-medium italic">
              “L'administratif ne doit plus peser sur votre rentabilité —
              automatisez-le pour vous consacrer pleinement à vos clients.”
            </p>
          </div>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            “Rédiger un devis en 10 secondes à partir d'une photo de chantier ou
            automatiser ses relances de factures : c'est la promesse de nos
            solutions de terrain.”
          </p>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous passez vos soirées à rédiger des devis et à trier vos papiers
              ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Entre les chiffrages à rallonge, les relances impayés oubliées et
              la compilation des reportings, la charge administrative grignote
              votre temps libre et freine le développement de votre activité.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fort de{" "}
              <strong className="text-white">
                10 années d'expérience en tant qu'artisan gérant
              </strong>{" "}
              et de{" "}
              <strong className="text-white">
                25 ans d'expertise industrielle
              </strong>
              , je conçois des workflows d'automatisation ultra-pratiques, sans
              jargon, et conformes au{" "}
              <strong className="text-[#00FFB3]">
                RGPD (vos données restent chez vous)
              </strong>
              .
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nous automatisons pour vous :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>{" "}
                <strong className="text-white">DevisFlow IA :</strong>{" "}
                Génération de devis pro en 10 secondes sur le terrain.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>{" "}
                <strong className="text-white">FactureScan IA :</strong>{" "}
                Extraction et tri comptable automatisé vers Google Sheets.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Newsletters
                et communications clients régulières sans effort de rédaction.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Tableaux de
                bord de reporting et suivi des encaissements en temps réel.
              </li>
            </ul>
          </div>
        </div>

        {/* Services proposés */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos solutions d'automatisation administrative
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Devis & Facturation IA
              </h3>
              <p className="text-sm text-gray-400">
                Mise en place de modèles intelligents connectés à vos outils
                pour éditer, envoyer et suivre vos propositions commerciales en
                un temps record.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Reportings & Tableaux de bord
              </h3>
              <p className="text-sm text-gray-400">
                Centralisation de vos données d'activité (CA, marges, clients)
                sous forme de synthèses claires et automatisées prêtes à
                l'emploi.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Connexion de vos Outils
              </h3>
              <p className="text-sm text-gray-400">
                Passerelles fluides entre vos applications du quotidien (Google
                Workspace, Notion, Trello, Mailchimp) pour éliminer les doubles
                saisies.
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
              de financement professionnels (**OPCO**, **FAFCEA** pour les
              artisans).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Setup Cible
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Setup Devis & Facturation IA
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  250 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Configuration de vos modèles de devis automatisés, paramétrage
                  des outils et premier mois d'assistance offert.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Idéal pour supprimer la corvée des devis
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus populaire
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Sérénité Continue
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Admin Serein »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  120 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Gestion automatisée des devis, newsletters, reportings
                  périodiques et 1 heure de support dédiée incluse chaque mois.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Tranquillité d'esprit garantie
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première heure satisfait ou remboursé — Intervention de proximité
            dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
          </div>
        </section>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Accompagnement de proximité en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous accompagnons les artisans, commerçants et
            structures locales dans l'automatisation de leur gestion. Rigueur,
            discrétion et ancrage local garantis dans l'Aisne (02), la Marne
            (51), l'Oise (60) et la Seine-et-Marne (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à éliminer la charge administrative de votre quotidien ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez votre diagnostic gratuit de 20 minutes et découvrez
            exactement combien d'heures vous allez économiser chaque semaine.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un audit administratif gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdministrationPage;
