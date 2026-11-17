import ContactCTAButton from "../../components/ContactCTAButton";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Comptabilité Automatisée & FactureScan IA | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Automatisation de la pré-comptabilité, extraction de factures (FactureScan IA) et gestion de la TVA. Solutions souveraines, conformes RGPD à Soissons, Aisne, Oise, Marne et Seine-et-Marne (77).",
  keywords: [
    "comptabilité automatisée",
    "automatisation comptable",
    "FactureScan IA",
    "extraction factures IA",
    "TVA automatique",
    "gestion financière IA",
    "IA locale RGPD comptabilité",
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
    "consultant IA comptabilité",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Comptabilité Automatisée & FactureScan IA | AlicIA-GPT",
    description:
      "Agents intelligents pour la TVA et l'automatisation comptable. Simplifiez votre gestion financière à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comptabilité Automatisée | AlicIA-GPT",
    description:
      "Agents intelligents pour la TVA et l'automatisation comptable. Simplifiez votre gestion financière à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

export default function ComptabilitePage() {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Automatisation de la Pré-Comptabilité et Extraction de Factures par IA",
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
      "Automatisation comptable sécurisée et souveraine pour artisans, commerçants et PME : extraction de factures (FactureScan IA), suivi de TVA et tableaux de bord financiers.",
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
            Sérénité Financière & Confidentialité Totale
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Comptabilité Automatisée : Libérez-vous de la saisie des factures et
            du suivi de TVA
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Gagnez des heures chaque mois sur votre pré-comptabilité grâce à des
            outils IA souverains qui protègent strictement vos données
            financières (Aisne, Marne, Oise, 77).
          </p>
        </div>

        {/* Visuel d'illustration */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 relative">
          <Image
            src="/images/compta.jpg"
            alt="Automatisation comptable et agents intelligents souverains pour artisans et TPE"
            width={1200}
            height={600}
            className="w-full h-auto object-cover max-h-[450px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Zéro Fuite de Données
            </span>
            <p className="text-white text-sm sm:text-base font-medium italic">
              “La comptabilité ne doit plus être une source de stress —
              automatisez la collecte et le tri pour piloter votre entreprise
              avec clarté.”
            </p>
          </div>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            “Prendre une photo de facture ou de ticket de caisse et voir toutes
            les lignes (HT, TVA, TTC, fournisseur) rangées automatiquement dans
            votre tableau comptable en 5 secondes : voilà ce que nous mettons en
            place.”
          </p>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous passez vos week-ends à rassembler vos justificatifs pour
              votre expert-comptable ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tickets égarés, saisie manuelle fastidieuse dans des tableaux
              Excel, appréhension des échéances de TVA et manque de visibilité
              sur la trésorerie réelle : la gestion administrative et financière
              pèse lourdement sur le quotidien des dirigeants.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fort de{" "}
              <strong className="text-white">
                10 ans d'expérience en tant qu'artisan gérant
              </strong>{" "}
              et{" "}
              <strong className="text-white">
                25 ans en gestion industrielle et ERP
              </strong>
              , je déploie des solutions pragmatiques qui fluidifient le lien
              avec votre cabinet comptable, tout en garantissant que{" "}
              <strong className="text-[#00FFB3]">
                vos chiffres ne quittent jamais votre périmètre de contrôle
              </strong>
              .
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nos outils automatisent :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>{" "}
                <strong className="text-white">FactureScan IA :</strong> Lecture
                et extraction automatique des factures (HT, TVA, TTC).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>{" "}
                Synchronisation directe vers Google Sheets ou exports prêts pour
                votre comptable.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Préparation
                et alertes automatisées pour vos échéances de TVA.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Tableaux de
                bord de trésorerie clairs pour anticiper vos charges.
              </li>
            </ul>
          </div>
        </div>

        {/* Section Souveraineté & RGPD (Sans jargon technique) */}
        <section className="mb-16 p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-[#00FFB3]/30 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#00FFB3]/10 flex items-center justify-center text-[#00FFB3] flex-shrink-0 text-2xl">
              🔒
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Confidentialité, RGPD & IA Locale : Vos chiffres restent chez
                vous
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vos bilans, marges, factures fournisseurs et fichiers clients
                constituent le cœur sensible de votre entreprise. Utiliser des
                outils d'IA grand public sur le cloud expose vos données
                financières à des serveurs externes hors de votre contrôle.
              </p>
              <p className="text-gray-300 leading-relaxed">
                C'est pourquoi AlicIA-GPT privilégie des{" "}
                <strong className="text-white">
                  architectures d'IA locale et souveraine
                </strong>{" "}
                : le traitement intelligent de vos documents s'effectue dans un
                environnement cloisonné, strictement conforme au{" "}
                <strong className="text-[#00FFB3]">
                  RGPD et à l'IA Act européen
                </strong>
                . Vous profitez de la puissance de l'automatisation sans aucun
                compromis sur le secret des affaires.
              </p>
            </div>
          </div>
        </section>

        {/* Services comptables proposés */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos solutions de pré-comptabilité sur-mesure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Numérisation & Tri Automatique
              </h3>
              <p className="text-sm text-gray-400">
                Finis les classeurs papier qui débordent : scannez vos
                justificatifs depuis votre smartphone, l'IA extrait les montants
                et classe le document automatiquement.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Suivi de TVA & Trésorerie
              </h3>
              <p className="text-sm text-gray-400">
                Calcul automatique de la TVA collectée et déductible en temps
                réel, avec alertes avant les échéances pour éviter toute
                mauvaise surprise.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Passerelle Expert-Comptable
              </h3>
              <p className="text-sm text-gray-400">
                Export propre et structuré de vos écritures et pièces
                justificatives pour réduire le temps de saisie de votre cabinet
                et optimiser vos honoraires.
              </p>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire Transparente & Financements */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules claires et rentables dès le premier mois
            </h2>
            <p className="text-gray-400 text-sm">
              Nos prestations d'accompagnement et de prise en main d'outils de
              gestion peuvent bénéficier de financements professionnels
              (**OPCO**, **FAFCEA** pour les artisans).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Mise en Place
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Setup FactureScan & Pré-Compta
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  250 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Configuration complète de l'extraction automatique de vos
                  factures, création de vos tableaux de suivi et formation de 1h
                  incluse.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Opérationnel immédiatement sur mobile et PC
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Sérénité Totale
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Suivi & Maintenance
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Gestion Sereine »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  120 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Accès continu aux outils d'extraction, suivi automatisé de
                  trésorerie, mises à jour réglementaires et 1h d'assistance
                  mensuelle.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Zéro perte de temps administratif
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
            📍 Intervention de proximité en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous accompagnons les artisans, commerçants et
            dirigeants de TPE/PME dans l'optimisation de leur gestion
            financière. Discrétion absolue, rigueur et ancrage local garantis
            dans l'Aisne (02), la Marne (51), l'Oise (60) et la Seine-et-Marne
            (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à automatiser votre pré-comptabilité en toute sécurité ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez votre diagnostic offert de 20 minutes pour évaluer vos
            gains de temps et tester nos solutions sur vos propres factures.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un diagnostic comptable gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
}
