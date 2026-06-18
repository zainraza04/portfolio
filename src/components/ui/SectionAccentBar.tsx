"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionAccentBar() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="mb-3 h-[3px] w-10 bg-linear-to-r from-accent-primary to-accent-secondary" />
    );
  }

  return (
    <motion.div
      className="mb-3 h-[3px] w-10 bg-linear-to-r from-accent-primary to-accent-secondary"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
    />
  );
}
