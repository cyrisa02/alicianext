import type { Metadata } from "next";
import Image from "next/image";
import ContactCTAButton from "../../components/ContactCTAButton";

export const metadata: Metadata = {
  title: {
    default: "Ressources Humaines & Automatisation IA pour PME | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Agents IA souverains pour l'analyse de CV, l'onboarding et la gestion documentaire (MemoBot PME). Simplifiez vos RH à Soissons, dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne (77).",
  keywords: [
    "ressources humaines IA",
    "automatisation RH",
    "analyse de CV par IA",
    "onboarding intelligent",
    "recrutement automatisé",
    "gestion des talents",
    "assistant interne PME",
    "MemoBot PME",
    "artisans",
    "TPE",
    "PME",
    "Soissons",
    "Laon",
    "Château-Thierry",
    "Compiègne",
    "Meaux",
    "Reims",
    "Aisne",
    "Oise",
    "Marne",
    "Seine-et-Marne",
    "consultant RH IA",
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "Ressources Humaines & IA | AlicIA-GPT",
    description:
      "Agents IA pour l'analyse de CV, l'onboarding et l'automatisation RH. Simplifiez votre recrutement à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ressources Humaines & IA | AlicIA-GPT",
    description:
      "Agents IA pour l'analyse de CV, l'onboarding et l'automatisation RH. Simplifiez votre recrutement à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const RHPage = () => {
  // Données structurées JSON-LD pour le SEO Local et GEO (ChatGPT Search / Google AI Overviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Automatisation des Ressources Humaines et Assistant Documentaire par IA",
    provider: {
      "@type": "LocalBusiness",
      name: "AlicIA-GPT",
      founder: "Cyril Gourdon",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Soissons",
        postalCode: "02200",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      areaServed: ["Aisne", "Marne", "Oise", "Seine-et-Marne"],
    },
    description:
      "Solutions RH propulsées par l'IA : analyse de CV, onboarding automatisé et base de connaissances sécurisée (MemoBot PME) pour TPE et PME.",
  };

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen pt-24 pb-16">
      {/* Injection du schéma JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* En-tête de page */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#00FFB3] font-semibold text-sm uppercase tracking-wider mb-3">
            Productivité & Gestion des Talents
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ressources Humaines Intelligentes : Automatisez le recrutement et
            l'onboarding
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Gagnez un temps précieux sur la gestion de vos équipes et de vos
            candidatures grâce à des agents IA souverains et sécurisés (Aisne,
            Marne, Oise, 77).
          </p>
        </div>

        {/* Encadré d'accroche */}
        <div className="mb-12 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366F1] to-[#00FFB3]"></div>
          <p className="text-gray-200 text-xl italic font-medium leading-relaxed">
            “Recruter et intégrer de nouveaux collaborateurs ne doit plus être
            une charge administrative lourde. Laissez l'IA trier et structurer,
            pour vous concentrer sur l'humain.”
          </p>
        </div>

        {/* Hero : Image MemoBot PME + présentation */}
        <section className="mb-16">
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 shadow-2xl mb-8">
            <Image
              src="/images/memobot.jpg"
              alt="MemoBot PME - Assistant interne sécurisé pour PME : sécurisation des documents, RAG et analyse IA, chat collaborateur"
              width={1200}
              height={600}
              priority
              className="w-full h-auto object-cover hover:scale-101 transition-transform duration-500"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#6366F1]/20 text-[#6366F1] text-xs font-bold px-3 py-1 rounded-full mb-3">
              Solution SaaS Propriétaire
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              MemoBot PME — Votre assistant interne sécurisé et souverain
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              MemoBot PME transforme vos documents internes (procédures,
              contrats, guides d'onboarding au format PDF ou Word) en une{" "}
              <strong className="text-white">
                base de connaissances vivante et sécurisée
              </strong>
              . Vos collaborateurs interrogent l'assistant en langage naturel :
              notre moteur RAG analyse, mémorise et répond instantanément en
              toute confidentialité, sans aucune fuite de données vers
              l'extérieur.
            </p>
          </div>
        </section>

        {/* Section Problématique / Promesse */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vous subissez la complexité des tâches RH sans disposer d'un
              service dédié ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              CV qui s'entassent sans être triés à temps, manque de clarté dans
              les parcours d'intégration des nouveaux arrivants, suivi des
              contrats et des plannings chronophage... Pour les dirigeants de
              TPE et PME, chaque recrutement est un parcours du combattant.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fort de{" "}
              <strong className="text-white">
                25 ans d'expérience industrielle et de management d'équipes
              </strong>
              , je vous propose des outils pragmatiques et automatisés
              rigoureusement conformes au{" "}
              <strong className="text-[#00FFB3]">RGPD et à l'IA Act</strong>.
            </p>
          </div>
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ce que nos agents IA automatisent :
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Analyse
                instantanée et scoring de pertinence des CV reçus.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Onboarding
                fluide grâce aux check-lists et guides interactifs MemoBot.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Génération
                et suivi automatisé des contrats et formalités obligatoires.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FFB3] font-bold">✓</span> Tableaux de
                bord de suivi RH clairs et sans effort administratif.
              </li>
            </ul>
          </div>
        </div>

        {/* Services RH proposés */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Nos accompagnements RH sur-mesure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Analyse de CV par IA
              </h3>
              <p className="text-sm text-gray-400">
                Tri automatique, extraction des compétences clés, scoring par
                rapport à votre fiche de poste et classement instantané des
                meilleurs profils.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Onboarding Intelligent
              </h3>
              <p className="text-sm text-gray-400">
                Parcours d'intégration digitalisé, mise à disposition des
                procédures via MemoBot et autonomisation rapide des nouveaux
                salariés dès leur premier jour.
              </p>
            </div>
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Reporting & Suivi RH
              </h3>
              <p className="text-sm text-gray-400">
                Centralisation des indicateurs clés (absences, formations,
                échéances contractuelles) et génération de rapports clairs
                exportables.
              </p>
            </div>
          </div>
        </section>

        {/* Grille Tarifaire Transparente & Financements */}
        <section className="mb-16 p-8 bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Des formules simples et transparentes
            </h2>
            <p className="text-gray-400 text-sm">
              Nos prestations d'accompagnement et de mise en place d'outils RH
              peuvent bénéficier de prises en charge dans le cadre de la
              formation professionnelle (**OPCO**).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#00FFB3] uppercase tracking-wider">
                  Setup Initial
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Audit & Setup Analyse CV IA
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  250 €{" "}
                  <span className="text-xs font-normal text-gray-400">HT</span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Analyse de vos processus de recrutement actuels, configuration
                  de l'agent de tri de CV et premier mois d'utilisation offert.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Idéal pour fluidifier vos embauches immédiates
              </div>
            </div>

            <div className="p-6 bg-gray-900 border border-[#6366F1]/50 rounded-xl flex flex-col justify-between relative shadow-lg shadow-[#6366F1]/10">
              <div className="absolute -top-3 right-6 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus complet
              </div>
              <div>
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                  Accompagnement Continu
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  Formule « RH Serein »
                </h3>
                <p className="text-2xl font-extrabold text-white mb-4">
                  150 €{" "}
                  <span className="text-xs font-normal text-gray-400">
                    HT / mois
                  </span>
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Analyse CV illimitée, onboarding digitalisé, gestion des
                  contrats, reporting RH mensuel et 1 heure de support dédiée
                  par mois.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
                ✓ Sérénité administrative garantie
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 italic">
            🛡️ Première heure satisfait ou remboursé — Interventions de
            proximité dans l'Aisne, la Marne, l'Oise et la Seine-et-Marne.
          </div>
        </section>

        {/* Section Ancrage Local */}
        <section className="mb-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📍 Proximité et accompagnement local en Hauts-de-France & Grand Est
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Basés à Soissons, nous accompagnons les artisans, commerçants,
            associations et PME locales dans leur gestion RH. Discrétion,
            rigueur et réactivité garanties dans l'Aisne (02), la Marne (51),
            l'Oise (60) et la Seine-et-Marne (77).
          </p>
        </section>

        {/* Appel à l'action final (CTA) */}
        <div className="text-center bg-gradient-to-r from-[#6366F1]/10 via-gray-900 to-[#00FFB3]/10 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à transformer votre gestion des ressources humaines ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Discutons de vos besoins lors d'un diagnostic initial offert de 20
            minutes et découvrez comment automatiser vos tâches RH dès
            aujourd'hui.
          </p>
          <div className="inline-block">
            <ContactCTAButton label="Demander un audit RH gratuit" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RHPage;
