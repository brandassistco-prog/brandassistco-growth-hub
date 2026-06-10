import { Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { principles } from "./data";

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="How we work"
          title={<>What you can <span className="text-gradient">expect from us</span></>}
          description="No fake numbers, no inflated promises — just a clear way of working that small businesses can rely on."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
