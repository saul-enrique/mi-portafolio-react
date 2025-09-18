import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import type { JourneyItem } from '../types';

const JourneyCard: React.FC<{ item: JourneyItem }> = ({ item }) => (
  <div className="bg-[#16102c] p-5 rounded-lg border border-purple-900/50 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/30">
    <p className="text-xs text-gray-400 mb-1">{item.date}</p>
    <h3 className="font-bold text-white mb-1">{item.title}</h3>
    <p className="text-sm text-gray-300">{item.institution}</p>
  </div>
);

const Journey: React.FC = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section id="journey" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16"
        dangerouslySetInnerHTML={{ __html: texts.journeyTitle }}
      />
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">{texts.journeyEducationTitle}</h3>
          <div className="space-y-6">
            {texts.educationData.map((item, index) => (
              <JourneyCard key={index} item={item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">{texts.journeyExperienceTitle}</h3>
          <div className="space-y-6">
            {texts.experienceData.map((item, index) => (
              <JourneyCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;