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
        eyebrow="About us"
        title={<>A boutique agency with <span className="text-gradient">enterprise craft</span></>}
        description="We mix senior strategy, premium design and modern tooling to give small businesses the digital edge they deserve."
      />
      <AboutBlock />
      <WhyUs />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}
