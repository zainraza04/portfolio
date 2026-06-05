export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  duration: string;
  employmentType: string;
  bullets: string[];
  techStack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "codefulcrum",
    role: "Full Stack Developer",
    company: "CodeFulcrum",
    duration: "August 2025 – Present",
    employmentType: "Full-time",
    bullets: [
      "Build and ship full-stack features across React/Next.js frontends and NestJS backend services for production client products",
      "Design REST APIs with PostgreSQL, implementing modular NestJS architecture, validation, and JWT-based authentication",
      "Own end-to-end delivery from UI implementation through API integration, debugging, and deployment support",
      "Collaborate with cross-functional teams to translate requirements into scalable, maintainable full-stack solutions",
    ],
    techStack: [
      "React",
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: "cloudpacer",
    role: "Frontend Developer",
    company: "Cloudpacer",
    duration: "July 2023 – August 2025",
    employmentType: "Full-time",
    bullets: [
      "Delivered production frontends across multiple client applications — marketplaces, logistics platforms, admin portals, and SaaS products",
      "Built large-scale React and Next.js SPAs with Redux Toolkit, RTK Query, and custom WebSocket hooks for real-time features",
      "Implemented hybrid design systems combining Tailwind CSS with Ant Design and shadcn/ui for brand-consistent UI at scale",
      "Improved performance through route-level code splitting, lazy loading, and Vite/webpack bundle optimization on 400+ file codebases",
      "Integrated Stripe, Mapbox, Firebase, and third-party APIs while maintaining robust auth flows with token refresh patterns",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    id: "ili-digital",
    role: "Full Stack Developer",
    company: "ILI.Digital",
    duration: "June 2022 – July 2023",
    employmentType: "Full-time",
    bullets: [
      "Developed full-stack web applications using React and ASP.NET (.NET) within an agile delivery environment",
      "Built and consumed RESTful APIs, connecting React frontends to .NET backend services for client-facing features",
      "Contributed to sprint planning, code reviews, and iterative feature releases across cross-functional project teams",
      "Gained foundational experience in component-driven UI development, state management, and production deployment workflows",
    ],
    techStack: ["React", ".NET", "JavaScript", "REST APIs", "HTML5", "CSS3", "Git"],
  },
];
