import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Création de Sites Web & SEO Local pour Artisans/PME | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Création de sites vitrines professionnels, e-commerce et référencement SEO local. Solutions performantes et souveraines à Soissons, dans l'Aisne, l'Oise, la Marne et la Seine-et-Marne (77).",
  keywords: [
    "création de site web",
    "site vitrine professionnel",
    "e-commerce local",
    "boutique en ligne",
    "SEO local",
    "référencement local",
    "Google My Business",
    "optimisation SEO",
    "site mobile-friendly",
    "création site Soissons",
    "site internet artisan",
    "site internet TPE",
    "site internet PME",
    "hébergement site web",
    "maintenance site web",
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
    "agence web locale",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Création de Sites & SEO Local | AlicIA-GPT",
    description:
      "Création de sites vitrines, e-commerce et référencement local. Boostez votre visibilité à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de Sites & SEO Local | AlicIA-GPT",
    description:
      "Création de sites vitrines, e-commerce et référencement local. Boostez votre visibilité à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const SitesSeoLocalPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Création de Sites Web et Référencement SEO Local",
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
      "Création de sites internet rapides, optimisés SEO local et Google My Business pour artisans, commerçants et PME.",
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
            Visibilité Numérique & Acquisition
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Création de Sites Web & SEO Local : Dominez votre secteur
            géographique
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Attirez de nouveaux clients locaux grâce à un site internet moderne,
            ultra-rapide et parfaitement référencé sur Google à Soissons, dans
            l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            “Un site bien référencé, c’est un commercial disponible 24h/24 qui
            trouve vos futurs clients avant même qu'ils ne contactent vos
            concurrents.”
          </p>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Votre entreprise est invisible sur Google ou votre site actuel ne
              génère aucun appel ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              À l'ère du numérique, la grande majorité de vos prospects
              recherchent des artisans ou des prestataires directement sur leur
              smartphone. Sans un site web optimisé et une fiche Google Business
              irréprochable, vous passez à côté d'un flux constant de clients
              locaux.
            </p>
            <p className="text-gray-300 leading-relaxed">
              En tant que{" "}
              <strong className="text-white">
                développeur et consultant digital ancré à Soissons
              </strong>
              , je conçois des solutions sur-mesure, légères et performantes,
              sans les lourdeurs des agences généralistes, et en garantissant
              une{" "}
              <strong className="text-[#00FFB3]">
                souveraineté totale de vos données
              </strong>
              .
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nous mettons en place :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Site vitrine
                pro, design moderne et 100% mobile-friendly.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Optimisation
                SEO local (mots-clés géolocalisés + Google Maps).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span>{" "}
                Configuration complète et optimisation de votre fiche Google
                Business.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Boutons
                d'appel à l'action et formulaires de contact simplifiés.
              </li>
            </ul>
          </div>
        </div>

        {/* Services proposés */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos solutions pour votre visibilité en ligne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Site Vitrine Professionnel
              </h3>
              <p className="text-sm text-gray-400">
                Présentation claire de vos prestations, design percutant,
                vitesse de chargement instantanée et intégration de vos avis
                clients.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Boutique E-Commerce Locale
              </h3>
              <p className="text-sm text-gray-400">
                Vente en ligne simplifiée avec paiements sécurisés (Stripe,
                PayPal) et options de click & collect ou de livraison locale.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                SEO Local & Google Maps
              </h3>
              <p className="text-sm text-gray-400">
                Positionnement stratégique sur les recherches de votre zone (ex
                : "artisan à Soissons", "service dans l'Aisne") pour capter
                l'intention d'achat.
              </p>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire Transparente & Financements */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules transparentes et sans surprise
            </h2>
            <p className="text-gray-400 text-sm">
              Profitez d'un investissement maîtrisé, éligible sous conditions
              aux aides à la digitalisation (**France Num** ou accompagnements
              régionaux).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Offre Starter
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Site Vitrine Clé en Main
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  450 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Nom de domaine, hébergement 1 an, design sur-mesure,
                  intégration SEO local, formulaire de contact et formation de
                  prise en main.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Tout compris, sans abonnement caché
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus populaire
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Visibilité Continue
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Visibilité Locale »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  150 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Maintenance technique, optimisation SEO continue, gestion
                  active de votre fiche Google Business et 1 heure de support
                  dédiée par mois.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Croissance régulière de votre trafic
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première semaine satisfait ou remboursé — Accompagnement de
            proximité dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
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
            « En 3 semaines, j’ai eu mon site, ma fiche Google et mes premiers
            clients grâce au SEO local. Un vrai changement pour mon activité ! »
          </blockquote>
          <p className="text-gray-400 text-sm font-medium">
            — Sophie, coiffeuse indépendante, Soissons (02)
          </p>
        </div>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Ancrage local en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous travaillons en étroite collaboration avec les
            artisans, commerçants et structures locales. Réactivité, écoute et
            expertise de terrain garanties dans l'Aisne (02), la Marne (51),
            l'Oise (60) et la Seine-et-Marne (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à booster votre visibilité locale et attirer de nouveaux
            clients ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Réservez dès maintenant votre audit initial de 20 minutes offert
            pour analyser votre présence en ligne et concevoir votre futur site
            web.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un audit web gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SitesSeoLocalPage;
