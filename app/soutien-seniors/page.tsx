// src/pages/SoutienSeniorsPage.tsx
import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Soutien Numérique Seniors & Débutants | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Assistance informatique, antivirus et dépannage patient et pédagogique pour seniors et débutants. Retrouvez votre autonomie numérique à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
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
    "Laon",
    "Villers-Cotterêts",
    "Château-Thierry",
    "Chauny",
    "Meaux",
    "Compiègne",
    "Fismes",
    "Reims",
    "Aisne",
    "Oise",
    "Marne",
    "Seine-et-Marne",
    "aide informatique locale",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Soutien Numérique Seniors & Débutants | AlicIA-GPT",
    description:
      "Assistance informatique et dépannage patient pour seniors et débutants. Retrouvez votre autonomie numérique à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soutien Numérique Seniors & Débutants | AlicIA-GPT",
    description:
      "Assistance informatique et dépannage patient pour seniors et débutants. Retrouvez votre autonomie numérique à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const SoutienSeniorsPage = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Soutien Numérique pour les Seniors et Débutants sur Soissons
        </h1>

        {/* Image impactante */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/senior.png"
            alt="Un technicien accompagne une senior avec un sourire devant un ordinateur — Support informatique de confiance"
            className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px] hover:scale-102 transition-transform duration-300"
          />
          <div className="bg-black/70 p-4 text-center">
            <p className="text-white text-sm italic">
              "Support Informatique — Votre aide de confiance"
            </p>
          </div>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous débutez dans l'informatique et vous aimeriez utiliser votre
          ordinateur, tablette ou smartphone en toute sérénité ?
          <br />
          Vous n'arrivez pas à connecter votre imprimante ou votre scanner à
          votre ordinateur ?
          <br />
          Vous avez des problèmes de connexion internet ?
          <br />
          Votre ordinateur tourne au ralenti ?
          <br />
          <strong>
            Nous sommes là pour vous accompagner, pas à pas, sans jargon, avec
            patience et bienveillance.
          </strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements sur mesure
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Initiation à l'ordinateur</strong> : allumer, utiliser
              la souris, taper au clavier, gérer vos fichiers.
            </p>
            <p>
              ✅ <strong>Navigation internet</strong> : rechercher, reconnaître
              les sites fiables, éviter les arnaques en ligne.
            </p>
            <p>
              ✅ <strong>Courrier électronique</strong> : créer une adresse,
              envoyer/recevoir des messages, joindre des photos.
            </p>
            <p>
              ✅ <strong>Smartphone & tablette</strong> : appels, messages,
              photos, applications utiles (Santé, banque, transports…).
            </p>
            <p>
              ✅ <strong>Sécurité numérique</strong> : antivirus, mots de passe
              robustes, mises à jour, protection contre les escroqueries.
            </p>
            <p>
              ✅ <strong>Dépannage express</strong> : virus, logiciels bloqués,
              connexion internet, imprimante, etc.
            </p>
          </div>
        </section>

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            Nos formules simples et transparentes
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <strong>À la séance</strong> : 45 € / heure, sans engagement.
            </li>
            <li>
              <strong>Formule « Tranquillité »</strong> : 3 heures par mois à
              120 € (soit 40 €/h), avec priorité d'intervention.
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé
          </p>
        </section>

        {/* Témoignage Google */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-700 rounded-xl text-center">
          <div className="flex justify-center mb-2">
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
          <blockquote className="text-gray-200 italic text-lg">
            « Le conseiller m'a super bien aidé, maintenant j'ai tous mes mots
            de passe centralisés et mes favoris accessibles. »
          </blockquote>
          <p className="text-gray-400 mt-2">— Jean-Louis, Soissons</p>
        </section>

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            📍 À Soissons et ses environs
          </h2>
          <p className="text-gray-300">
            Nous intervenons à votre domicile ou en visioconférence, selon vos
            préférences.
            <br />
            <strong>Confiance, discrétion et respect</strong> sont au cœur de
            notre accompagnement.
          </p>
        </section>

        {/* NOUVELLE SECTION : Coordonnées de contact pour seniors */}
        <section className="mt-12 p-8 bg-gradient-to-br from-[#6366F1]/10 to-[#00FFB3]/10 border-2 border-[#6366F1]/30 rounded-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            📞 Comment nous contacter ?
          </h2>
          <p className="text-gray-300 text-lg mb-6 text-center max-w-2xl mx-auto">
            N'hésitez pas à nous appeler ou à nous envoyer un email. Nous vous
            répondrons avec patience et bienveillance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Téléphone */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-[#6366F1] transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-[#6366F1]"
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
              <h3 className="text-white font-semibold text-lg mb-2 text-center">
                Par téléphone
              </h3>
              <p className="text-gray-400 text-sm mb-3 text-center">
                Du lundi au vendredi, 8h - 18h
              </p>
              <a
                href="tel:+33615603344"
                className="block text-center text-2xl font-bold text-[#00FFB3] hover:text-[#6366F1] transition-colors"
              >
                06 15 60 33 44
              </a>
              <p className="text-gray-500 text-xs mt-2 text-center">
                (Appel non surtaxé)
              </p>
            </div>

            {/* Email */}
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-[#00FFB3] transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-[#00FFB3]"
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
              <h3 className="text-white font-semibold text-lg mb-2 text-center">
                Par email
              </h3>
              <p className="text-gray-400 text-sm mb-3 text-center">
                Réponse sous 24h
              </p>
              <a
                href="mailto:alicia.gpt.02@gmail.com"
                className="block text-center text-lg font-semibold text-[#00FFB3] hover:text-[#6366F1] transition-colors break-all"
              >
                alicia.gpt.02@gmail.com
              </a>
              <p className="text-gray-500 text-xs mt-2 text-center">
                (Nous vous répondons rapidement)
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-300 text-sm">
              💡 <strong>Conseil :</strong> Si vous n'êtes pas à l'aise avec
              l'email,
              <br className="hidden sm:block" />
              l'appel téléphonique est le moyen le plus simple pour nous joindre
              !
            </p>
          </div>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Une question ? Besoin d'un diagnostic rapide ?
          </p>
          <ContactCTAButton label="Demandez un audit gratuit" />
        </div>
      </main>
    </div>
  );
};

export default SoutienSeniorsPage;
