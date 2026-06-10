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
              A founder-led studio from <span className="text-gradient">Mumbai</span>
            </h2>
            <p className="relative mt-4 text-muted-foreground">
              Founded by <span className="text-foreground font-medium">Bharat Mali</span>{" "}
              in Mumbai, BrandAssistCo helps small businesses build a stronger online
              presence through social media management, content creation, website
              development, customer support, and practical growth strategies.
            </p>
            <p className="relative mt-3 text-muted-foreground">
              With a background in customer support and a passion for digital marketing,
              branding, and business growth, we focus on delivering practical, affordable
              and professional solutions for startups, entrepreneurs, and growing
              businesses.
            </p>
            <ul className="relative mt-6 space-y-3">
              {[
                "Founder-led, direct communication — no junior hand-offs",
                "Practical, affordable solutions built for small businesses",
                "Customer-focused approach with modern digital tools",
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
            { k: "Build", v: "Premium websites & brand presence" },
            { k: "Grow", v: "Content, social & growth strategies" },
            { k: "Connect", v: "Customer support that wins loyalty" },
            { k: "Mumbai", v: "Based in India, serving worldwide" },
          ].map((s, i) => (
            <div
              key={s.v}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
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
