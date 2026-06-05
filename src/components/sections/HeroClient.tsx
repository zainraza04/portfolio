"use client";

import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function HeroActions() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <Button variant="primary" onClick={() => scrollToSection("projects")}>
        View My Work
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/cv.pdf";
          link.download = "Zain-Raza-CV.pdf";
          link.click();
        }}
      >
        Download CV
      </Button>
    </div>
  );
}

export function HeroScrollIndicator() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToAbout}
      className="scroll-indicator flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent-secondary"
      aria-label="Scroll to about section"
    >
      <span className="font-mono text-xs uppercase tracking-widest">scroll</span>
      <ChevronDown className="h-5 w-5" />
    </button>
  );
}
