export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  whatsapp: string;
  yearsExperience: number;
  summary: string;
  executiveSummary: string;
  keyDifferentiators: string[];
  philosophy: string[];
  interests: string[];
  languages: { language: string; level: string }[];
  education: { degree: string; institution: string; year: string }[];
  aiSkills: {
    primary: string[];
    secondary: string[];
    methodologies: string[];
  };
  competencies: {
    frontend: string[];
    backend: string[];
    cloudAWS: string[];
    cloudAzure: string[];
    database: string[];
    testing: string[];
    devops: string[];
    methodologies: string[];
  };
  searchKeywords: string[];
}

export const profile: Profile = {
  name: "Carlos Javier Tangarife Gil",
  title: "Senior Software Engineer | Tech Lead | Full Stack Developer",
  tagline: "Transforming Legacy Systems into Modern Solutions",
  location: "Medellín, Colombia",
  availability: "Available for Remote Work",
  email: "cjt860826@gmail.com",
  phone: "+57 3012295992",
  linkedin: "https://www.linkedin.com/in/carlos-tangarife",
  github: "https://github.com/carlosTangarife",
  website: "https://carlostangarife.com",
  whatsapp: "https://wa.me/573012295992?text=Hi%20Carlos,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project",
  yearsExperience: 11,
  summary: "Senior Software Engineer specializing in Legacy Modernization and Cloud Architecture. 11+ years building scalable solutions for US companies. Expert in React, Angular, .NET Core, AWS. Available for contract and freelance engagements.",
  executiveSummary: "11+ years of proven excellence in full-stack software engineering, with deep expertise in Cloud Architecture (AWS, Azure), Frontend (React, Angular), Backend (.NET, Node.js), and DevOps/CI-CD. Successfully reduced technical debt by 30-70% across multiple enterprise projects while leading digital transformations for US-based companies with 3M+ active users.",
  keyDifferentiators: [
    "🏆 Reduced 200 AWS Lambda functions to 60 (~70% reduction) while improving performance",
    "🏆 Reduced 160 .NET legacy projects to 85 (~47% reduction) through strategic refactoring",
    "🏆 Transformed 2-day database operations to 2 hours through query optimization",
    "🏆 Achieved weeks-to-minutes deployment cycles through CloudFront automation",
    "🚀 AI-Assisted Development advocate using Cursor, ChatGPT, and automated workflows",
  ],
  philosophy: [
    "Code as Communication: Writing code that speaks to both machines and humans",
    "Architecture as Business Enabler: Technical decisions driven by business value",
    "Quality as Continuous Process: Not a final step, but an ongoing commitment",
    "AI-Augmented Development: Leveraging AI tools while maintaining human expertise",
  ],
  interests: ["🎬 Watching Movies", "🏓 Ping-Pong", "⚽ Football"],
  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "B2 (Upper Intermediate / Professional Working Proficiency)" },
  ],
  education: [
    { degree: "Systems and Telecommunications Engineering", institution: "University of Manizales", year: "2016 - 2020" },
    { degree: "Technology in Computer Systems", institution: "Caldas University", year: "2012 - 2015" },
  ],
  aiSkills: {
    primary: ["Cursor", "ChatGPT", "Claude Code", "Windsurf"],
    secondary: ["AI Agents", "Prompt Engineering", "Code Generation"],
    methodologies: ["Spec-Driven Development (SDD)", "OpenSpec", "Agent Workflows", "AI-Assisted Refactoring"],
  },
  competencies: {
    frontend: [
      "React", "Angular", "Vue", "TypeScript", "JavaScript", "Vite",
      "Webpack", "Chakra UI", "Ionic", "Web Components", "Storybook",
      "SASS/SCSS", "HTML/CSS", "Responsive Design", "Mobile-First"
    ],
    backend: [
      "Node.js", "NestJS", "Express", "C#", ".NET Core", ".NET Framework",
      "Clean Architecture", "Hexagonal Architecture", "SOLID", "CQRS",
      "Microservices", "Monoliths", "MVC", "Dependency Injection",
      "SignalR", "API Design"
    ],
    cloudAWS: [
      "Lambda", "API Gateway", "DynamoDB", "S3", "SNS", "SQS", "Cognito",
      "CloudWatch", "CloudFront", "Secrets Manager", "Parameter Store",
      "CodePipeline", "CodeBuild", "CodeDeploy"
    ],
    cloudAzure: [
      "App Service", "DevOps", "Key Vault", "Blob Storage", "SQL Database",
      "Redis Cache", "Service Bus", "Container Registry", "Application Insights", "AD B2C"
    ],
    database: [
      "PostgreSQL", "SQL Server", "MongoDB", "Oracle", "TypeORM",
      "LINQ", "Query Optimization", "Indexing", "Materialized Views", "PL/SQL"
    ],
    testing: [
      "Vitest", "Cypress", "Playwright", "Selenium", "SpecFlow", "Jest",
      "Jasmine", "Unit Testing", "Integration Testing", "E2E Testing",
      "BDD/TDD", "Gherkin", "SonarQube", "OWASP"
    ],
    devops: [
      "Docker", "CI/CD Pipelines", "Azure DevOps", "GitHub", "GitLab",
      "Jenkins", "Serverless Framework", "Hangfire", "Git", "Jira", "Trello"
    ],
    methodologies: [
      "Agile/Scrum", "Clean Code", "DDD", "Pattern Design", "Code Review",
      "Pair Programming", "Documentation", "Feature Flags", "Semantic Versioning"
    ],
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