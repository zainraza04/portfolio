import {
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const heroTechStack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
] as const;

export function HeroTechStack() {
  const topRow = heroTechStack.slice(0, 3);
  const bottomRow = heroTechStack.slice(3);

  return (
    <div className="mt-8 flex flex-col items-center gap-3 md:mt-10 md:flex-row md:justify-center md:gap-8">
      <div className="flex justify-center gap-5 md:contents">
        {topRow.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex w-[4.5rem] flex-col items-center gap-1.5 sm:w-auto sm:gap-2"
          >
            <Icon
              className="h-8 w-8 text-text-secondary sm:h-9 sm:w-9"
              aria-hidden="true"
            />
            <span className="font-mono text-[0.65rem] text-text-muted sm:text-xs">
              {name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 md:contents">
        {bottomRow.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex w-[4.5rem] flex-col items-center gap-1.5 sm:w-auto sm:gap-2"
          >
            <Icon
              className="h-8 w-8 text-text-secondary sm:h-9 sm:w-9"
              aria-hidden="true"
            />
            <span className="font-mono text-[0.65rem] text-text-muted sm:text-xs">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
