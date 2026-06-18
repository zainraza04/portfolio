"use client";

import dynamic from "next/dynamic";

const MatrixRain = dynamic(
  () => import("@/components/ui/MatrixRain").then((m) => m.MatrixRain),
  { ssr: false },
);

export function HeroBackground() {
  return (
    <>
      <MatrixRain />
      {/* Bottom fade — bleeds rain into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-primary))",
          zIndex: 2,
        }}
        aria-hidden="true"
      />
    </>
  );
}
