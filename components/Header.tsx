import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { texts } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: texts.navHome },
    { href: '#about', label: texts.navAbout },
    { href: '#projects', label: texts.navProjects },
    { href: '#skills', label: texts.navSkills },
    { href: '#contact', label: texts.navContact },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a041c]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        <h1 className="text-xl md:text-2xl font-bold text-white">Saul</h1>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;