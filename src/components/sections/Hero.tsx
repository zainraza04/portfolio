import { HeroActions, HeroScrollIndicator } from "@/components/sections/HeroClient";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TerminalText } from "@/components/ui/TerminalText";
import { heroTechStack } from "@/data/skills";
import type { IconType } from "react-icons";

const roles = [
  "Full Stack Engineer",
  "React & Next.js Specialist",
  "Backend Architect",
  "Open Source Contributor",
];

function TechItem({ name, icon: Icon }: { name: string; icon: IconType }) {
  return (
    <div className="flex w-[4.5rem] flex-col items-center gap-1.5 transition-transform duration-300 hover:-translate-y-1 sm:w-auto sm:gap-2">
      <Icon className="h-8 w-8 text-text-secondary transition-colors hover:text-accent-secondary sm:h-9 sm:w-9" />
      <span className="font-mono text-[0.65rem] text-text-muted sm:text-xs">
        {name}
      </span>
    </div>
  );
}

export function Hero() {
  const topRow = heroTechStack.slice(0, 3);
  const bottomRow = heroTechStack.slice(3);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col px-4 pt-20 pb-8 sm:px-6 lg:px-8"
    >
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div
        className="scanline-overlay absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <RevealOnScroll className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center pb-2 text-center">
        <Badge variant="success" className="mb-8 gap-2">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-success" />✦
          Available for work
        </Badge>

        <h1 className="mb-6 text-4xl text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="gradient-text">Zain Raza</span>
        </h1>

        <p className="mb-4 font-mono text-lg text-accent-secondary sm:text-xl md:text-2xl">
          <span className="text-accent-primary">{"> "}</span>
          <TerminalText strings={roles} />
          <span className="text-accent-primary">&quot;</span>
        </p>

        <p className="mb-10 max-w-2xl text-base text-text-secondary sm:text-lg">
          I build scalable, production-grade web applications — from polished React
          interfaces to robust NestJS backends — with a focus on clean architecture and
          developer experience.
        </p>

        <HeroActions />

        {/* Mobile: 3 + 2 rows · Desktop: single row of 5 */}
        <div className="mt-8 flex flex-col items-center gap-3 md:mt-10 md:flex-row md:justify-center md:gap-8">
          <div className="flex justify-center gap-5 md:contents">
            {topRow.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </div>
          <div className="flex justify-center gap-8 md:contents">
            {bottomRow.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </div>
        </div>

        <div className="mt-5 md:mt-10">
          <HeroScrollIndicator />
        </div>
      </RevealOnScroll>
    </section>
  );
}
