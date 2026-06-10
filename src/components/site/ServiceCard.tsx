import { ArrowUpRight, Check } from "lucide-react";
import type { Service } from "./data";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-30px_var(--primary)] sm:p-8"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </span>
        <span className="font-display text-xs font-mono text-muted-foreground">
          0{index + 1}
        </span>
      </div>
      <h3 className="relative mt-6 font-display text-xl font-bold sm:text-2xl">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm text-muted-foreground">
        {service.description}
      </p>
      <ul className="relative mt-5 space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
            <Check className="h-4 w-4 text-primary" /> {f}
          </li>
        ))}
      </ul>
      <div className="relative mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </article>
  );
}
