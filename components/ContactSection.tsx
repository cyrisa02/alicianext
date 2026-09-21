"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "", // NOUVEAU
    companySize: "", // NOUVEAU
    message: "",
    rgpd: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      setStatus("Veuillez accepter la politique de confidentialité.");
      return;
    }
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Erreur serveur");
      setStatus("Merci ! Votre message a été envoyé avec succès.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        companySize: "",
        message: "",
        rgpd: false,
      });
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Prêt à démarrer votre projet IA ? Remplissez le formulaire
            ci-dessous ou contactez-nous directement.
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Ligne 1 : Nom et Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Nom complet *"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none w-full"
              />
            </div>

            {/* Ligne 2 : Entreprise et Téléphone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="company"
                placeholder="Entreprise / Statut *"
                required
                value={formData.company}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none w-full"
              />
            </div>

            {/* NOUVEAU : Type de projet */}
            <div>
              <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none w-full"
              >
                <option value="">Type de projet *</option>
                <option value="audit">Audit & Conseil IA</option>
                <option value="formation">Formation équipes à l'IA</option>
                <option value="automatisation">
                  Automatisation administrative
                </option>
                <option value="chatbot">Chatbot intelligent</option>
                <option value="marketing">Marketing digital & SEO</option>
                <option value="site-web">Création de site web</option>
                <option value="rh">Support RH (tri CV, onboarding)</option>
                <option value="soutien_numerique">
                  Soutien numérique Senior et Débutant - Assistance Informatique
                </option>
                <option value="autre">Autre projet</option>
              </select>
            </div>

            {/* NOUVEAU : Taille de l'entreprise */}
            <div>
              <select
                name="companySize"
                required
                value={formData.companySize}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none w-full"
              >
                <option value="">Taille de l'entreprise *</option>
                <option value="solo">
                  Solo / Auto-entrepreneur / Senior et Débutant
                </option>
                <option value="2-10">2-10 salariés</option>
                <option value="10-50">10-50 salariés</option>
                <option value="50+">50+ salariés</option>
              </select>
            </div>

            {/* MODIFIÉ : Message plus guidé */}
            <div>
              <textarea
                name="message"
                placeholder={`Décrivez votre projet en quelques lignes :
- Vos process actuels (comment faites-vous aujourd'hui ?)
- Les outils que vous utilisez (logiciels, Excel, etc.)
- Vos objectifs (gain de temps, réduction des coûts, etc.)
- Vos soucis informatiques
- Toute autre information utile *`}
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none resize-none"
              ></textarea>
            </div>

            {/* Checkbox RGPD */}
            <div className="flex items-start">
              <input
                id="rgpd"
                name="rgpd"
                type="checkbox"
                required
                checked={formData.rgpd}
                onChange={handleChange}
                className="h-4 w-4 text-[#6366F1] bg-gray-800 border-gray-600 rounded focus:ring-[#6366F1] mt-1"
              />
              <label
                htmlFor="rgpd"
                className="ml-3 block text-sm text-gray-400"
              >
                J'accepte que mes données soient utilisées pour me recontacter.{" "}
                <a
                  href="/politique-confidentialite"
                  className="text-[#6366F1] hover:underline"
                >
                  Politique de confidentialité
                </a>{" "}
                *
              </label>
            </div>

            {/* Bouton d'envoi */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#6366F1] text-white font-bold py-3 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.5)] transform hover:scale-105"
              >
                Envoyer
              </button>
            </div>
          </form>

          {status && (
            <p
              className={`mt-4 text-center text-sm ${
                status.includes("Merci") ? "text-green-400" : "text-gray-400"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
