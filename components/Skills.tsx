import React, { useState, useMemo, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const { texts } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(SkillCategory.FRONT_END);

  const categories = Object.values(SkillCategory);

  const filteredSkills = useMemo(() => {
    return texts.skillsData.filter(skill => skill.category.includes(activeCategory));
  }, [activeCategory, texts.skillsData]);
  
  const filteredTools = useMemo(() => {
    return texts.toolsData.filter(tool => tool.category.includes(activeCategory));
  }, [activeCategory, texts.toolsData]);

  return (
    <section id="skills" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4"
        dangerouslySetInnerHTML={{ __html: texts.skillsTitle }}
      />
      <p className="max-w-3xl mx-auto text-center text-gray-300 mb-16 px-4">
        {texts.skillsIntro}
      </p>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-[#16102c] text-gray-300 hover:bg-[#20163d]'
            }`}
          >
            {texts.skillCategories[category]}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">{texts.skillsToolsTitle}</h3>
          <div className="space-y-4">
            {filteredTools.map((tool) => (
              <div key={tool.name} className="flex items-center bg-[#16102c] p-4 rounded-lg transition-transform hover:scale-105">
                {tool.icon}
                <span className="text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">{texts.skillsSkillsTitle}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="bg-[#16102c] px-5 py-3 rounded-lg text-white font-medium transition-transform hover:scale-105 shadow-md">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;