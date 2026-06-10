import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { AboutBlock } from "@/components/site/AboutBlock";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BrandAssistCo" },
      {
        name: "description",
        content:
          "BrandAssistCo is a boutique digital agency helping small businesses build, grow and connect online.",
      },
      { property: "og:title", content: "About — BrandAssistCo" },
      {
        property: "og:description",
        content:
          "We’re a boutique digital agency helping small businesses build, grow and connect online.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About BrandAssistCo"
        title={<>Founder-led digital studio from <span className="text-gradient">Mumbai</span></>}
        description="Founded by Bharat Mali, BrandAssistCo blends customer-focused communication with modern digital solutions to help small businesses build, grow and connect online."
      />
      <AboutBlock />
      <WhyUs />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}
