"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-20 pb-16"
    >
      {/* Grille de fond et effets visuels */}
      <div className="absolute inset-0 bg-grid-gray-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#6366F1]/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#00FFB3]/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge de réassurance différenciant (IA Locale & RGPD) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/80 border border-gray-800 text-sm font-medium text-gray-300 mb-6 animate-fade-in-up">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FFB3] animate-pulse"></span>
          <span>
            IA Locale & Souveraine • 100% Conforme RGPD (Aisne, Marne, Oise, 77)
          </span>
        </div>

        {/* Titre Principal H1 axé sur la promesse de gain de temps et de croissance */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
          Gagnez 5 à 10h par semaine sur votre administratif grâce à l'
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#00FFB3]">
            Intelligence Artificielle
          </span>
        </h1>

        {/* Sous-titre explicite orienté TPE, PME et Artisans */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
          Agence de conseil, formation et intégration d'outils IA sur-mesure à
          Soissons. Automatisez vos devis, sécurisez vos données et attirez plus
          de clients locaux sans complexité technique.
        </p>

        {/* Boutons d'appel à l'action (CTA) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4 animate-fade-in-up animation-delay-600">
          <a
            href="https://cal.com/cyril-gourdon/diagnostic-ia-gratuit"
            // Remplace par ton lien Cal.com réel
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
          >
            Réserver mon diagnostic gratuit (20 min)
            {/* Icône externe subtile pour indiquer la sortie du site */}
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto border-2 border-gray-700 text-white font-bold py-3.5 px-8 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Découvrir nos solutions
          </a>
        </div>

        {/* Éléments de réassurance rapide sous les CTA */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 animate-fade-in-up animation-delay-800">
          <span className="flex items-center gap-1.5">
            ✓ Accompagnement de proximité (02, 51, 60, 77)
          </span>
          <span className="flex items-center gap-1.5">
            ✓ Éligible aux financements formation (OPCO / FAFCEA)
          </span>
          <span className="flex items-center gap-1.5">
            ✓ Zéro compétence technique requise
          </span>
        </div>
      </div>

      {/* Flèche de scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <a href="#a-propos" aria-label="Faire défiler vers le bas">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-300 transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>

      {/* Styles d'animation et de grille */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-fill-mode: both;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .bg-grid-gray-800\\/20 {
          background-image:
            linear-gradient(
              to right,
              rgba(156, 163, 175, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(156, 163, 175, 0.1) 1px,
              transparent 1px
            );
          background-size: 3rem 3rem;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
