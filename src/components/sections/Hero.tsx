import { HeroActions, HeroScrollIndicator } from "@/components/sections/HeroClient";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TerminalText } from "@/components/ui/TerminalText";
import { heroTechStack } from "@/data/skills";

const roles = [
  "Full Stack Engineer",
  "React & Next.js Specialist",
  "Backend Architect",
  "Open Source Contributor",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="scanline-overlay absolute inset-0 opacity-40" aria-hidden="true" />

      <RevealOnScroll className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Badge variant="success" className="mb-8 gap-2">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-success" />
          ✦ Available for work
        </Badge>

        <h1 className="mb-6 text-4xl text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Zain Raza</span>
        </h1>

        <p className="mb-4 font-mono text-lg text-accent-secondary sm:text-xl md:text-2xl">
          <span className="text-accent-primary">{"> "}</span>
          <TerminalText strings={roles} />
          <span className="text-accent-primary">&quot;</span>
        </p>

        <p className="mb-10 max-w-2xl text-base text-text-secondary sm:text-lg">
          I build scalable, production-grade web applications — from polished React
          interfaces to robust NestJS backends — with a focus on clean architecture
          and developer experience.
        </p>

        <HeroActions />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {heroTechStack.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon className="h-8 w-8 text-text-secondary transition-colors hover:text-accent-secondary sm:h-9 sm:w-9" />
              <span className="font-mono text-xs text-text-muted">{name}</span>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <HeroScrollIndicator />
      </div>
    </section>
  );
}
