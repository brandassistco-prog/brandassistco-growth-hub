import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { AboutBlock } from "@/components/site/AboutBlock";
import { ContactForm } from "@/components/site/ContactForm";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrandAssistCo — Premium Digital Agency for Small Businesses" },
      {
        name: "description",
        content:
          "Helping small businesses build, grow & connect online with premium websites, social media, content, support and growth strategies.",
      },
      {
        property: "og:title",
        content: "BrandAssistCo — Premium Digital Agency for Small Businesses",
      },
      {
        property: "og:description",
        content:
          "Helping small businesses build, grow & connect online with websites, social media, content, support and growth strategies.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <AboutBlock />
      <CTA />
      <ContactForm />
    </SiteLayout>
  );
}
