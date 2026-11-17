import type { Metadata } from "next";
import Link from "next/link";
import ContactCTAButton from "../../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default:
      "MemoBot : l'assistant IA qui répond à la place du dirigeant | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "MemoBot transforme vos documents internes en assistant IA sécurisé. Réponses sourcées, zéro hallucination, données protégées. Pour TPE, PME et artisans à Soissons, Aisne, Oise, Marne et Seine-et-Marne.",
  keywords: [
    "MemoBot IA",
    "assistant IA entreprise",
    "base de connaissances IA",
    "RAG entreprise",
    "IA interne PME",
    "assistant IA dirigeant",
    "réponses sourcées IA",
    "zéro hallucination IA",
    "IA souveraine entreprise",
    "RGPD IA interne",
    "IA Act",
    "AlicIA-GPT",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title:
      "MemoBot : l'assistant IA qui répond à la place du dirigeant | AlicIA-GPT",
    description:
      "MemoBot ingère vos documents internes et devient un assistant IA sécurisé. Réponses sourcées, zéro hallucination, données protégées.",
    type: "article",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MemoBot : l'assistant IA qui répond à la place du dirigeant | AlicIA-GPT",
    description:
      "MemoBot ingère vos documents internes et devient un assistant IA sécurisé. Réponses sourcées, zéro hallucination.",
  },
};

const MemoBotPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MemoBot",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web (tous navigateurs)",
    description:
      "Assistant IA interne qui ingère vos documents (procédures, fiches techniques, CGV, historique) et répond aux questions de vos équipes et clients avec des réponses sourcées, sans hallucination.",
    url: "https://alicia-gpt.com/outils/memobot",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: "AlicIA-GPT",
      founder: "Cyril Gourdon",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Soissons",
        postalCode: "02200",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
    },
    featureList: [
      "Ingestion de documents internes (PDF, DOCX, TXT, Markdown)",
      "Réponses sourcées avec citation du document d'origine",
      "Zéro hallucination : l'IA ne répond que sur ce qu'elle connaît",
      "Architecture RAG (Retrieval-Augmented Generation)",
      "Hébergement local, conforme RGPD et IA Act",
      "Interface web et API d'intégration",
    ],
  };

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            <li className="text-gray-300">MemoBot</li>
          </ol>
        </nav>

        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-3">
            🤖 Assistant IA Interne
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            MemoBot : l'assistant IA qui répond à la place du dirigeant
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            MemoBot transforme vos documents internes en un assistant IA
            sécurisé. Vos équipes posent une question, MemoBot répond en 5
            secondes avec la source exacte. Plus besoin de vous déranger pour
            chaque info.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Publié le 13 novembre 2026 • Par Cyril Gourdon
          </p>
        </div>

        {/* Image hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative">
          <img
            src="/images/memobot.jpg"
            alt="MemoBot - Assistant IA interne sécurisé pour entreprise"
            className="w-full h-auto object-cover max-h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#F59E0B] text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
              SaaS Souverain • RGPD & IA Act
            </span>
          </div>
        </div>

        {/* Accroche narrative */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F59E0B] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Vous êtes dirigeant, artisan ou responsable de PME. Chaque jour, vos
            équipes vous posent les mêmes questions :{" "}
            <em>
              « C'est quoi la procédure pour un retour client ? », « Quels sont
              nos tarifs pour tel produit ? », « Comment on gère tel cas
              particulier ? »
            </em>
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Vous répondez. Encore. Et encore. Pendant ce temps, votre production
            stagne, vos devis attendent, et votre énergie s'épuise sur de la
            transmission d'info au lieu de la stratégie.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed font-semibold">
            J'ai créé MemoBot pour que vos documents répondent à votre place.
          </p>
        </div>

        {/* Section Le résultat */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Le résultat ?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Un collaborateur tape une question dans l'interface de MemoBot. En 5
            secondes, il reçoit une réponse claire, avec le lien vers le
            document source. Pas d'hallucination, pas d'invention : MemoBot ne
            répond que sur ce qu'il connaît.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Si la question sort du périmètre de vos documents, MemoBot le dit
            clairement :{" "}
            <em className="text-[#F59E0B]">
              « Je n'ai pas cette information dans vos documents. »
            </em>
          </p>
        </section>

        {/* Section Ce que fait MemoBot */}
        <section className="mb-12 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ce que fait MemoBot
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-bold flex-shrink-0">
                01
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Il ingère vos documents
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  PDF, DOCX, TXT, Markdown, pages web internes… MemoBot lit tout
                  et construit une base de connaissances structurée.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-bold flex-shrink-0">
                02
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Il répond avec sources
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Chaque réponse cite le document d'origine. Votre équipe peut
                  vérifier en un clic. Zéro boîte noire.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-bold flex-shrink-0">
                03
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Il refuse de répondre hors périmètre
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Pas d'hallucination : si l'info n'est pas dans vos docs,
                  MemoBot le dit. C'est la différence avec ChatGPT.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Cas d'usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Cas d'usage concrets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titre: "Onboarding collaborateur",
                desc: "Le nouveau pose ses questions à MemoBot au lieu de bloquer 3 jours un senior.",
              },
              {
                titre: "Support client niveau 1",
                desc: "MemoBot répond aux questions fréquentes, votre équipe se concentre sur les cas complexes.",
              },
              {
                titre: "Procédures internes",
                desc: "« Comment on déclare un incident sécurité ? » → MemoBot donne la procédure exacte.",
              },
              {
                titre: "Fiches techniques",
                desc: "Vos techniciens interrogent MemoBot sur les specs produits au lieu de fouiller 15 PDF.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl"
              >
                <span className="text-[#F59E0B] font-bold text-lg flex-shrink-0">
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

        {/* Section Technologie */}
        <section className="mb-12 p-8 bg-gradient-to-b from-[#F59E0B]/5 to-gray-900/40 border border-[#F59E0B]/30 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            La technologie derrière MemoBot
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MemoBot repose sur une architecture{" "}
            <strong className="text-white">
              RAG (Retrieval-Augmented Generation)
            </strong>{" "}
            :
          </p>
          <ul className="space-y-3">
            {[
              "Vos documents sont découpés en chunks et indexés dans une base vectorielle locale",
              "À chaque question, MemoBot recherche les chunks les plus pertinents",
              "Un LLM local (Ollama / Mistral) rédige la réponse à partir de ces chunks uniquement",
              "Aucune donnée ne sort de votre infrastructure",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#F59E0B] font-bold text-lg">•</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section Les limites */}
        <section className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Les limites</h2>
          <p className="text-gray-300 leading-relaxed mb-4 italic">
            Je reste honnête sur ce que MemoBot ne fait pas :
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-lg">⚠️</span>
              <p className="text-gray-300 text-sm">
                MemoBot ne remplace pas un humain pour les questions sensibles
                (licenciement, conflit client, décision stratégique).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-lg">⚠️</span>
              <p className="text-gray-300 text-sm">
                La qualité des réponses dépend de la qualité de vos documents.
                Doc flou = réponse floue.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#F59E0B] font-bold text-lg">✓</span>
              <p className="text-gray-300 text-sm font-semibold">
                Mais pour 80% des questions récurrentes, MemoBot libère un temps
                considérable.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <div className="text-center bg-gradient-to-r from-[#F59E0B]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Vos documents méritent de répondre tout seuls
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez un échange de 30 minutes pour voir MemoBot en action sur
            vos propres documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-shrink-0">
              <ContactCTAButton label="Réserver un échange de 30 min" />
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#F59E0B] text-[#F59E0B] font-semibold rounded-lg hover:bg-[#F59E0B]/10 transition-colors text-center h-full"
              >
                Demander une démo de MemoBot
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MemoBotPage;
