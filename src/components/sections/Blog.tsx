import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { RevealItem, RevealOnScroll, RevealStagger } from "@/components/ui/RevealOnScroll";
import type { BlogPost } from "@/data/blog";
import Link from "next/link";

interface BlogProps {
  posts: BlogPost[];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Blog({ posts }: BlogProps) {
  return (
    <section id="blog" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">
            {"// latest_writings"}
          </p>
          <h2 className="mb-4 text-3xl text-text-primary sm:text-4xl">
            Thoughts & Articles
          </h2>
          <p className="mb-12 max-w-2xl text-text-secondary">
            Coming soon — I write about React, Next.js, system design, and developer
            tooling
          </p>
        </RevealOnScroll>

        <RevealStagger className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.id}>
              <Card className="relative flex h-full flex-col overflow-hidden">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-bg-primary/70">
                  <Badge variant="warning">Coming Soon</Badge>
                </div>

                <div className="relative z-0 flex flex-1 flex-col opacity-60">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-2 text-base text-text-primary">{post.title}</h3>
                  <p className="mb-3 font-mono text-xs text-text-muted">
                    {formatDate(post.date)}
                  </p>
                  <p className="flex-1 text-sm text-text-secondary">{post.excerpt}</p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>

        <RevealOnScroll className="mt-10 text-center" delay={0.2}>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center border border-border bg-transparent px-6 py-3 font-mono text-sm text-text-primary transition-all duration-300 hover:border-accent-primary hover:text-accent-secondary hover:shadow-[0_0_16px_color-mix(in_srgb,var(--accent-glow)_30%,transparent)] hover:scale-[1.02]"
          >
            All Articles →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
