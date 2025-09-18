import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { texts } = useContext(LanguageContext);
  const [text, setText] = useState('');
  const roles = texts.heroRoles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    // Reset typing animation when language changes
    setText('');
    setRoleIndex(0);
    setIsDeleting(false);
    setTypingSpeed(150);
  }, [texts]);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, roles, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a041c] via-transparent to-[#0a041c]"></div>
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          {texts.heroTitle} <span className="text-gradient">{text}</span>
          <span className="animate-ping">|</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          {texts.heroSubtitle1} <span className="text-gradient font-semibold">{texts.heroSubtitle2}</span>
        </p>
        <a href="#about" className="mt-8 inline-block px-8 py-3 border border-purple-500 text-white rounded-md hover:bg-purple-500/20 transition-all duration-300">
          {texts.heroButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;