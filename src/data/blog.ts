export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "nestjs-postgresql",
    title: "Building Scalable APIs with NestJS and PostgreSQL",
    excerpt:
      "Patterns for structuring modules, handling migrations, and optimizing queries in production-grade APIs.",
    tags: ["Backend", "NestJS"],
    date: "2026-03-15",
    slug: "scalable-apis-nestjs-postgresql",
  },
  {
    id: "nextjs-app-router",
    title: "Why I Use Next.js App Router for Every Project",
    excerpt:
      "Server Components, streaming, and layout patterns that make App Router my default choice for new apps.",
    tags: ["Frontend", "Next.js"],
    date: "2026-02-28",
    slug: "nextjs-app-router-every-project",
  },
  {
    id: "docker-compose",
    title: "Docker Compose for Full Stack Development",
    excerpt:
      "A practical guide to mirroring production locally with multi-service Docker Compose setups.",
    tags: ["DevOps", "Docker"],
    date: "2026-01-10",
    slug: "docker-compose-full-stack-dev",
  },
];
