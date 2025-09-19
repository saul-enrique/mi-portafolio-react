import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section id="about" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"
        dangerouslySetInnerHTML={{ __html: texts.aboutTitle }}
      />
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img
  src="/images/foto-perfil.png"
  alt="Foto de perfil de Saúl Enrique"
  className="rounded-lg object-cover w-full h-full shadow-lg shadow-purple-900/40"
/>
        </div>
        <div className="text-center md:text-left">
          <p className="text-gray-300 leading-relaxed mb-6">
            {texts.aboutDescription}
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <a href="#projects" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:opacity-90 transition-opacity">
              {texts.aboutButtonPortfolio}
            </a>
            <a href="#" className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 transition-colors">
              {texts.aboutButtonCV}
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-8">
            <div>
              <p className="text-2xl font-bold text-gradient">{texts.aboutExperienceNumber}</p>
              <p className="text-gray-400">{texts.aboutExperienceText}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gradient">{texts.aboutProjectsNumber}</p>
              <p className="text-gray-400">{texts.aboutProjectsText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;