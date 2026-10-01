import { Badge } from "@/components/ui/Badge";
import type { CaseStudy } from "@/data/case-studies";
import Link from "next/link";
import type { ReactNode } from "react";

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy;
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-12 sm:py-16">
      <p className="mb-3 font-mono text-xs text-accent-primary">{`// ${id}`}</p>
      <h2 className="mb-6 text-2xl text-text-primary sm:text-3xl">{title}</h2>
      <div className="space-y-5 leading-7 text-text-secondary">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pt-1">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-px text-accent-primary">
            ▸
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  return (
    <main className="relative z-10 flex-1 px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <Link
          href="/#work"
          className="mb-10 inline-flex font-mono text-sm text-accent-secondary transition-colors hover:text-accent-primary"
        >
          {"← Back to selected work"}
        </Link>

        <header className="border-b border-border pb-14 sm:pb-16">
          <p className="mb-4 font-mono text-sm text-accent-primary">
            {"// case_study"}
          </p>
          <h1 className="mb-5 max-w-4xl text-4xl text-text-primary sm:text-5xl lg:text-6xl">
            {caseStudy.title}
          </h1>
          <p className="max-w-3xl text-xl leading-8 text-text-secondary sm:text-2xl sm:leading-9">
            {caseStudy.tagline}
          </p>

          <dl className="mt-10 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
            {caseStudy.metadata.map((item) => (
              <div
                key={item.label}
                className="border-b border-border px-0 py-5 last:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:[&:nth-child(even)]:border-r-0 sm:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:[&:nth-child(even)]:border-r lg:last:border-r-0"
              >
                <dt className="mb-2 font-mono text-[0.7rem] uppercase tracking-wider text-text-muted">
                  {item.label}
                </dt>
                <dd className="text-sm leading-6 text-text-primary">{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="mx-auto max-w-3xl">
          <Section id="overview" title="Overview">
            {caseStudy.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {caseStudy.overviewPoints && (
              <BulletList items={caseStudy.overviewPoints} />
            )}
            {caseStudy.overviewConclusion?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Section>

          <Section id="the_challenge" title="The Challenge">
            {caseStudy.challenge.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {caseStudy.challenge.breakdown && (
              <div className="space-y-7 pt-1">
                {caseStudy.challenge.breakdown.map((item) => (
                  <div key={item.title}>
                    <h3 className="mb-3 text-base text-text-primary">{item.title}</h3>
                    <BulletList items={item.points} />
                  </div>
                ))}
              </div>
            )}
            {caseStudy.challenge.points && (
              <BulletList items={caseStudy.challenge.points} />
            )}
            {caseStudy.challenge.afterBreakdown?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {caseStudy.challenge.finalPoints && (
              <BulletList items={caseStudy.challenge.finalPoints} />
            )}
            {caseStudy.challenge.conclusion.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Section>

          <Section id="my_role" title="My Role">
            {caseStudy.role.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Section>

          <Section id="what_i_worked_on" title="What I Worked On">
            <div className="space-y-9">
              {caseStudy.work.map((item) => (
                <div key={item.title}>
                  <h3 className="mb-3 text-lg text-text-primary">{item.title}</h3>
                  <div className="space-y-3">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {item.points && <BulletList items={item.points} />}
                    {item.conclusion?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="key_engineering_challenge" title="Key Engineering Challenge">
            <div className="border-l-2 border-accent-primary/50 pl-5 sm:pl-6">
              <h3 className="mb-5 text-xl text-text-primary">
                {caseStudy.engineeringChallenge.title}
              </h3>
              <div className="space-y-5">
                {caseStudy.engineeringChallenge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {caseStudy.engineeringChallenge.points && (
                  <BulletList items={caseStudy.engineeringChallenge.points} />
                )}
                {caseStudy.engineeringChallenge.afterPoints?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {caseStudy.engineeringChallenge.breakdown && (
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {caseStudy.engineeringChallenge.breakdown.map((item) => (
                    <div key={item.title} className="border-t border-border pt-5">
                      <h4 className="mb-3 text-base text-text-primary">{item.title}</h4>
                      <BulletList items={item.points} />
                    </div>
                  ))}
                </div>
              )}
              {caseStudy.engineeringChallenge.conclusion && (
                <div className="mt-8 space-y-5">
                  {caseStudy.engineeringChallenge.conclusion.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </Section>

          <Section id="engineering_approach" title="Engineering Approach">
            {caseStudy.approach.introduction && (
              <p>{caseStudy.approach.introduction}</p>
            )}
            <div className="space-y-7 pt-2">
              {caseStudy.approach.principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="mb-2 text-base text-text-primary">
                    {principle.title}
                  </h3>
                  <p>{principle.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="product_impact" title="Product Impact">
            {caseStudy.impact.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Section>

          <Section id="technology" title="Technology">
            <div className="flex flex-wrap gap-2">
              {caseStudy.technology.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </Section>

          <Section
            id="what_this_project_demonstrates"
            title="What This Project Demonstrates"
          >
            <BulletList items={caseStudy.demonstrates} />
          </Section>

          <aside className="border-y border-border py-8 text-sm leading-6 text-text-muted">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-text-secondary">
              Confidentiality note
            </p>
            <p>{caseStudy.confidentialityNote}</p>
          </aside>

          <section className="py-16 text-center sm:py-20">
            <h2 className="mx-auto mb-7 max-w-xl text-2xl text-text-primary sm:text-3xl">
              Have a similar product or technical challenge?
            </h2>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center border border-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3 font-mono text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_color-mix(in_srgb,var(--accent-glow)_45%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              Discuss a Project
            </Link>
            <div className="mt-8">
              <Link
                href="/#work"
                className="font-mono text-sm text-accent-secondary transition-colors hover:text-accent-primary"
              >
                {"← Back to selected work"}
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
