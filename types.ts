// FIX: Removed circular import of SkillCategory which was causing declaration conflicts.

export enum SkillCategory {
  FRONT_END = 'Front-end',
  BACK_END = 'Back-end',
  WEB_DEV = 'Web Development',
  SOFTWARE_DEV = 'Software Development'
}

export interface JourneyItem {
  date: string;
  title: string;
  institution: string;
}

export interface Skill {
  name: string;
  category: SkillCategory[];
}

export interface Tool {
  name: string;
  icon: JSX.Element;
  category: SkillCategory[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}