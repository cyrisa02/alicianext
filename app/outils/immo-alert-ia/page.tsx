import type { Metadata } from "next";
import Link from "next/link";
import ContactCTAButton from "../../../components/ContactCTAButton";
import { JsonLd } from "@/components/JsonLd";
import { buildSoftwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default:
      "ImmoAlert IA : détectez les opportunités immobilières avant tout le monde | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "ImmoAlert IA surveille SeLoger et Leboncoin, compare chaque bien aux ventes réelles (DVF) et ne vous envoie que les vraies bonnes affaires. Pour investisseurs, agents et particuliers.",
  keywords: [
    "ImmoAlert IA",
    "alerte immobilière IA",
    "détection opportunité immobilière",
    "SeLoger IA",
    "Leboncoin IA",
    "analyse bien immobilier IA",
    "comparaison ventes réelles",
    "DVF immobilier",
    "investissement locatif IA",
    "chasseur immobilier IA",
    "IA souveraine immobilier",
    "RGPD",
    "AlicIA-GPT",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title:
      "ImmoAlert IA : détectez les opportunités immobilières avant tout le monde | AlicIA-GPT",
    description:
      "ImmoAlert IA surveille SeLoger et Leboncoin, compare aux ventes réelles et ne vous envoie que les vraies bonnes affaires.",
    type: "article",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ImmoAlert IA : détectez les opportunités immobilières avant tout le monde | AlicIA-GPT",
    description:
      "ImmoAlert IA surveille SeLoger et Leboncoin, compare aux ventes réelles et ne vous envoie que les vraies bonnes affaires.",
  },
};

const appData = {
  name: "ImmoAlert IA",
  description:
    "Outil de veille immobilière IA : surveille SeLoger, Leboncoin et autres portails, compare chaque bien aux ventes réelles du secteur (DVF) et envoie uniquement les opportunités pertinentes. Pour investisseurs, agents et particuliers.",
  applicationCategory: "RealEstateApplication",
  url: "https://www.alicia-gpt.com/outils/immo-alert-ia",
};

