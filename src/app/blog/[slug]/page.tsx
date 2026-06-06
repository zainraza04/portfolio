import { ArticleContent } from "@/components/blog/ArticleContent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl flex-1 px-4 py-28 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <Link
            href="/blog"
            className="mb-8 inline-block font-mono text-sm text-accent-secondary transition-colors hover:text-accent-primary"
          >
            {"← Back to blog"}
          </Link>

          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mb-4 max-w-3xl text-3xl text-text-primary sm:text-4xl">
            {post.title}
          </h1>
          <p className="mb-12 font-mono text-sm text-text-muted">
            {formatDate(post.date)}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <ArticleContent content={post.content} />
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}
