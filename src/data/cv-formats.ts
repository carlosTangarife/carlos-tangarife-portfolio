export type CVFormatId = "detailed" | "backend" | "frontend" | "executive" | "ats";

export interface CVFormat {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  icon: string;
  sections: string[];
  focus: "balanced" | "backend" | "frontend" | "leadership" | "short";
  pageTarget: "multi" | "single";
}

export const cvFormats: CVFormat[] = [
  {
    id: "detailed",
    name: "Detailed Professional",
    description: "Complete CV with all details - every achievement, project, and skill. Best for in-depth technical interviews.",
    targetAudience: "Technical interviews, detailed reviews, comprehensive evaluations",
    icon: "📋",
    sections: ["header", "executive", "competencies", "experience", "education", "skills", "languages", "philosophy"],
    focus: "balanced",
    pageTarget: "multi",
  },
  {
    id: "backend",
    name: "Backend Specialist",
    description: "Emphasizes backend expertise: .NET, Node.js, databases, cloud architecture, APIs, microservices.",
    targetAudience: "Backend leads, CTOs, system architects",
    icon: "⚙️",
    sections: ["header", "executive", "backend-skills", "cloud-skills", "database-skills", "experience", "education"],
    focus: "backend",
    pageTarget: "multi",
  },
  {
    id: "frontend",
    name: "Frontend Expert",
    description: "Highlights frontend mastery: React, Angular, TypeScript, UI/UX, responsive design, state management.",
    targetAudience: "Frontend leads, UI engineers, frontend architects",
    icon: "🎨",
    sections: ["header", "executive", "frontend-skills", "ui-skills", "experience", "education", "projects"],
    focus: "frontend",
    pageTarget: "multi",
  },
  {
    id: "executive",
    name: "Executive / Leadership",
    description: "Leadership-focused: architecture decisions, team management, strategic impact, cost savings.",
    targetAudience: "VP Engineering, Directors, C-level executives",
    icon: "🏛️",
    sections: ["header", "executive", "differentiators", "leadership-skills", "experience-highlights", "impact", "education"],
    focus: "leadership",
    pageTarget: "single",
  },
  {
    id: "ats",
    name: "Standard / ATS",
    description: "Clean, ATS-friendly format. Optimized for automated screening systems and quick reviews.",
    targetAudience: "Recruiters, HR, automated screening systems, quick reviews",
    icon: "📄",
    sections: ["header", "summary", "experience", "skills", "education"],
    focus: "short",
    pageTarget: "single",
  },
];