export type CVFormatId = "standard" | "technical" | "leadership" | "short";

export interface CVFormat {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  icon: string;
  sections: string[];
}

export const cvFormats: CVFormat[] = [
  {
    id: "standard",
    name: "Standard Professional",
    description: "Clean, ATS-friendly format for general recruiters",
    targetAudience: "Recruiters, HR, ATS systems",
    icon: "📄",
    sections: ["summary", "experience", "skills", "education"],
  },
  {
    id: "technical",
    name: "Technical / Engineering",
    description: "Emphasizes technical skills and engineering accomplishments",
    targetAudience: "CTOs, Tech Leads, Engineering Managers",
    icon: "⚙️",
    sections: ["summary", "techStack", "projects", "experience", "skills"],
  },
  {
    id: "leadership",
    name: "Leadership / Architecture",
    description: "Highlights architecture and team leadership experience",
    targetAudience: "VP Engineering, Directors, Architects",
    icon: "🏛️",
    sections: ["summary", "leadership", "architecture", "experience", "skills"],
  },
  {
    id: "short",
    name: "Short Version",
    description: "One-page condensed version for quick reviews",
    targetAudience: "Quick scans, initial screenings",
    icon: "📋",
    sections: ["summary", "highlights", "topSkills"],
  },
];