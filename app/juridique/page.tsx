import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Veille Juridique, RGPD & IA Act pour TPE/PME | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Mise en conformité RGPD, loi IA Act et sécurisation juridique de vos outils et sites web. Accompagnement sur-mesure à Soissons, dans l'Aisne, l'Oise, la Marne et la Seine-et-Marne (77).",
  keywords: [
    "veille juridique",
    "conformité RGPD",
    "IA Act",
    "loi IA européenne",
    "protection des données",
    "mentions légales",
    "politique de confidentialité",
    "CGU CGV",
    "registre des traitements",
    "CNIL",
    "audit RGPD",
    "consultant juridique IA",
    "conformité numérique",
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
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Veille Juridique & Conformité IA Act | AlicIA-GPT",
    description:
      "Veille juridique, conformité RGPD et IA Act pour sécuriser votre activité. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veille Juridique & Conformité IA Act | AlicIA-GPT",
    description:
      "Veille juridique, conformité RGPD et IA Act pour sécuriser votre activité. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const JuridiquePage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Veille Juridique, Conformité RGPD et IA Act pour Entreprises",
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
      "Accompagnement juridique et mise en conformité RGPD, IA Act et rédaction de CGU/CGV pour artisans, commerçants et PME.",
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
            Sécurité Juridique & Sérénité
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Veille Juridique & Conformité : Protégez votre entreprise face au
            RGPD et à l'IA Act
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mettez votre structure en règle sans jargon complexe. Sécurisez vos
            sites web, vos données clients et l'usage de vos outils
            d'intelligence artificielle (Aisne, Marne, Oise, 77).
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            “La conformité n’est pas un frein réglementaire — c’est votre
            bouclier. Protégez votre activité et gagnez la confiance durable de
            vos clients.”
          </p>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Savez-vous si votre site et vos pratiques respectent les dernières
              lois européennes ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Absence de mentions légales à jour, recueil de données sans
              consentement explicite, déploiement d'outils d'IA sans cadre
              réglementaire : les risques de sanctions et de litiges pèsent
              lourdement sur les entreprises qui naviguent à vue.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fort d'une solide expérience de terrain, je vous accompagne pas à
              pas pour structurer vos documents obligatoires et garantir une{" "}
              <strong className="text-[#00FFB3]">
                conformité stricte aux exigences du RGPD et du nouvel IA Act
              </strong>
              .
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nous sécurisons pour vous :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Audit et
                mise en conformité RGPD de vos supports.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Évaluation
                et encadrement des solutions IA (IA Act).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Rédaction
                sur-mesure de vos CGU, CGV et politiques de confidentialité.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Veille
                mensuelle pour anticiper les évolutions légales.
              </li>
            </ul>
          </div>
        </div>

        {/* Services proposés */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos accompagnements juridiques sur-mesure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Audit & Registre RGPD
              </h3>
              <p className="text-sm text-gray-400">
                Analyse de vos flux de données, rédaction de la politique de
                confidentialité et mise en place du registre des traitements
                obligatoire.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Conformité IA Act
              </h3>
              <p className="text-sm text-gray-400">
                Évaluation des risques liés aux outils d'intelligence
                artificielle utilisés en interne et garantie de la transparence
                et de la traçabilité.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                CGU, CGV & Contrats
              </h3>
              <p className="text-sm text-gray-400">
                Création ou refonte de vos conditions générales de vente,
                d'utilisation et de vos contrats commerciaux adaptés à votre
                secteur.
              </p>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire Transparente & Financements */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules claires et transparentes
            </h2>
            <p className="text-gray-400 text-sm">
              Profitez d'un accompagnement rigoureux éligible aux dispositifs
              professionnels d'aide à la mise en conformité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Audit Ponctuel
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Audit de Conformité RGPD
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  250 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Analyse complète de vos supports numériques, rapport détaillé
                  des points de non-conformité et recommandations correctives.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Rapport actionnable sous 48h
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Sérénité Continue
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Veille & Suivi
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Conformité Sereine »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  99 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Veille juridique mensuelle, mises à jour régulières de vos
                  documents légaux et 1 heure de support juridique dédiée
                  incluse.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Protection réglementaire permanente
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première heure satisfait ou remboursé — Interventions rigoureuses
            dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
          </div>
        </section>

        {/* Témoignage Client */}
        <div className="mb-16 p-8 bg-gray-900/50 border border-gray-800 rounded-2xl text-center shadow-xl">
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-gray-200 italic text-lg mb-3">
            « J’ai reçu un courrier de mise en conformité — en 48h, tout a été
            mis en ordre avec rigueur. Je me sens enfin pleinement protégé et en
            règle. »
          </blockquote>
          <p className="text-gray-400 text-sm font-medium">
            — Thomas, entrepreneur en rénovation, Soissons (02)
          </p>
        </div>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Ancrage local en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous accompagnons les artisans, commerçants et
            structures locales dans leurs obligations légales. Discrétion,
            rigueur et réactivité garanties dans l'Aisne (02), la Marne (51),
            l'Oise (60) et la Seine-et-Marne (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à sécuriser votre entreprise et vos outils numériques ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez dès maintenant votre audit initial offert de 20 minutes
            pour faire le point sur votre conformité RGPD et IA Act.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un audit de conformité gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default JuridiquePage;
