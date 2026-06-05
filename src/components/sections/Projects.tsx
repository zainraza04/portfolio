import { ProjectsFilter } from "@/components/sections/ProjectsFilter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Project } from "@/data/projects";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">
            {"// featured_projects"}
          </p>
          <h2 className="mb-10 text-3xl text-text-primary sm:text-4xl">
            Things I&apos;ve Built
          </h2>
        </RevealOnScroll>

        <ProjectsFilter projects={projects} />
      </div>
    </section>
  );
}
