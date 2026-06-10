import {
  Megaphone,
  PenTool,
  Globe,
  Headphones,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "Strategy, scheduling, community, and analytics that turn followers into customers.",
    features: ["Content calendar", "Community management", "Monthly reports"],
  },
  {
    icon: PenTool,
    title: "Content Creation & Posting",
    description:
      "Scroll-stopping visuals, reels, and copy crafted for your brand voice.",
    features: ["Graphics & reels", "Copywriting", "Daily posting"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Lightning-fast, SEO-friendly websites that look premium and convert.",
    features: ["Custom design", "Mobile-first", "On-page SEO"],
  },
  {
    icon: Headphones,
    title: "Customer Support Solutions",
    description:
      "Inbox, DM, and chat support workflows that keep your customers happy.",
    features: ["Live chat setup", "Email & DMs", "Help docs"],
  },
  {
    icon: TrendingUp,
    title: "Growth Strategies",
    description:
      "Data-driven roadmaps to attract, convert, and retain more customers.",
    features: ["Audit & roadmap", "Funnels", "Performance ads"],
  },
];

export const testimonials = [
  {
    quote:
      "BrandAssistCo rebuilt our entire online presence in 3 weeks. We doubled our leads in the first month.",
    name: "Amara Okafor",
    role: "Founder, Bloom Skincare",
  },
  {
    quote:
      "The team feels like an extension of ours. Content, support, and the new website all leveled up together.",
    name: "Daniel Reyes",
    role: "Owner, Reyes Auto Care",
  },
  {
    quote:
      "Premium quality, very fair pricing. Our Instagram engagement is up 320% since they took over.",
    name: "Sofia Lindgren",
    role: "Director, Norden Studio",
  },
  {
    quote:
      "Honestly the easiest agency I’ve worked with. Clear strategy, fast execution, beautiful results.",
    name: "Marcus Bell",
    role: "CEO, Bell & Co.",
  },
];
