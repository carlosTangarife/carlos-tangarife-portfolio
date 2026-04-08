import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { impacts } from "@/data/impacts";

export type CVFormatId = "standard" | "technical" | "leadership" | "short";

function generateSummary(): string[] {
  return [
    `${profile.title} with ${profile.yearsExperience}+ years of experience transforming complex legacy systems into modern, scalable solutions for US-based companies.`,
    `Specialized in Cloud Architecture (AWS/Azure), Full-Stack Development, and AI-Assisted Engineering. Proven track record of reducing technical debt by up to 70% while delivering solutions serving 3M+ users.`,
  ];
}

function generateTechStack(): string[] {
  const techStack: string[] = [];
  skillCategories.forEach((category) => {
    category.skills.forEach((skill) => {
      if (skill.level === "expert") {
        techStack.push(skill.name);
      }
    });
  });
  return techStack;
}

function generateExperience(): string[] {
  const lines: string[] = [];
  
  experiences.forEach((exp) => {
    lines.push(`**${exp.role}**`);
    lines.push(`${exp.company}${exp.client ? ` | Client: ${exp.client}` : ""} | ${exp.period}`);
    lines.push("");
    lines.push(exp.description);
    lines.push("");
    if (exp.highlights && exp.highlights.length > 0) {
      lines.push("*Key Achievements:*");
      exp.highlights.forEach((h) => lines.push(`- ${h}`));
      lines.push("");
    }
    if (exp.technologies.length > 0) {
      lines.push(`*Technologies:* ${exp.technologies.join(", ")}`);
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  });
  
  return lines;
}

function generateSkills(): string[] {
  const allSkills: string[] = [];
  skillCategories.forEach((category) => {
    category.skills.forEach((skill) => {
      allSkills.push(skill.name);
    });
  });
  return allSkills;
}

function generateHighlights(): string[] {
  return impacts.map((impact) => `${impact.metric} - ${impact.title}: ${impact.description}`);
}

function formatSection(title: string, content: string[]): string[] {
  const section: string[] = [];
  section.push(`## ${title}`);
  section.push("");
  content.forEach((line) => section.push(`- ${line}`));
  section.push("");
  return section;
}

export function generateCV(formatId: CVFormatId): string {
  const lines: string[] = [];
  
  // Header
  lines.push(`# ${profile.name}`);
  lines.push(`**${profile.title}**`);
  lines.push(`${profile.location} | ${profile.availability}`);
  lines.push(`Email: ${profile.email}`);
  lines.push(`LinkedIn: ${profile.linkedin}`);
  lines.push("");
  lines.push("---");
  lines.push("");

  switch (formatId) {
    case "standard":
      lines.push(...formatSection("Professional Summary", generateSummary()));
      lines.push(...formatSection("Professional Experience", generateExperience()));
      lines.push(...formatSection("Technical Skills", generateSkills()));
      break;

    case "technical":
      lines.push(...formatSection("Professional Summary", generateSummary()));
      lines.push(...formatSection("Technical Expertise", generateTechStack()));
      lines.push(...formatSection("Professional Experience", generateExperience()));
      lines.push(...formatSection("Skills", generateSkills()));
      break;

    case "leadership":
      lines.push(...formatSection("Executive Summary", generateSummary()));
      lines.push(...formatSection("Leadership & Architecture", [
        "Led modernization initiatives reducing 160 legacy .NET projects to 85",
        "Architected Communication Hub for multi-channel messaging via Twilio",
        "Built internal package ecosystem with Turborepo enabling code reuse across 10+ applications",
        "Pioneered AI adoption increasing delivery speed by 40%",
      ]));
      lines.push(...formatSection("Professional Experience", generateExperience()));
      lines.push(...formatSection("Technical Skills", generateSkills()));
      break;

    case "short":
      lines.push(...formatSection("Summary", generateSummary()));
      lines.push(...formatSection("Key Metrics", generateHighlights()));
      lines.push(...formatSection("Core Skills", generateTechStack().slice(0, 15)));
      lines.push(...formatSection("Recent Roles", experiences.slice(0, 3).map((e) => `${e.role} at ${e.company} (${e.period})`)));
      break;

    default:
      lines.push("Invalid format selected");
  }

  // Footer
  lines.push("---");
  lines.push("");
  lines.push(`*Generated on ${new Date().toLocaleDateString()}*`);

  return lines.join("\n");
}

export function downloadCV(formatId: CVFormatId): void {
  const content = generateCV(formatId);
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `carlos-tangarife-cv-${formatId}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}