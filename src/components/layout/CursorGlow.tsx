"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        "transition-[background] duration-300 ease-out",
      )}
      aria-hidden="true"
    >
      <div
        className="absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: x,
          top: y,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent-primary) 15%, transparent) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
