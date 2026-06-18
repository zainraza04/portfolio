"use client";

import { useCallback, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

export function useTilt(maxDeg = 8) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);

  const rotateX = useSpring(rawX, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rawY, { stiffness: 300, damping: 30 });

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || maxDeg === 0) return;
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      rawY.set((nx - 0.5) * maxDeg * 2);
      rawX.set(-(ny - 0.5) * maxDeg * 2);
      glareX.set(nx * 100);
      glareY.set(ny * 100);
      glareOpacity.set(1);
    },
    [maxDeg, rawX, rawY, glareX, glareY, glareOpacity],
  );

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    glareOpacity.set(0);
  }, [rawX, rawY, glareOpacity]);

  return {
    ref,
    rotateX,
    rotateY,
    glareX,
    glareY,
    glareOpacity,
    onMouseMove,
    onMouseLeave,
  };
}
