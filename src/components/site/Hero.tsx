import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background"
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Premium digital partner for small businesses
          </span>

          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Helping Small Businesses{" "}
            <span className="text-gradient">Build, Grow & Connect</span> Online
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Professional websites, social media management, content creation, customer
            support solutions, and growth strategies designed to help businesses grow
            online.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_40px_-12px_var(--primary)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Book a Free Discovery Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Play className="h-3.5 w-3.5 fill-current" /> View Our Work
            </Link>
          </div>

          <dl
            className="animate-fade-up mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8"
            style={{ animationDelay: "320ms" }}
          >
            {[
              { k: "120+", v: "Projects shipped" },
              { k: "98%", v: "Client retention" },
              { k: "4.9★", v: "Avg. rating" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl glass px-3 py-4 text-center">
                <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-white/5 bg-surface/30 py-5">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {Array.from({ length: 2 }).flatMap((_, j) =>
              [
                "Strategy",
                "★",
                "Design",
                "★",
                "Development",
                "★",
                "Content",
                "★",
                "Growth",
                "★",
                "Support",
                "★",
              ].map((t, i) => (
                <span key={`${j}-${i}`} className={t === "★" ? "text-primary" : ""}>
                  {t}
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
