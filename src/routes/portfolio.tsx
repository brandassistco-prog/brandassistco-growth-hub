import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — BrandAssistCo" },
      {
        name: "description",
        content:
          "A selection of social media, website and branding projects we’ve crafted for small businesses worldwide.",
      },
      { property: "og:title", content: "Portfolio — BrandAssistCo" },
      {
        property: "og:description",
        content:
          "Social media, website and branding projects crafted for small businesses worldwide.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected <span className="text-gradient">work</span></>}
        description="Branding, social, and web projects designed to grow real businesses."
      />
      <Portfolio compact />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}
