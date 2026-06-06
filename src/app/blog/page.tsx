import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  RevealItem,
  RevealOnScroll,
  RevealStagger,
} from "@/components/ui/RevealOnScroll";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about AI context engineering, token optimization, context window, React, Next.js, system design, and developer tooling by Zain Raza.",
};

export default function BlogPage() {
  const posts = getAllPosts();

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
            Notes on AI context engineering, token optimization, context window, React,
            Next.js, system design, and developer tooling.
          </p>
        </RevealOnScroll>

        <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <BlogPostCard post={post} />
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
