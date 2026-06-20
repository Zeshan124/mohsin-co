import { createFileRoute, Link } from "@tanstack/react-router";
import { Wheat, Milk, Sparkles, Leaf, ShieldCheck, Globe2, Check, ArrowRight, ChevronRight, Microscope } from "lucide-react";
import heroImg from "@/assets/sbu02-hero.jpg";
import grainsImg from "@/assets/sbu02-grains.jpg";
import dairyImg from "@/assets/sbu02-dairy.jpg";

import produceImg from "@/assets/gallery-produce.jpg";
import riceImg from "@/assets/gallery-rice.jpg";

export const Route = createFileRoute("/sbu/agriculture-commodities")({
  head: () => ({
    meta: [
      { title: "Agriculture SBU 2 — Mohsan & Co." },
      { name: "description", content: "Vertical Integration for Assured Purity and Food Safety — premium agricultural products with end-to-end traceability." },
      { property: "og:title", content: "Agriculture SBU 2 — Mohsan & Co." },
      { property: "og:description", content: "The Agriculture SBU delivers a comprehensive range of vital food products to local and international markets through end-to-end vertical integration." },
      { property: "og:url", content: "/sbu/agriculture-commodities" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/sbu/agriculture-commodities" }],
  }),
  component: SBU02Page,
});

const FEATURE_BLOCKS = [
  {
    icon: Leaf,
    title: "Modern Practices",
    image: produceImg,
    blurb: "Utilization of advanced agronomic techniques and state-of-the-art processing facilities for optimal quality.",
  },
  {
    icon: Microscope,
    title: "End-to-End Traceability (Source to Shelf)",
    image: riceImg,
    blurb: "Our systems uphold absolute traceability, tracking every product back to its specific source.",
  },
  {
    icon: ShieldCheck,
    title: "Food Safety Compliance",
    image: dairyImg,
    blurb: "Strict adherence to local and international food safety standards. Our internal quality protocols are designed to ensure purity and dependable safety, offering wholesome, high-quality products to consumers who rely on the Mohsan & CO name for trust and integrity.",
  },
];

const CATEGORY_TABLE = [
  {
    icon: Wheat,
    category: "Grains & Fresh Produce (Rice, Fruits, Vegetables)",
    focus: "Essential Global & Premium Foods",
    assurance: "Directly controlled cultivation minimizes contaminants and ensures consistent, fresh product quality.",
    assuranceLabel: "Buyer Advantage",
  },
  {
    icon: Milk,
    category: "Dairy & Protein (Milk, Cheese, Meat)",
    focus: "Essential Global & Premium Foods",
    assurance: "Rigorous control over animal husbandry and processing upholds quality and ethical sourcing standards.",
    assuranceLabel: "Buyer Advantage",
  },
  {
    icon: Sparkles,
    category: "Specialty & Oil (Dry Fruits, Chocolates, Olive Oil)",
    focus: "Essential Global & Premium Foods",
    assurance: "Specialized handling and storage protocols maintain flavor, nutritional value, and source integrity.",
    assuranceLabel: "Buyer Advantage",
  },
  {
    icon: Leaf,
    category: "Gardening, Landscaping & Accessories (Premium Artificial Grass & Turf, Vertical Garden Mats, Ergonomic Hand Tools, Planters & Pots, Smart Drip Irrigation Kits, Organic Fertilizers & Soil Mixes)",
    focus: "Premium Agricultural & Green-Space Solutions",
    assurance: "Weather-resistant, high-durability materials and advanced watering tech ensure low-maintenance aesthetic appeal and resource-efficient cultivation.",
    assuranceLabel: "Buyer Advantage",
  },
];

function CategoryTable({ rows }: { rows: typeof CATEGORY_TABLE }) {
  return (
    <div className="mt-12 border border-line bg-white overflow-hidden">
      <div className="hidden lg:grid grid-cols-12 bg-navy text-white text-[11px] uppercase tracking-[0.22em] font-semibold">
        <div className="col-span-5 px-8 py-5">Category</div>
        <div className="col-span-3 px-8 py-5 border-l border-white/10">Product Focus</div>
        <div className="col-span-4 px-8 py-5 border-l border-white/10">Buyer Advantage &amp; Assurance</div>
      </div>
      <div className="divide-y divide-line">
        {rows.map((r) => (
          <div key={r.category} className="grid grid-cols-1 lg:grid-cols-12 group hover:bg-paper transition-colors duration-300">
            <div className="lg:col-span-5 px-8 py-8 flex items-start gap-4">
              <div className="w-11 h-11 bg-gold/10 text-gold-deep flex items-center justify-center shrink-0 border border-gold/30">
                <r.icon size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold-deep mb-1 lg:hidden">Category</div>
                <h4 className="font-display text-xl text-navy leading-tight">{r.category}</h4>
              </div>
            </div>
            <div className="lg:col-span-3 px-8 py-8 lg:border-l border-line">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-deep mb-2 lg:hidden">Product Focus</div>
              <p className="text-navy/80 leading-relaxed">{r.focus}</p>
            </div>
            <div className="lg:col-span-4 px-8 py-8 lg:border-l border-line bg-paper/40">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-deep mb-2">{r.assuranceLabel}</div>
              <p className="text-navy/80 leading-relaxed text-[15px]">{r.assurance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SBU02Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] w-full overflow-hidden flex items-end">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(8,23,45,0.6)_100%)]" />

        <div className="relative container-pro pb-24 pt-48 md:pt-56">
          <nav className="text-xs uppercase tracking-[0.22em] text-white/60 flex items-center gap-2 mb-10">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight size={14} />
            <Link to="/business-units" className="hover:text-gold">Business Units</Link>
            <ChevronRight size={14} />
            <span className="text-gold">SBU 02</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gold text-navy w-16 h-16 flex flex-col items-center justify-center">
                  <div className="text-[9px] uppercase tracking-[0.2em] leading-none">SBU</div>
                  <div className="font-display text-2xl leading-none mt-0.5">02</div>
                </div>
                <span className="eyebrow text-gold">Strategic Business Unit 02</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02]">
                Agriculture <span className="italic text-gold">SBU 2</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-white/85 font-light italic">
                Vertical Integration for Assured Purity and Food Safety
              </p>
              <span className="gold-rule mt-8" />
            </div>
            <div className="lg:col-span-4">
              <p className="text-white/80 leading-relaxed text-[16px] border-l-2 border-gold pl-6">
                The Agriculture SBU delivers a comprehensive range of vital food products to local and international markets, managed and cultivated through "end-to-end vertical integration".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01 — Operational Excellence: Traceability and Trust */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow text-gold-deep">Section 01</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
                Operational Excellence: <span className="italic text-gold-deep">Traceability and Trust</span>
              </h2>
              <span className="gold-rule mt-6" />
              <p className="mt-8 text-navy/75 leading-relaxed text-[17px]">
                Our vertically integrated model allows us to implement the most rigorous and modern agricultural and processing practices, which translate directly into confidence for our buyers.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden border border-line">
                <img src={grainsImg} alt="Fresh Produce" loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Division I</div>
                  <h3 className="font-display text-2xl text-white">Grains &amp; Fresh Produce</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden border border-line sm:mt-12">
                <img src={dairyImg} alt="Dairy & Protein" loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Division II</div>
                  <h3 className="font-display text-2xl text-white">Dairy &amp; Protein</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Feature Blocks */}
          <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
            {FEATURE_BLOCKS.map((b) => (
              <article key={b.title} className="group bg-white border border-line overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(8,23,45,0.25)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                  <div className="absolute top-5 left-5 w-12 h-12 bg-gold text-navy flex items-center justify-center">
                    <b.icon size={20} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-navy leading-tight">{b.title}</h3>
                  <span className="block w-10 h-px bg-gold mt-4" />
                  <p className="mt-5 text-navy/70 leading-relaxed">{b.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02 — Category Table */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="container-pro">
          <div className="max-w-4xl">
            <span className="eyebrow text-gold-deep">Section 02</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
              Operational Excellence: <span className="italic text-gold-deep">Traceability and Trust</span>
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-8 text-navy/75 leading-relaxed text-[17px]">
              Our vertically integrated model allows us to implement the most rigorous and modern agricultural and processing practices, which translate directly into confidence for our buyers.
            </p>
          </div>

          <CategoryTable rows={CATEGORY_TABLE} />

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-navy text-white overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />

        <div className="relative container-pro">
          <div className="max-w-3xl">
            <span className="eyebrow text-gold">Partner With Us</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-white leading-tight">
              A trusted source for <span className="italic text-gold">premium agriculture</span>.
            </h2>
            <span className="gold-rule mt-6" />
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold group">
              <span className="relative">Partner With Us</span>
              <ArrowRight size={14} className="relative group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
            <Link to="/business-units" className="inline-flex items-center gap-2 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white border border-white/30 hover:border-gold hover:text-gold transition-colors duration-300">
              <span>All Business Units</span>
              <Check size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
