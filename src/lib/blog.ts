import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

function getBlogFilePaths(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
}

function parsePost(filename: string): BlogPostWithContent {
  const filePath = path.join(BLOG_DIR, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: data.slug ?? filename.replace(/\.md$/, ""),
    title: data.title,
    excerpt: data.excerpt,
    tags: data.tags ?? [],
    date: data.date,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return getBlogFilePaths()
    .map((filename) => {
      const { content: _content, ...metadata } = parsePost(filename);
      return metadata;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  for (const filename of getBlogFilePaths()) {
    const post = parsePost(filename);
    if (post.slug === slug) {
      return post;
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
