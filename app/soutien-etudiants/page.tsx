// src/pages/SoutienEtudiantsPage.tsx
"use client"; // Indispensable pour les hooks et useRouter
import type { Metadata } from "next";

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

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const SoutienEtudiantsPage = () => {
  // 1. Remplacement des hooks React Router par les hooks Next.js
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Compense le header fixe
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (id: string) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  };

  // Gère le cas où on arrive directement avec une ancre (ex: /etudiants#contact)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 150);
    }
  }, [pathname]); // ✅ Remplacer [location] par [pathname]

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
              <strong>Formule « Réussite »</strong> : 3 heures par mois à 120 €
              (soit 40 €/h), avec priorité et accès à un espace ressources
              exclusif.
            </li>
            <li>
              <strong>Ateliers collectifs</strong> : initiation gratuite à l’IA
              et à la productivité numérique — réservés aux étudiants de
              Soissons et environs.
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé
          </p>
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
            « Grâce à leur aide, j’ai pu structurer mon mémoire avec Notion et
            utiliser Claude et Manus pour rédiger mes synthèses. J'adore aussi
            NotebookLM pour mes notes de cours. — gain de temps énorme ! »
          </blockquote>
          <p className="text-gray-400 mt-2">
            — Camille, étudiante en Psychologie de Soissons à la faculté de
            Reims
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
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-4 bg-[#6366F1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#4f52c4] transition-colors duration-300"
          >
            Contactez-nous
          </button>
        </div>
      </main>
    </div>
  );
};

export default SoutienEtudiantsPage;
