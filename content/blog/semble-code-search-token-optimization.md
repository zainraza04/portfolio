---
title: "Semble: Stop Reading Files, Start Retrieving Code"
excerpt: "How Semble replaces grep-and-read workflows with semantic code retrieval, cutting token usage by up to 98%."
tags: ["Token-Optimization", "AI-Engineering", "Prompt-Engineering", "Developer-Tools"]
date: "2026-06-05"
slug: "semble-code-search-token-optimization"
---

---

# Semble: Stop Reading Files, Start Retrieving Code

Most AI coding agents spend more tokens reading code than writing code.

The typical workflow looks like this:

1. Search with grep.
2. Find matching files.
3. Open entire files.
4. Send those files into context.
5. Repeat.

The problem is simple: agents usually need a few relevant functions, but they end up loading thousands of lines of unrelated code.

Semble, created by MinishLab, replaces this workflow with semantic code retrieval. Instead of returning entire files, it returns only the code snippets most relevant to the query. The result is dramatically lower token usage and significantly cleaner context.

## Why It Works

Traditional code exploration operates at the file level.

Semble operates at the snippet level.

When an agent asks:

> "How is authentication handled?"

A standard workflow may read multiple files before finding the answer.

Semble searches a pre-built index and returns only the relevant chunks containing the authentication logic. According to the project's benchmarks, agents can achieve high retrieval quality while using a fraction of the context normally required.

## A Real-World Example

Imagine asking a librarian for one paragraph from a specific book.

### Traditional Workflow

The librarian:

- Finds the book.
- Hands you the entire book.
- Waits while you search manually.

### Semble Workflow

The librarian:

- Finds the exact page.
- Highlights the relevant paragraph.
- Hands you only what you requested.

Same answer.

Much less information to process.

## Implementation

Install Semble and expose it to your coding agent:

```bash
uvx --from "semble[mcp]" semble
```

Then configure it as an MCP tool for Claude Code, Cursor, Codex, or other supported agents. Once indexed, the agent can search codebases using natural language instead of repeatedly reading full files.

## Workflow Example

### Example: Finding Authentication Logic

#### With Standard Agent Behavior:

1. Run grep across the repository.
2. Open multiple matching files.
3. Read thousands of lines to understand the flow.
4. **Token Cost:** High (~20,000+ tokens).

#### With Semble:

1. Search for "authentication flow".
2. Retrieve only the highest-ranking code snippets.
3. Open full files only if additional context is required.
4. **Token Cost:** Exceptionally Low (~500–2,000 tokens).

## Compounding Returns

Semble changes the economics of code discovery.

Instead of treating entire files as context, it treats code snippets as context.

That leads to:

- Lower token costs
- Faster agent execution
- Better context utilization
- Higher cache efficiency
- More room for actual reasoning

The biggest token savings in AI coding workflows rarely come from generating less code.

They come from reading less code.

That's exactly the problem Semble was built to solve.
