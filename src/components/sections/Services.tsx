import { Card } from "@/components/ui/Card";
import {
  RevealItem,
  RevealOnScroll,
  RevealStagger,
} from "@/components/ui/RevealOnScroll";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">{"// services"}</p>
          <h2 className="mb-4 text-3xl text-text-primary sm:text-4xl">
            What I Can Help With
          </h2>
          <p className="mb-12 max-w-2xl text-text-secondary">
            Practical engineering support for new products and established teams, from
            focused frontend work to full-stack delivery.
          </p>
        </RevealOnScroll>

        <RevealStagger className="grid gap-6 sm:grid-cols-2">
          {services.map(({ title, description, icon: Icon }) => (
            <RevealItem key={title}>
              <Card className="h-full">
                <Icon
                  className="mb-5 h-7 w-7 text-accent-secondary"
                  aria-hidden="true"
                />
                <h3 className="mb-3 text-lg text-text-primary">{title}</h3>
                <p className="text-sm text-text-secondary">{description}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
