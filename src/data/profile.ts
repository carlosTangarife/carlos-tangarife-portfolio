export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availability: string;
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  yearsExperience: number;
  summary: string;
  philosophy: string[];
  aiSkills: {
    primary: string[];
    secondary: string[];
    methodologies: string[];
  };
  searchKeywords: string[];
}

export const profile: Profile = {
  name: "Carlos Tangarife",
  title: "Senior Software Engineer",
  tagline: "Transforming Legacy Systems into Modern Solutions",
  location: "Manizales, Colombia",
  availability: "Available for Remote Work",
  email: "cjt860826@gmail.com",
  linkedin: "https://linkedin.com/in/carlostangarife",
  github: "https://github.com/carlostangarife",
  whatsapp: "https://wa.me/573012295992?text=Hi%20Carlos,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project",
  yearsExperience: 11,
  summary: "Senior Software Engineer specializing in Legacy Modernization and Cloud Architecture. 11+ years building scalable solutions for US companies. Expert in React, Angular, .NET Core, AWS. Available for contract and freelance engagements.",
  philosophy: [
    "Code as Communication: Writing code that speaks to both machines and humans",
    "Architecture as Business Enabler: Technical decisions driven by business value",
    "Quality as Continuous Process: Not a final step, but an ongoing commitment",
    "AI-Augmented Development: Leveraging AI tools while maintaining human expertise",
  ],
  aiSkills: {
    primary: ["Claude Code", "Cursor", "ChatGPT", "Windsurf"],
    secondary: ["AI Agents", "Prompt Engineering", "Code Generation"],
    methodologies: ["Spec-Driven Development (SDD)", "OpenSpec", "Agent Workflows", "AI-Assisted Refactoring"],
  },
  searchKeywords: [
    "freelance software engineer",
    "contract software developer",
    "remote senior engineer",
    "AWS architect",
    "legacy modernization expert",
    "full-stack developer",
    "react typescript developer",
    ".NET core architect",
    "cloud infrastructure specialist",
    "technical lead contractor",
  ],
};