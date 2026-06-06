import { BlogPostCard } from "@/components/blog/BlogPostCard";
import {
  RevealItem,
  RevealOnScroll,
  RevealStagger,
} from "@/components/ui/RevealOnScroll";
import type { BlogPost } from "@/lib/blog";
import Link from "next/link";

interface BlogProps {
  posts: BlogPost[];
}

export function Blog({ posts }: BlogProps) {
  if (posts.length === 0) {
    return null;
  }

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
            Notes on AI context engineering, token optimization, context window, React,
            Next.js, system design, and developer tooling.
          </p>
        </RevealOnScroll>

        <RevealStagger className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <BlogPostCard post={post} />
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
