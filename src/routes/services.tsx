import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BrandAssistCo" },
      {
        name: "description",
        content:
          "Social media management, content creation, web development, customer support and growth strategies for small businesses.",
      },
      { property: "og:title", content: "Services — BrandAssistCo" },
      {
        property: "og:description",
        content:
          "Social media, content, web development, customer support and growth strategies for small businesses.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={<>One team for every <span className="text-gradient">growth need</span></>}
        description="Pick a single service or combine them into a complete growth engine — built around your business."
      />
      <ServicesGrid showHeading={false} />
      <WhyUs />
      <CTA />
    </SiteLayout>
  );
}
