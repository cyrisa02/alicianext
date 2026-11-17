// src/pages/SoutienSeniorsPage.tsx
import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Soutien Numérique Seniors & Débutants | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Assistance informatique, antivirus et dépannage patient et pédagogique pour seniors et débutants. Retrouvez votre autonomie numérique à Soissons, dans l'Aisne.",
  keywords: [
    "assistance informatique senior",
    "dépannage informatique à domicile",
    "formation informatique débutant",
    "aide ordinateur personnes âgées",
    "cours informatique particuliers",
    "installation antivirus",
    "sécurité informatique senior",
    "support numérique bienveillant",
    "Soissons",
    "Aisne",
    "aide informatique locale",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Soutien Numérique Seniors & Débutants | AlicIA-GPT",
    description:
      "Assistance informatique et dépannage patient pour seniors et débutants. Retrouvez votre autonomie numérique à Soissons, Aisne.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soutien Numérique Seniors & Débutants | AlicIA-GPT",
    description:
      "Assistance informatique et dépannage patient pour seniors et débutants. Retrouvez votre autonomie numérique à Soissons, Aisne.",
  },
};

const SoutienSeniorsPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Assistance et Soutien Numérique pour Seniors et Débutants",
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
      areaServed: ["Aisne"],
    },
    description:
      "Assistance informatique, dépannage à domicile et formation patiente sans jargon pour seniors et débutants à Soissons et ses environs.",
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
            Accompagnement Patient & Bienveillant
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Soutien Numérique pour les Seniors et Débutants à Soissons
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Retrouvez votre autonomie informatique et utilisez vos appareils en
            toute sérénité grâce à un accompagnement sur-mesure, sans aucun
            jargon technique.
          </p>
        </div>

        {/* Visuel d'illustration */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-950 relative">
          <img
            src="/images/senior.png"
            alt="Assistance informatique bienveillante pour seniors et débutants à Soissons - AlicIA-GPT"
            className="w-full h-auto object-cover max-h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Aide de Confiance
            </span>
            <p className="text-white text-sm sm:text-base font-medium italic">
              “L'informatique doit simplifier la vie, pas la compliquer. Nous
              prenons le temps qu'il faut, à votre rythme.”
            </p>
          </div>
        </div>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous débutez avec l'informatique ou rencontrez des difficultés au
              quotidien ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ordinateur qui ralentit, imprimante capricieuse, crainte des
              arnaques en ligne ou simple besoin de comprendre comment
              communiquer facilement avec vos proches : il n'est jamais trop
              tard pour apprendre.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nous vous offrons un{" "}
              <strong className="text-[#00FFB3]">
                soutien de proximité, patient et chaleureux
              </strong>
              , directement à votre domicile ou en visioconférence à Soissons et
              ses environs.
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce sur quoi nous vous aidons :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Prise en
                main de l'ordinateur, de la tablette et du smartphone.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Gestion des
                e-mails, des photos et des démarches en ligne sécurisées.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Installation
                et connexion de vos équipements (imprimante, box).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Sécurisation
                contre les virus et les arnaques sur internet.
              </li>
            </ul>
          </div>
        </div>

        {/* Services proposés */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos accompagnements sur-mesure pas à pas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Bases & Navigation
              </h3>
              <p className="text-sm text-gray-400">
                Apprenez à utiliser la souris, taper au clavier, organiser vos
                documents et naviguer sur Internet en toute sécurité.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Tablette & Smartphone
              </h3>
              <p className="text-sm text-gray-400">
                Maîtrisez vos applications utiles (appels visio, santé, banque,
                photos) pour rester connectés avec vos proches.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Dépannage & Sécurité
              </h3>
              <p className="text-sm text-gray-400">
                Nettoyage des virus, centralisation de vos mots de passe et
                résolution rapide de vos pannes informatiques.
              </p>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire Transparente */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules simples et transparentes
            </h2>
            <p className="text-gray-400 text-sm">
              Pas de mauvaise surprise : des tarifs clairs adaptés aux
              particuliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Libre
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  À la Séance
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  30 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / heure
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Aide à domicile ou en visio selon vos besoins, sans aucun
                  engagement de durée.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Paiement au temps passé
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Recommandé
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Sérénité
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « Tranquillité »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  80 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / 3 heures par mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Accompagnement régulier (soit 27€/h) avec priorité
                  d'intervention en cas de besoin urgent.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Assistance prioritaire toute l'année
              </div>
            </div>
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
            « Le conseiller m'a super bien aidé, maintenant j'ai tous mes mots
            de passe centralisés et mes favoris accessibles sans stress. »
          </blockquote>
          <p className="text-gray-400 text-sm font-medium">
            — Jean-Louis, Soissons (02)
          </p>
        </div>

        {/* Bloc Contact Direct */}
        <section className="mb-16 p-8 bg-gradient-to-br from-[#6366F1]/10 to-[#00FFB3]/10 border-2 border-[#6366F1]/30 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            📞 Comment nous contacter ?
          </h2>
          <p className="text-gray-300 text-base mb-8 text-center max-w-xl mx-auto">
            N'hésitez pas à nous appeler ou à nous envoyer un message. Nous vous
            répondrons avec le sourire et toute la patience nécessaire.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-900/90 p-6 rounded-xl border border-gray-700 text-center">
              <div className="flex justify-center mb-3">
                <svg
                  className="w-8 h-8 text-[#6366F1]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Par téléphone</h3>
              <p className="text-xs text-gray-400 mb-3">
                Du lundi au vendredi, 8h - 18h
              </p>
              <a
                href="tel:+33615603344"
                className="text-xl font-bold text-[#00FFB3] hover:underline"
              >
                06 15 60 33 44
              </a>
              <p className="text-[11px] text-gray-500 mt-1">
                (Appel non surtaxé)
              </p>
            </div>

            <div className="bg-gray-900/90 p-6 rounded-xl border border-gray-700 text-center">
              <div className="flex justify-center mb-3">
                <svg
                  className="w-8 h-8 text-[#00FFB3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Par email</h3>
              <p className="text-xs text-gray-400 mb-3">
                Réponse rapide garantie
              </p>
              <a
                href="mailto:contact@alicia-gpt.com"
                className="text-base font-semibold text-[#00FFB3] hover:underline break-all"
              >
                contact@alicia-gpt.com
              </a>
              <p className="text-[11px] text-gray-500 mt-1">
                (Nous vous lisons avec attention)
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 italic">
              💡 <strong>Astuce :</strong> Si vous préférez un contact direct et
              chaleureux, un simple coup de fil est le moyen le plus rapide pour
              nous joindre.
            </p>
          </div>
        </section>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Intervention à Soissons et ses environs
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Nous intervenons directement à votre domicile ou en visioconférence
            selon vos préférences. Confiance, discrétion et respect absolu sont
            au cœur de notre accompagnement.
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Besoin d'aide avec votre ordinateur ou votre tablette ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Discutons-en tranquillement lors d'un premier échange offert de 20
            minutes.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un accompagnement gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SoutienSeniorsPage;
