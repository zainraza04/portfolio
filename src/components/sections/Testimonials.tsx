import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="recommendations" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">
            {"// recommendations"}
          </p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Testimonials & Recommendations
          </h2>
        </RevealOnScroll>

        {testimonials.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={`${testimonial.name}-${testimonial.company}`}>
                <blockquote className="mb-6 text-text-secondary">
                  “{testimonial.quote}”
                </blockquote>
                <p className="font-mono text-sm text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-muted">
                  {testimonial.role} · {testimonial.company}
                </p>
                <p className="mt-2 font-mono text-xs text-accent-secondary">
                  {testimonial.relationship}
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <RevealOnScroll>
            <div className="border border-dashed border-border-accent bg-bg-secondary/50 px-6 py-10 text-center">
              <p className="font-mono text-sm text-text-secondary">
                Verified recommendations will be added here.
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
