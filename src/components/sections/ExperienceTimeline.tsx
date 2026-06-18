"use client";

import { Badge } from "@/components/ui/Badge";
import type { ExperienceEntry } from "@/data/experience";
import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

interface ExperienceTimelineProps {
  experience: ExperienceEntry[];
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseDurationLabel(durationStr: string): string {
  const now = new Date();

  const parseMonthYear = (s: string): Date => {
    const trimmed = s.trim();
    if (trimmed === "Present") return now;
    const parts = trimmed.split(" ");
    if (parts.length < 2) return now;
    const m = MONTHS.indexOf(parts[0]);
    const y = parseInt(parts[1], 10);
    if (m === -1 || isNaN(y)) return now;
    return new Date(y, m);
  };

  // Split on en-dash or hyphen (with optional spaces)
  const segments = durationStr.split(/\s*[–\-]\s*/);
  if (segments.length < 2) return "";

  const start = parseMonthYear(segments[0]);
  const end = parseMonthYear(segments[1]);

  const totalMonths = Math.max(
    0,
    (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()),
  );

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) return `// ${years}y ${months}m`;
  if (years > 0) return `// ${years}y`;
  if (totalMonths > 0) return `// ${totalMonths}m`;
  return "// <1m";
}

interface ExperienceCardProps {
  entry: ExperienceEntry;
}

function ExperienceCard({ entry }: ExperienceCardProps) {
  const durationLabel = parseDurationLabel(entry.duration);

  return (
    <div className="group/card relative flex h-full flex-col overflow-hidden border border-border bg-bg-secondary p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent-primary/60 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--accent-glow)_25%,transparent)]">
      {/* Animated left border beam on hover */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2px] overflow-hidden">
        <div className="beam-down absolute inset-x-0 h-full -translate-y-full bg-linear-to-b from-transparent via-accent-secondary to-transparent group-hover/card:animate-[beam-down_0.9s_ease-in-out_infinite]" />
      </div>

      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg text-text-primary">{entry.role}</h3>
          <p className="font-mono text-sm text-accent-secondary">
            @ {entry.company}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs text-text-muted">{entry.duration}</p>
          {/* Console-log style duration label */}
          {durationLabel && (
            <p className="mt-0.5 font-mono text-xs text-accent-primary/50">
              {durationLabel}
            </p>
          )}
          <Badge variant="default" className="mt-2">
            {entry.employmentType}
          </Badge>
        </div>
      </div>

      <ul className="mb-5 space-y-2 text-sm text-text-secondary">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="text-accent-primary">▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {entry.techStack.map((tech) => (
          <Badge key={tech} variant="muted">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 30%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Timeline track */}
      <div
        className="absolute bottom-0 left-[7px] top-0 w-px bg-accent-primary/20 sm:left-[11px]"
        aria-hidden="true"
      >
        {/* Animated fill */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-x-0 top-0 h-full bg-accent-primary/70"
            style={{ scaleY, transformOrigin: "top" }}
          />
        )}
      </div>

      <div className="space-y-10">
        {experience.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="relative flex gap-6 sm:gap-8"
          >
            {/* Timeline dot with ripple rings */}
            <div className="relative z-10 shrink-0 pt-2">
              <div className="timeline-dot-ripple relative flex items-center justify-center">
                {/* Ripple rings */}
                <span
                  className={cn(
                    "absolute h-4 w-4 rounded-full border border-accent-primary/40 sm:h-5 sm:w-5",
                    "animate-[timeline-ripple_2.5s_ease-out_infinite]",
                  )}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "absolute h-4 w-4 rounded-full border border-accent-primary/20 sm:h-5 sm:w-5",
                    "animate-[timeline-ripple_2.5s_ease-out_0.8s_infinite]",
                  )}
                  aria-hidden="true"
                />
                {/* Dot */}
                <div
                  className="relative z-10 h-4 w-4 rounded-full border-2 border-accent-primary bg-bg-primary sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="flex-1">
              <ExperienceCard entry={entry} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
