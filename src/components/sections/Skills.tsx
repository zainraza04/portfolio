import { Card } from "@/components/ui/Card";
import { RevealItem, RevealOnScroll, RevealStagger } from "@/components/ui/RevealOnScroll";
import type { SkillGroup } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">{"// tech_stack"}</p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Technologies I Work With
          </h2>
        </RevealOnScroll>

        <RevealStagger className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <RevealItem key={group.id}>
              <Card className="h-full">
                <h3 className="mb-5 font-mono text-lg text-accent-secondary">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(({ name, icon: Icon, primary }) => (
                    <div
                      key={name}
                      className={cn(
                        "flex items-center gap-2 border border-border bg-bg-tertiary px-3 py-2 font-mono text-xs transition-all duration-300",
                        "hover:-translate-y-0.5 hover:border-accent-primary hover:shadow-[0_0_12px_color-mix(in_srgb,var(--accent-glow)_30%,transparent)]",
                        primary && "border-accent-primary/30 text-text-primary",
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{name}</span>
                      {primary && (
                        <span className="text-accent-primary" aria-label="Primary strength">
                          ★
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
