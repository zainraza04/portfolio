"use client";

import type { Project, ProjectType } from "@/data/projects";
import { projectFilters } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";

interface ProjectsFilterProps {
  projects: Project[];
}

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "All">("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "border px-4 py-2 font-mono text-sm transition-all duration-300",
              activeFilter === filter
                ? "border-accent-primary bg-accent-primary/10 text-accent-secondary shadow-[0_0_16px_color-mix(in_srgb,var(--accent-glow)_30%,transparent)]"
                : "border-border bg-bg-tertiary text-text-secondary hover:border-border-accent hover:text-text-primary",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div
          layout={!prefersReducedMotion}
          className="grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </>
  );
}
