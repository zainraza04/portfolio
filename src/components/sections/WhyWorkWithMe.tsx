import { Card } from "@/components/ui/Card";
import {
  RevealItem,
  RevealOnScroll,
  RevealStagger,
} from "@/components/ui/RevealOnScroll";
import { strengths } from "@/data/services";

export function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">
            {"// working_together"}
          </p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Why Work With Me
          </h2>
        </RevealOnScroll>

        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength, index) => (
            <RevealItem key={strength.title}>
              <Card className="h-full">
                <span className="mb-5 block font-mono text-sm text-accent-primary">
                  0{index + 1}
                </span>
                <h3 className="mb-3 text-base text-text-primary">{strength.title}</h3>
                <p className="text-sm text-text-secondary">{strength.description}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
