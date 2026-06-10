import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Loved by clients"
          title={<>Real businesses, <span className="text-gradient">real results</span></>}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/40" />
              <blockquote className="mt-4 font-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
