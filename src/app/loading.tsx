export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary">
      <p
        className="font-mono text-base text-text-primary sm:text-lg"
        aria-live="polite"
        aria-busy="true"
      >
        {"> Zain Raza"}
        <span className="cursor-blink text-terminal-green">_</span>
        <span className="sr-only">Loading</span>
      </p>
    </div>
  );
}
