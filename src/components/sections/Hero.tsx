import { HeroActions, HeroScrollIndicator } from "@/components/sections/HeroClient";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/data/site";
import { heroTechStack } from "@/data/skills";
import type { IconType } from "react-icons";

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
        <Badge
          variant="success"
          className="mb-8 max-w-sm gap-2 whitespace-normal px-3 py-1.5 text-left leading-relaxed"
        >
          <span className="pulse-dot inline-block h-2 w-2 shrink-0 rounded-full bg-success" />
          {siteConfig.availability}
        </Badge>

        <p className="mb-5 font-mono text-sm text-accent-secondary sm:text-base">
          <span className="text-accent-primary">{"> "}</span>
          Zain Raza · Full-Stack Developer
        </p>

        <h1 className="mb-6 max-w-4xl text-2xl text-text-primary sm:text-4xl">
          Full-Stack Developer building scalable web products for{" "}
          <span className="gradient-text">startups and businesses.</span>
        </h1>

        <p className="mb-10 max-w-3xl text-base text-text-secondary sm:text-lg">
          I build production-ready applications using Next.js, React, NestJS, and
          TypeScript — from SaaS platforms and customer-facing products to dashboards,
          APIs, and internal tools.
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
