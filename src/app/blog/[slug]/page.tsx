import { ArticleContent } from "@/components/blog/ArticleContent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/data/site";
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

  const canonical = `/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
      types: {
        "text/markdown": `${canonical}.md`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonical,
      publishedTime: post.date,
      modifiedTime: post.date,
      tags: post.tags,
      authors: [siteConfig.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = siteConfig.siteUrl;
  const pageUrl = `${siteUrl}/blog/${slug}`;
  const personId = `${siteUrl}/#person`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    url: pageUrl,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    isAccessibleForFree: true,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
            <span
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <Link href="/" itemProp="url" className="hover:text-accent-secondary">
                <span itemProp="name">{siteConfig.name}</span>
              </Link>
            </span>
            {" · "}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
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
