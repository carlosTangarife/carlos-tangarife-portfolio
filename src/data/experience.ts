export interface Experience {
  id: string;
  company: string;
  client?: string;
  location: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  projects?: Project[];
}

interface Project {
  name: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "sombra-campminder",
    company: "Sombra",
    client: "CampMinder (USA)",
    location: "Remote",
    role: "Senior Software Engineer",
    period: "November 2024 - Present",
    description: "Leading modernization initiatives for legacy camp management platform serving diverse subscriptions with complex role-based permissions and feature flag configurations.",
    highlights: [
      "Reduced 160 legacy .NET projects to 85 (~47% reduction) through systematic refactoring",
      "Architected Communication Hub (CMS platform) for multi-channel messaging via Twilio",
      "Pioneered AI adoption initiative increasing delivery speed by 40%",
      "Built internal package ecosystem with Turborepo enabling code reuse across 10+ applications",
    ],
    technologies: ["React", "TypeScript", "Vite", "Chakra UI", ".NET 8", "Azure DevOps", "Docker", "Cursor AI"],
  },
  {
    id: "avenue-code-blink",
    company: "Avenue Code",
    client: "Blink Fitness (USA)",
    location: "Remote",
    role: "Senior Full Stack Engineer",
    period: "2022 - 2024",
    description: "Developed mission-critical mobile and web applications for nationwide gym chain serving 3+ million active users, managing memberships, training, and real-time facility tracking.",
    highlights: [
      "Reduced 200 AWS Lambda functions to 60 (~70% reduction) while improving performance",
      "Built Crowd Tracker feature for real-time gym occupancy monitoring",
      "Architected dual-CMS platform (WordPress + Contentful) for dynamic content delivery",
      "Implemented comprehensive test automation with 85%+ code coverage",
    ],
    technologies: ["Angular", "Ionic", "Node.js", "AWS Lambda", "DynamoDB", "TypeScript", "Serverless"],
  },
  {
    id: "ceiba-software",
    company: "CEIBA SOFTWARE",
    location: "Medellín",
    role: "Developer and Architect",
    period: "2019 - 2021",
    description: "Evolved into client-facing technical leader for large-scale enterprise projects. Led front-end architecture standardization, mentored teams on Angular/TypeScript best practices, and established enterprise architectural principles (DI, IoC, SOLID) across the organization.",
    projects: [
      {
        name: "VENNDELO (2020-2021)",
        description: "Web marketplace for product sales and supplier distribution replacing legacy PHP systems.",
        highlights: [
          "Mastered Webpack at native level combining legacy AngularJS with Vue.js frontend built entirely with Web Components",
          "Established NestJS backend with Clean Architecture and TypeORM, drastically improving performance and stability",
          "Implemented automated E2E testing with Twine and Gherkin establishing shared understanding between developers, QA, and business",
          "Packaged every UI element as reusable Web Component for seamless legacy system embedding",
        ],
        technologies: ["Webpack", "Vue.js", "Web Components", "NestJS", "TypeORM", "PostgreSQL", "Storybook"],
      },
      {
        name: "RENTING COLOMBIA (2019-2020)",
        description: "Leading vehicle leasing provider - unified ecosystem of 15 interconnected Angular applications.",
        highlights: [
          "Led standardization effort creating shared Angular library with Material Design centralizing rendering logic and permissions",
          "Improved performance by 80% implementing infinite scrolling, lazy loading, and OnPush change detection for pages with 20,000+ elements",
          "Redesigned cross-application authentication with Azure AD B2C and MSAL providing unified login across all 15 applications",
          "Reduced development time by 50% through shared component library becoming reference architecture within Ceiba",
        ],
        technologies: ["Angular", "TypeScript", ".NET Core", "Azure AD B2C", "MSAL", "SignalR", "Microservices", "Azure DevOps"],
      },
    ],
    technologies: ["Angular", "TypeScript", ".NET Core", "NestJS", "PostgreSQL", "Azure"],
  },
  {
    id: "xpertgroup-cfa",
    company: "XPERTGROUP",
    client: "CFA (Credit Scoring Platform)",
    location: "Medellín",
    role: "Developer",
    period: "2018 - 2019",
    description: "Built dynamic credit scoring platform with runtime-configurable variables and formulas. Led DevOps automation initiative establishing CI/CD practices from ground up.",
    highlights: [
      "Designed configurable scoring engine allowing stakeholders to define variables and formulas without developer intervention",
      "Proactively promoted Agile and Scrum practices, transforming legacy documentation-driven process into incremental development cycles",
      "Established DevOps automation framework with Jenkins and SonarQube when CI/CD was emerging in organization",
      "Achieved 95%+ code coverage and reduced bug rate by 70% through continuous quality analysis",
    ],
    technologies: ["C#", ".NET Core", "Angular", "TypeScript", "Jenkins", "SonarQube", "EasyChart"],
  },
  {
    id: "newshore",
    company: "NewShore",
    client: "Vueling, Volotea Airlines",
    location: "Medellín",
    role: "Advanced Developer",
    period: "2017 - 2018",
    description: "Built highly configurable flight booking platforms for European low-cost airlines with dynamic pricing and business rules.",
    highlights: [
      "Developed configurable search engine adaptable for multiple airlines",
      "Integrated Umbraco CMS enabling real-time business rule changes without deployments",
      "Established foundation in Clean Architecture and SOLID principles",
    ],
    technologies: ["C#", ".NET Framework", "Angular", "Umbraco CMS"],
  },
  {
    id: "datasoft",
    company: "DataSoft",
    location: "Manizales",
    role: "SQL Developer & Database Administrator",
    period: "2015 - 2017",
    description: "Managed databases for Colombian government financial systems. Promoted to DBA within 3 months.",
    highlights: [
      "Optimized critical query from 2 days to 2 hours (96% improvement)",
      "Implemented automated backup strategy with Google Drive API integration",
      "Successfully performed full disaster recovery simulation",
    ],
    technologies: ["PostgreSQL", "PL/SQL", "Query Optimization", "PHP"],
  },
];