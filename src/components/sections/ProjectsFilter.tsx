"use client";

import type { Project, ProjectType } from "@/data/projects";
import { projectFilters } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

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
              "cursor-pointer border px-4 py-2 font-mono text-sm transition-all duration-300",
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
                <Card className="group relative flex h-full flex-col overflow-hidden">
                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge variant="accent">{project.type}</Badge>
                    </div>

                    <h3 className="mb-3 text-lg text-text-primary">{project.title}</h3>
                    <p className="mb-4 text-sm text-text-secondary">
                      {project.description}
                    </p>

                    <div className="mb-5 border-l-2 border-accent-primary/40 pl-4">
                      <p className="font-mono text-[0.7rem] uppercase tracking-wider text-text-muted">
                        My Role
                      </p>
                      <p className="mt-1 text-sm text-text-primary">{project.role}</p>
                    </div>

                    <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-wider text-text-muted">
                      Highlights
                    </p>
                    <ul className="mb-6 flex-1 space-y-2 text-sm text-text-secondary">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="text-accent-primary">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-border pt-4">
                      <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-wider text-text-muted">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {project.caseStudySlug && (
                        <Link
                          href={`/case-studies/${project.caseStudySlug}`}
                          className="mt-4 inline-flex font-mono text-xs text-accent-secondary transition-colors hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                        >
                          View Case Study →
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </>
  );
}
