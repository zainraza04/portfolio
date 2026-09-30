import { AboutTerminal } from "@/components/sections/AboutTerminal";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const stats = [
  "4+ Years Experience",
  "Production Applications",
  "Product-Minded",
  "Frontend + Backend",
];

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">{"// about_me"}</p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Engineering products from interface to infrastructure
          </h2>
        </RevealOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll delay={0.1}>
            <div className="space-y-5 text-text-secondary">
              <p>
                I&apos;m a full-stack developer with 4+ years of experience building
                production web applications. My background spans React and Next.js
                interfaces, NestJS and Node.js services, data, authentication, and
                third-party integrations.
              </p>
              <p>
                I approach engineering with a product mindset: understand the user and
                business need, choose practical architecture, and ship maintainable work
                that fits the existing system.
              </p>
              <p>
                Based in Lahore, Pakistan, I work with freelance clients, product teams,
                and international remote companies.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((stat) => (
                <Badge key={stat} variant="accent" className="px-3 py-1.5 text-xs">
                  {stat}
                </Badge>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <AboutTerminal />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
