"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface LinePrompt {
  prompt: string;
  command: string;
}

interface LineOutput {
  output: string;
}

type Line = LinePrompt | LineOutput;

const LINES: Line[] = [
  { prompt: "$", command: "whoami" },
  { output: "> full-stack-engineer" },
  { prompt: "$", command: "cat skills.txt" },
  { output: "> React, Next.js, NestJS, Node.js" },
  { output: "> PostgreSQL, Docker, TypeScript" },
  { prompt: "$", command: "echo $STATUS" },
  { output: '> "Open to opportunities"' },
];

const CHAR_DELAY = 40;
const LINE_PAUSE = 180;

function isPromptLine(line: Line): line is LinePrompt {
  return "prompt" in line;
}

function getLineText(line: Line): string {
  if (isPromptLine(line)) return line.command;
  return line.output;
}

export function AboutTerminal() {
  const [completedLines, setCompletedLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  // Trigger when section enters viewport
  useEffect(() => {
    if (prefersReducedMotion) {
      setCompletedLines(LINES.length);
      setIsDone(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          setStarted(true);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReducedMotion]);

  // Run typewriter animation
  useEffect(() => {
    if (!started) return;
    cancelRef.current = false;

    let lineIdx = 0;
    let charIdx = 0;
    let timerId: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (cancelRef.current) return;

      if (lineIdx >= LINES.length) {
        setCurrentText("");
        setIsDone(true);
        return;
      }

      const lineText = getLineText(LINES[lineIdx]);

      if (charIdx <= lineText.length) {
        setCurrentText(lineText.slice(0, charIdx));
        charIdx++;
        timerId = setTimeout(tick, CHAR_DELAY);
      } else {
        timerId = setTimeout(() => {
          if (cancelRef.current) return;
          setCompletedLines((prev) => prev + 1);
          setCurrentText("");
          lineIdx++;
          charIdx = 0;
          timerId = setTimeout(tick, 60);
        }, LINE_PAUSE);
      }
    };

    tick();

    return () => {
      cancelRef.current = true;
      clearTimeout(timerId);
    };
  }, [started]);

  const currentLine = completedLines < LINES.length ? LINES[completedLines] : null;

  return (
    <div
      ref={containerRef}
      className="group/terminal relative overflow-hidden border border-accent-primary/40 bg-[#0d0d14] shadow-[0_0_32px_color-mix(in_srgb,var(--accent-glow)_25%,transparent)]"
    >
      {/* CRT scanline overlay */}
      <div
        className="scanline-crt pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
      />

      {/* Traffic-light header */}
      <div className="relative flex items-center gap-2 border-b border-border bg-bg-tertiary px-4 py-3">
        <span className="h-3 w-3 cursor-default rounded-full bg-[#ff5f57] transition-all duration-300 hover:shadow-[0_0_8px_#ff5f57] hover:brightness-110" />
        <span className="h-3 w-3 cursor-default rounded-full bg-[#febc2e] transition-all duration-300 hover:shadow-[0_0_8px_#febc2e]" />
        <span className="h-3 w-3 cursor-default rounded-full bg-[#28c840] transition-all duration-300 hover:shadow-[0_0_10px_#28c840] hover:brightness-125" />
        <span className="ml-2 font-mono text-xs text-text-muted">terminal — zsh</span>
      </div>

      {/* Terminal body */}
      <div className="relative space-y-2 p-5 font-mono text-sm leading-relaxed">
        {/* Completed lines */}
        {LINES.slice(0, completedLines).map((line, i) => (
          <div key={i}>
            {isPromptLine(line) ? (
              <p>
                <span className="text-accent-secondary">{line.prompt} </span>
                <span className="text-text-primary">{line.command}</span>
              </p>
            ) : (
              <p className="text-text-secondary">{line.output}</p>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {currentLine !== null && completedLines < LINES.length && (
          <div>
            {isPromptLine(currentLine) ? (
              <p>
                <span className="text-accent-secondary">$ </span>
                <span className="text-text-primary">{currentText}</span>
                <span className="text-terminal-green">█</span>
              </p>
            ) : (
              <p className="text-text-secondary">
                {currentText}
                <span className="text-terminal-green">█</span>
              </p>
            )}
          </div>
        )}

        {/* Final blinking block cursor */}
        {isDone && (
          <p>
            <span className="text-accent-secondary">$ </span>
            <span className="cursor-blink text-terminal-green">█</span>
          </p>
        )}
      </div>
    </div>
  );
}
