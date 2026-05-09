import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import anvilCover from "@/assets/product-anvil-cover.jpg";
import urethane from "@/assets/product-urethane.jpg";
import wear from "@/assets/product-wear.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Gritor Industrial Components" },
      { name: "description", content: "Anvil covers, custom urethane components, wear pads and impact protection. Browse Gritor's catalogue of industrial-grade parts." },
      { property: "og:title", content: "Products — Gritor" },
      { property: "og:image", content: anvilCover },
    ],
  }),
  component: Products,
});

const lines = [
  {
    img: anvilCover,
    title: "Anvil Covers",
    spec: "Forged Steel · Reinforced Urethane",
    desc: "Our flagship product. Multi-layer anvil covers protecting strike surfaces from spall, abrasion and shock. Available in standard sizes or fully custom dimensions.",
    bullets: ["Reinforced steel core", "85A-95A urethane shell", "Up to 2,500mm length", "5-year structural warranty"],
  },
  {
    img: urethane,
    title: "Urethane Components",
    spec: "Cast Polyurethane · 20A–95D",
    desc: "Precision-cast polyurethane parts engineered to your spec. Bushings, bumpers, rollers, seals and dampers in any custom geometry and durometer.",
    bullets: ["Custom durometer 20A–95D", "Color matched on request", "Bonded to metal inserts", "Prototype to production"],
  },
  {
    img: wear,
    title: "Wear & Impact Parts",
    spec: "Heavy Duty · Cyclic Load",
    desc: "Engineered wear pads, impact buffers and dampening blocks for the most demanding cyclical applications across mining, rail and heavy manufacturing.",
    bullets: ["Steel-backed designs", "Bolt-on or bonded", "Replaceable inserts", "Field-tested cycle life"],
  },
];

function Products() {
  return (
    <SiteLayout>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-ember-glow)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <span className="section-label">Catalogue</span>
          <h1 className="font-display text-5xl md:text-7xl mt-6">Our <span className="text-ember">Products.</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Three core lines, infinite configurations. Every Gritor part is engineered,
            forged and tested in-house — built to specification, built to last.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 space-y-16">
        {lines.map((p, i) => (
          <article key={p.title} className="grid md:grid-cols-2 gap-10 items-center group">
            <div className={`relative overflow-hidden border border-border ${i % 2 ? "md:order-2" : ""}`}>
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 corner-tag !relative !top-auto !right-auto inline-block">
                {`0${i + 1}`}
              </div>
            </div>
            <div>
              <span className="section-label">{p.spec}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4">{p.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 inline-block h-2 w-2 bg-ember rotate-45" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-outline-forge mt-8">
                Request Spec Sheet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