export default function ImmoAlertIAPage() {
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
            <li className="text-gray-300">ImmoAlert IA</li>
          </ol>
        </nav>
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#EC4899] font-semibold text-sm uppercase tracking-wider mb-3">
            🏠 Veille Immobilière IA
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            ImmoAlert IA : détectez les opportunités immobilières avant tout le
            monde
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Un outil qui surveille vos alertes SeLoger et Leboncoin, compare
            chaque bien aux ventes réelles du secteur, et ne vous envoie que les
            vraies bonnes affaires. Fini le tri manuel de 200 annonces.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Publié le 3 novembre 2026 • Par Cyril Gourdon
          </p>
        </div>
        {/* Image hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative">
          <img
            src="/images/immosniper.jpg"
            alt="ImmoAlert IA - Détection d'opportunités immobilières par intelligence artificielle"
            className="w-full h-auto object-cover max-h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#EC4899] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Veille IA Automatisée
            </span>
          </div>
        </div>
        {/* Accroche narrative */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#EC4899] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Vous êtes investisseur, agent immobilier ou particulier en recherche
            active. Vous avez configuré vos alertes SeLoger, Leboncoin,
            Bien'ici… Et chaque matin, c'est la même chose :{" "}
            <strong className="text-white">200 notifications</strong>, dont 195
            ne correspondent pas à ce que vous cherchez vraiment.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Les bonnes affaires partent en 2 heures. Vous, vous les voyez 3
            jours plus tard, noyées dans le flux.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed font-semibold">
            J'ai construit ImmoAlert IA pour inverser la donne.
          </p>
        </div>
        {/* Section Le résultat */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Le résultat ?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Au lieu de recevoir 200 alertes par jour, vous en recevez{" "}
            <strong className="text-[#EC4899]">2 ou 3</strong>. Mais ce sont les
            bonnes. Celles qui correspondent à vos critères, ET qui sont
            réellement sous-évaluées par rapport au marché.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Chaque alerte contient : le bien, le prix demandé, le prix estimé
            par l'IA, la comparaison avec les ventes réelles du quartier, et un
            score d'opportunité sur 100.
          </p>
        </section>
        {/* Section Ce que fait l'outil */}
        <section className="mb-12 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ce que fait ImmoAlert IA
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#EC4899]/20 flex items-center justify-center text-[#EC4899] font-bold flex-shrink-0">
                01
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Surveillance multi-portails
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  SeLoger, Leboncoin, Bien'ici, PAP, Logic-Immo… ImmoAlert
                  scrape les nouvelles annonces en continu, 24h/24.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#EC4899]/20 flex items-center justify-center text-[#EC4899] font-bold flex-shrink-0">
                02
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Comparaison aux ventes réelles (DVF)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Chaque bien est comparé aux ventes réelles du secteur (base
                  DVF du Ministère de l'Économie). L'IA sait si le prix est
                  cohérent ou sous-évalué.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#EC4899]/20 flex items-center justify-center text-[#EC4899] font-bold flex-shrink-0">
                03
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Score d'opportunité
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Un score sur 100 synthétise : écart de prix, localisation,
                  surface, état estimé, potentiel locatif. Vous ne voyez que les
                  scores &gt; 70.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section Pour qui */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Pour qui ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                titre: "Investisseurs",
                desc: "Détectez les biens sous-évalués avant la concurrence. Rentabilité locative calculée automatiquement.",
              },
              {
                titre: "Agents immobiliers",
                desc: "Trouvez des mandats avant qu'ils ne soient publiés. Offrez un service premium à vos clients acheteurs.",
              },
              {
                titre: "Particuliers",
                desc: "Achetez votre résidence principale au bon prix, sans passer 4h par jour sur les portails.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-gray-900/50 border border-gray-800 rounded-xl"
              >
                <h3 className="text-white font-semibold mb-2">{item.titre}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Section Technologie */}
        <section className="mb-12 p-8 bg-gradient-to-b from-[#EC4899]/5 to-gray-900/40 border border-[#EC4899]/30 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            La stack technique
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: "Scraping Python",
                desc: "Collecte multi-portails avec rotation d'IP et respect des robots.txt",
              },
              {
                titre: "Base DVF",
                desc: "Données officielles des ventes réelles (Ministère de l'Économie)",
              },
              {
                titre: "LLM local",
                desc: "Analyse et scoring par modèle open-source (Ollama / Mistral)",
              },
              {
                titre: "Alertes temps réel",
                desc: "Email, notification push ou webhook vers votre CRM",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl"
              >
                <span className="text-[#EC4899] font-bold text-lg flex-shrink-0">
                  ✓
                </span>
                <div>
                  <strong className="text-white text-sm">{item.titre}</strong>
                  <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section Les limites */}
        <section className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Les limites</h2>
          <p className="text-gray-300 leading-relaxed mb-4 italic">
            Je ne vais pas vous vendre du rêve :
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-lg">⚠️</span>
              <p className="text-gray-300 text-sm">
                ImmoAlert IA ne remplace pas une visite. L'IA évalue sur papier,
                pas sur l'état réel du bien.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-lg">⚠️</span>
              <p className="text-gray-300 text-sm">
                Certains portails limitent le scraping. Nous respectons les CGU
                et adaptons nos méthodes en continu.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#EC4899] font-bold text-lg">✓</span>
              <p className="text-gray-300 text-sm font-semibold">
                Mais pour le tri et l'analyse, ImmoAlert IA vous fait gagner des
                dizaines d'heures par mois.
              </p>
            </div>
          </div>
        </section>
        {/* CTA final */}
        <div className="text-center bg-gradient-to-r from-[#EC4899]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à arrêter de rater les bonnes affaires ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez un échange de 30 minutes pour voir ImmoAlert IA en action
            sur votre zone de recherche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-shrink-0">
              <ContactCTAButton label="Réserver un échange de 30 min" />
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#EC4899] text-[#EC4899] font-semibold rounded-lg hover:bg-[#EC4899]/10 transition-colors text-center h-full"
              >
                Demander une démo d'ImmoAlert IA
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
