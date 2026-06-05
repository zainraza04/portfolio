import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { RevealItem, RevealOnScroll, RevealStagger } from "@/components/ui/RevealOnScroll";
import type { ExperienceEntry } from "@/data/experience";

interface ExperienceProps {
  experience: ExperienceEntry[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">
            {"// work_experience"}
          </p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Where I&apos;ve Made an Impact
          </h2>
        </RevealOnScroll>

        <div className="relative">
          <div
            className="absolute bottom-0 left-[7px] top-0 w-px bg-accent-primary/40 sm:left-[11px]"
            aria-hidden="true"
          />

          <RevealStagger className="space-y-10">
            {experience.map((entry) => (
              <RevealItem key={entry.id}>
                <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 shrink-0 pt-2">
                    <div
                      className="timeline-dot h-4 w-4 rounded-full border-2 border-accent-primary bg-bg-primary sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <Card className="flex-1">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg text-text-primary">{entry.role}</h3>
                        <p className="font-mono text-sm text-accent-secondary">
                          @ {entry.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs text-text-muted">{entry.duration}</p>
                        <Badge variant="default" className="mt-2">
                          {entry.employmentType}
                        </Badge>
                      </div>
                    </div>

                    <ul className="mb-5 space-y-2 text-sm text-text-secondary">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-accent-primary">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {entry.techStack.map((tech) => (
                        <Badge key={tech} variant="muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
