import React from "react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1: Informations entreprise */}
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
              <p>📍 12 rue de la Paix, 02200 Soissons</p>
              <p> +33 6 15 60 33 44</p>
              <p>✉️ cyril.gourdon.02@gmail.com</p>
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nos Services
                </a>
              </li>
              <li>
                <a
                  href="/#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/#a-propos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Réseaux sociaux */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
            <div className="flex justify-center md:justify-end space-x-6 mb-4">
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
            <p className="text-sm text-gray-400">
              Zone d'intervention : Aisne, Oise, Marne, Nord de la
              Seine-et-Marne
            </p>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Section légale */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} AlicIA-GPT. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions Légales
            </a>
            <a
              href="/politique-confidentialite"
              className="hover:text-white transition-colors"
            >
              Politique de Confidentialité
            </a>
            <a
              href="/conditions-generales-de-vente"
              className="hover:text-white transition-colors"
            >
              CGV
            </a>
            <a
              href="/conditions-generales-d-utilisation"
              className="hover:text-white transition-colors"
            >
              CGU
            </a>
            <a
              href="/conformite-ia-act"
              className="hover:text-white transition-colors"
            >
              Conformité IA Act
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
