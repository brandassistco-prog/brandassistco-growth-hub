import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-surface to-background p-8 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl"
          />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
                Ready to grow your business online?
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Send us a message about your business and goals. We'll reply within one
                business day with a clear, practical next step — no pressure.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_40px_-12px_var(--primary)]"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
