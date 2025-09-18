// FIX: Import React to use React.createElement for icons, resolving JSX-related errors in a .ts file.
import React from 'react';
import { JourneyItem, Skill, Tool, SkillCategory, Project } from './types';

const frontEnd = SkillCategory.FRONT_END;
const backEnd = SkillCategory.BACK_END;
const webDev = SkillCategory.WEB_DEV;
const softwareDev = SkillCategory.SOFTWARE_DEV;

const en = {
    // Header
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navSkills: 'Stack',
    navContact: 'Contact',

    // Hero
    heroTitle: 'Hey, I am',
    heroRoles: ['Web Developer', 'UI/UX Enthusiast', 'Problem Solver'],
    heroSubtitle1: 'Building your dream',
    heroSubtitle2: 'pixel by pixel!',
    heroButton: 'Read More',

    // About
    aboutTitle: 'Why hire me for your <span class="text-gradient">next project?</span>',
    aboutDescription: 'A passionate and proactive self-taught developer with a strong foundation in web development. Driven by a desire to learn and build high-quality applications, my personal projects reflect my dedication and problem-solving skills.',
    aboutButtonPortfolio: 'Portfolio',
    aboutButtonCV: 'Download CV',
    aboutExperienceNumber: '+1000 Hours',
    aboutExperienceText: 'Coding',
    aboutProjectsNumber: '5+ Projects',
    aboutProjectsText: 'Personal',

    // FIX: Add Journey section translations to resolve errors in Journey.tsx component.
    // Journey
    journeyTitle: 'My <span class="text-gradient">Journey</span>',
    journeyEducationTitle: 'Education',
    journeyExperienceTitle: 'Experience',
    educationData: [
      {
        date: '2023 - Present',
        title: 'Self-Taught Learning',
        institution: 'Online Platforms & Personal Projects',
      },
      {
        date: '2018 - 2022',
        title: 'B.A. in International Relations',
        institution: 'National University',
      },
    ] as JourneyItem[],
    experienceData: [
      {
        date: '2022 - Present',
        title: 'Freelance Web Developer',
        institution: 'Building projects for small businesses',
      },
      {
        date: '2021',
        title: 'Project Coordinator',
        institution: 'A Non-Profit Organization',
      },
    ] as JourneyItem[],

    // Projects
    projectsTitle: 'My <span class="text-gradient">Projects</span>',
    projectCardLiveButton: 'Live Demo',
    projectCardRepoButton: 'GitHub',
    projectsData: [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce website built with React, Node.js, and a PostgreSQL database. Includes user authentication, product catalog, and a payment gateway.',
        imageUrl: 'https://picsum.photos/seed/project1/400/300',
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Task Management App',
        description: 'A responsive task management application that helps users organize their daily tasks with a clean and intuitive drag-and-drop interface.',
        imageUrl: 'https://picsum.photos/seed/project2/400/300',
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Personal Blog',
        description: 'A static-generated blog using a modern framework like Next.js, with content managed through a headless CMS. Optimized for performance and SEO.',
        imageUrl: 'https://picsum.photos/seed/project3/400/300',
        liveUrl: '#',
        repoUrl: '#',
      },
    ] as Project[],

    // Skills
    skillsTitle: 'My <span class="text-gradient">Tech Stack</span>',
    skillsIntro: 'As a passionate and self-taught developer, I have built my skill set focusing on the most in-demand technologies for modern web development. My approach is practical, using each of these tools to build functional and robust projects from start to finish.',
    skillsToolsTitle: 'Tools',
    skillsSkillsTitle: 'Skills',
    skillCategories: {
        [SkillCategory.FRONT_END]: 'Front-end',
        [SkillCategory.BACK_END]: 'Back-end',
        [SkillCategory.WEB_DEV]: 'Web Development',
        [SkillCategory.SOFTWARE_DEV]: 'Software Development'
    },
    skillsData: [
        { name: 'HTML5', category: [frontEnd, webDev] },
        { name: 'React', category: [frontEnd, webDev] },
        { name: 'CSS', category: [frontEnd, webDev] },
        { name: 'JavaScript', category: [frontEnd, backEnd, webDev] },
        { name: 'Tailwind CSS', category: [frontEnd, webDev] },
        { name: 'Bootstrap5', category: [frontEnd, webDev] },
        { name: 'TypeScript', category: [frontEnd, backEnd, webDev] },
        { name: 'Node.js', category: [backEnd, webDev] },
        { name: 'Python', category: [backEnd, softwareDev] },
        { name: 'SQL', category: [backEnd, softwareDev] },
        { name: 'C#', category: [softwareDev] },
    ] as Skill[],
    // FIX: Replaced JSX syntax with React.createElement to be compatible with .ts files.
    toolsData: [
        { 
            name: 'Visual Studio Code', 
            icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" })),
            category: [frontEnd, backEnd, webDev, softwareDev]
        },
        { 
            name: 'Git', 
            icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" })),
            category: [frontEnd, backEnd, webDev, softwareDev]
        },
        { 
            name: 'GitHub', 
            icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-3", fill: "currentColor", viewBox: "0 0 16 16" }, React.createElement('path', { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" })),
            category: [frontEnd, backEnd, webDev, softwareDev]
        },
        { 
            name: 'Figma', 
            icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-3", fill: "currentColor", viewBox: "0 0 24 24" }, React.createElement('path', { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.19 0 4.21-.71 5.93-1.91.31-.22.38-.66.15-.96-.23-.3-.66-.38-.96-.15C15.6 20.24 13.9 21 12 21c-4.96 0-9-4.04-9-9s4.04-9 9-9c2.38 0 4.54.93 6.16 2.45.28.28.72.3.99.03s.3-.72.03-.99C17.06 3.4 14.65 2 12 2zm7.1 9c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h2.1L13 14.1V10c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1h-2.1L19.1 11z" })),
            category: [frontEnd]
        },
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
    
    // Socials
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com', // Replace with your URL
        icon: React.createElement('svg', { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 16 16" }, React.createElement('path', { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" })),
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com', // Replace with your URL
        icon: React.createElement('svg', { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 16 16" }, React.createElement('path', { d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" })),
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com', // Replace with your URL
        icon: React.createElement('svg', { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 16 16" }, React.createElement('path', { d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" })),
      }
    ],

    // Footer
    footerText: '© 2024 Saul. All rights reserved.',
};

