import type { Metadata } from "next";
import Link from "next/link";
import ContactCTAButton from "../../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "DevisFlow IA : le devis artisan en 10 secondes | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "DevisFlow IA génère un devis complet (diagnostic, prix, délais, garanties) en 10 secondes à partir d'une simple photo. Solution souveraine, conforme RGPD et IA Act, pour plombiers, électriciens, maçons, peintres.",
  keywords: [
    "DevisFlow IA",
    "devis artisan IA",
    "générateur de devis IA",
    "devis automatique",
    "devis plomberie IA",
    "devis électricité IA",
    "devis maçonnerie IA",
    "devis peinture IA",
    "automatisation devis artisan",
    "logiciel devis artisan",
    "SaaS devis souverain",
    "RGPD devis",
    "IA Act",
    "AlicIA-GPT",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "DevisFlow IA : le devis artisan en 10 secondes | AlicIA-GPT",
    description:
      "Votre client prend une photo, tape deux lignes, reçoit un devis complet en 10 secondes. Solution souveraine pour artisans.",
    type: "article",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevisFlow IA : le devis artisan en 10 secondes | AlicIA-GPT",
    description:
      "Votre client prend une photo, tape deux lignes, reçoit un devis complet en 10 secondes.",
  },
};

const DevisFlowIAPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DevisFlow IA",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web (tous navigateurs)",
    description:
      "Générateur de devis IA pour artisans : à partir d'une photo et d'une courte description, DevisFlow IA produit un devis complet (diagnostic, solutions, prix, délais, garanties) en moins de 10 secondes.",
    url: "https://alicia-gpt.com/outils/devisflow-ia",
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
      "Analyse d'image par IA spécialisée",
      "Rédaction automatique de devis commercial",
      "Orchestration Python multi-IA",
      "SaaS accessible sans installation",
      "Conforme RGPD et IA Act",
      "Multi-métiers : plomberie, électricité, maçonnerie, peinture",
    ],
  };

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen pt-24 pb-16">
      {/* Injection du schéma JSON-LD */}
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
            <li className="text-gray-300">DevisFlow IA</li>
          </ol>
        </nav>

        {/* En-tête de page */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#6366F1] font-semibold text-sm uppercase tracking-wider mb-3">
            🛠️ Outil IA Souverain
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            DevisFlow IA : le devis artisan en 10 secondes
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Votre client prend une photo de son problème, tape deux lignes, et
            reçoit un devis complet en moins de 10 secondes. Vous recevez
            l'email en même temps : il ne vous reste plus qu'à rappeler pour
            conclure.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Publié le 15 octobre 2026 • Par Cyril Gourdon
          </p>
        </div>

        {/* Image hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative">
          <img
            src="/images/devis2.jpg"
            alt="DevisFlow IA - Génération automatique de devis artisan par intelligence artificielle"
            className="w-full h-auto object-cover max-h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              SaaS Souverain • RGPD & IA Act
            </span>
          </div>
        </div>

        {/* Accroche narrative */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-lg leading-relaxed">
            Vous connaissez la scène. Un client vous envoie la photo d'une
            fuite, d'une fissure, d'un tableau électrique à refaire. Il veut un
            devis. Vous êtes sur un chantier. Vous répondez :{" "}
            <em>« Je m'en occupe ce soir. »</em> Le soir arrive, vous êtes
            crevé, et le devis part le lendemain. Trop tard : il a déjà appelé
            un autre.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mt-4 font-semibold">
            J'ai créé DevisFlow IA pour régler ce problème.
          </p>
        </div>

        {/* Section Le résultat */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Le résultat ?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Le client ouvre l'outil sur son téléphone ou son ordinateur. Il
            prend une photo de son problème (la fuite sous l'évier, le mur
            fissuré, la prise qui chauffe...) et tape deux lignes pour décrire
            ce qu'il voit.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Il reçoit un devis complet en moins de 10 secondes :
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "le diagnostic",
              "les solutions proposées",
              "les prix en euros",
              "les délais",
              "les garanties",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#00FFB3] font-bold text-lg">✓</span>
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Le tout propre, structuré, professionnel. Vous, vous recevez l'email
            du client en même temps. Il ne vous reste plus qu'à rappeler pour
            conclure.
          </p>
        </section>

        {/* Section Ce que fait l'outil */}
        <section className="mb-12 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ce que fait l'outil
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            DevisFlow IA fait appel à{" "}
            <strong className="text-white">
              deux intelligences artificielles spécialisées
            </strong>
            , orchestrées par un programme en Python.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold flex-shrink-0">
                01
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  La première IA voit la photo
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Elle analyse l'image comme le ferait un artisan expérimenté :
                  elle identifie le type de fuite, le matériau concerné, la
                  gravité du problème. Elle ne se contente pas de voir, elle{" "}
                  <strong className="text-white">comprend</strong>.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold flex-shrink-0">
                02
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  La deuxième IA rédige le devis
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Elle prend ce que la première a compris et écrit un devis
                  commercial complet.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold flex-shrink-0">
                03
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Python fait le chef d'orchestre
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Il fait circuler l'information d'une étape à l'autre.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-200 leading-relaxed mt-6 italic">
            Résultat : votre client a l'impression de parler à un commercial
            ultra réactif. En réalité, ce sont des assistants virtuels qui
            travaillent pour vous, 24h/24.
          </p>
        </section>

        {/* Section Comment ça marche pour vous */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Comment ça marche pour vous
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            DevisFlow IA est un <strong className="text-white">SaaS</strong>,
            c'est-à-dire un logiciel en ligne. Concrètement :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Rien à installer sur votre ordinateur ou votre téléphone",
              "Aucun serveur à gérer, aucune mise à jour à faire",
              "Accessible partout : au bureau, sur un chantier, en déplacement",
              "Abonnement mensuel : pas de gros investissement de départ, vous payez uniquement quand vous l'utilisez",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl"
              >
                <span className="text-[#00FFB3] font-bold text-lg flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section Bénéfices */}
        <section className="mb-12 p-8 bg-gradient-to-b from-[#00FFB3]/5 to-gray-900/40 border border-[#00FFB3]/30 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Les bénéfices concrets pour votre activité
          </h2>
          <div className="space-y-4">
            {[
              {
                titre: "Zéro prospect perdu",
                desc: "Même les demandes du dimanche soir sont traitées.",
              },
              {
                titre: "Devis toujours propres et complets",
                desc: "Plus de devis bâclés à 23h.",
              },
              {
                titre: "30 à 60 minutes gagnées par jour",
                desc: "Le temps de rédiger, c'est du temps de chantier en plus.",
              },
              {
                titre: "Votre image de marque monte d'un cran",
                desc: "Un devis reçu en 10 secondes, ça marque les esprits.",
              },
              {
                titre: "Multi-métiers",
                desc: "Plomberie, électricité, maçonnerie, peinture, rénovation. Un seul outil pour tout (et je peux le personnaliser pour votre métier).",
              },
            ].map((benefice, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#00FFB3] font-bold text-lg flex-shrink-0">
                  ✅
                </span>
                <div>
                  <strong className="text-white">{benefice.titre} :</strong>{" "}
                  <span className="text-gray-300 text-sm">{benefice.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Un artisan n'a pas à choisir entre finir son chantier et répondre à
            ses prospects. L'IA prend en charge la rédaction, vous gardez la
            relation et la décision : c'est vous qui rappelez le client et qui
            concluez.
          </p>
          <p className="text-gray-200 text-lg font-semibold italic">
            Et vous, combien de devis par semaine laissez-vous passer faute de
            temps ?
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Dites-le-moi en commentaire, ça m'intéresse.
          </p>
        </section>

        {/* Appel à l'action final */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Vous voulez voir DevisFlow IA en action ou l'adapter à votre métier
            ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez un échange de 30 minutes pour identifier VOS tâches à
            automatiser, ou demandez une démo en direct.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-shrink-0">
              <ContactCTAButton label="Réserver un échange de 30 min" />
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#00FFB3] text-[#00FFB3] font-semibold rounded-lg hover:bg-[#00FFB3]/10 transition-colors text-center h-full"
              >
                Demander une démo de DevisFlow IA
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevisFlowIAPage;
