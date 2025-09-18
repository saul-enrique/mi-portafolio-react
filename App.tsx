import React, { useRef, useEffect, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageContext } from './contexts/LanguageContext';

const App: React.FC = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const { texts } = useContext(LanguageContext);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (appRef.current) {
        appRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        appRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={appRef} className="spotlight-container bg-[#0a041c] font-sans">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 text-gray-500">
        <div className="flex justify-center gap-6 mb-4">
          {texts.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p>{texts.footerText}</p>
      </footer>
    </div>
  );
};

export default App;