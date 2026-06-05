"use client";

import type { Project, ProjectType } from "@/data/projects";
import { projectFilters } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { FileText, Lock } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

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
                <Card className="group relative flex h-full flex-col overflow-hidden">
                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge variant="accent">{project.type}</Badge>
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="mb-3 text-lg text-text-primary">{project.title}</h3>
                    <p className="mb-4 text-sm text-text-secondary">
                      {project.description}
                    </p>

                    <ul className="mb-6 flex-1 space-y-2 text-sm text-text-secondary">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="text-accent-primary">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3 border-t border-border pt-4">
                      <button
                        type="button"
                        disabled
                        title="Coming soon"
                        className="flex items-center gap-2 font-mono text-xs text-text-muted"
                      >
                        <FileText className="h-4 w-4" />
                        Case Study
                      </button>
                      <button
                        type="button"
                        disabled
                        title="Private repository"
                        className="flex items-center gap-2 font-mono text-xs text-text-muted"
                      >
                        <Lock className="h-4 w-4" />
                        Private Repo
                      </button>
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
