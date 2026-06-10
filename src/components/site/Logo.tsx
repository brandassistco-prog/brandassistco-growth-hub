import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-display font-black shadow-[0_8px_24px_-8px_var(--primary)] transition-transform group-hover:scale-105">
        B
        <span className="absolute -inset-1 rounded-2xl bg-primary/30 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        BrandAssist<span className="text-primary">Co</span>
      </span>
    </Link>
  );
}
