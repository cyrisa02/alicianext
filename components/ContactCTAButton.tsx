'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function ContactCTAButton({ label }: { label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    if (pathname === '/') {
      scrollToSection('contact');
    } else {
      router.push('/#contact');
      setTimeout(() => scrollToSection('contact'), 100);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 bg-[#6366F1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#4f52c4] transition-colors duration-300"
    >
      {label}
    </button>
  );
}