const es = {
    // Header
    navHome: 'Inicio',
    navAbout: 'Sobre mí',
    navProjects: 'Proyectos',
    navSkills: 'Stack',
    navContact: 'Contacto',

    // Hero
    heroTitle: 'Hola, soy',
    heroRoles: ['Desarrollador Web', 'Entusiasta UI/UX', 'Solucionador de Problemas'],
    heroSubtitle1: 'Construyendo tu sueño',
    heroSubtitle2: 'píxel a píxel!',
    heroButton: 'Leer Más',
    
    // About
    aboutTitle: '¿Por qué contratarme para tu <span class="text-gradient">próximo proyecto?</span>',
    aboutDescription: 'Un desarrollador autodidacta, apasionado y proactivo, con una sólida base en desarrollo web. Impulsado por el deseo de aprender y construir aplicaciones de alta calidad, mis proyectos personales reflejan mi dedicación y mi capacidad para resolver problemas.',
    aboutButtonPortfolio: 'Portafolio',
    aboutButtonCV: 'Descargar CV',
    aboutExperienceNumber: '+1000 Horas',
    aboutExperienceText: 'De Código',
    aboutProjectsNumber: '5+ Proyectos',
    aboutProjectsText: 'Personales',

    // FIX: Add Journey section translations to resolve errors in Journey.tsx component.
    // Journey
    journeyTitle: 'Mi <span class="text-gradient">Trayectoria</span>',
    journeyEducationTitle: 'Educación',
    journeyExperienceTitle: 'Experiencia',
    educationData: [
      {
        date: '2023 - Presente',
        title: 'Aprendizaje Autodidacta',
        institution: 'Plataformas en Línea y Proyectos Personales',
      },
      {
        date: '2018 - 2022',
        title: 'Licenciatura en Relaciones Internacionales',
        institution: 'Universidad Nacional',
      },
    ] as JourneyItem[],
    experienceData: [
      {
        date: '2022 - Presente',
        title: 'Desarrollador Web Freelance',
        institution: 'Creando proyectos para pequeñas empresas',
      },
      {
        date: '2021',
        title: 'Coordinador de Proyectos',
        institution: 'Una Organización Sin Fines de Lucro',
      },
    ] as JourneyItem[],

    // Projects
    projectsTitle: 'Mis <span class="text-gradient">Proyectos</span>',
    projectCardLiveButton: 'Demo en Vivo',
    projectCardRepoButton: 'GitHub',
    projectsData: [
      {
        title: 'Plataforma de E-commerce',
        description: 'Un sitio web de e-commerce con todas las funciones, construido con React, Node.js y una base de datos PostgreSQL. Incluye autenticación de usuarios, catálogo de productos y una pasarela de pago.',
        imageUrl: 'https://picsum.photos/seed/project1/400/300',
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Aplicación de Gestión de Tareas',
        description: 'Una aplicación de gestión de tareas responsiva que ayuda a los usuarios a organizar sus tareas diarias con una interfaz limpia e intuitiva de arrastrar y soltar.',
        imageUrl: 'https://picsum.photos/seed/project2/400/300',
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Blog Personal',
        description: 'Un blog generado estáticamente usando un framework moderno como Next.js, con contenido gestionado a través de un CMS headless. Optimizado para rendimiento y SEO.',
        imageUrl: 'https://picsum.photos/seed/project3/400/300',
        liveUrl: '#',
        repoUrl: '#',
      },
    ] as Project[],

    // Skills
    skillsTitle: 'Mi <span class="text-gradient">Stack Tecnológico</span>',
    skillsIntro: 'Como desarrollador apasionado y autodidacta, he construido mi conjunto de habilidades centrándome en las tecnologías más demandadas para el desarrollo web moderno. Mi enfoque es práctico, utilizando cada una de estas herramientas para construir proyectos funcionales y robustos de principio a fin.',
    skillsToolsTitle: 'Herramientas',
    skillsSkillsTitle: 'Habilidades',
    skillCategories: {
        [SkillCategory.FRONT_END]: 'Front-end',
        [SkillCategory.BACK_END]: 'Back-end',
        [SkillCategory.WEB_DEV]: 'Desarrollo Web',
        [SkillCategory.SOFTWARE_DEV]: 'Desarrollo de Software'
    },
    skillsData: en.skillsData,
    toolsData: en.toolsData,

    // Contact
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
    
    // Socials
    socials: en.socials,

    // Footer
    footerText: '© 2024 Saul. Todos los derechos reservados.',
};

export const translations = {
    en,
    es,
};