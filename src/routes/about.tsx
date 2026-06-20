import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import boardroom from "@/assets/about-boardroom.jpg";
import globalMap from "@/assets/global-map.jpg";
import ceoPhoto from "@/assets/ceo.png.asset.json";
import cooPhoto from "@/assets/coo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mohsan & Co." },
      { name: "description", content: "Corporate overview, CEO and COO messages, mission, vision, goal, core values and strategic alliances of Mohsan & Co." },
      { property: "og:title", content: "About — Mohsan & Co." },
      { property: "og:description", content: "Cultivating Trust, Connecting Global Commerce since 2007." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: boardroom },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const ALLIANCES = [
  "Sahiwal Chamber of Commerce & Industry",
  "Casablanca Chamber of Commerce & Industry, Casablanca, Morocco",
  "FPCCI Pakistan Brazil Business Council",
  "Member of Diplomatic Insight Group",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Cultivating Trust, Connecting Global Commerce."
        subtitle="A multinational corporation built on integrity, operational excellence, and strategic diversification across continents."
        image={boardroom}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container-pro grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <span className="eyebrow text-gold-deep">Corporate Overview</span>
            <h2 className="mt-5 text-4xl md:text-5xl text-navy leading-tight">A deep-rooted multinational corporation.</h2>
            <span className="gold-rule mt-6" />
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground leading-relaxed text-[17px]">
            <p>For nearly two decades, since our establishment in 2007 under the leadership of CEO Mohsan Raza Rafique, Mohsan & Co. has stood as a deep-rooted multinational corporation and a reliable engine of commerce across continents.</p>
            <p>Our commitment to integrity, operational excellence, and strategic diversification has positioned us as the preferred partner for governments, international enterprises, and local suppliers alike.</p>
            <p className="text-navy font-display text-2xl italic border-l-2 border-gold pl-6">"We don't just trade; we build essential supply chains that drive global stability and growth."</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-pro grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold" />
                <div className="relative overflow-hidden bg-navy">
                  <img
                    src={ceoPhoto.url}
                    alt="Mohsan Raza Rafique, Chief Executive Officer"
                    className="w-full h-[560px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <div className="text-xs uppercase tracking-[0.28em] text-gold">Chief Executive Officer</div>
                    <h3 className="mt-2 font-display text-3xl">Mohsan Raza Rafique</h3>
                    <span className="gold-rule mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="eyebrow text-gold-deep">Message from the CEO</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-navy leading-tight">Elevating Our Future.</h2>
            <span className="gold-rule mt-6" />
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[17px]">
              <p className="text-navy font-medium">Valued Stakeholders—Our Employees, Partners, and Customers,</p>
              <p>As CEO of Mohsan & Co, I am incredibly energized by the momentum we are building and the impact we are making across the globe.</p>
              <p>Our journey since 2007 has been one of disciplined diversification — building enduring relationships, expanding into new markets, and investing in the people and systems that make global commerce reliable.</p>
              <p>Every container moved, every shipment cleared, and every partnership formed reflects our enduring commitment to integrity, excellence, and the long-term prosperity of the communities we serve.</p>
              <p className="font-display italic text-navy">— Mohsan Raza Rafique, Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-pro grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 md:order-2">
            <span className="eyebrow text-gold-deep">Message from the COO</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-navy leading-tight">A dynamic, resilient, and unified enterprise.</h2>
            <span className="gold-rule mt-6" />
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[17px]">
              <p>Welcome. As the Chief Operating Officer, my commitment since 2007 has been to ensure Mohsan & Co. operates as a dynamic, resilient, and unified enterprise.</p>
              <p>Operational excellence is the quiet discipline that turns ambition into delivery. From sourcing to logistics to compliance across jurisdictions, we engineer our processes for clarity, accountability, and speed.</p>
              <p>Our teams are the architects of trust — coordinating across borders to ensure that every promise we make to our partners is met with precision.</p>
              <p className="font-display italic text-navy">— Rana Ali Akhtar, Chief Operating Officer</p>
            </div>
          </div>
          <div className="md:col-span-5 md:order-1">
            <div className="sticky top-32">
              <div className="relative group">
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold" />
                <div className="relative overflow-hidden bg-navy">
                  <img
                    src={cooPhoto.url}
                    alt="Rana Ali Akhtar, Chief Operating Officer"
                    className="w-full h-[560px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <div className="text-xs uppercase tracking-[0.28em] text-gold">Chief Operating Officer</div>
                    <h3 className="mt-2 font-display text-3xl">Rana Ali Akhtar</h3>
                    <span className="gold-rule mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
        <img src={globalMap} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-soft/90" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-gold/5 blur-3xl" />
        <div className="container-pro relative">
          <div className="grid md:grid-cols-3 gap-px bg-gold/20">
            {[
              { eyebrow: "Our Mission", title: "Our Corporate Mission", body: "To serve as the definitive global nexus by employing state-of-the-art technology to strategically bridge the exchange of premium commodities, high-end electronics, and essential diplomatic logistics." },
              { eyebrow: "Our Vision", title: "Our Corporate Vision", body: "To be the globally recognized, multi-sector leader that redefines excellence in trade and strategic services — setting the standard for trust, sustainability, and innovation across every market we serve." },
              { eyebrow: "Our Goal", title: "Goal Statement", body: "To establish Mohsan and Co. as the premier integrated solutions provider and a trusted, indispensable partner across key sectors — global trade, agriculture, and specialized diplomatic services." },
            ].map((m) => (
              <div key={m.eyebrow} className="bg-navy/95 backdrop-blur-sm p-10 hover:bg-navy-soft/80 transition-colors">
                <span className="eyebrow text-gold">{m.eyebrow}</span>
                <h3 className="mt-5 font-display text-2xl text-white">{m.title}</h3>
                <span className="gold-rule mt-5" />
                <p className="mt-6 text-white/75 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-pro">
          <div className="max-w-3xl">
            <span className="eyebrow text-gold-deep">Strategic Alliances</span>
            <h2 className="mt-5 text-4xl md:text-5xl text-navy leading-tight">Trusted institutional partnerships.</h2>
            <span className="gold-rule mt-6" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {ALLIANCES.map((a, i) => (
              <div key={a} className="card-pro p-8 flex items-start gap-6">
                <div className="font-display text-5xl text-gold leading-none">0{i + 1}</div>
                <div className="text-navy text-lg leading-snug pt-1">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
