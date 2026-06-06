import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/lib/blog";
import Link from "next/link";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col transition-all duration-300 group-hover:border-accent-primary group-hover:shadow-[0_0_16px_color-mix(in_srgb,var(--accent-glow)_30%,transparent)]">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mb-2 text-base text-text-primary transition-colors group-hover:text-accent-secondary">
          {post.title}
        </h3>
        <p className="mb-3 font-mono text-xs text-text-muted">{formatDate(post.date)}</p>
        <p className="flex-1 text-sm text-text-secondary">{post.excerpt}</p>
        <p className="mt-4 font-mono text-xs text-accent-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read article →
        </p>
      </Card>
    </Link>
  );
}
