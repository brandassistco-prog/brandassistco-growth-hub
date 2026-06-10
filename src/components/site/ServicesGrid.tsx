import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { services } from "./data";

export function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {showHeading && (
          <SectionHeading
            eyebrow="What we do"
            title={<>Everything your business needs to <span className="text-gradient">win online</span></>}
            description="One partner, five disciplines, zero hand-off chaos."
          />
        )}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
