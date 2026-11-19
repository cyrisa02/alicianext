import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "FAQ & Questions Fréquentes sur l'IA | AlicIA-GPT",
    template: "%s | AlicIA-GPT",
  },
  description:
    "Réponses claires à vos questions sur l'intelligence artificielle, l'automatisation, la sécurité des données (RGPD) et nos tarifs. Votre agence de conseil IA à Soissons, Aisne, Oise, Marne et nord 77.",
  keywords: [
    "FAQ intelligence artificielle",
    "questions fréquentes automatisation IA",
    "sécurité données IA RGPD",
    "tarifs consultant IA",
    "délai mise en place IA",
    "accompagnement IA Soissons",
    "modèle IA local Ollama",
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
  ],
  authors: [{ name: "Cyril Gourdon" }],
  openGraph: {
    title: "FAQ & Questions Fréquentes sur l'IA | AlicIA-GPT",
    description:
      "Tout savoir sur nos services d'IA : sécurité RGPD, tarifs, délais et accompagnement local à Soissons, Aisne, Oise, Marne et nord 77.",
    type: "website",
    locale: "fr_FR",
    siteName: "AlicIA-GPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ & Questions Fréquentes sur l'IA | AlicIA-GPT",
    description:
      "Tout savoir sur nos services d'IA : sécurité RGPD, tarifs, délais et accompagnement local à Soissons, Aisne, Oise, Marne et nord 77.",
  },
};

const faqs = [
  {
    question: "C'est quoi un consultant en intelligence artificielle ?",
    answer:
      "AlicIA-GPT est une agence de conseil en intelligence artificielle basée à Soissons. Nous accompagnons artisans, commerçants et PME dans l'automatisation de leurs tâches administratives, comptables, RH et marketing grâce à des agents IA sur-mesure, partout en France.",
  },
  {
    question: "Mes données sont-elles en sécurité avec vos solutions d'IA ?",
    answer:
      "Oui. Nous privilégions des modèles d'IA déployés localement (via Ollama) plutôt que des solutions cloud, afin que vos données sensibles ne quittent jamais votre périmètre de contrôle. Cette approche garantit une conformité totale avec le RGPD.",
  },
  {
    question: "Combien coûte un accompagnement en automatisation IA ?",
    answer:
      "Nos tarifs varient selon vos besoins : un audit initial démarre autour de 150€, les formules mensuelles d'automatisation complète autour de 99 à 120€/mois. Contactez-nous pour un devis personnalisé adapté à votre activité.",
  },
  {
    question: "Combien de temps prend la mise en place d'une automatisation ?",
    answer:
      "La plupart de nos setups (devis automatisés, comptabilité, newsletters) sont opérationnels en une à deux semaines. Un audit initial de vos process actuels permet d'estimer précisément le délai selon la complexité de votre activité.",
  },
  {
    question: "Intervenez-vous en dehors de Soissons ?",
    answer:
      "Oui, nous accompagnons des entreprises dans l'Aisne, l'Oise, la Marne et le nord de la Seine-et-Marne. La majorité de nos interventions se font à distance, avec des rendez-vous en présentiel possibles selon votre localisation.",
  },
  {
    question: "Le chatbot du site utilise-t-il mes données personnelles ?",
    answer:
      "Le chatbot ne s'active qu'après votre consentement via notre bannière de cookies. Les messages échangés sont traités par une API Groq uniquement pour générer une réponse non mémorisée, et ne sont pas revendus à des tiers.",
  },
  {
    question: "Intervenez-vous à Reims / Laon / Château-Thierry ?",
    answer:
      "Oui, sans problème, nous pouvons vous accompagner dans vos projets, soit à distance soit sur place si nécessaire.",
  },
  {
    question: "Proposez-vous des formations IA dans l'Aisne ?",
    answer:
      "Oui, c'est possible de dispenser des formations IA dans l'Aisne, Reims et sa proche zone, et dans l'Oise comme à Compiègne, Noyant.",
  },
  {
    question: "Et si je ne suis pas à l'aise avec l'informatique ?",
    answer:
      "Ce n'est pas un problème pour moi, je me mets à votre niveau pour vous expliquer simplement le fonctionnement et ses intérêts.",
  },
  {
    question: "Combien de temps gagne-t-on vraiment avec l'automatisation ?",
    answer:
      "Ça dépend de votre projet, bien paramétrée, une IA peut vous faire gagner beaucoup de temps, c'est vrai dans mon business.",
  },
  {
    question: "Est-ce que ça remplace mon comptable ou mon assistant ?",
    answer:
      "Non, absolument pas. Nos agents IA sont conçus pour assister vos collaborateurs, pas les remplacer. L'IA prend en charge les tâches répétitives (saisie de factures, tri de mails, pré-remplissage de devis, relances), tandis que votre comptable conserve son rôle essentiel de validation, de conseil stratégique et de dépôt de la liasse fiscale. Résultat : votre assistant gagne 5 à 10 heures par semaine sur de l'administratif pur, et votre comptable se concentre sur ce qui apporte réellement de la valeur à votre entreprise.",
  },
  {
    question: "Faut-il des compétences techniques pour utiliser vos outils ?",
    answer:
      "Non. Nous formons chaque client en une heure environ, avec des exemples concrets tirés de son activité, sans jargon technique. Nos outils sont pensés pour des artisans et commerçants sans bagage informatique.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <JsonLd data={buildFaqSchema(faqs)} />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          Questions Fréquentes
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-900/50 border border-gray-800 rounded-xl p-5 open:border-[#6366F1] transition-colors"
            >
              <summary className="cursor-pointer text-white font-semibold list-none flex justify-between items-center">
                {faq.question}
                <span className="ml-4 text-[#6366F1] group-open:rotate-45 transition-transform text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-400 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
