"use client";
import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons/UiIcons";

const projects = [
  {
    image: "/images/compta.jpg",
    year: 2026,
    name: "Scanner des factures",
    type: "Automatisation & IA",
    slug: "scan-facture",
  },
  {
    image: "/images/memobot.jpg",
    year: 2026,
    name: "Assistant interne sécurisé",
    type: "Développement sur-mesure",
    slug: "memobot-assistant-ia-base-connaissances-pme",
  },
  {
    image: "/images/correcteur.jpg",
    year: 2026,
    name: "Correcteur de copies",
    type: "Automatisation & IA",
    slug: "correction-copie-eleve",
  },
  {
    image: "/images/immosniper.jpg",
    year: 2026,
    name: "Assistant IA opportunités immobilières",
    type: "Automatisation & IA",
    slug: "assistant-ia-opportunites-immobilieres",
  },
  {
    image: "/images/immo1.jpg",
    year: 2026,
    name: "Veille Agents Immobiliers",
    type: "Automatisation & IA",
    slug: "veille-immobiliere",
  },
  {
    image: "/images/devis2.jpg",
    year: 2026,
    name: "Générateur de devis - Agent IA",
    type: "Développement sur-mesure",
    slug: "generateur-devis-artisan",
  },
  {
    image: "/images/reunion.png",
    year: 2025,
    name: "Compte rendu de réunion automatisé",
    type: "Automatisation & IA",
  },
  {
    image: "/images/devis.png",
    year: 2025,
    name: "Générateur de devis - Agent IA",
    type: "Développement sur-mesure",
  },
  {
    image: "/images/scraping.png",
    year: 2025,
    name: "Web Scraping pour PME",
    type: "Stratégie Marketing",
  },
  {
    image: "/images/formation2.png",
    year: 2025,
    name: "Consulting & Formation pour PME",
    type: "Stratégie & Formation",
  },
  {
    image: "/images/seo.png",
    year: 2025,
    name: "Optimisation SEO Local",
    type: "Marketing Digital",
  },
  {
    image: "/images/vapi.png",
    year: 2025,
    name: "Chatbot de Support Client",
    type: "Développement sur-mesure",
  },
];

const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisibility, setTextVisibility] = useState<boolean[]>(
    Array(projects.length).fill(true),
  );

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    setTextVisibility((prev) => {
      const updated = [...prev];
      updated[currentIndex] = true;
      return updated;
    });
    const intervalId = setInterval(() => {
      setTextVisibility((prev) => {
        const updated = [...prev];
        updated[currentIndex] = !updated[currentIndex];
        return updated;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Nos Réalisations
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Quelques exemples de projets qui illustrent notre expertise.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative h-[28rem] rounded-lg bg-gray-900">
            <div
              className="flex transition-transform ease-out duration-500 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => {
                const hasSlug = Boolean(project.slug);

                const content = (
                  <>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Overlay hover - uniquement si slug présent */}
                    {hasSlug && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col items-center gap-3">
                          <div className="bg-[#00FFB3]/10 backdrop-blur-md border border-[#00FFB3]/40 rounded-full p-4 shadow-lg shadow-[#00FFB3]/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-[#00FFB3]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                            Lire l'article →
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Légende permanente */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 ${
                        textVisibility[index] ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-sm text-[#00FFB3] font-semibold">
                        {project.year} - {project.type}
                      </p>
                      <h3 className="text-2xl font-bold text-white">
                        {project.name}
                      </h3>
                    </div>
                  </>
                );

                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 h-full relative flex items-center justify-center"
                  >
                    {hasSlug ? (
                      <Link
                        href={`/blog/${project.slug}`}
                        className="block w-full h-full relative group cursor-pointer"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="block w-full h-full relative group">
                        {content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Flèches de navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full text-white transition-colors z-20 backdrop-blur-sm border border-white/10"
            aria-label="Slide précédente"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full text-white transition-colors z-20 backdrop-blur-sm border border-white/10"
            aria-label="Slide suivante"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Dots de navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-[#6366F1] scale-125"
                    : "bg-gray-700 hover:bg-gray-500"
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
