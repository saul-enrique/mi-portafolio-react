import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; liveDemoText: string; githubText: string; }> = ({ project, liveDemoText, githubText }) => (
  <div className="bg-[#16102c] rounded-lg overflow-hidden border border-purple-900/50 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/40">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">{project.description}</p>
      <div className="flex justify-end gap-4 mt-4">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-md hover:opacity-90 transition-opacity">
          {liveDemoText}
        </a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors">
          {githubText}
        </a>
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16"
        dangerouslySetInnerHTML={{ __html: texts.projectsTitle }}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {texts.projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            liveDemoText={texts.projectCardLiveButton}
            githubText={texts.projectCardRepoButton}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;