"use client";

import { Badge } from "@/components/ui/Badge";
import { useTilt } from "@/hooks/useTilt";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useTransform,
  type Variants,
} from "framer-motion";
import { FileText, Lock } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const badgeVariants: Variants = {
  idle: { y: 0, scale: 1 },
  hovered: {
    y: -4,
    scale: 1.04,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

const badgeContainerVariants: Variants = {
  idle: {},
  hovered: { transition: { staggerChildren: 0.05 } },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, rotateX, rotateY, glareX, glareY, glareOpacity, onMouseMove, onMouseLeave } =
    useTilt(prefersReducedMotion ? 0 : 8);

  const glareAlpha = useTransform(glareOpacity, (o) => o * 0.15);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(168,85,247,${glareAlpha}) 0%, transparent 60%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial="idle"
      whileHover="hovered"
      style={
        prefersReducedMotion
          ? {}
          : { rotateX, rotateY, transformPerspective: 1000 }
      }
      className="group h-full"
    >
      {/* Card shell — replicates Card's styles + adds overflow-hidden + tilt-border */}
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden border bg-bg-secondary p-6",
          "border-border transition-[border-color,box-shadow] duration-300",
          "hover:border-accent-primary hover:shadow-[0_0_24px_color-mix(in_srgb,var(--accent-glow)_35%,transparent),0_8px_32px_color-mix(in_srgb,var(--accent-glow)_20%,transparent)]",
        )}
      >
        {/* Top border beam */}
        <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
          <div className="beam-across absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-accent-secondary to-transparent group-hover:animate-[beam-across_0.8s_ease-in-out_forwards]" />
        </div>

        {/* Glare overlay */}
        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ background: glareBg }}
            aria-hidden="true"
          />
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col">
          {/* Badges row — badge type + tech stack */}
          <motion.div
            className="mb-4 flex flex-wrap items-center gap-2"
            variants={badgeContainerVariants}
          >
            <Badge variant="accent">{project.type}</Badge>
            {project.techStack.slice(0, 4).map((tech) => (
              <motion.div key={tech} variants={badgeVariants}>
                <Badge variant="default">{tech}</Badge>
              </motion.div>
            ))}
          </motion.div>

          <h3 className="mb-3 text-lg text-text-primary">{project.title}</h3>
          <p className="mb-4 text-sm text-text-secondary">{project.description}</p>

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
      </div>
    </motion.div>
  );
}
