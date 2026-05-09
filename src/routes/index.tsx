import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Shield, Hammer, Zap, Cog, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero-anvil.jpg";
import factory from "@/assets/factory.jpg";
import anvilCover from "@/assets/product-anvil-cover.jpg";
import urethane from "@/assets/product-urethane.jpg";
import wear from "@/assets/product-wear.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gritor — Forged Anvil Covers & Urethane Components" },
      { name: "description", content: "Heavy-duty anvil covers, urethane components and industrial wear parts engineered for the toughest environments. Built to outlast the work." },
      { property: "og:title", content: "Gritor — Forged To Endure" },
      { property: "og:description", content: "Industrial-grade anvil covers and urethane components manufactured for extreme conditions." },
    ],
  }),
  component: Home,
});

const products = [
  { img: anvilCover, title: "Anvil Covers", tag: "Flagship", desc: "Reinforced impact covers protecting critical anvil surfaces from spall, abrasion and direct strike." },
  { img: urethane, title: "Urethane Components", tag: "Custom", desc: "Precision-cast polyurethane parts in custom durometers — bushings, bumpers, rollers and seals." },
  { img: wear, title: "Wear & Impact Parts", tag: "Heavy Duty", desc: "Wear pads, impact buffers and dampening blocks engineered for cyclical heavy load." },
];

const stats = [
  { v: "20+", l: "Years Forging" },
  { v: "350K", l: "Parts Delivered" },
  { v: "98%", l: "Repeat Clients" },
  { v: "24/7", l: "Production" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Forge" className="h-full w-full object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-48">
          <div className="max-w-3xl animate-fade-up">
            <span className="section-label mb-6">Industrial Components Since 2004</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mt-6">
              Forged <br />
              <span className="text-stroke">to outlast</span> <br />
              the work.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Gritor manufactures anvil covers, urethane components and impact
              protection built for industries where failure is not an option.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="btn-forge">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline-forge">Request Quote</Link>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="relative border-y border-border bg-card/60 backdrop-blur overflow-hidden">
          <div className="marquee py-5">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-16 px-8 items-center">
                {["Anvil Covers", "Urethane Bushings", "Impact Buffers", "Wear Pads", "Custom Tooling", "Polyurethane Rollers", "Damping Blocks"].map((t) => (
                  <span key={t} className="font-display text-2xl tracking-widest text-foreground/40 hover:text-ember transition-colors whitespace-nowrap">
                    {t} <span className="text-ember mx-4">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8 group hover:bg-card transition-colors">
              <div className="font-display text-4xl md:text-5xl text-ember group-hover:scale-105 transition-transform origin-left">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Our Catalogue</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">Built for <span className="text-ember">impact.</span></h2>
          </div>
          <Link to="/products" className="btn-outline-forge self-start">View all</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.title} to="/products" className="card-industrial group block">
              <span className="corner-tag">{p.tag}</span>
              <div className="aspect-[4/3] overflow-hidden bg-card">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-ember text-sm font-display tracking-widest uppercase">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-24 mt-12 border-y border-border overflow-hidden">
        <div className="absolute inset-0">
          <img src={factory} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="section-label">Why Gritor</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl">
            Engineering you can <span className="text-ember">trust</span> under load.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { Icon: Shield, t: "Certified Materials", d: "Aerospace-grade urethane and forged steel — every batch traceable, every spec verified." },
              { Icon: Hammer, t: "Forged In-House", d: "Vertically integrated production. No middlemen, no surprises — just consistent output." },
              { Icon: Zap, t: "Rapid Turnaround", d: "Standard SKUs ship within 48 hours. Custom tooling delivered on aggressive lead times." },
              { Icon: Cog, t: "Custom Engineered", d: "Send us a drawing or a problem. Our engineers spec the part that solves it." },
              { Icon: CheckCircle2, t: "Tested To Failure", d: "We destroy the prototype so the production unit doesn't. Every line is fatigue-tested." },
              { Icon: Shield, t: "Backed By Warranty", d: "Industry-leading 5-year structural warranty on every Gritor anvil cover." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="card-industrial p-7 hover:bg-card/80">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-ember/10 text-ember border border-ember/30 mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl">{t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden border border-border bg-card diagonal-clip">
          <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-ember-glow)" }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center p-10 md:p-16">
            <div>
              <span className="section-label">Start a Project</span>
              <h2 className="font-display text-3xl md:text-5xl mt-4 max-w-2xl">
                Have a brutal application? <br />
                <span className="text-ember">We've engineered for worse.</span>
              </h2>
            </div>
            <Link to="/contact" className="btn-forge text-base">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
