import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="mb-4 mt-10 text-2xl text-text-primary first:mt-0">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-xl text-text-primary">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-text-secondary">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-text-secondary">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-text-secondary">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent-secondary underline decoration-accent-primary/40 underline-offset-4 transition-colors hover:text-accent-primary"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-2 border-accent-primary pl-4 text-text-muted italic">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-");

    if (isBlock) {
      return (
        <code className="font-mono text-sm text-accent-secondary">{children}</code>
      );
    }

    return (
      <code className="rounded bg-bg-secondary px-1.5 py-0.5 font-mono text-sm text-accent-secondary">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto border border-border bg-bg-secondary p-4 font-mono text-sm leading-relaxed">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-text-primary">{children}</strong>
  ),
};

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article className="max-w-3xl">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
