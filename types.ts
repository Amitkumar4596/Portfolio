export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  projects: {
    title: string;
    description: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  date: string;
  points: string[];
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  avatarUrl: string;
  contact: ContactInfo;
  education: Education[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: Project[];
  achievements: Achievement[];
}