---
title: "Context-Mode: MCP-Level Context Firewall for AI Agents"
excerpt: "How Context-Mode prevents context explosion by sandboxing tool output and replacing raw dumps with controlled retrieval."
tags: ["AI-Engineering", "Prompt-Engineering", "Developer-Tools"]
date: "2026-06-05"
slug: "context-mode-mcp-context-firewall"
---

---

# Context-Mode: MCP-Level Context Firewall for AI Agents

Most AI agents don’t fail because they lack capability.

They fail because every tool call poisons the context window.

A single Playwright snapshot, a batch of GitHub issues, or a log dump can consume tens of kilobytes instantly. After a few tool calls, the model is no longer reasoning over the task — it is drowning in raw data.

Context-Mode (Context-Mode) fixes this at the protocol layer.

Not by summarizing.

Not by compressing prompts.

But by stopping raw data from entering the context window in the first place.

---

## Why It Works

Traditional AI tool execution behaves like this:

> Tool → raw output → dumped into context → model reads everything

This creates three failures:

- Context explosion from large tool outputs
- Loss of session continuity after compaction
- Noise dominating reasoning signals

Context-Mode changes the pipeline:

> Tool → sandbox execution → structured storage (SQLite/FTS5) → selective retrieval

The model no longer sees raw outputs unless they are explicitly requested.

Instead of “reading everything,” it queries what matters.

---

## The Core Mechanism

Context-Mode operates across four layers:

### 1. Sandbox Isolation

Tool outputs are executed outside the context window.

- Playwright snapshots
- GitHub responses
- logs
- API responses

All stay outside the prompt.

Only references enter context.

---

### 2. Event-Based Session Tracking

Every meaningful action is stored as structured events:

- tool calls
- file edits
- decisions
- errors
- task progress

This is persisted in a local SQLite store, not the prompt.

When the context compacts, nothing is lost — it is reconstructed from events.

---

### 3. Retrieval Instead of Dumping

When the model needs information:

- it queries FTS5 index (BM25 scoring)
- retrieves only relevant slices
- injects minimal structured context

No full logs. No raw dumps.

---

### 4. Execution Over Reading

Instead of loading large datasets into context, the agent is pushed to:

- compute via scripts
- filter in sandbox
- return only results

This flips the model from “data consumer” to “computation orchestrator.”

---

## A Real-World Example

Imagine debugging a production incident.

### Traditional Agent

1. Pull full logs (45KB+)
2. Load API traces
3. Load previous deployments
4. Load unrelated warnings
5. Reason over noisy context

Result: slow, diluted diagnosis

**Token Cost:** High (~20,000–50,000 tokens)

---

### Context-Mode Agent

1. Tool runs logs in sandbox
2. Only error-relevant slices are indexed
3. Model queries: “error path + last failing request”
4. Returns minimal extracted signal

**Token Cost:** Exceptionally Low (~1,000–3,000 tokens)

Same system. Completely different data surface.

---

## Why This Is Not Summarization

This is the key distinction.

Context-Mode is not:

- a summarizer
- a memory system
- a prompt compressor

It is:

> a **data access control layer for AI context windows**

Summaries still enter context.
Context-Mode prevents raw data from entering at all.

That difference is what enables the 98% reduction.

---

## Compounding Returns

Once Context-Mode is active:

- tool outputs stop inflating prompts
- sessions remain stable across compaction
- retrieval replaces re-reading
- token usage stops scaling with data size

When combined with:

- Caveman Protocol → prevents unnecessary loading
- Semble → reduces code retrieval size
- Code Review Graph → limits dependency traversal

You get a full stack of **context engineering primitives**:

> load less → read less → traverse less → store outside context entirely

At that point, AI agents stop behaving like chat systems.

They behave like controlled execution environments with bounded memory access.

Reference: (mksglu/context-mode)
