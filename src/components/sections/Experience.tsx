import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionAccentBar } from "@/components/ui/SectionAccentBar";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import type { ExperienceEntry } from "@/data/experience";

interface ExperienceProps {
  experience: ExperienceEntry[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <SectionAccentBar />
          <p className="mb-3 font-mono text-sm text-accent-primary">
            {"// work_experience"}
          </p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Where I&apos;ve Made an Impact
          </h2>
        </RevealOnScroll>

        <ExperienceTimeline experience={experience} />
      </div>
    </section>
  );
}
