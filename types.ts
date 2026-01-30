
export interface Education {
  period: string;
  degree: string;
  institution: string;
  score?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  explanation?: string;
  screenshot?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  isFlagship?: boolean;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}
