"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export interface BadgeItem {
  name: string;
  icon: ReactNode;
  primary?: boolean;
}

interface SkillGroupBadgesProps {
  badges: BadgeItem[];
}

export function SkillGroupBadges({ badges }: SkillGroupBadgesProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map(({ name, icon, primary }, i) => (
        <motion.div
          key={name}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: i * 0.03, duration: 0.35, ease: "easeOut" }}
          className={cn(
            "group/badge relative flex items-center gap-2 border bg-bg-tertiary px-3 py-2 font-mono text-xs",
            "transition-all duration-300 hover:-translate-y-0.5",
            // Animated gradient border on hover
            "hover:badge-border-beam",
            primary
              ? [
                  "border-accent-primary/40 text-text-primary",
                  "shadow-[0_0_10px_color-mix(in_srgb,var(--accent-primary)_25%,transparent)]",
                ]
              : "border-border",
          )}
        >
          {/* Rotating border beam on hover — uses ::before overlay */}
          <span className="badge-beam pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100" />
          {icon}
          <span>{name}</span>
          {primary && (
            <span className="text-accent-primary" aria-label="Primary skill">
              ★
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
