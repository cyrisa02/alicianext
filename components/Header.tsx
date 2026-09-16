'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // ⬅️ équivalents Next.js
import { MenuIcon, XIcon } from './icons/UiIcons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();       // remplace useLocation().pathname
  const router = useRouter();           // remplace useNavigate()

  const navLinks = [
    { id: 'a-propos', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (pathname === '/') {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);           // remplace navigate(...)
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={handleLogoClick} className="text-2xl font-bold text-white bg-transparent border-0 cursor-pointer">
            Alic<span className="text-[#6366F1]">IA</span>-GPT
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-gray-300 hover:text-white transition-colors text-left">
                {link.label}
              </button>
            ))}
          </nav>

          <button onClick={() => handleNavClick('contact')} className="hidden md:inline-block bg-[#6366F1] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#4f52c4] transition-all duration-300 transform hover:scale-105">
            Contactez-nous
          </button>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-20 left-0 right-0 bg-[#0A0A0A] bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-gray-300 hover:text-white text-lg bg-transparent border-0 cursor-pointer">
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNavClick('contact')} className="bg-[#6366F1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#4f52c4] transition-colors">
            Contactez-nous
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;