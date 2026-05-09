import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gritor" },
      { name: "description", content: "Talk to Gritor about your application. Request a quote on anvil covers, urethane components or custom tooling." },
      { property: "og:title", content: "Contact Gritor" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <span className="section-label">Get In Touch</span>
          <h1 className="font-display text-5xl md:text-7xl mt-6">
            Tell us the <span className="text-ember">problem.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Send drawings, specs, or just describe the application. Our engineering
            team responds within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-[1fr_1.5fr] gap-12">
        <div className="space-y-8">
          {[
            { Icon: Mail, t: "Email", v: "info@gritor.com" },
            { Icon: Phone, t: "Phone", v: "+1 (555) 010-2024" },
            { Icon: MapPin, t: "Facility", v: "Industrial Park, Sector 9" },
          ].map(({ Icon, t, v }) => (
            <div key={t} className="card-industrial p-6 flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center bg-ember/10 text-ember border border-ember/30 shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t}</div>
                <div className="font-display text-lg mt-1">{v}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="card-industrial p-8 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" />
          </div>
          <Field label="Application / Spec" name="message" textarea />
          <button type="submit" className="btn-forge !w-full justify-center">
            {sent ? "Sent — we'll be in touch" : (<>Send Inquiry <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean; }) {
  const cls = "w-full bg-background/60 border border-border px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:border-ember focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} placeholder="Describe your application…" />
      ) : (
        <input name={name} type={type} className={cls} />
      )}
    </label>
  );
}
