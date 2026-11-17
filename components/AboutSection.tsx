import React from "react";
import Image from "next/image";

const partners = [
  {
    name: "Google Workspace",
    src: "/images/google.png",
    url: "https://workspace.google.com",
    hoverColor: "hover:border-[#4285F4]/50",
  },
  {
    name: "Mistral AI",
    src: "/images/mistral.png",
    url: "https://mistral.ai",
    hoverColor: "hover:border-[#FF7000]/50",
  },
  {
    name: "Ollama",
    src: "/images/ollama.png",
    url: "https://ollama.com",
    hoverColor: "hover:border-white/40",
  },
  {
    name: "n8n",
    src: "/images/n8n.png",
    url: "https://n8n.io",
    hoverColor: "hover:border-[#EA4B71]/50",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="py-20 sm:py-32 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne Texte & EEAT */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-[#00FFB3] font-semibold text-sm uppercase tracking-wider mb-3">
              Expérience terrain & Proximité
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Qui suis-je ? Derrière AlicIA-GPT, un parcours tourné vers
              l'efficacité concrète.
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Fort de{" "}
              <strong className="text-white">
                25 années d'expérience industrielle
              </strong>{" "}
              (pilotage de production, SAV, déploiement d'ERP complexes) et{" "}
              <strong className="text-white">
                10 années passées en tant qu'artisan gérant
              </strong>
              , j'ai fondé AlicIA-GPT avec une conviction simple :
              l'intelligence artificielle ne doit pas être un gadget abstrait,
              mais un levier de rentabilité immédiat pour les TPE, PME et
              artisans.
            </p>

            <blockquote className="border-l-4 border-[#6366F1] pl-4 italic text-gray-200 mb-6 bg-white/[0.02] py-3 rounded-r-lg">
              "Ma mission est d'humaniser l'IA pour en faire un partenaire
              stratégique de votre activité, en vous offrant un accompagnement
              de proximité ancré à Soissons et dans sa région."
            </blockquote>

            <p className="text-gray-400 leading-relaxed mb-8">
              Développeur et stratège digital, je traduis la complexité
              technique en solutions clés en main (gain de temps administratif,
              automatisation des devis, visibilité locale) rigoureusement
              conformes aux normes de souveraineté et au RGPD.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-300">
              <span className="flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="w-2 h-2 rounded-full bg-[#00FFB3]"></span> 25
                ans d'industrie & ERP
              </span>
              <span className="flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="w-2 h-2 rounded-full bg-[#6366F1]"></span> 10
                ans d'artisanat
              </span>
              <span className="flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">
                <span className="w-2 h-2 rounded-full bg-[#00FFB3]"></span>{" "}
                Ancrage Soissons (02)
              </span>
            </div>
          </div>

          {/* Colonne Visuel / Photo */}
          <div className="flex flex-col items-center">
            {/* Photo avec halo */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#00FFB3] rounded-full filter blur-2xl opacity-70 animate-pulse"></div>
              <Image
                src="/images/photo.png"
                alt="Cyril Gourdon - Fondateur d'AlicIA-GPT, expert en intégration IA pour TPE et PME"
                fill
                className="relative object-cover rounded-full shadow-2xl border-4 border-gray-800"
                sizes="(max-width: 768px) 100vw, 320px"
                priority
              />
            </div>

            {/* Encadré Nom & Titre */}
            <div className="mt-8 relative group">
              {/* Ligne de connexion visuelle avec la photo */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-transparent to-[#00FFB3]/60"></div>

              <div
                className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-xl
                    group-hover:border-[#00FFB3]/30 group-hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* Accent lumineux en haut */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#00FFB3]/60 to-transparent"></div>

                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Cyril Gourdon
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
                    <p className="text-sm text-gray-400 font-medium">
                      Fondateur d'<span className="text-white">AlicIA-GPT</span>
                    </p>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
                  </div>
                </div>
                {/* Stack technologique */}
                <div className="mt-6 w-full max-w-xs">
                  <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Stack & Partenaires
                  </p>
                  <div className="grid grid-cols-4 gap-4">
                    {partners.map((partner) => (
                      <a
                        key={partner.name}
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-center bg-white/[0.03] border border-white/10 rounded-xl p-4 ${partner.hoverColor} hover:bg-white/[0.06] transition-all duration-300`}
                        title={partner.name}
                      >
                        <Image
                          src={partner.src}
                          alt={`Logo ${partner.name}`}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
