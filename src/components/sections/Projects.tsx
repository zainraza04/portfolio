import { ProjectsFilter } from "@/components/sections/ProjectsFilter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Project } from "@/data/projects";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="work" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">
            {"// selected_work"}
          </p>
          <h2 className="mb-4 text-3xl text-text-primary sm:text-4xl">Selected Work</h2>
          <p className="mb-12 max-w-2xl text-text-secondary">
            Production products built for real users, business workflows, and
            operational teams.
          </p>
        </RevealOnScroll>

        <ProjectsFilter projects={projects} />
      </div>
    </section>
  );
}
