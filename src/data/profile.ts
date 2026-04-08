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
  summary: "I'm a Senior Software Engineer from Manizales, Colombia, with a proven track record of transforming complex legacy systems into modern, scalable solutions for US-based companies. My approach combines technical excellence with business understanding, ensuring that solutions are not only functional but sustainable, scalable, and aligned with organizational goals.",
  philosophy: [
    "Code as Communication: Writing code that speaks to both machines and humans",
    "Architecture as Business Enabler: Technical decisions driven by business value",
    "Quality as Continuous Process: Not a final step, but an ongoing commitment",
    "AI-Augmented Development: Leveraging AI tools while maintaining human expertise",
  ],
};