import React from "react";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Audit & Analyse",
      description:
        "Nous analysons vos processus actuels pour identifier les opportunités d'automatisation.",
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
    },
    {
      number: 4,
      title: "Formation & Autonomie",
      description:
        "Nous formons vos équipes pour qu'elles maîtrisent les nouveaux outils et gagnent en autonomie.",
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

          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Contenu */}
                <div className="w-5/12">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 shadow-lg hover:border-[#6366F1] transition-colors duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
