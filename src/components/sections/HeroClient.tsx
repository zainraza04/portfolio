"use client";

import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function HeroActions() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button variant="primary" onClick={() => scrollToSection("work")}>
          View My Work
        </Button>
        <Button variant="ghost" onClick={() => scrollToSection("contact")}>
          Discuss a Project
        </Button>
      </div>
    </div>
  );
}

export function HeroScrollIndicator() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToWork}
      className="scroll-indicator flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent-secondary"
      aria-label="Scroll to selected work"
    >
      <span className="font-mono text-xs uppercase tracking-widest">scroll</span>
      <ChevronDown className="h-5 w-5" />
    </button>
  );
}
