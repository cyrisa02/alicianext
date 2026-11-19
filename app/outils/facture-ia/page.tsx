import type { Metadata } from "next";
import Link from "next/link";
import ContactCTAButton from "../../../components/ContactCTAButton";
import { JsonLd } from "@/components/JsonLd";
import { buildSoftwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default:
      "FactureScan IA : une photo, 5 secondes, comptabilité à jour | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "FactureScan IA extrait automatiquement fournisseur, date, HT, TVA et TTC d'une facture en photo. Synchronisation Google Sheets ou PostgreSQL. Solution souveraine, conforme RGPD et IA Act, pour artisans et TPE.",
  keywords: [
    "FactureScan IA",
    "facture IA artisan",
    "saisie comptable automatique",
    "OCR facture TPE",
    "Google Sheets comptabilité",
    "PostgreSQL PME",
    "Qwen Python",
    "automatisation comptable",
    "extraction facture IA",
    "TVA automatique",
    "RGPD comptabilité",
    "IA Act",
    "AlicIA-GPT",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title:
      "FactureScan IA : une photo, 5 secondes, comptabilité à jour | AlicIA-GPT",
    description:
      "Prenez une facture en photo, l'IA extrait tout. Synchronisation Google Sheets ou PostgreSQL. Solution souveraine pour artisans et TPE.",
    type: "article",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FactureScan IA : une photo, 5 secondes, comptabilité à jour | AlicIA-GPT",
    description:
      "Prenez une facture en photo, l'IA extrait tout. Synchronisation Google Sheets ou PostgreSQL.",
  },
};

const appData = {
  name: "FactureScan IA",
  description:
    "Outil d'extraction automatique de factures par IA : à partir d'une simple photo, FactureScan IA extrait fournisseur, date, HT, TVA et TTC, puis synchronise vers Google Sheets ou PostgreSQL. Solution souveraine, conforme RGPD et IA Act.",
  applicationCategory: "FinanceApplication",
  url: "https://www.alicia-gpt.com/outils/facture-ia",
  offers: {
    price: "19",
    priceCurrency: "EUR",
    description: "19 € HT/mois, sans engagement. 14 jours d'essai gratuit.",
    availability: "https://schema.org/InStock",
    eligibleRegion: "FR",
  },
};

