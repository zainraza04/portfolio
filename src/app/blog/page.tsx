import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { RevealItem, RevealOnScroll, RevealStagger } from "@/components/ui/RevealOnScroll";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about React, Next.js, system design, and developer tooling by Zain Raza.",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl flex-1 px-4 py-28 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">{"// blog"}</p>
          <h1 className="mb-4 text-3xl text-text-primary sm:text-4xl">
            Thoughts & Articles
          </h1>
          <p className="mb-12 max-w-2xl text-text-secondary">
            Coming soon — I write about React, Next.js, system design, and developer
            tooling
          </p>
        </RevealOnScroll>

        <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
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
                  <h2 className="mb-2 text-base text-text-primary">{post.title}</h2>
                  <p className="mb-3 font-mono text-xs text-text-muted">
                    {formatDate(post.date)}
                  </p>
                  <p className="flex-1 text-sm text-text-secondary">{post.excerpt}</p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>

        <RevealOnScroll className="mt-12">
          <Link
            href="/"
            className="font-mono text-sm text-accent-secondary transition-colors hover:text-accent-primary"
          >
            {"← Back to home"}
          </Link>
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}
