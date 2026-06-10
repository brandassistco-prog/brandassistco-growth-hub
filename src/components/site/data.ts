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
      "Consistent presence on Instagram and beyond — strategy, scheduling, community, and reporting tailored to small businesses.",
    features: ["Content calendar", "Community management", "Monthly reports"],
  },
  {
    icon: PenTool,
    title: "Content Creation & Posting",
    description:
      "On-brand graphics, reels, and copy that capture attention and showcase what makes your business different.",
    features: ["Graphics & reels", "Copywriting", "Regular posting"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, mobile-first websites that look premium, rank on search, and turn visitors into customers.",
    features: ["Custom design", "Mobile-first", "On-page SEO"],
  },
  {
    icon: Headphones,
    title: "Customer Support Solutions",
    description:
      "Email, chat and DM support workflows built on real customer-support experience — so your customers feel heard.",
    features: ["Live chat setup", "Email & DMs", "Help docs"],
  },
  {
    icon: TrendingUp,
    title: "Small Business Growth Strategies",
    description:
      "Practical, affordable roadmaps to attract more customers, build trust, and grow your business online.",
    features: ["Audit & roadmap", "Funnels", "Brand growth plan"],
  },
];

export type Principle = {
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    title: "Build, Grow & Connect",
    body: "Our mission is simple — help small businesses build a stronger online presence, grow their audience, and connect with the people who matter.",
  },
  {
    title: "Customer-first communication",
    body: "Every project is grounded in real customer-support experience. We listen first, then build solutions that actually fit your business.",
  },
  {
    title: "Practical & affordable",
    body: "Premium-feeling design, content, and support — priced for startups, entrepreneurs, and growing small businesses.",
  },
  {
    title: "Founder-led service",
    body: "You work directly with Bharat and the BrandAssistCo team. Clear scope, honest timelines, and a partner invested in your growth.",
  },
];