export default function FactureScanIAPage() {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen pt-24 pb-16">
      <JsonLd data={buildSoftwareApplicationSchema(appData)} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Fil d'Ariane */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#00FFB3] transition-colors">
                Accueil
              </Link>
            </li>
            <li>›</li>
            <li>
              <Link
                href="/outils"
                className="hover:text-[#00FFB3] transition-colors"
              >
                Outils
              </Link>
            </li>
            <li>›</li>
            <li className="text-gray-300">FactureScan IA</li>
          </ol>
        </nav>
        {/* En-tête de page */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#00FFB3] font-semibold text-sm uppercase tracking-wider mb-3">
            🛠️ Outil IA Souverain
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            FactureScan IA : une photo, 5 secondes, comptabilité à jour
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Fini la ressaisie manuelle de vos factures. Prenez une photo, l'IA
            extrait fournisseur, date, HT, TVA et TTC, et synchronise tout vers
            votre Google Sheets ou votre base PostgreSQL.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Publié le 20 octobre 2026 • Par Cyril Gourdon
          </p>
        </div>
        {/* Image hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative">
          <img
            src="/images/compta.jpg"
            alt="FactureScan IA - Extraction automatique de factures par intelligence artificielle"
            className="w-full h-auto object-cover max-h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#00FFB3] text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
              SaaS Souverain • RGPD & IA Act
            </span>
          </div>
        </div>
        {/* Accroche narrative */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00FFB3] to-[#6366F1]"></div>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Combien de temps perdez-vous chaque semaine à ressaisir vos factures
            papier dans Excel ou votre logiciel comptable ?
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Entre les erreurs de frappe, les tickets de caisse froissés et la
            TVA qui ne tombe pas juste, c'est une charge mentale inutile pour un
            patron de TPE ou un artisan.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed font-semibold">
            J'ai développé FactureScan IA pour régler ça.
          </p>
        </div>
        {/* Section Le résultat */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Le résultat</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Vous prenez la facture en photo. L'outil fait le reste.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Plus de double saisie. Plus de pile de papiers qui attend le
            week-end.
          </p>
        </section>
        {/* Section Ce que fait l'outil */}
        <section className="mb-12 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ce que fait l'outil
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Trois choses, pensées pour le terrain.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00FFB3]/20 flex items-center justify-center text-[#00FFB3] font-bold flex-shrink-0">
                01
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Zéro friction
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Vous ouvrez l'app sur mobile, vous photographiez la facture,
                  c'est tout.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00FFB3]/20 flex items-center justify-center text-[#00FFB3] font-bold flex-shrink-0">
                02
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Précision
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  L'IA extrait automatiquement le fournisseur, la date, le HT,
                  la TVA et le TTC. Un chiffre est faux ? Vous le corrigez en un
                  clic.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00FFB3]/20 flex items-center justify-center text-[#00FFB3] font-bold flex-shrink-0">
                03
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Synchronisation automatique
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Les données partent instantanément vers votre Google Sheets ou
                  votre base de données sécurisée.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section Comment ça marche */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Comment ça marche
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Le principe est simple :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Vous prenez la photo depuis votre téléphone",
              "L'IA lit le document et en extrait les données structurées",
              "Vous vérifiez, et vous corrigez si besoin",
              "Les données sont envoyées vers votre tableau ou votre base",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl"
              >
                <span className="text-[#00FFB3] font-bold text-lg flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            <strong className="text-white">La technologie.</strong> Le moteur
            repose sur Python et sur le modèle open-source{" "}
            <strong className="text-[#00FFB3]">Qwen3-8B</strong>, utilisé pour
            l'extraction de données structurées à partir d'images de documents.
          </p>
        </section>
        {/* Section Pour les plus exigeants */}
        <section className="mb-12 p-8 bg-gradient-to-b from-[#6366F1]/5 to-gray-900/40 border border-[#6366F1]/30 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Pour les plus exigeants
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Au-delà de l'export CSV ou Google Sheets, FactureScan IA peut se
            connecter directement à une base{" "}
            <strong className="text-white">PostgreSQL</strong> avec
            authentification sécurisée.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            C'est utile si vous voulez :
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "suivre vos achats",
              "suivre vos dépenses par projet",
              "intégrer ces données dans votre ERP existant via API",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#6366F1] font-bold text-lg">✓</span>
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Section Les limites (honnêteté) */}
        <section className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Les limites</h2>
          <p className="text-gray-300 leading-relaxed mb-4 italic">
            Je ne vais pas vous vendre du rêve.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-lg flex-shrink-0">
                ⚠️
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">
                Une photo floue ou un ticket très abîmé peut donner une lecture
                erronée. C'est pour ça que la correction en un clic existe.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-lg flex-shrink-0">
                ⚠️
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">
                L'outil extrait des données. Il ne remplace ni votre comptable,
                ni votre jugement sur ce qui est déductible.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00FFB3] font-bold text-lg flex-shrink-0">
                ✓
              </span>
              <p className="text-gray-300 text-sm leading-relaxed font-semibold">
                L'humain valide. L'IA exécute.
              </p>
            </div>
          </div>
        </section>
        {/* Section Ce que je retiens */}
        <section className="mb-12 p-8 bg-gradient-to-b from-[#00FFB3]/5 to-gray-900/40 border border-[#00FFB3]/30 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ce que je retiens
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            L'IA n'est pas là pour remplacer votre expertise métier. Elle est là
            pour vous libérer du temps administratif, afin que vous vous
            concentriez sur ce qui compte vraiment :{" "}
            <strong className="text-[#00FFB3]">
              votre savoir-faire et vos clients
            </strong>
            .
          </p>
        </section>
        {/* Conclusion */}
        <section className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
          <p className="text-gray-300 leading-relaxed">
            Pas besoin d'être une grande entreprise pour automatiser sa saisie
            comptable. Il suffit de regarder ce qu'on ressaisit à la main chaque
            semaine.
          </p>
        </section>
        {/* Lien vers page comptabilité */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            💡 Besoin d'une solution comptable plus complète ?
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            FactureScan IA s'intègre dans une offre plus large d'automatisation
            comptable : suivi TVA, tableaux de trésorerie, passerelle
            expert-comptable.
          </p>
          <Link
            href="/comptabilite"
            className="inline-flex items-center gap-2 text-[#00FFB3] font-semibold hover:text-white transition-colors"
          >
            Découvrir notre offre Comptabilité Automatisée
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
          </Link>
        </section>
        {/* Appel à l'action final */}
        <div className="text-center bg-gradient-to-r from-[#00FFB3]/10 via-gray-900 to-[#6366F1]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Envie de tester ou d'intégrer FactureScan IA dans votre entreprise ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez un audit de 30 minutes pour identifier VOS tâches à
            automatiser, ou contactez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-shrink-0">
              <ContactCTAButton label="Réserver un audit de 30 min" />
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#00FFB3] text-[#00FFB3] font-semibold rounded-lg hover:bg-[#00FFB3]/10 transition-colors text-center h-full"
              >
                Aller à la fiche de contact
              </Link>
            </div>
          </div>
        </div>
        {/* Meta article */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p className="mb-2">
            Article publié le 20/10/2026 • Par Cyril Gourdon
          </p>
          <p className="italic">
            Mots-clés : facture IA artisan, saisie comptable automatique, OCR
            facture TPE, Google Sheets comptabilité, PostgreSQL PME, Qwen Python
          </p>
        </div>
      </main>
    </div>
  );
}
