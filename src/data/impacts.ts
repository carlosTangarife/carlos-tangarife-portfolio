export interface Impact {
  id: string;
  metric: string;
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

export const impacts: Impact[] = [
  {
    id: "infrastructure-reduction",
    metric: "70%",
    title: "AWS Infrastructure Reduction",
    description: "Reduced 200 AWS Lambda functions to 60 while improving overall performance and reducing costs",
    technologies: ["AWS Lambda", "Serverless", "Cost Optimization"],
    featured: true,
  },
  {
    id: "performance-improvement",
    metric: "96%",
    title: "Performance Improvement",
    description: "Optimized database operations from 2 days to 2 hours through strategic query optimization",
    technologies: ["PostgreSQL", "Query Optimization", "Indexing"],
  },
  {
    id: "technical-debt",
    metric: "47%",
    title: "Technical Debt Reduction",
    description: "Reduced 160 .NET legacy projects to 85 through systematic refactoring and clean architecture",
    technologies: [".NET Core", "Clean Architecture", "SOLID"],
  },
  {
    id: "delivery-speed",
    metric: "40%",
    title: "Delivery Speed Increase",
    description: "Accelerated development cycles through AI-assisted coding and workflow automation",
    technologies: ["Cursor", "ChatGPT", "DevOps Automation"],
  },
  {
    id: "users-impacted",
    metric: "3M+",
    title: "Users Served",
    description: "Built and optimized applications serving millions of active users across multiple platforms",
    technologies: ["React", "Angular", "Ionic", "Scalability"],
  },
  {
    id: "code-coverage",
    metric: "95%+",
    title: "Code Coverage Achievement",
    description: "Established CI/CD culture with automated testing achieving exceptional code quality standards",
    technologies: ["Jest", "Cypress", "SonarQube", "Jenkins"],
  },
];