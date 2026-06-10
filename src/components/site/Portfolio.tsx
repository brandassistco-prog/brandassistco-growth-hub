import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import social from "@/assets/portfolio-social.jpg";
import web from "@/assets/portfolio-web.jpg";
import brand from "@/assets/portfolio-brand.jpg";

const items = [
  {
    img: social,
    tag: "Social Media",
    title: "Social Media Presence",
    blurb:
      "Consistent posting, content calendars, and community management built around your brand voice.",
  },
  {
    img: web,
    tag: "Website",
    title: "Small Business Websites",
    blurb:
      "Fast, mobile-first websites with clean design, clear messaging, and on-page SEO from day one.",
  },
  {
    img: brand,
    tag: "Brand & Content",
    title: "Brand & Content Systems",
    blurb:
      "Cohesive visuals, reels, and copy that help small businesses look established and trustworthy online.",
  },
];

export function Portfolio({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {!compact && (
          <SectionHeading
            eyebrow="What we deliver"
            title={<>The kind of work we <span className="text-gradient">love to ship</span></>}
            description="A look at the categories of work we build for small businesses. New project showcases are added as they launch."
          />
        )}

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
                  {p.tag}
                </span>
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="font-display text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{p.blurb}</p>
                </div>
              </div>
              <Link
                to="/contact"
                aria-label={`Start a ${p.title} project`}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-[0_8px_24px_-8px_var(--primary)] transition-opacity group-hover:opacity-100"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        {!compact && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              Start your project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
