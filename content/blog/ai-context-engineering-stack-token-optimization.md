---
title: "AI Context Engineering Stack: How to Cut Token Usage Across the Entire Agent Pipeline"
excerpt: "A unified breakdown of Caveman Protocol, Semble, Code Review Graph, Context-Mode, RTK, and Prompt Caching—and how each one reduces LLM cost and context bloat."
tags:
  [
    "Token-Optimization",
    "Context-Window",
    "AI-Engineering",
    "Prompt-Engineering",
    "Developer-Tools",
  ]
date: "2026-06-05"
slug: "ai-context-engineering-stack-token-optimization"
---

---

# AI Context Engineering Stack: Reducing Tokens at Every Layer

Most LLM systems fail for one reason: they treat context as a dump pipeline.

Everything gets pushed into the prompt:

- files
- logs
- tool outputs
- conversation history
- repo structure
- execution traces

Then the model is asked to reason over it.

This creates predictable failure modes:

- token explosion
- slow responses
- poor cache efficiency
- diluted reasoning
- high API cost

The real solution is not “better prompts.”

It is **controlling context at every layer of the system**.

This is the AI Context Engineering Stack.

---

# 1. Caveman Protocol — Stop Loading Unnecessary Context

Caveman Protocol forces a strict rule:

> Never load information unless it is proven necessary.

Instead of preloading files or logs “just in case,” the agent:

- starts with minimal context
- expands only when blocked
- avoids bulk reads entirely

### Effect on LLM behavior

- fewer files loaded per task
- reduced prompt size per request
- higher signal-to-noise ratio
- stable reasoning performance

It changes the agent from “preloader” to “on-demand retriever.”

---

# 2. Semble — Retrieve Snippets, Not Files

Semble replaces file-level retrieval with semantic snippet search.

Instead of:

- opening full files
- scanning large modules
- injecting entire code blocks

It returns:

> only the relevant code chunks

### Effect on LLM behavior

- eliminates large code dumps
- reduces context by 80–98%
- improves precision of reasoning
- avoids irrelevant surrounding code

The model stops reading repositories.

It starts reading answers.

---

# 3. Code Review Graph — Load Only Impacted Dependencies

Code Review Graph treats a repository as a dependency graph, not a folder structure.

Instead of:

- reading all related files
- expanding outward manually
- guessing relevance

It:

- traces actual dependency impact
- identifies affected execution paths
- loads only relevant nodes in the graph

### Effect on LLM behavior

- prevents over-scanning during PR reviews
- limits context to true impact surface
- reduces repository-wide context pollution
- improves review accuracy

The model stops exploring randomly and starts following causality.

---

# 4. Context-Mode — External Memory Instead of Context Growth

Context-Mode removes the assumption that memory belongs in the prompt.

Instead:

- tool outputs are sandboxed
- events are stored externally (structured logs / SQLite)
- retrieval happens only when needed
- raw dumps never enter context

### Effect on LLM behavior

- prevents tool output explosion
- stops long-session context bloat
- stabilizes long-running agents
- enables persistent but non-inflating memory

The model no longer “remembers everything.”

It queries memory like a system, not a chat.

---

# 5. RTK (Rust Token Killer) — Clean CLI Output Before It Reaches the Model

RTK intercepts terminal output before it enters context.

Instead of raw CLI logs:

- verbose test output
- git diffs
- stack traces
- framework noise

It emits:

> compressed, failure-focused signals only

### Effect on LLM behavior

- removes terminal noise injection
- reduces tool output tokens by 60–90%
- improves debugging signal quality
- speeds up reasoning cycles

The model stops reading logs and starts reading failures.

---

# 6. Prompt Caching — Stop Reprocessing the Same Context

Prompt caching does not reduce context size.

It reduces **recomputation cost**.

Stable parts of the prompt:

- system instructions
- tool schemas
- agent rules
- repository context headers

are computed once and reused.

### Effect on LLM behavior

- faster follow-up responses
- lower cost per request
- stable multi-turn agent sessions
- improved scalability of large system prompts

The model stops rethinking unchanged context.

---

# How These Work Together

Individually, each technique reduces tokens in one layer.

Together, they form a full pipeline:

### Input Layer (what enters context)

- Caveman Protocol → prevents unnecessary loading
- Semble → retrieves minimal code snippets
- Code Review Graph → restricts dependency scope

### Execution Layer (what tools produce)

- Context-Mode → blocks raw tool dumps
- RTK → compresses CLI output

### System Layer (what gets recomputed)

- Prompt Caching → reuses stable prefixes

---

# The Resulting Architecture

Instead of:

> dump everything → let model sort it out

You get:

> retrieve minimal data → structure outputs → cache stable context → reason on clean signal

This changes the economics of AI usage:

- lower token consumption per task
- higher cache hit rates
- faster response cycles
- reduced context window pressure
- more stable long-running agents

---

# Final Insight

These techniques do not make models more powerful.

They remove everything that prevents models from using their power effectively.

The goal is not bigger context windows.

The goal is **smaller, cleaner, and more intentional ones**.

Once that shift happens, LLMs stop behaving like chat systems.

They start behaving like engineered software components.
