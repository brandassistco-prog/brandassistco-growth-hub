import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BrandAssistCo" },
      {
        name: "description",
        content:
          "Get in touch with BrandAssistCo. Book a free discovery call and get a tailored plan within one business day.",
      },
      { property: "og:title", content: "Contact — BrandAssistCo" },
      {
        property: "og:description",
        content:
          "Book a free discovery call and get a tailored plan within one business day.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Let’s talk"
        title={<>Start your <span className="text-gradient">growth journey</span></>}
        description="Tell us about your business — we’ll reply within one business day."
      />
      <ContactForm />
    </SiteLayout>
  );
}
