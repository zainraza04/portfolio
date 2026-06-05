import type { IconType } from "react-icons";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
  SiVscodium,
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
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Redux", icon: SiRedux },
      { name: "React Query", icon: SiReact },
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
      { name: "GraphQL", icon: SiGraphql },
      { name: "WebSockets", icon: SiNodedotjs },
    ],
  },
  {
    id: "database-devops",
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, primary: true },
      { name: "Redis", icon: SiRedis },
      { name: "Docker", icon: SiDocker, primary: true },
      { name: "Docker Compose", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Nginx", icon: SiNginx },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: SiVscodium },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "Linux", icon: SiLinux },
      { name: "Prisma", icon: SiPrisma },
      { name: "TypeORM", icon: SiTypeorm },
    ],
  },
];

export const heroTechStack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
];
