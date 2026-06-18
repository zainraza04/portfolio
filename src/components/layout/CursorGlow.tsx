"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const prefersReducedMotion = useReducedMotion();
  const [isOnHero, setIsOnHero] = useState(true);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 80, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    rawX.set(x);
    rawY.set(y);
  }, [x, y, rawX, rawY]);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsOnHero(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (prefersReducedMotion) return null;

  const size = isOnHero ? 800 : 400;
  const opacity = isOnHero ? 0.12 : 0.07;

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        style={{
          left: springX,
          top: springY,
          background: `radial-gradient(circle, rgba(168,85,247,${opacity}) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
