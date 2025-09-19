import React from 'react';
import { JourneyItem, Project, Skill, SkillCategory, Social, Tool } from './types';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiGit, SiDocker, SiVite, SiTailwindcss
} from 'react-icons/si';

export const translations = {
  en: {
    // Header
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',

    // Hero
    heroTitle: "Hey, I'm Saul",
    heroRoles: ['Web Developer', 'UI/UX Enthusiast', 'Problem Solver'],
    heroSubtitle1: 'Building your dream',
    heroSubtitle2: 'pixel by pixel!',
    heroButton: 'Read More',

    // About
    aboutTitle: 'Why hire me for your <span class="text-gradient">next project?</span>',
    aboutDescription: 'A self-taught, passionate, and proactive developer with a solid foundation in web development. Driven by the desire to learn and build high-quality applications, my personal projects reflect my dedication and problem-solving abilities.',
    aboutButtonPortfolio: 'Portfolio',
    aboutButtonCV: 'Download CV',
    aboutExperienceNumber: '+1000 Hours',
    aboutExperienceText: 'Of Code',
    aboutProjectsNumber: '5+ Projects',
    aboutProjectsText: 'Completed',

    // Journey
    journeyTitle: 'My <span class="text-gradient">Journey</span>',
    journeyEducationTitle: 'Education',
    journeyExperienceTitle: 'Experience',
    educationData: [{ date: '2023 - Present', title: 'Self-Taught Learning', institution: 'Online Platforms & Personal Projects' }] as JourneyItem[],
    experienceData: [{ date: '2022 - Present', title: 'Freelance Web Developer', institution: 'Building projects for small businesses' }] as JourneyItem[],

    // Projects
    projectsTitle: 'My <span class="text-gradient">Creations</span>',
    projectCardLiveButton: 'Live Demo',
    projectCardRepoButton: 'GitHub',
    projectsData: [
      {
        title: 'MLB Tracker',
        description: 'A web application to track real-time MLB baseball game results, standings, and player statistics. Built with modern web technologies.',
        imageUrl: '/images/mlb-tracker-screenshot.png',
        liveUrl: 'https://mlb-tracker-kohl.vercel.app/',
        repoUrl: 'https://github.com/saul-enrique/mlb-tracker'
      },
      {
        title: 'React Homepage',
        description: "A customizable and dynamic homepage built with React, designed to be your browser's starting point. Includes widgets for weather, clock, and a to-do list.",
        imageUrl: '/images/homepage.png',
        liveUrl: 'https://mi-react-homepage.vercel.app/',
        repoUrl: 'https://github.com/saul-enrique/mi-react-homepage'
      },
      {
        title: 'Project Three (Placeholder)',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: 'https://picsum.photos/seed/project3/400/300',
        liveUrl: '#',
        repoUrl: '#'
      }
    ] as Project[],

    // Skills
    skillsTitle: 'My <span class="text-gradient">Tech Stack</span>',
    skillsIntro: 'As a passionate self-taught developer, I have built my skill set focusing on the most in-demand technologies for modern web development.',
    skillsToolsTitle: 'Tools',
    skillsSkillsTitle: 'Skills',
    skillCategories: {
      [SkillCategory.FRONT_END]: 'Front-end',
      [SkillCategory.BACK_END]: 'Back-end',
      [SkillCategory.WEB_DEV]: 'Web Dev',
      [SkillCategory.SOFTWARE_DEV]: 'Software Dev'
    },
    skillsData: [
      { name: 'HTML5 & CSS3', category: [SkillCategory.FRONT_END, SkillCategory.WEB_DEV] },
      { name: 'Responsive Design', category: [SkillCategory.FRONT_END, SkillCategory.WEB_DEV] },
      { name: 'REST APIs', category: [SkillCategory.BACK_END, SkillCategory.WEB_DEV] },
      { name: 'Git Flow', category: [SkillCategory.SOFTWARE_DEV] },
    ] as Skill[],
    toolsData: [
      { name: 'JavaScript', icon: <SiJavascript size={24} className="mr-3 text-yellow-400" />, category: [SkillCategory.FRONT_END, SkillCategory.BACK_END, SkillCategory.WEB_DEV] },
      { name: 'TypeScript', icon: <SiTypescript size={24} className="mr-3 text-blue-500" />, category: [SkillCategory.FRONT_END, SkillCategory.BACK_END, SkillCategory.WEB_DEV] },
      { name: 'React', icon: <SiReact size={24} className="mr-3 text-sky-400" />, category: [SkillCategory.FRONT_END, SkillCategory.WEB_DEV] },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} className="mr-3 text-teal-400" />, category: [SkillCategory.FRONT_END, SkillCategory.WEB_DEV] },
      { name: 'Node.js', icon: <SiNodedotjs size={24} className="mr-3 text-green-500" />, category: [SkillCategory.BACK_END] },
      { name: 'Git', icon: <SiGit size={24} className="mr-3 text-red-500" />, category: [SkillCategory.SOFTWARE_DEV] },
    ] as Tool[],

    // Contact
    contact: {
      title: 'Get in <span class="text-gradient">Touch</span>',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      submitButton: 'Send Message',
      successMessage: 'Thank you for your message! I will get back to you soon.',
      validationError: 'Please fill out all fields.',
      errorMessage: 'Something went wrong. Please try again.',
    },
    socials: [] as Social[],
    footerText: '© 2024 Saul. All rights reserved.',
  },
  es: {
    // Spanish translations
    navHome: 'Inicio',
    navAbout: 'Sobre mí',
    navProjects: 'Proyectos',
    navSkills: 'Stack',
    navContact: 'Contacto',
    heroTitle: 'Hola, soy Saúl',
    heroRoles: ['Desarrollador Web', 'Entusiasta UI/UX', 'Solucionador de Problemas'],
    heroSubtitle1: 'Construyendo tu sueño',
    heroSubtitle2: 'píxel a píxel!',
    heroButton: 'Leer Más',
    aboutTitle: '¿Por qué contratarme para tu <span class="text-gradient">próximo proyecto?</span>',
    aboutDescription: 'Un desarrollador autodidacta, apasionado y proactivo, con una sólida base en desarrollo web. Impulsado por el deseo de aprender y construir aplicaciones de alta calidad, mis proyectos personales reflejan mi dedicación y mi capacidad para resolver problemas.',
    aboutButtonPortfolio: 'Portafolio',
    aboutButtonCV: 'Descargar CV',
    aboutExperienceNumber: '+1000 Horas',
    aboutExperienceText: 'De Código',
    aboutProjectsNumber: '5+ Proyectos',
    aboutProjectsText: 'Completados',
    journeyTitle: 'Mi <span class="text-gradient">Trayectoria</span>',
    journeyEducationTitle: 'Educación',
    journeyExperienceTitle: 'Experiencia',
    educationData: [{ date: '2023 - Presente', title: 'Aprendizaje Autodidacta', institution: 'Plataformas en Línea y Proyectos Personales' }] as JourneyItem[],
    experienceData: [{ date: '2022 - Presente', title: 'Desarrollador Web Freelance', institution: 'Creando proyectos para pequeñas empresas' }] as JourneyItem[],
    projectsTitle: 'Mis <span class="text-gradient">Creaciones</span>',
    projectCardLiveButton: 'Ver Demo',
    projectCardRepoButton: 'GitHub',
    projectsData: [
      {
        title: 'MLB Tracker',
        description: 'Una aplicación web para seguir en tiempo real los resultados de los partidos de la MLB, las clasificaciones y las estadísticas de los jugadores.',
        imageUrl: '/images/mlb-tracker-screenshot.png',
        liveUrl: 'https://mlb-tracker-kohl.vercel.app/',
        repoUrl: 'https://github.com/saul-enrique/mlb-tracker'
      },
      {
        title: 'Homepage con React',
        description: 'Una página de inicio personalizable y dinámica construida con React, diseñada para ser el punto de partida de tu navegador. Incluye widgets para el tiempo, reloj y lista de tareas.',
        imageUrl: '/images/homepage.png',
        liveUrl: 'https://mi-react-homepage.vercel.app/',
        repoUrl: 'https://github.com/saul-enrique/mi-react-homepage'
      },
      {
        title: 'Proyecto Tres (Ejemplo)',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: 'https://picsum.photos/seed/project3/400/300',
        liveUrl: '#',
        repoUrl: '#'
      }
    ] as Project[],
    skillsTitle: 'Mi <span class="text-gradient">Stack Tecnológico</span>',
    skillsIntro: 'Como desarrollador apasionado y autodidacta, he construido mi conjunto de habilidades centrándome en las tecnologías más demandadas para el desarrollo web moderno.',
    skillsToolsTitle: 'Herramientas',
    skillsSkillsTitle: 'Habilidades',
    skillCategories: {
      [SkillCategory.FRONT_END]: 'Front-end',
      [SkillCategory.BACK_END]: 'Back-end',
      [SkillCategory.WEB_DEV]: 'Desarrollo Web',
      [SkillCategory.SOFTWARE_DEV]: 'Desarrollo de Software'
    },
    skillsData: [
        { name: 'HTML5 & CSS3', category: [SkillCategory.FRONT_END, SkillCategory.WEB_DEV] },
        { name: 'Diseño Responsivo', category: [SkillCategory.FRONT_END, SkillCategory.WEB_DEV] },
        { name: 'APIs REST', category: [SkillCategory.BACK_END, SkillCategory.WEB_DEV] },
        { name: 'Flujo de Git', category: [SkillCategory.SOFTWARE_DEV] },
    ] as Skill[],
    toolsData: [
      { name: 'JavaScript', icon: <SiJavascript size={24} className="mr-3 text-yellow-400" />, category: [SkillCategory.FRONT_END, SkillCategory.BACK_END, SkillCategory.WEB_DEV] },
      { name: 'TypeScript', icon: <SiTypescript size={24} className="mr-3 text-blue-500" />, category: [SkillCategory.FRONT_END, SkillCategory.BACK_END, SkillCategory.WEB_DEV] },
      { name: 'React', icon: <SiReact size={24} className="mr-3 text-sky-400" />, category: [SkillCategory.FRONT_END, SkillCategory.WEB_DEV] },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} className="mr-3 text-teal-400" />, category: [SkillCategory.FRONT_END, SkillCategory.WEB_DEV] },
      { name: 'Node.js', icon: <SiNodedotjs size={24} className="mr-3 text-green-500" />, category: [SkillCategory.BACK_END] },
      { name: 'Git', icon: <SiGit size={24} className="mr-3 text-red-500" />, category: [SkillCategory.SOFTWARE_DEV] },
    ] as Tool[],
    contact: {
      title: 'Ponte en <span class="text-gradient">Contacto</span>',
      namePlaceholder: 'Tu Nombre',
      emailPlaceholder: 'Tu Email',
      messagePlaceholder: 'Tu Mensaje',
      submitButton: 'Enviar Mensaje',
      successMessage: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
      validationError: 'Por favor, rellena todos los campos.',
      errorMessage: 'Algo salió mal. Por favor, inténtalo de nuevo.',
    },
    socials: [] as Social[],
    footerText: '© 2024 Saúl. Todos los derechos reservados.',
  },
};