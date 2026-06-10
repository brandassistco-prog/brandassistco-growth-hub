import { Instagram } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://instagram.com/brandassistco"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message BrandAssistCo on Instagram"
      className="animate-pulse-glow fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_14px_40px_-10px_var(--primary)] transition-transform hover:scale-110"
    >
      <Instagram className="h-6 w-6" />
    </a>
  );
}
