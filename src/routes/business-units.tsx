import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Wheat, Plane, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import sbuTech from "@/assets/sbu-technology.jpg";
import sbuAgri from "@/assets/sbu-agriculture.jpg";
import sbuDip from "@/assets/sbu-diplomatic.jpg";
import productTech from "@/assets/product-technology.jpg";
import productAgri from "@/assets/product-agriculture.jpg";
import productConsumer from "@/assets/product-consumer.jpg";

export const Route = createFileRoute("/business-units")({
  head: () => ({
    meta: [
      { title: "Business Units — Mohsan & Co." },
      { name: "description", content: "Global Technology & General Trade, Agriculture & Premium Commodity Trading, and Diplomatic Travel & Security." },
      { property: "og:title", content: "Business Units — Mohsan & Co." },
      { property: "og:description", content: "Three strategic business units serving governments, enterprises, and international partners." },
      { property: "og:url", content: "/business-units" },
      { property: "og:image", content: sbuTech },
    ],
    links: [{ rel: "canonical", href: "/business-units" }],
  }),
  component: BusinessUnitsPage,
});

const SBUS = [
  {
    n: "01",
    icon: Cpu,
    title: "Global Technology & General Trade",
    image: sbuTech,
    summary: "Providing access to advanced IT equipment, consumer products, branded goods, industrial equipment, and international trade solutions.",
    capabilities: [
      "Advanced IT infrastructure & enterprise hardware",
      "Consumer electronics, laptops, computers & mobile devices",
      "Branded goods & premium consumer products",
      "Industrial equipment & machinery sourcing",
      "International trade solutions & cross-border facilitation",
      "Logistics, distribution and supply-chain coordination",
    ],
    products: [
      { k: "Computers", v: "Workstations & Servers" },
      { k: "Laptops", v: "Business & Consumer" },
      { k: "Mobile", v: "Smartphones & Tablets" },
      { k: "Accessories", v: "IT Equipment & Peripherals" },
    ],
  },
  {
    n: "02",
    icon: Wheat,
    title: "Agriculture & Premium Commodity Trading",
    image: sbuAgri,
    summary: "Delivering premium agricultural products through vertically integrated operations that prioritize food safety, traceability, and quality.",
    capabilities: [
      "Vertically integrated agricultural operations",
      "Stringent food safety & quality control",
      "End-to-end traceability across the supply chain",
      "Premium commodity sourcing and export",
      "Cold-chain & logistics for perishable produce",
      "Sustainable and responsible farming partnerships",
    ],
    products: [
      { k: "Rice", v: "Premium Long-Grain" },
      { k: "Dairy & Cheese", v: "Fresh & Aged" },
      { k: "Fruits & Vegetables", v: "Seasonal Premium" },
      { k: "Olive Oil & Meat", v: "Specialty & Halal" },
      { k: "Dry Fruits", v: "Curated Selection" },
      { k: "Chocolates", v: "Branded & Artisan" },
    ],
  },
  {
    n: "03",
    icon: Plane,
    title: "Diplomatic Travel & Security",
    image: sbuDip,
    summary: "Providing highly specialized diplomatic travel arrangements and logistics support with discretion, security, and professionalism.",
    capabilities: [
      "Diplomatic and executive travel planning",
      "Confidential logistics and ground coordination",
      "Specialized security advisory services",
      "Government and institutional engagements",
      "International conferences & delegation support",
      "Discretion-first protocols across jurisdictions",
    ],
    products: [
      { k: "Diplomatic Travel", v: "End-to-End Arrangements" },
      { k: "Security Services", v: "Specialized Advisory" },
      { k: "Logistics Support", v: "Confidential & Reliable" },
      { k: "Delegation Support", v: "International Coordination" },
    ],
  },
];

