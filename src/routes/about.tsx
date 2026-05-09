import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gritor" },
      { name: "description", content: "Two decades of forging industrial components for the toughest applications. Meet Gritor — vertically integrated, engineering led." },
      { property: "og:title", content: "About Gritor" },
      { property: "og:image", content: factory },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={factory} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <span className="section-label">Our Story</span>
          <h1 className="font-display text-5xl md:text-7xl mt-6 max-w-3xl">
            Two decades of <span className="text-ember">forging</span> what others can't.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-[1fr_2fr] gap-12">
        <h2 className="font-display text-3xl text-ember">Mission</h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            Gritor was founded on a simple, brutal premise: industrial parts should
            outlast the machines they serve. For two decades we've engineered,
            forged and tested components for industries where failure costs lives,
            shifts and millions.
          </p>
          <p>
            From our vertically integrated facility we produce anvil covers,
            urethane components and impact protection — every part traceable to
            the batch, every batch tested to the spec.
          </p>
          <p className="text-foreground font-display uppercase tracking-wider text-base">
            No shortcuts. No compromises. Forged to endure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { t: "Engineering Led", d: "Every product starts with a CAD file and a problem to solve. Our engineers run the floor." },
            { t: "Vertically Integrated", d: "From raw urethane to finished part, we own the process — and the quality." },
            { t: "Tested To Failure", d: "We break prototypes on purpose. Production parts inherit that hard-won data." },
          ].map((v) => (
            <div key={v.t} className="bg-background p-10">
              <h3 className="font-display text-2xl text-ember">{v.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
