export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "expert" | "proficient";
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    icon: "⚛️",
    skills: [
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Angular", level: "expert" },
      { name: "Vue" },
      { name: "Vite" },
      { name: "Webpack" },
      { name: "Chakra UI" },
      { name: "Ionic" },
      { name: "SASS/SCSS" },
      { name: "Storybook" },
      { name: "Web Components" },
    ],
  },
  {
    name: "Backend Engineering",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "C#", level: "expert" },
      { name: ".NET Core", level: "expert" },
      { name: "NestJS" },
      { name: "Express" },
      { name: "Clean Architecture" },
      { name: "SOLID" },
      { name: "Microservices" },
      { name: "CQRS" },
      { name: "SignalR" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "☁️",
    skills: [
      { name: "AWS Lambda", level: "expert" },
      { name: "API Gateway", level: "expert" },
      { name: "DynamoDB", level: "expert" },
      { name: "S3" },
      { name: "CloudFront" },
      { name: "Azure DevOps" },
      { name: "Azure App Service" },
      { name: "Cognito" },
      { name: "CloudWatch" },
      { name: "SNS/SQS" },
    ],
  },
  {
    name: "Database & Data",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "SQL Server", level: "expert" },
      { name: "MongoDB" },
      { name: "Oracle" },
      { name: "TypeORM" },
      { name: "Query Optimization" },
      { name: "Indexing" },
      { name: "PL/SQL" },
    ],
  },
  {
    name: "Testing & Quality",
    icon: "🧪",
    skills: [
      { name: "Vitest" },
      { name: "Cypress" },
      { name: "Playwright" },
      { name: "Jest" },
      { name: "SpecFlow" },
      { name: "SonarQube" },
      { name: "BDD/TDD" },
      { name: "E2E Testing" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Docker" },
      { name: "CI/CD Pipelines" },
      { name: "Azure DevOps" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Serverless Framework" },
      { name: "Git" },
      { name: "Jira" },
    ],
  },
  {
    name: "AI-Assisted Development",
    icon: "🤖",
    skills: [
      { name: "Cursor", level: "expert" },
      { name: "ChatGPT", level: "expert" },
      { name: "Automated Workflows" },
      { name: "Prompt Engineering" },
      { name: "Gherkin Language" },
    ],
  },
  {
    name: "Methodologies",
    icon: "📋",
    skills: [
      { name: "Agile/Scrum" },
      { name: "Clean Code" },
      { name: "DDD" },
      { name: "Design Patterns" },
      { name: "Code Review" },
      { name: "Pair Programming" },
      { name: "Feature Flags" },
    ],
  },
];