import React from "react";
import Link from "next/link";

type Step = {
  number: number;
  title: string;
  description: string;
  link?: string; // optionnel : si absent, la carte n'est pas cliquable
};

const ProcessSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "Audit & Analyse",
      description:
        "Nous analysons vos processus actuels pour identifier les opportunités d'automatisation.",
      link: "/audit-conseil",
    },
    {
      number: 2,
      title: "Stratégie & Conception",
      description:
        "Nous concevons une feuille de route IA sur-mesure adaptée à vos objectifs et votre budget.",
    },
    {
      number: 3,
      title: "Développement & Intégration",
      description:
        "Nous développons et intégrons les solutions IA directement dans votre environnement de travail.",
      link: "/outils",
    },
    {
      number: 4,
      title: "Formation & Autonomie",
      description:
        "Nous formons vos équipes pour qu'elles maîtrisent les nouveaux outils et gagnent en autonomie.",
      link: "/formations",
    },
  ];

  return (
    <section id="processus" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Notre Processus en 4 Étapes
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Une méthodologie éprouvée pour garantir le succès de votre
            transformation IA.
          </p>
        </div>
        <div className="mt-16 relative max-w-4xl mx-auto">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800"></div>
          {steps.map((step, index) => {
            const hasLink = Boolean(step.link);

            const card = (
              <div
                className={`bg-gray-900/50 border border-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  hasLink
                    ? "hover:border-[#6366F1] hover:bg-gray-900/80 cursor-pointer group"
                    : ""
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>

                {hasLink && (
                  <div
                    className={`flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#6366F1] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 ${
                      index % 2 !== 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span>En savoir plus</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
            return (
              <div key={index} className="relative mb-12 last:mb-0">
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Contenu */}
                  <div className="w-5/12">
                    {hasLink ? (
                      <Link href={step.link!} className="block">
                        {card}
                      </Link>
                    ) : (
                      card
                    )}
                  </div>
                  {/* Cercle central */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-12 h-12 bg-[#6366F1] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10">
                      {step.number}
                    </div>
                  </div>
                  {/* Espace vide pour l'alignement */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
