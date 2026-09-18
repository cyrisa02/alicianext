'use client';

import { useState, useEffect } from 'react';
import Chatbot from './Chatbot';

export default function CookieConsentManager() {
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('cookie_consent');
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored as 'accepted' | 'rejected');
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie_consent', choice);
    setConsent(choice);
  };

  if (!mounted) return null; // évite un décalage d'affichage serveur/client

  return (
    <>
      {consent === 'accepted' && <Chatbot />}

      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 border-t border-gray-700 p-4 sm:p-6">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm sm:text-base">
              Nous utilisons des cookies pour améliorer votre expérience et activer notre assistant IA (AlicIA).{' '}
              <a href="/politique-confidentialite" className="underline hover:text-white">
                En savoir plus
              </a>
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => handleChoice('rejected')}
                className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={() => handleChoice('accepted')}
                className="px-4 py-2 rounded-lg bg-[#6366F1] text-white hover:bg-[#4f52c4] transition-colors"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}