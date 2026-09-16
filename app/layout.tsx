import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// ⬇️ Ajoute ces imports (adapte le chemin si tu n'utilises pas l'alias @)
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AlicIA-GPT | Consultant IA à Soissons',
  description: 'Expert en Intelligence Artificielle, automatisation et chatbots pour professionnels et particuliers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* ⬇️ Tes composants sont maintenant bien définis */}
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}