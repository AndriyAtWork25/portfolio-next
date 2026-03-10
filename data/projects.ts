/*
  Diese Datei enthält nur die Projektdaten.
  Vorteil:
  - saubere Trennung von Daten und UI
  - leichter wartbar
  - später auch für Detailseiten wiederverwendbar
*/

export type ProjectShowcase = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  previewImages: {
    src: string;
    alt: string;
    label: string;
  }[];
};

export const projects: ProjectShowcase[] = [
  {
    title: "Smart Automator",
    eyebrow: "Automation • Node.js • MongoDB • JWT • Swagger • Jest",
    description:
      "Automation platform with custom triggers and actions, built around safe execution, validation, worker logic and scalable backend structure.",
    stack: ["Node.js", "TypeScript", "MongoDB", "JWT", "Swagger", "Jest"],
    githubUrl: "https://github.com/AndriyAtWork25/smart-automator",
    highlights: [
      "Custom automation workflows",
      "Worker-style backend logic",
      "Structured API documentation",
      "Modern dashboard-oriented UI",
    ],
    previewImages: [
      {
        src: "/projects/smart-automator-overview.jpeg",
        alt: "Smart Automator dashboard overview",
        label: "Dashboard Overview",
      },
      {
        src: "/projects/smart-api-preview1.gif",
        alt: "Smart Automator rule creation preview",
        label: "Rule Creation Flow",
      },
      {
        src: "/projects/smart-api-preview2.gif",
        alt: "Smart Automator API documentation preview",
        label: "Swagger Documentation",
      },
    ],
  },

  {
    title: "Task Manager API",
    eyebrow: "REST • Node.js • Express • MongoDB • JWT • Swagger",
    description:
      "Secure CRUD API for managing tasks with authentication, input validation, modular backend structure and a polished frontend workflow.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Docker"],
    githubUrl: "https://github.com/AndriyAtWork25/js-task-manager",
    highlights: [
      "JWT authentication",
      "Task CRUD operations",
      "Swagger API docs",
      "User-focused task workflow",
    ],
    previewImages: [
      {
        src: "/projects/taskmanager-preview.jpeg",
        alt: "Task Manager login screen",
        label: "App Overview",
      },
      {
        src: "/projects/taskmanager-preview.gif",
        alt: "Task Manager interaction preview",
        label: "Authentication Flow",
      },
      {
        src: "/projects/taskmanager-preview2.gif",
        alt: "Task Manager second interaction preview",
        label: "Live Usage Preview",
      },
    ],
  },

  {
    title: "Blog API",
    eyebrow: "Blog • JWT • SendGrid • MongoDB • Swagger",
    description:
      "RESTful blog backend with email verification, role-based access, API documentation and practical authentication architecture.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "SendGrid", "Swagger"],
    githubUrl: "https://github.com/AndriyAtWork25/blog-api",
    highlights: [
      "Email verification flow",
      "Role-based access logic",
      "Documented REST API",
      "Integrated blog frontend workflow",
    ],
    previewImages: [
      {
        src: "/projects/blog-api-preview.jpeg",
        alt: "Blog API UI preview",
        label: "Blog Interface",
      },
      {
        src: "/projects/blogapi-preview.gif",
        alt: "Blog API preview gif",
        label: "Documentation Flow",
      },
      {
        src: "/projects/blogapi-preview3.gif",
        alt: "Blog API additional gif preview",
        label: "API Interaction",
      },
    ],
  },
];