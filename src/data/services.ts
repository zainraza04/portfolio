import { Braces, Layers3, ServerCog, Wrench } from "lucide-react";

export const services = [
  {
    title: "SaaS & Web Applications",
    description:
      "End-to-end web products for startups and businesses, from idea to a production-ready application.",
    icon: Layers3,
  },
  {
    title: "Frontend Development",
    description:
      "Modern React and Next.js applications built from designs, product requirements, or existing systems.",
    icon: Braces,
  },
  {
    title: "Backend & APIs",
    description:
      "NestJS APIs, authentication, databases, integrations, and scalable business logic.",
    icon: ServerCog,
  },
  {
    title: "Existing Product Improvements",
    description:
      "New features, architecture improvements, performance work, bug fixing, and modernization for existing applications.",
    icon: Wrench,
  },
] as const;

export const strengths = [
  {
    title: "Production Experience",
    description:
      "I have worked on real-world applications used in production, not only personal or tutorial projects.",
  },
  {
    title: "Frontend + Backend Understanding",
    description:
      "I work across the product stack and understand how interfaces, APIs, authentication, data, and deployment fit together.",
  },
  {
    title: "Existing Codebases",
    description:
      "I am comfortable joining mature applications, understanding their architecture, and shipping changes safely.",
  },
  {
    title: "Clear Communication",
    description:
      "I focus on clear requirements, practical technical decisions, and transparent progress throughout delivery.",
  },
] as const;
