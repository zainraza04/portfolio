import { Card } from "@/components/ui/Card";
import { RevealItem, RevealOnScroll, RevealStagger } from "@/components/ui/RevealOnScroll";
import { SectionAccentBar } from "@/components/ui/SectionAccentBar";
import type { SkillGroup } from "@/data/skills";
import { SkillGroupBadges } from "@/components/sections/SkillGroupBadges";
import type { BadgeItem } from "@/components/sections/SkillGroupBadges";

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <SectionAccentBar />
          <p className="mb-3 font-mono text-sm text-accent-primary">{"// tech_stack"}</p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Technologies I Work With
          </h2>
        </RevealOnScroll>

        <RevealStagger className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => {
            // Pre-render icons server-side so they can cross the server→client boundary
            const badges: BadgeItem[] = group.skills.map(({ name, icon: Icon, primary }) => ({
              name,
              icon: <Icon className="h-4 w-4 shrink-0" />,
              primary,
            }));

            return (
              <RevealItem key={group.id}>
                <Card className="relative h-full overflow-hidden">
                  {/* Subtle noise texture overlay */}
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
                    aria-hidden="true"
                  >
                    <defs>
                      <filter id={`noise-${group.id}`}>
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.65"
                          numOctaves="3"
                          stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                      </filter>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      filter={`url(#noise-${group.id})`}
                    />
                  </svg>

                  <h3 className="mb-5 font-mono text-lg text-accent-secondary">
                    {group.title}
                  </h3>
                  <SkillGroupBadges badges={badges} />
                </Card>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
