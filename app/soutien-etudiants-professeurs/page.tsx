// src/pages/SoutienEtudiantsPage.tsx
import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Outils IA pour Étudiants | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Outils et applications IA pour l'apprentissage et la recherche des étudiants. Boostez votre productivité académique à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "outils IA étudiants",
    "applications IA apprentissage",
    "IA recherche universitaire",
    "aide aux devoirs IA",
    "résumé de cours IA",
    "chatbot étudiant",
    "productivité académique",
    "formation IA étudiants",
    "artificielle intelligence université",
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
    "consultant IA étudiants",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Outils IA pour Étudiants | AlicIA-GPT",
    description:
      "Outils et applications IA pour l'apprentissage et la recherche. Boostez votre productivité académique à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outils IA pour Étudiants | AlicIA-GPT",
    description:
      "Outils et applications IA pour l'apprentissage et la recherche. Boostez votre productivité académique à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const SoutienEtudiantsPage = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Soutien Numérique pour Étudiants — Outils IA, Productivité & Réussite
        </h1>

        {/* Image impactante (même photo que pour les seniors — peut être changée plus tard) */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/Einsteinjunior.png"
            alt="Un technicien accompagne un étudiant avec un sourire devant un ordinateur — Support informatique de confiance"
            className="w-full h-auto object-cover max-h-[400px] md:max-h-[800px] hover:scale-102 transition-transform duration-300"
          />
          <div className="bg-black/70 p-4 text-center">
            <p className="text-white text-sm italic">
              “Support Informatique — Votre allié numérique pour réussir”
            </p>
          </div>
        </div>

        {/* Introduction motivante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes étudiant(e) et vous voulez maîtriser les outils numériques
          pour gagner du temps, améliorer vos rendus et booster votre
          productivité ?
          <br />
          Vous avez besoin d’aide pour configurer votre PC, utiliser les
          logiciels de recherche, ou intégrer l’IA dans vos projets ?
          <br />
          Vous êtes perdu(e) face aux nouvelles technologies imposées par votre
          formation ?
          <br />
          <strong>
            Nous vous accompagnons pas à pas — sans stress, avec efficacité et
            des conseils concrets.
          </strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements sur mesure
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Outils IA pour étudiants</strong> : ChatGPT, Gemini,
              Claude, Perplexity — comment les utiliser intelligemment et
              éthiquement.
            </p>
            <p>
              ✅ <strong>Productivité & organisation</strong> : Notion, Trello,
              NoteBookLM, Obsidian — créer vos espaces de travail personnalisés.
            </p>
            <p>
              ✅ <strong>Rédaction & relecture assistée</strong> : Manus,
              Skywork — optimiser vos mémoires, rapports et présentations.
            </p>
            {/*<p>✅ <strong>Logiciels académiques</strong> : LaTeX, SPSS, R, Python, Excel avancé — prise en main et mise en pratique.</p>*/}
            <p>
              ✅ <strong>Sécurité & gestion des données</strong> : sauvegardes,
              cloud sécurisé, gestion des mots de passe, protection contre le
              phishing.
            </p>
            <p>
              ✅ <strong>Dépannage express</strong> : problème de connexion,
              logiciel bloqué, installation de drivers, configuration réseau.
            </p>
          </div>
        </section>

        {/* NOUVELLE SECTION : Correcteur IA pour enseignants */}
        <section className="mb-12 p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-700/50 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Innovation Pédagogique : Correcteur IA pour Enseignants
          </h2>

          {/* Image et présentation */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/correcteur.jpg"
              alt="Correcteur IA - Application mobile de correction automatique de copies"
              className="w-full h-auto object-cover max-h-[500px] hover:scale-102 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-black/40 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                La solution que j'ai développée
              </h3>
              <p className="text-gray-300 mb-4">
                <strong>30 copies corrigées en 4 minutes avec l'IA</strong> au
                lieu de 3 heures. En tant que prof, la correction représente 40%
                du métier et 80% du temps perdu. J'ai construit un outil qui
                change la donne.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Le problème qu'on connaît tous
              </h3>
              <p className="text-gray-400 mb-3">
                Vous avez 30 copies de dissertation sur "Le Lac" de Lamartine.
                Chaque copie fait 4 pages. Vous devez lire attentivement,
                identifier les erreurs, évaluer l'argumentation, donner une note
                juste et rédiger un feedback constructif.
              </p>
              <p className="text-gray-300 font-semibold">
                Résultat : 3h minimum. Parfois le week-end.
              </p>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">
                La solution : un scan mobile, puis une correction complète en 30
                secondes
              </h3>
              <p className="text-gray-300 mb-4">
                L'élève pose sa copie sur la table, vous photographiez page par
                page, vous entrez le sujet et le barème. L'IA renvoie
                instantanément :
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✅ Une note sur 20</li>
                <li>✅ Une appréciation générale style bulletin</li>
                <li>✅ Les points forts identifiés</li>
                <li>✅ Les axes d'amélioration</li>
                <li>
                  ✅ Une analyse détaillée des erreurs, avec citations et
                  suggestions
                </li>
                <li>
                  ✅ Une évaluation de la structure (intro, développement,
                  conclusion)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Comment ça marche (sans jargon)
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-400">
                <div className="bg-black/30 p-4 rounded-lg">
                  <strong className="text-purple-300">
                    Frontend (Next.js)
                  </strong>
                  <p className="text-sm mt-2">
                    Interface mobile qui capture les photos et les convertit en
                    Base64
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <strong className="text-purple-300">
                    Backend (Python/FastAPI)
                  </strong>
                  <p className="text-sm mt-2">
                    Reçoit les images et construit un prompt pédagogique adapté
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <strong className="text-purple-300">
                    IA (Qwen via Groq)
                  </strong>
                  <p className="text-sm mt-2">
                    Modèle de vision qui "lit" l'écriture manuscrite et analyse
                    le contenu
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <strong className="text-purple-300">RGPD</strong>
                  <p className="text-sm mt-2">
                    Les images sont traitées à la volée et jamais stockées
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mt-4 text-sm italic">
                Le tout tient dans 200 lignes de Python. Pas de serveur
                complexe, pas d'infrastructure lourde.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Ce qui rend l'outil vraiment utile
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-400">
                <p>
                  ✅ <strong>Multi-matières</strong> : français, philo,
                  histoire, langues...
                </p>
                <p>
                  ✅ <strong>Mode rafale</strong> : scannez 30 copies d'affilée
                  sans retaper le sujet
                </p>
                <p>
                  ✅ <strong>Barème flexible</strong> : /20, /10, /40, vous
                  choisissez
                </p>
                <p>
                  ✅ <strong>Multi-pages</strong> : copies de 2, 3 ou 4 pages
                  gérées automatiquement
                </p>
                <p>
                  ✅ <strong>Feedback actionnable</strong> : conseils concrets
                  pour l'élève
                </p>
                <p>
                  ✅ <strong>Fenêtre de discussion</strong> : discutez avec l'IA
                  de la correction
                </p>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-lg border border-green-700/30">
              <h3 className="text-lg font-semibold text-green-300 mb-3">
                Le résultat
              </h3>
              <p className="text-gray-300 mb-3">
                Je corrige maintenant une classe en{" "}
                <strong>20 minutes au lieu de 3 heures</strong>. Et les élèves
                reçoivent un feedback plus détaillé que ce que je pouvais leur
                écrire à la main.
              </p>
              <p className="text-gray-300 italic">
                "L'IA ne remplace pas le prof. Elle lui rend du temps pour ce
                qui compte vraiment : accompagner, expliquer, inspirer."
              </p>
            </div>
          </div>
        </section>
        {/* FIN NOUVELLE SECTION */}

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            Nos formules simples et transparentes
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <strong>À la séance</strong> : 30 € / heure, sans engagement.
            </li>
            <li>
              <strong>Formule « Réussite »</strong> : 3 heures par mois à 80 €
              (soit 27 €/h).
            </li>
            <li>
              <strong>Ateliers collectifs</strong> : initiation gratuite à l’IA
              et à la productivité numérique — réservés aux étudiants de
              Soissons et environs.
            </li>
          </ul>
          {/* <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé
          </p> */}
        </section>

        {/* Témoignage Google (à adapter si possible) */}

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
            « J'avais un livre de psycho de 30 chapitres. Ils m'ont montrée
            comment utiliser NoteBookLM pour faire mes fiches de révision avec
            un super prompt. Tous les matins, je reçois un mail avec un quizz
            sur un des chapitres. J'ai aussi un coach en anglais. Le plus: un
            petit message personnalisé quotidien pour me booster! »
          </blockquote>
          <p className="text-gray-400 mt-2">
            — Alice, étudiante en Psychologie de Soissons à la faculté de Reims
          </p>
        </section>

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
            « Grâce à leur aide, j’ai pu structurer mon mémoire avec Notion et
            utiliser Claude et Manus pour rédiger mes synthèses. J'adore aussi
            NotebookLM pour mes notes de cours. — gain de temps énorme ! »
          </blockquote>
          <p className="text-gray-400 mt-2">
            — Camille, étudiante en Droit de Laon à la faculté de Reims
          </p>
        </section>

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            📍 À Soissons et ses environs
          </h2>
          <p className="text-gray-300">
            Nous intervenons à votre domicile ou en visioconférence.
            <br />
            <strong>
              Flexibilité, efficacité et respect de votre rythme
            </strong>{" "}
            sont nos engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Besoin d’un coup de pouce pour un projet ? Un outil à maîtriser ?
          </p>
          {/* <p className="text-gray-300 mt-2">Notre chatbot est là pour vous guider en quelques clics.</p>*/}
          <ContactCTAButton label="Demandez un audit gratuit" />
        </div>
      </main>
    </div>
  );
};

export default SoutienEtudiantsPage;
