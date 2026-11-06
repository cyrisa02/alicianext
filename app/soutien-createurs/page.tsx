import type { Metadata } from "next";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Accompagnement Créateurs d'Entreprise | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Conseil, organisation et bac à sable IA pour donner vie à vos idées d'entreprise. Accompagnement sur-mesure à Soissons, dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne (77).",
  keywords: [
    "accompagnement créateur d'entreprise",
    "lancement de startup",
    "agent immobilier",
    "veille immobilière",
    "chasseur immobilier",
    "investisseur immobilier",
    "bac à sable IA",
    "organisation entrepreneur",
    "conseil création d'entreprise",
    "outils IA pour entrepreneurs",
    "setup numérique pro",
    "messagerie professionnelle",
    "site vitrine entrepreneur",
    "artisans",
    "TPE",
    "PME",
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
    "consultant IA startup",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Accompagnement Créateurs d'Entreprise | AlicIA-GPT",
    description:
      "Conseil, organisation et bac à sable IA pour donner vie à vos idées. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accompagnement Créateurs d'Entreprise | AlicIA-GPT",
    description:
      "Conseil, organisation et bac à sable IA pour donner vie à vos idées. Accompagnement à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const SoutienCreateursPage = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      {/* Header, Footer et Chatbot rendus globalement par le layout.tsx racine */}
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Soutien Numérique pour les Créateurs d'Entreprises à Soissons
        </h1>

        {/* Image impactante */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/createur.png"
            alt="Un technicien accompagne un créateur d'entreprise avec un sourire devant un ordinateur — Support informatique de confiance"
            className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px] hover:scale-102 transition-transform duration-300"
          />
          <div className="bg-black/70 p-4 text-center">
            <p className="text-white text-sm italic">
              "Support Informatique — Votre allié numérique dès le premier jour"
            </p>
          </div>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous lancez votre entreprise et vous avez besoin d'un environnement
          numérique fiable, sécurisé et efficace ?
          <br />
          Vous n'arrivez pas à configurer votre messagerie pro ou à mettre en
          place votre site vitrine ?
          <br />
          Vos outils ne communiquent pas entre eux ? Vos fichiers sont dispersés
          ? Vos données ne sont pas sauvegardées ?
          <br />
          <strong>
            Nous vous accompagnons dans les fondamentaux techniques pour que
            vous puissiez vous concentrer sur votre business.
          </strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Nos accompagnements pour entrepreneurs
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              ✅ <strong>Setup numérique de base</strong> : messagerie pro,
              cloud, gestionnaire de mots de passe, outils collaboratifs
              (Trello, Notion, Google Workspace).
            </p>
            <p>
              ✅ <strong>Sécurité & conformité</strong> : antivirus, pare-feu,
              sauvegardes automatiques, RGPD, protection contre les
              cyberattaques.
            </p>
            <p>
              ✅ <strong>Site web & visibilité</strong> : création simple
              (WordPress, Bolt, Lovable, DeepSite, Vercel, Shopify),
              référencement basique, intégration de formulaires et boutons de
              contact.
            </p>
            <p>
              ✅ <strong>Outils de productivité</strong> : automatisation (N8N,
              Make), gestion des tâches, facturation en ligne, agenda partagé.
            </p>
            <p>
              ✅ <strong>Dépannage express</strong> : crashs, logiciels bloqués,
              connexion internet, imprimante, serveur local, etc.
            </p>
            <p>
              ✅ <strong>Formation rapide</strong> : apprenez à maîtriser vos
              outils en 1h sans stress — pour gagner du temps au quotidien.
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
              <strong>À la séance</strong> : 60 € / heure, sans engagement.
            </li>
            <li>
              <strong>Formule « Démarrage Pro »</strong> : 4 heures par mois à
              200 € (soit 50 €/h), avec priorité d'intervention + 1h offerte au
              3e mois.
            </li>
            <li>
              <strong>Forfait « Business Setup »</strong> : 350 € (tout compris
              : messagerie, site vitrine, sécurité, formation).
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé — sans condition.
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
            « En 2h, j'ai eu la maquette de mon site, ma messagerie et mes
            sauvegardes automatisées. Je me sens enfin sereine pour me lancer. »
          </blockquote>
          <p className="text-gray-400 mt-2">
            — Michèle, coach de vie Maïeuthésie, Soissons
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
            « Tous les jours je perdais du temps pour regrouper mes urgences,
            mes rdv sur mon agenda, mes to-do-lists. Cyril m'a développé une IA
            sur Mistral. Je reçois un débrief tous les matins sur mon Gmail. Je
            gagne un temps fou. Tout est centralisé. Je commence la journée du
            bon pied!»
          </blockquote>
          <p className="text-gray-400 mt-2">
            — Thierry, entrepreneur, Villers-Cotterêts
          </p>
        </section>

        {/* ============================================ */}
        {/* NOUVELLE SECTION : Cas d'usage PropTech      */}
        {/* ============================================ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">
            🏠 Cas d'usage : Solutions PropTech clé en main
          </h2>
          <p className="text-gray-400 mb-6">
            Nous ne faisons pas que du conseil : nous construisons avec vous des
            outils IA opérationnels qui travaillent 24h/24. Voici deux exemples
            concrets déployés pour des investisseurs et chasseurs immobiliers.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Carte Immo Sniper */}
            <div className="bg-gray-900/60 border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <h3 className="text-xl font-bold text-white">Immo Sniper</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Assistant IA de veille immobilière temps réel. Détectez les
                opportunités sous-évaluées avant tout le monde grâce à l'analyse
                géospatiale (PostGIS), à la base DVF et à l'IA (Qwen 3.8-27B via
                Groq).
              </p>

              {/* 4 KPI */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400 uppercase">Analyses</p>
                  <p className="text-white font-bold">24h/24</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400 uppercase">
                    Opportunités
                  </p>
                  <p className="text-white font-bold">Écart &lt; -10%</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400 uppercase">
                    Gain potentiel
                  </p>
                  <p className="text-white font-bold">+Value théorique</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400 uppercase">Alerte</p>
                  <p className="text-white font-bold">Telegram + Email</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                <strong className="text-gray-300">Stack :</strong> Next.js,
                TypeScript, PostgreSQL + PostGIS, Docker, Playwright, Leaflet,
                JWT Auth.
              </p>

              <a
                href="/docs/immosniper-mode-emploi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Télécharger le mode d'emploi (PDF)
              </a>
            </div>

            {/* Carte Immo Signal */}
            <div className="bg-gray-900/60 border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📡</span>
                <h3 className="text-xl font-bold text-white">Immo Signal</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Version allégée et continue de la veille immobilière. Analyse
                automatique des alertes SeLoger et Leboncoin, qualification IA
                des annonces, et dashboard centralisé avec argumentaire de
                négociation.
              </p>

              {/* 4 KPI */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400 uppercase">Collecte</p>
                  <p className="text-white font-bold">IMAP Gmail</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400 uppercase">Analyse</p>
                  <p className="text-white font-bold">Base DVF + IA</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400 uppercase">Confiance</p>
                  <p className="text-white font-bold">Haute / Moy. / Faible</p>
                </div>
                <div className="bg-black/40 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-400 uppercase">Pitch IA</p>
                  <p className="text-white font-bold">Négociation auto</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                <strong className="text-gray-300">Stack :</strong> Next.js,
                TypeScript, PostgreSQL + PostGIS, Docker, Leaflet, IMAP Gmail,
                JWT Auth.
              </p>

              <a
                href="/docs/immosignal-mode-emploi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Télécharger le mode d'emploi (PDF)
              </a>
            </div>
          </div>

          {/* Encadré différenciation */}
          <div className="mt-6 p-5 bg-indigo-950/40 border border-indigo-500/40 rounded-xl">
            <p className="text-gray-200">
              <strong className="text-white">
                💡 Pourquoi c'est différent ?
              </strong>{" "}
              Aucun concurrent en consulting IA généraliste ne propose ce type
              de livrable PropTech clé en main. Nous ne vendons pas du conseil
              théorique : nous livrons un{" "}
              <strong className="text-white">
                produit fini, déployé et opérationnel
              </strong>{" "}
              qui détecte les bonnes affaires avant vos concurrents.
            </p>
          </div>
        </section>
        {/* ============================================ */}
        {/* FIN SECTION Cas d'usage PropTech             */}
        {/* ============================================ */}

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">
            📍 À Soissons et ses environs
          </h2>
          <p className="text-gray-300">
            Nous intervenons à votre bureau, chez vous, ou en visioconférence —
            selon votre rythme.
            <br />
            <strong>
              Confidentialité, réactivité et professionnalisme
            </strong>{" "}
            sont nos engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-4">
            Besoin d'un diagnostic rapide, d'un setup clé en main ou d'un outil
            IA sur mesure pour votre activité ?
          </p>
          <ContactCTAButton label="Demandez un audit gratuit" />
        </div>
      </main>
    </div>
  );
};

export default SoutienCreateursPage;
