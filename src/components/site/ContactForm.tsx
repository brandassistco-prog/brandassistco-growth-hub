import { useState, type FormEvent } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We’ll be in touch within one business day.");
    }, 900);
  };

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 rounded-3xl border border-white/10 glass-strong p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Contact
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              Let’s build something <span className="text-gradient">unforgettable</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your business and goals. We’ll reply within one business
              day with a tailored plan.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                hello@brandassistco.com
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                +1 (555) 555-5555
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                Remote-first, worldwide
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@brand.com" required />
            </div>
            <Field label="Business" name="business" placeholder="Your company" />
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Service of interest
              </label>
              <select
                name="service"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
              >
                <option>Social Media Management</option>
                <option>Content Creation & Posting</option>
                <option>Website Development</option>
                <option>Customer Support Solutions</option>
                <option>Growth Strategies</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Project details
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your goals…"
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_40px_-12px_var(--primary)] transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              {loading ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
