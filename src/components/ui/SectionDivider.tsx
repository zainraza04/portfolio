export function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-8">
      <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
      <div
        className="relative z-10 h-2.5 w-2.5 rotate-45 border border-accent-primary bg-accent-primary shadow-[0_0_12px_var(--accent-glow)]"
        aria-hidden="true"
      />
    </div>
  );
}
