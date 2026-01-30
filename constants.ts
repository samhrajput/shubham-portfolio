
import { Education, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "SHUBHAM KUMAR",
  role: "Full Stack Java Developer | Spring Boot & React",
  summary: "Aspiring Software Engineer with strong skills in Java and Spring-based backend development, currently pursuing B.Tech in Electronics And Communication. Passionate about building scalable applications, exploring AI integration, and contributing to open-source communities.",
  location: "Kolkata, West Bengal",
  email: "samhrajput@gmail.com",
  phone: "9973637482",
  linkedin: "https://linkedin.com/in/shubham-kumar-8397671b6",
  github: "https://github.com/samhrajput",
  achievements: [
    "Solved 300+ Questions On DSA Coding Platforms Like LEETCODE And GEEK FOR GEEKS"
  ],
  extras: {
    hobbies: ["Gaming", "Listening to music", "Coding"],
    languages: ["English (Fluent)", "Hindi"]
  }
};

export const EDUCATION_DATA: Education[] = [
  {
    period: "2023 – Expected 2027",
    degree: "Bachelor of Technology in Electronics And Communication Engineering",
    institution: "Haldia Institute of Technology",
    score: "CGPA – 7.31"
  },
  {
    period: "2021 – 2023",
    degree: "Higher Secondary Education (Class XII)",
    institution: "R.B.S.Inter College, Jehanabad, Bihar",
    score: "62.4%"
  },
  {
    period: "Completed",
    degree: "Senior Secondary Education (Class X)",
    institution: "Nalanda Heritage School, Nalanda, Bihar",
    score: "91.8%"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-email-assistant",
    title: "AI-Powered Email Assistant",
    description: "Built a Chrome Extension integrated with Gmail to generate AI-driven replies using Spring Boot and Gemini API.",
    explanation: "This project showcases the integration of generative AI into daily productivity tools. It consists of a Manifest v3 Chrome Extension that injects an 'AI Reply' button into the Gmail compose window. When clicked, it sends the context of the current email thread to a Spring Boot backend, which communicates securely with Google's Gemini AI to draft a relevant response. I successfully solved complex CORS and API integration challenges to ensure seamless extension-to-backend communication.",
    screenshot: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=2000",
    tags: ["Java (Spring Boot)", "React", "Chrome Extensions (Manifest v3)", "Axios", "REST APIs", "Gemini AI"],
    links: {
      github: "https://github.com/samhrajput/email-writer",
      live: "#"
    },
    isFlagship: true
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    skills: ["Java", "JavaScript", "C", "SQL"]
  },
  {
    name: "Frontend",
    icon: "layout",
    skills: ["React", "HTML5/CSS3", "Tailwind CSS"]
  },
  {
    name: "Backend",
    icon: "database",
    skills: ["Spring Boot", "REST APIs", "Node.js"]
  },
  {
    name: "Databases",
    icon: "server",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    name: "Tools",
    icon: "settings",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"]
  },
  {
    name: "Soft Skills",
    icon: "users",
    skills: ["Communication", "Problem-Solving", "Team Collaboration", "Agile Mindset"]
  }
];
