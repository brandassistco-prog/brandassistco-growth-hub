import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-primary/15 via-transparent to-transparent"
      />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h1
          className="animate-fade-up mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="animate-fade-up mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
