import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Smartphone, Printer, Shirt, Sparkles, Factory, ShieldCheck, Globe2, Check, ArrowRight, ChevronRight, Zap, Dumbbell, Stethoscope, UtensilsCrossed, BedDouble, Monitor } from "lucide-react";
import heroImg from "@/assets/sbu01-hero.jpg";
import apparelImg from "@/assets/sbu01-apparel.jpg";
import cosmeticsImg from "@/assets/sbu01-cosmetics.jpg";
import machineryImg from "@/assets/sbu01-machinery.jpg";
import techImg from "@/assets/product-technology.jpg";
import shippingImg from "@/assets/gallery-shipping.jpg";

export const Route = createFileRoute("/sbu/global-technology-trade")({
  head: () => ({
    meta: [
      { title: "Global Distribution Solutions — SBU 01 | Mohsan & Co." },
      { name: "description", content: "Technology & Premium Trade Excellence — Strategic Channel Master for digital infrastructure and premium consumer & industrial goods." },
      { property: "og:title", content: "Global Distribution Solutions — Mohsan & Co." },
      { property: "og:description", content: "Strategic Channel Master orchestrating the global movement of essential digital infrastructure and high-value consumer & industrial goods." },
      { property: "og:url", content: "/sbu/global-technology-trade" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/sbu/global-technology-trade" }],
  }),
  component: SBU01Page,
});

const TABLE_1 = [
  {
    icon: Cpu,
    category: "Enterprise Computing",
    focus: "High-performance desktops, laptops, and specialized workstations from prestigious global manufacturers.",
    assurance: "Certified Performance: Delivering stability, speed, and proven hardware reliability for core business environments.",
    assuranceLabel: "Certified Performance",
  },
  {
    icon: Smartphone,
    category: "Mobile & Smart Devices",
    focus: "Tablets (e.g., iPads) and comprehensive range of cutting-edge mobile phones and smart communication devices.",
    assurance: "Assured Mobility: Secure, enterprise-ready communication tools that enable decentralized operations and team efficiency.",
    assuranceLabel: "Assured Mobility",
  },
  {
    icon: Printer,
    category: "Printing & Imaging",
    focus: "Advanced laser and inkjet solutions, high-volume production printers, and essential office peripherals.",
    assurance: "Operational Efficiency: Guaranteeing smooth workflow and consistent, high-quality document management at scale.",
    assuranceLabel: "Operational Efficiency",
  },
];

const PREMIUM_BLOCKS = [
  { icon: Shirt, title: "Luxury Apparel & Textiles", image: apparelImg, blurb: "Finished clothing, high-grade fabrics, and premium leather goods sourced through trusted global ateliers." },
  { icon: Sparkles, title: "Aromatics & Cosmetics", image: cosmeticsImg, blurb: "Prestigious brand perfumes and high-demand cosmetic lines, channelled with multi-stage authentication." },
  { icon: Factory, title: "Industrial Machinery", image: machineryImg, blurb: "Textile machinery and specialized manufacturing accessories meeting strict international standards." },
];

const TABLE_2 = [
  {
    icon: Shirt,
    category: "Luxury Apparel & Textiles",
    focus: "Supplying finished clothing, high-grade fabrics, and premium leather products (e.g., jackets).",
    assurance: "Material Integrity: End-to-end supply chain visibility ensuring adherence to quality and ethical sourcing standards.",
    assuranceLabel: "Material Integrity",
  },
  {
    icon: Sparkles,
    category: "Aromatics & Cosmetics",
    focus: "Distribution of prestigious brand perfumes and high-demand cosmetic lines.",
    assurance: "Brand Authenticity: Multi-stage authentication protocols ensure that all products are genuine, luxury-grade items.",
    assuranceLabel: "Brand Authenticity",
  },
  {
    icon: Factory,
    category: "Industrial Machinery",
    focus: "Channeling essential textile machinery and specialized manufacturing accessories.",
    assurance: "Technical Reliability: Equipment supplied meets all international standards for performance and durability, facilitating client modernization.",
    assuranceLabel: "Technical Reliability",
  },
  {
    icon: Zap,
    category: "Energy Solutions",
    focus: "Comprehensive distribution of power systems ranging from mid-tier residential solar configurations to high-capacity commercial and heavy industrial inverters, scalable lithium energy storage systems (ESS), and advanced smart grid infrastructure.",
    assurance: "Power Continuity: Performance-certified hardware engineered for maximum conversion efficiency, long life cycles, and seamless load management across both home and enterprise operations.",
    assuranceLabel: "Power Continuity",
  },
  {
    icon: Dumbbell,
    category: "Sports & Fitness",
    focus: "Supplying premium athletic apparel, high-performance sportswear, footwear, professional-grade gym setups, and digital fitness tracking gear.",
    assurance: "Athletic Performance: Ergonomically tested, wear-resistant materials built to meet the rigorous demands of professional athletes and commercial fitness centers.",
    assuranceLabel: "Athletic Performance",
  },
  {
    icon: Stethoscope,
    category: "Medical & Surgical Instruments",
    focus: "Channeling high-precision surgical instruments, advanced diagnostic tools, ICU monitoring systems, and specialized clinical consumables.",
    assurance: "Clinical Precision: Stringent compliance with global healthcare regulations, ensuring flawless structural integrity and complete procedural safety.",
    assuranceLabel: "Clinical Precision",
  },
  {
    icon: UtensilsCrossed,
    category: "Food & Drink",
    focus: "Sourcing and distribution of premium packaged foods, gourmet confectionery, non-perishable culinary goods, organic oils, and specialty beverages.",
    assurance: "Consumable Safety: Rigorous quality checks, strict compliance with international food standards, and verifiable trace-to-source freshness.",
    assuranceLabel: "Consumable Safety",
  },
  {
    icon: BedDouble,
    category: "Hospitality Supplies & Amenities",
    focus: "Supplying luxury hotel linens, high-end guest toiletries, institutional porcelain tableware, and specialized commercial front-of-house service equipment.",
    assurance: "Institutional Excellence: High-durability, commercial-grade standards engineered to withstand rigorous industrial cleaning while maintaining a premium aesthetic.",
    assuranceLabel: "Institutional Excellence",
  },
  {
    icon: Monitor,
    category: "Entertainment & Media Supplies",
    focus: "Channeling professional audio-visual (AV) broadcast setups, commercial cinema systems, acoustic treatment materials, and smart digital display arrays.",
    assurance: "Media Fidelity: Premium-grade broadcasting and presentation assets engineered for seamless integration, high-resolution clarity, and long-term operational uptime.",
    assuranceLabel: "Media Fidelity",
  },
];

function CategoryTable({ rows }: { rows: typeof TABLE_1 }) {
  return (
    <div className="mt-12 border border-line bg-white overflow-hidden">
      {/* Desktop header */}
      <div className="hidden lg:grid grid-cols-12 bg-navy text-white text-[11px] uppercase tracking-[0.22em] font-semibold">
        <div className="col-span-3 px-8 py-5">Category</div>
        <div className="col-span-5 px-8 py-5 border-l border-white/10">Product Focus</div>
        <div className="col-span-4 px-8 py-5 border-l border-white/10">Buyer Advantage &amp; Assurance</div>
      </div>
      <div className="divide-y divide-line">
        {rows.map((r) => (
          <div key={r.category} className="grid grid-cols-1 lg:grid-cols-12 group hover:bg-paper transition-colors duration-300">
            <div className="lg:col-span-3 px-8 py-8 flex items-start gap-4">
              <div className="w-11 h-11 bg-gold/10 text-gold-deep flex items-center justify-center shrink-0 border border-gold/30">
                <r.icon size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold-deep mb-1 lg:hidden">Category</div>
                <h4 className="font-display text-xl text-navy leading-tight">{r.category}</h4>
              </div>
            </div>
            <div className="lg:col-span-5 px-8 py-8 lg:border-l border-line">
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

function SBU01Page() {
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
            <span className="text-gold">SBU 01</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gold text-navy w-16 h-16 flex flex-col items-center justify-center">
                  <div className="text-[9px] uppercase tracking-[0.2em] leading-none">SBU</div>
                  <div className="font-display text-2xl leading-none mt-0.5">01</div>
                </div>
                <span className="eyebrow text-gold">Strategic Business Unit 01</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02]">
                Global Distribution <span className="italic text-gold">Solutions</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-white/85 font-light italic">
                Technology &amp; Premium Trade Excellence
              </p>
              <span className="gold-rule mt-8" />
            </div>
            <div className="lg:col-span-4">
              <p className="text-white/80 leading-relaxed text-[16px] border-l-2 border-gold pl-6">
                Mohsan &amp; CO's Global Technology &amp; Trade SBU operates as a Strategic Channel Master, dedicated to orchestrating the dependable, global movement of essential digital infrastructure and high-value consumer and industrial goods. Our mission is to bridge global manufacturing excellence with discerning local and international markets, built upon a foundation of trust and certified quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01 — Curated Excellence */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow text-gold-deep">Section 01</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
                Curated <span className="italic text-gold-deep">Excellence</span>
              </h2>
              <span className="gold-rule mt-6" />
              <p className="mt-8 text-navy/75 leading-relaxed text-[17px]">
                This segment strategically supplies the technologies that define modern operations, empowering businesses and individuals with reliable, cutting-edge devices.
              </p>
              <p className="mt-5 text-navy/75 leading-relaxed text-[17px]">
                Our expertise in worldwide distribution ensures market readiness, operational uptime, and secure access to the tools that drive global progress.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden border border-line">
                <img src={techImg} alt="Digital Infrastructure" loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Division I</div>
                  <h3 className="font-display text-2xl text-white">Digital Infrastructure</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden border border-line sm:mt-12">
                <img src={heroImg} alt="Computing Solutions" loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Division II</div>
                  <h3 className="font-display text-2xl text-white">Computing Solutions</h3>
                </div>
              </div>
            </div>
          </div>

          <CategoryTable rows={TABLE_1} />
        </div>
      </section>

      {/* SECTION 02 — Premium Goods */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="container-pro">
          <div className="max-w-4xl">
            <span className="eyebrow text-gold-deep">Section 02</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
              II. Premium Goods &amp; Industrial <span className="italic text-gold-deep">Channeling Mastery</span>
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-8 text-navy/75 leading-relaxed text-[17px]">
              Leveraging our robust international logistics framework, we manage the global movement of premier consumer brands and foundational industrial assets. Our meticulous channeling ensures that products retain their authenticity and value from the source to the final point of sale, meeting the exacting standards of our buyers.
            </p>
          </div>

          {/* Feature blocks */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {PREMIUM_BLOCKS.map((b) => (
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

          <div className="mt-16 max-w-4xl">
            <p className="text-navy/75 leading-relaxed text-[17px]">
              This segment strategically supplies the technologies that define modern operations, empowering businesses and individuals with reliable, cutting-edge devices.
            </p>
            <p className="mt-5 text-navy/75 leading-relaxed text-[17px]">
              Our expertise in worldwide distribution ensures market readiness, operational uptime, and secure access to the tools that drive global progress.
            </p>
          </div>

          <CategoryTable rows={TABLE_2} />
        </div>
      </section>

      {/* SECTION 03 — Strategic Reliability */}
      <section className="relative py-20 md:py-28 bg-navy text-white overflow-hidden">
        <img src={shippingImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />

        <div className="relative container-pro">
          <div className="max-w-4xl">
            <span className="eyebrow text-gold">Section 03</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-white leading-tight">
              III. Strategic Reliability: <span className="italic text-gold">Our Pledge to Buyers</span>
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-8 text-white/80 leading-relaxed text-[17px]">
              This segment strategically supplies the technologies that define modern operations, empowering businesses and individuals with reliable, cutting-edge devices.
            </p>
            <p className="mt-5 text-white/80 leading-relaxed text-[17px]">
              Our strength is rooted in our capacity for International Procurement and Supply Chain Coordination. This ensures that we not only deliver products but assure the entire process, minimizing risk and maximizing stakeholder interest.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="group bg-navy-soft/60 backdrop-blur border border-white/10 p-10 lg:p-12 transition-all duration-500 hover:border-gold/50">
              <div className="w-14 h-14 bg-gold text-navy flex items-center justify-center mb-7">
                <ShieldCheck size={26} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-3">01 — Pledge</div>
              <h3 className="font-display text-3xl text-white leading-tight">Quality Assurance &amp; Trust</h3>
              <span className="block w-12 h-px bg-gold mt-5" />
              <p className="mt-6 text-white/80 leading-relaxed">
                We implement a multi-point quality control system at every stage of the supply process. For our technology products, this means validated compliance and handling integrity; for consumer goods, it means absolute brand authenticity and material excellence. This commitment is non-negotiable and is the bedrock of our relationship with every buyer.
              </p>
            </div>

            <div className="group bg-navy-soft/60 backdrop-blur border border-white/10 p-10 lg:p-12 transition-all duration-500 hover:border-gold/50">
              <div className="w-14 h-14 bg-gold text-navy flex items-center justify-center mb-7">
                <Globe2 size={26} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-3">02 — Pledge</div>
              <h3 className="font-display text-3xl text-white leading-tight">Global Logistics &amp; Dependability</h3>
              <span className="block w-12 h-px bg-gold mt-5" />
              <p className="mt-6 text-white/80 leading-relaxed">
                Our integrated logistical infrastructure and deep regulatory knowledge enable us to execute complex, cross-border shipments with efficiency and precision. Buyers rely on Mohsan &amp; CO for predictable supply chain continuity and timely fulfilment, whether for local market requirements or extensive international projects.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl border-t border-white/10 pt-10">
            <p className="text-white/85 leading-relaxed text-[18px] italic">
              By partnering with Mohsan &amp; CO, local and international buyers gain more than just a supplier; they gain a reliable, quality-certified partner dedicated to their operational success and market growth.
            </p>
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
