"use client";

export function AboutTerminal() {
  const lines = [
    { prompt: "$", command: "whoami" },
    { output: "> full-stack-engineer" },
    { prompt: "$", command: "cat skills.txt" },
    { output: "> React, Next.js, NestJS, Node.js" },
    { output: "> PostgreSQL, Docker, TypeScript" },
    { prompt: "$", command: "echo $STATUS" },
    { output: '> "Open to opportunities"' },
  ];

  return (
    <div className="overflow-hidden border border-accent-primary/40 bg-[#0d0d14] shadow-[0_0_32px_color-mix(in_srgb,var(--accent-glow)_25%,transparent)]">
      <div className="flex items-center gap-2 border-b border-border bg-bg-tertiary px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-text-muted">terminal — zsh</span>
      </div>
      <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
        {lines.map((line, index) => (
          <div key={index}>
            {line.prompt && (
              <p>
                <span className="text-accent-secondary">{line.prompt} </span>
                <span className="text-text-primary">{line.command}</span>
              </p>
            )}
            {line.output && <p className="text-text-secondary">{line.output}</p>}
          </div>
        ))}
        <p>
          <span className="text-accent-secondary">$ </span>
          <span className="cursor-blink text-terminal-green">|</span>
        </p>
      </div>
    </div>
  );
}
