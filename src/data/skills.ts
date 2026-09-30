import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiStripe,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
  primary?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, primary: true },
      { name: "Next.js", icon: SiNextdotjs, primary: true },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, primary: true },
      { name: "NestJS", icon: SiNestjs, primary: true },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiNodedotjs },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    id: "databases-platforms",
    title: "Databases & Platforms",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, primary: true },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "Docker", icon: SiDocker, primary: true },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & Delivery",
    skills: [
      { name: "Stripe", icon: SiStripe },
      { name: "Real-time Systems", icon: SiNodedotjs },
      { name: "Authentication", icon: SiNestjs },
      { name: "Testing", icon: SiPostman },
      { name: "Deployment", icon: SiGithubactions },
      { name: "SEO / SSR / ISR", icon: SiNextdotjs },
    ],
  },
];

export const heroTechStack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
];
