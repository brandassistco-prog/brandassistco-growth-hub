import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

export function AboutBlock() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 glass-strong p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              About BrandAssistCo
            </span>
            <h2 className="relative mt-4 font-display text-3xl font-bold sm:text-5xl">
              Your <span className="text-gradient">brand’s</span> growth partner
            </h2>
            <p className="relative mt-4 text-muted-foreground">
              We’re a boutique digital agency obsessed with helping small businesses
              compete with — and out-perform — the big brands online. From your first
              website to your hundredth post, we handle the craft so you can focus on
              what you do best.
            </p>
            <ul className="relative mt-6 space-y-3">
              {[
                "Senior specialists, no junior hand-offs",
                "Clear roadmaps, weekly reporting",
                "Fixed monthly pricing, no surprises",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { k: "5+", v: "Years building brands" },
            { k: "120+", v: "Happy clients" },
            { k: "30+", v: "Industries served" },
            { k: "24/7", v: "Support availability" },
          ].map((s, i) => (
            <div
              key={s.v}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
