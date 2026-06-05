import { AboutTerminal } from "@/components/sections/AboutTerminal";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const stats = [
  "4+ Years Experience",
  "15+ Projects Delivered",
  "Full Stack",
  "Remote Ready",
];

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">{"// about_me"}</p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Crafting digital experiences with clean code
          </h2>
        </RevealOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll delay={0.1}>
            <div className="space-y-5 text-text-secondary">
              <p>
                I&apos;m a full-stack engineer with 4+ years of experience building
                web applications that scale. My work spans the entire stack — from
                crafting responsive React and Next.js frontends to designing robust
                backend architectures with NestJS and Node.js.
              </p>
              <p>
                I&apos;m deeply passionate about the React/Next.js and NestJS
                ecosystems, and I thrive on solving complex problems with clean,
                maintainable code. Whether it&apos;s optimizing database queries,
                implementing real-time features, or polishing UI interactions, I
                bring the same attention to detail to every layer of the stack.
              </p>
              <p>
                Beyond client work, I contribute to open source and enjoy sharing
                knowledge about system design, developer tooling, and modern web
                architecture. I believe great software is built at the intersection
                of solid engineering and thoughtful user experience.
              </p>
              <p>
                Currently based in Lahore, Pakistan, I&apos;m open to remote
                opportunities with teams that value quality, collaboration, and
                continuous learning.
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
