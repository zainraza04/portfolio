"use client";

import { pageTransition } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="relative z-10 flex min-h-full flex-col">{children}</div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={pageTransition}
      className="relative z-10 flex min-h-full flex-col"
    >
      {children}
    </motion.div>
  );
}