const CATEGORIES = [
  { code: "01", title: "Technology & Electronics", items: ["Computers", "Laptops", "Mobile Devices", "IT Equipment & Accessories"], image: productTech },
  { code: "02", title: "Agriculture & Food Products", items: ["Rice", "Dairy Products", "Vegetables", "Fruits", "Olive Oil", "Meat", "Cheese", "Dry Fruits", "Chocolates"], image: productAgri },
  { code: "03", title: "Consumer & Industrial Products", items: ["Shoes", "Fabrics", "Cosmetics", "Perfume", "Machinery", "Automobile Spare Parts"], image: productConsumer },
];

function BusinessUnitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Units"
        title="Three strategic units. One trusted global partner."
        subtitle="Vertically integrated operations spanning technology, agriculture, and specialized diplomatic services."
        image={sbuTech}
      />

      {SBUS.map((s, idx) => (
        <section key={s.n} id={`sbu-${s.n}`} className={`py-20 md:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-paper"}`}>
          <div className="container-pro">
            <div className={`grid lg:grid-cols-12 gap-16 items-center ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-6">
                <div className="relative">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full aspect-[5/6] object-cover" />
                  <div className="absolute top-0 left-0 bg-navy text-gold w-24 h-24 flex flex-col items-center justify-center">
                    <div className="text-[10px] uppercase tracking-[0.2em]">SBU</div>
                    <div className="font-display text-3xl">{s.n}</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="w-14 h-14 bg-gold text-navy flex items-center justify-center mb-6">
                  <s.icon size={26} />
                </div>
                <span className="eyebrow text-gold-deep">Strategic Business Unit {s.n}</span>
                <h2 className="mt-4 text-4xl md:text-5xl text-navy leading-tight">{s.title}</h2>
                <span className="gold-rule mt-6" />
                <p className="mt-6 text-muted-foreground leading-relaxed text-[17px]">{s.summary}</p>

                <div className="mt-10">
                  <h4 className="eyebrow text-navy">Capabilities</h4>
                  <ul className="mt-5 space-y-3">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-navy">
                        <Check size={18} className="text-gold mt-1 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 grid sm:grid-cols-2 gap-px bg-line border border-line">
                  {s.products.map((p) => (
                    <div key={p.k} className="bg-white p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-gold-deep">{p.k}</div>
                      <div className="mt-1 text-navy font-medium">{p.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link
                    to={
                      s.n === "01"
                        ? "/sbu/global-technology-trade"
                        : s.n === "02"
                        ? "/sbu/agriculture-commodities"
                        : "/sbu/diplomatic-travel-security"
                    }
                    className="btn-gold group"
                  >
                    <span className="relative">Explore More</span>
                    <ArrowRight size={14} className="relative group-hover:translate-x-1 transition-transform duration-500" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="product-categories" className="relative py-24 md:py-32 bg-navy text-white overflow-hidden">

        <div className="container-pro">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
            <div className="md:col-span-7">
              <span className="eyebrow text-gold">Product Categories</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                A curated portfolio <span className="italic text-gold">for every market</span>.
              </h2>
              <span className="gold-rule mt-6" />
            </div>
            <p className="md:col-span-5 text-white/70 leading-relaxed md:pb-3">
              A curated portfolio for every market.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {CATEGORIES.map((c) => (
              <article
                key={c.title}
                className="group relative bg-navy-soft overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={c.image} alt={c.title} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

                  <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/80 font-semibold">
                      Category
                    </div>
                    <div className="font-display text-4xl text-gold leading-none">{c.code}</div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <h3 className="font-display text-2xl lg:text-3xl text-white leading-tight">{c.title}</h3>
                  </div>
                </div>

                <div className="p-8 lg:p-10 bg-navy-soft border-t-2 border-gold/20 group-hover:border-gold transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-6 h-px bg-gold" />
                    <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
                      What's Included
                    </span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {c.items.map((i) => (
                      <li
                        key={i}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white bg-navy border border-white/15 pl-2 pr-3 py-1.5 hover:border-gold hover:bg-gold/10 hover:text-gold transition-all duration-300"
                      >
                        <Check size={11} strokeWidth={2.5} className="text-gold" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
