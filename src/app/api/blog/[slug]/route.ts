import { getAllSlugs, getRawPostMarkdown } from "@/lib/blog";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

interface BlogMarkdownRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: BlogMarkdownRouteProps,
) {
  const { slug } = await params;
  const markdown = getRawPostMarkdown(slug);

  if (!markdown) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
