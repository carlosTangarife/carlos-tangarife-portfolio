import { jsPDF } from "jspdf";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";

type CVFormatId = "detailed" | "backend" | "frontend" | "executive" | "ats";

// ============ CONSISTENT COLOR PALETTE ============
const COLORS = {
  primary: "#1a1a1a",      // Dark - main text
  secondary: "#D4AF37",    // Gold - accents, headings
  tertiary: "#666666",     // Gray - body text
  muted: "#999999",        // Light gray - captions
  white: "#ffffff",
};

// ============ HELPER FUNCTIONS ============

function addNewPageIfNeeded(doc: jsPDF, y: number, margin: number = 20): number {
  if (y > 260) {
    doc.addPage();
    return margin;
  }
  return y;
}

function writeWrappedText(doc: jsPDF, text: string, x: number, y: number, maxWidth: number, lineHeight: number = 5): number {
  const lines = doc.splitTextToSize(text, maxWidth);
  lines.forEach((line: string) => {
    doc.text(line, x, y);
    y += lineHeight;
  });
  return y;
}

// ============ SECTION: HEADER ============

function addHeader(doc: jsPDF, y: number) {
  // Name - bold, dark
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.primary);
  doc.text(profile.name, 20, y);
  
  y += 10;
  // Title - regular, gold
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.secondary);
  doc.text(profile.title, 20, y);
  
  y += 10;
  // Contact info - smaller, gray
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  
  // Clean contact line without emojis
  doc.text(`${profile.location} | ${profile.phone} | ${profile.email}`, 20, y);
  y += 4;
  doc.text(`LinkedIn: ${profile.linkedin.replace('https://', '')}`, 20, y);
  y += 4;
  doc.text(`Website: ${profile.website} | ${profile.availability}`, 20, y);
  
  return y + 12;
}

// ============ SECTION: EXECUTIVE SUMMARY ============

function addExecutiveSummary(doc: jsPDF, y: number) {
  // Section title - gold, centered underline
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("EXECUTIVE SUMMARY", 20, y);
  
  // Underline
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  
  y += 10;
  // Body text - regular gray
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  
  return writeWrappedText(doc, profile.executiveSummary, 20, y, 170);
}

// ============ SECTION: KEY DIFFERENTIATORS ============

function addKeyDifferentiators(doc: jsPDF, y: number) {
  y = addNewPageIfNeeded(doc, y);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("KEY DIFFERENTIATORS", 20, y);
  
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  
  y += 10;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  
  // Remove emojis from text
  profile.keyDifferentiators.forEach((diff) => {
    const cleanDiff = diff.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
    y = writeWrappedText(doc, cleanDiff, 22, y, 165, 5);
  });
  
  return y + 8;
}

// ============ SECTION: SKILLS BY CATEGORY ============

function addSkillsSection(doc: jsPDF, y: number, title: string, skills: string[]) {
  y = addNewPageIfNeeded(doc, y);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text(title, 20, y);
  
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  
  y += 10;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  
  // Wrap skills in columns
  const col1 = skills.slice(0, Math.ceil(skills.length / 2));
  const col2 = skills.slice(Math.ceil(skills.length / 2));
  
  const skillText1 = col1.join(" | ");
  const skillText2 = col2.join(" | ");
  
  y = writeWrappedText(doc, skillText1, 20, y, 85);
  y = writeWrappedText(doc, skillText2, 105, y, 85);
  
  return y + 8;
}

function addCompetencies(doc: jsPDF, y: number, focus?: "backend" | "frontend") {
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("TECHNICAL EXPERTISE", 20, y);
  
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  
  y += 10;
  
  if (focus === "backend") {
    y = addSkillsSection(doc, y, "BACKEND & APIs", profile.competencies.backend);
    y = addSkillsSection(doc, y, "AWS CLOUD", profile.competencies.cloudAWS);
    y = addSkillsSection(doc, y, "AZURE CLOUD", profile.competencies.cloudAzure);
    y = addSkillsSection(doc, y, "DATABASES", profile.competencies.database);
    y = addSkillsSection(doc, y, "DEVOPS & TOOLS", profile.competencies.devops);
  } else if (focus === "frontend") {
    y = addSkillsSection(doc, y, "FRONTEND FRAMEWORKS", profile.competencies.frontend);
    y = addSkillsSection(doc, y, "TESTING & QUALITY", profile.competencies.testing);
    y = addSkillsSection(doc, y, "METHODOLOGIES", profile.competencies.methodologies);
  } else {
    // Full - show all
    y = addSkillsSection(doc, y, "FRONTEND", profile.competencies.frontend);
    y = addSkillsSection(doc, y, "BACKEND", profile.competencies.backend);
    y = addSkillsSection(doc, y, "AWS", profile.competencies.cloudAWS);
    y = addSkillsSection(doc, y, "AZURE", profile.competencies.cloudAzure);
    y = addSkillsSection(doc, y, "DATABASES", profile.competencies.database);
  }
  
  return y;
}

