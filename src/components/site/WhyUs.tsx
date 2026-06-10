import { DollarSign, HeartHandshake, Rocket, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    desc: "Premium quality at small-business friendly pricing — no hidden fees.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Support",
    desc: "A dedicated specialist who knows your brand and responds quickly.",
  },
  {
    icon: Rocket,
    title: "Growth-Focused",
    desc: "Every decision is tied to measurable outcomes for your business.",
  },
  {
    icon: Cpu,
    title: "Modern Digital Tools",
    desc: "AI-assisted workflows and analytics that keep you ahead of competitors.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why BrandAssistCo"
          title={<>Built for ambitious <span className="text-gradient">small businesses</span></>}
          description="We blend strategy, craft, and modern tooling to deliver work that punches above its price tag."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-all hover:border-primary/40"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
