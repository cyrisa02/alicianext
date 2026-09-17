import React from "react";
// ⚠️ Header, Footer et Chatbot supprimés car déjà gérés par le layout.tsx racine.
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased">
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