// ============ SECTION: EXPERIENCE ============

function addExperienceEntry(doc: jsPDF, y: number, exp: any, showProjects: boolean = true) {
  y = addNewPageIfNeeded(doc, y);
  
  // Role - bold, dark
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.primary);
  doc.text(exp.role, 20, y);
  
  // Period - right aligned, gray
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  doc.text(exp.period, 190, y, { align: "right" });
  y += 5;
  
  // Company + Client - gold
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  const companyText = exp.client ? `${exp.company} | ${exp.client}` : exp.company;
  doc.text(companyText, 20, y);
  
  // Location - right
  if (exp.location) {
    doc.setFont("helvetica", "normal");
    doc.setTextColor(COLORS.tertiary);
    doc.text(exp.location, 190, y, { align: "right" });
  }
  y += 6;
  
  // Description - regular gray
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  y = writeWrappedText(doc, exp.description, 20, y, 170, 4);
  
  // Highlights - bullet points
  if (exp.highlights && exp.highlights.length > 0) {
    y += 4;
    exp.highlights.forEach((h: string) => {
      y = addNewPageIfNeeded(doc, y);
      doc.setFontSize(8);
      doc.setTextColor(COLORS.primary);
      y = writeWrappedText(doc, `* ${h}`, 25, y, 160, 3);
    });
  }
  
  // Projects (for Ceiba)
  if (showProjects && exp.projects) {
    exp.projects.forEach((project: any) => {
      y = addNewPageIfNeeded(doc, y + 4);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(COLORS.secondary);
      doc.text(`Project: ${project.name}`, 20, y);
      y += 4;
      
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(COLORS.tertiary);
      y = writeWrappedText(doc, project.description, 25, y, 160, 3);
      
      y += 2;
      project.highlights.forEach((h: string) => {
        y = addNewPageIfNeeded(doc, y);
        doc.setFontSize(7);
        doc.setTextColor(COLORS.primary);
        y = writeWrappedText(doc, `- ${h}`, 28, y, 155, 3);
      });
    });
  }
  
  // Technologies
  y += 4;
  doc.setFontSize(7);
  doc.setTextColor(COLORS.muted);
  const techText = "Tech: " + exp.technologies.slice(0, 10).join(", ");
  y = writeWrappedText(doc, techText, 20, y, 170, 3);
  
  return y + 8;
}

function addExperience(doc: jsPDF, y: number, showFull: boolean = true) {
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("PROFESSIONAL EXPERIENCE", 20, y);
  
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  
  y += 10;
  
  // Show all experience or filtered
  experiences.forEach((exp) => {
    y = addExperienceEntry(doc, y, exp, showFull);
  });
  
  return y;
}

// ============ SECTION: EDUCATION ============

function addEducation(doc: jsPDF, y: number) {
  y = addNewPageIfNeeded(doc, y);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("EDUCATION", 20, y);
  
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  
  y += 8;
  
  profile.education.forEach((edu) => {
    y = addNewPageIfNeeded(doc, y);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(COLORS.primary);
    doc.text(edu.degree, 20, y);
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(COLORS.tertiary);
    doc.text(`${edu.institution} | ${edu.year}`, 20, y + 4);
    y += 10;
  });
  
  return y + 5;
}

// ============ SECTION: LANGUAGES ============

function addLanguages(doc: jsPDF, y: number) {
  y = addNewPageIfNeeded(doc, y);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("LANGUAGES", 20, y);
  
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  
  y += 8;
  
  profile.languages.forEach((lang) => {
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(COLORS.primary);
    doc.text(`${lang.language}: ${lang.level}`, 20, y);
    y += 5;
  });
  
  return y + 5;
}

// ============ SECTION: AI SKILLS ============

function addAISkills(doc: jsPDF, y: number) {
  y = addNewPageIfNeeded(doc, y);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("AI TOOLS & METHODOLOGIES", 20, y);
  
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  
  y += 8;
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.primary);
  doc.text("Primary:", 20, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  doc.text(profile.aiSkills.primary.join(", "), 55, y);
  y += 6;
  
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.primary);
  doc.text("Approach:", 20, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  y = writeWrappedText(doc, profile.aiSkills.methodologies.join(", "), 55, y, 130, 4);
  
  return y + 10;
}

