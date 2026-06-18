"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const CHARS =
  "ァィゥェォカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789{}[]<>|/\\";
const FONT_SIZE = 14;
const TRAIL = 22;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let cols: number;
    let drops: number[];
    let speeds: number[];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -80);
      speeds = Array.from({ length: cols }, () => 0.12 + Math.random() * 0.38);
    };

    init();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < cols; i++) {
        drops[i] += speeds[i];
        const head = Math.floor(drops[i]);

        for (let j = 0; j < TRAIL; j++) {
          const row = head - j;
          if (row < 0 || row * FONT_SIZE > canvas.height) continue;

          // t: 1 at head, 0 at tail
          const t = 1 - j / TRAIL;
          // Interpolate #a855f7 (168,85,247) → #3b0764 (59,7,100)
          const r = Math.round(168 * t + 59 * (1 - t));
          const g = Math.round(85 * t + 7 * (1 - t));
          const b = Math.round(247 * t + 100 * (1 - t));
          const a = Math.pow(t, 1.4);

          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fillText(
            CHARS[Math.floor(Math.random() * CHARS.length)],
            i * FONT_SIZE,
            row * FONT_SIZE,
          );
        }

        if (
          head * FONT_SIZE > canvas.height + TRAIL * FONT_SIZE &&
          Math.random() > 0.97
        ) {
          drops[i] = -(TRAIL + Math.floor(Math.random() * 50));
        }
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      init();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.15, zIndex: 1, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
