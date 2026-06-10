import { useState, type FormEvent } from "react";
import { Send, Mail, Instagram, MapPin } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const business = String(data.get("business") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `New enquiry from ${name || "website"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = `mailto:brandassistco@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      form.reset();
      toast.success("Opening your email app — we'll reply within one business day.");
    }, 400);
  };

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 rounded-3xl border border-white/10 glass-strong p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Get in Touch
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              Let's build something <span className="text-gradient">together</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have a project in mind or want to grow your business online? We'd love to
              hear from you. Tell us a little about your business and we'll reply within
              one business day.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:brandassistco@gmail.com"
                  className="flex items-center gap-3 hover:text-foreground"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  brandassistco@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/brandassistco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-foreground"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
                    <Instagram className="h-4 w-4" />
                  </span>
                  @brandassistco
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                Mumbai, India · Serving clients worldwide
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@business.com"
                required
              />
            </div>
            <Field label="Business" name="business" placeholder="Your business name" />
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
                <option>Small Business Growth Strategies</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Project details
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your business and goals…"
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