// ============ SECTION: ATS STANDARD ============

function addStandardCV(doc: jsPDF, y: number) {
  // Summary
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("PROFESSIONAL SUMMARY", 20, y);
  doc.setDrawColor(COLORS.secondary);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 190, y + 3);
  y += 8;
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.tertiary);
  y = writeWrappedText(doc, profile.summary, 20, y, 170, 4);
  
  y += 10;
  
  // Skills - compact
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("TECHNICAL SKILLS", 20, y);
  doc.setDrawColor(COLORS.secondary);
  doc.line(20, y + 3, 190, y + 3);
  y += 8;
  
  doc.setFontSize(8);
  doc.setTextColor(COLORS.tertiary);
  const allSkills = [
    ...profile.competencies.frontend.slice(0, 6),
    ...profile.competencies.backend.slice(0, 6),
    ...profile.competencies.cloudAWS.slice(0, 4)
  ];
  y = writeWrappedText(doc, allSkills.join(" | "), 20, y, 170, 3);
  
  y += 10;
  
  // Experience - brief
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("EXPERIENCE", 20, y);
  doc.setDrawColor(COLORS.secondary);
  doc.line(20, y + 3, 190, y + 3);
  y += 8;
  
  experiences.slice(0, 3).forEach((exp) => {
    y = addNewPageIfNeeded(doc, y);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(COLORS.primary);
    doc.text(`${exp.role} at ${exp.company}`, 20, y);
    
    doc.setFontSize(8);
    doc.setTextColor(COLORS.tertiary);
    doc.text(exp.period, 190, y, { align: "right" });
    y += 4;
    
    doc.setFontSize(8);
    y = writeWrappedText(doc, exp.description, 20, y + 2, 170, 3);
    y += 6;
  });
  
  // Education - brief
  y = addNewPageIfNeeded(doc, y + 8);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(COLORS.secondary);
  doc.text("EDUCATION", 20, y);
  doc.setDrawColor(COLORS.secondary);
  doc.line(20, y + 3, 190, y + 3);
  y += 8;
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(COLORS.primary);
  profile.education.forEach((edu) => {
    doc.text(`${edu.degree} - ${edu.institution}`, 20, y);
    y += 5;
  });
  
  return y;
}

// ============ FOOTER ============

function addFooter(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(7);
    doc.setTextColor(COLORS.muted);
    doc.text(
      `Generated: ${new Date().toLocaleDateString()} | ${profile.website}`,
      105,
      290,
      { align: "center" }
    );
  }
}

// ============ MAIN GENERATE FUNCTION ============

export function generatePDF(formatId: CVFormatId): void {
  const doc = new jsPDF();
  let y = 20;
  
  // Header - all formats
  y = addHeader(doc, y);
  
  // Format-specific content
  switch (formatId) {
    case "detailed":
      y = addExecutiveSummary(doc, y);
      y = addKeyDifferentiators(doc, y);
      y = addCompetencies(doc, y);
      y = addExperience(doc, y, true);
      y = addAISkills(doc, y);
      y = addEducation(doc, y);
      y = addLanguages(doc, y);
      break;
      
    case "backend":
      y = addExecutiveSummary(doc, y);
      y = addCompetencies(doc, y, "backend");
      y = addExperience(doc, y, true);
      y = addEducation(doc, y);
      y = addLanguages(doc, y);
      break;
      
    case "frontend":
      y = addExecutiveSummary(doc, y);
      y = addCompetencies(doc, y, "frontend");
      y = addExperience(doc, y, true);
      y = addEducation(doc, y);
      y = addLanguages(doc, y);
      break;
      
    case "executive":
      y = addKeyDifferentiators(doc, y);
      y = addExecutiveSummary(doc, y);
      y = addExperience(doc, y, false); // Less detail
      y = addEducation(doc, y);
      break;
      
    case "ats":
      y = addStandardCV(doc, y);
      break;
  }
  
  // Footer
  addFooter(doc);
  
  // Save
  const fileNames: Record<CVFormatId, string> = {
    detailed: "carlos-tangarife-cv-detailed.pdf",
    backend: "carlos-tangarife-cv-backend.pdf",
    frontend: "carlos-tangarife-cv-frontend.pdf",
    executive: "carlos-tangarife-cv-executive.pdf",
    ats: "carlos-tangarife-cv-ats.pdf",
  };
  
  doc.save(fileNames[formatId]);
}