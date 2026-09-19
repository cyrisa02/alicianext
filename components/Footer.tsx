import React from "react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section principale en 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 : Marque & Contact */}
          <div className="text-center md:text-left">
            <a
              href="/"
              className="text-2xl font-bold text-white inline-block mb-4"
            >
              Alic<span className="text-[#6366F1]">IA</span>-GPT
            </a>
            <p className="text-gray-400 text-sm mb-4">
              Agence de consulting en Intelligence Artificielle à Soissons. Nous
              accompagnons les entreprises locales dans leur transformation
              digitale.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 02200 Soissons</p>
              <p>📞 +33 6 15 60 33 44</p>
              <p>✉️ alicia.gpt.02@gmail.com</p>
              {/* 💡 Astuce : Pense à remplacer par contact@alicia-gpt.fr quand tu auras ton nom de domaine pour plus de crédibilité B2B */}
            </div>
          </div>

          {/* Colonne 2 : Support & Navigation (FAQ mise en avant) */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">
              Support & Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="/faq"
                  className="font-medium text-[#6366F1] hover:text-[#00FFB3] transition-colors"
                >
                  Questions Fréquentes (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-white transition-colors"
                >
                  Nous Contacter
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Nos Services
                </a>
              </li>
              <li>
                <a
                  href="/#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Informations Légales */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">
              Informations Légales
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="/mentions-legales"
                  className="hover:text-white transition-colors"
                >
                  Mentions Légales
                </a>
              </li>
              <li>
                <a
                  href="/politique-confidentialite"
                  className="hover:text-white transition-colors"
                >
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a
                  href="/conditions-generales-de-vente"
                  className="hover:text-white transition-colors"
                >
                  CGV
                </a>
              </li>
              <li>
                <a
                  href="/conditions-generales-d-utilisation"
                  className="hover:text-white transition-colors"
                >
                  CGU
                </a>
              </li>
              <li>
                <a
                  href="/conformite-ia-act"
                  className="hover:text-white transition-colors"
                >
                  Conformité IA Act
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation et Barre du bas */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Réseaux sociaux */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/cyril-gourdon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077B5] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/cyrisa02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright et Zone géographique */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm mb-1">
              © {new Date().getFullYear()} AlicIA-GPT. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-500">
              Basé à Soissons • Aisne (02) • Oise (60) • Marne (51) •
              Seine-et-Marne (77)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
