import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-surface/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            We help small businesses build, grow, and connect online with premium websites,
            content, and growth strategies.
          </p>
          <div className="mt-6 flex gap-2">
            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-sm font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Social Media</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Web Dev</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Content</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Support</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-sm font-semibold">Get in touch</h4>
          <a
            href="mailto:hello@brandassistco.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> hello@brandassistco.com
          </a>
          <p className="mt-2 text-sm text-muted-foreground">Mon – Fri, 9am – 6pm</p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} BrandAssistCo. All rights reserved.</p>
          <p>Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}
