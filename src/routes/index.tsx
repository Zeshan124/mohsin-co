import { createFileRoute, Link } from "@tanstack/react-router";

import { ArrowRight, ArrowUpRight, Cpu, Wheat, Plane, ShieldCheck, Globe2, Handshake, TrendingUp, Building2, Landmark, Network, BadgeCheck, Sparkles, Check } from "lucide-react";
import heroImageAsset from "@/assets/hero-global-commerce.png.asset.json";
import sbuTech from "@/assets/sbu-technology.jpg";
import sbuAgri from "@/assets/sbu-agriculture.jpg";
import sbuDip from "@/assets/sbu-diplomatic.jpg";
import boardroom from "@/assets/about-boardroom.jpg";
import globalMap from "@/assets/global-map.jpg";
import productTech from "@/assets/product-technology.jpg";
import productAgri from "@/assets/product-agriculture.jpg";
import productConsumer from "@/assets/product-consumer.jpg";
import logoAsset from "@/assets/mohsan-logo.asset.json";
import mohsanCoLogo from "@/assets/mohsan-co-logo.asset.json";
import mohsanAbdullahLogo from "@/assets/mohsan-abdullah-logo.asset.json";
import affFbr from "@/assets/affiliations/fbr.asset.json";
import affSecp from "@/assets/affiliations/secp.asset.json";
import affPsw from "@/assets/affiliations/psw.asset.json";
import affSahiwal from "@/assets/affiliations/sahiwal-chamber.asset.json";
import affGov from "@/assets/affiliations/gov-pakistan.asset.json";

const AFFILIATIONS = [
  { name: "Federal Board of Revenue", src: affFbr.url },
  { name: "Securities & Exchange Commission of Pakistan", src: affSecp.url },
  { name: "Pakistan Single Window", src: affPsw.url },
  { name: "Sahiwal Chamber of Commerce & Industry", src: affSahiwal.url },
  { name: "Government of Pakistan", src: affGov.url },
];



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohsan & Co. — Cultivating Trust, Connecting Global Commerce" },
      { name: "description", content: "A trusted multinational corporation since 2007 — Global Technology & Trade, Agriculture & Commodities, Diplomatic Travel & Security." },
      { property: "og:title", content: "Mohsan & Co. — Connecting Global Commerce" },
      { property: "og:description", content: "Your licensed gateway to premium goods and success." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImageAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SBUS = [
  {
    icon: Cpu,
    title: "Global Technology & General Trade",
    desc: "Providing access to advanced IT equipment, consumer products, branded goods, industrial equipment, and international trade solutions.",
    image: sbuTech,
    highlights: ["Advanced IT Equipment", "Branded Consumer Goods", "Industrial Equipment", "International Trade"],
    href: "/sbu/global-technology-trade",
  },
  {
    icon: Wheat,
    title: "Agriculture & Premium Commodity Trading",
    desc: "Delivering premium agricultural products through vertically integrated operations that prioritize food safety, traceability, and quality.",
    image: sbuAgri,
    highlights: ["Vertically Integrated", "Food Safety & Traceability", "Premium Commodities", "Global Distribution"],
    href: "/sbu/agriculture-commodities",
  },
  {
    icon: Plane,
    title: "Diplomatic Travel & Security",
    desc: "Providing highly specialized diplomatic travel arrangements and logistics support with discretion, security, and professionalism.",
    image: sbuDip,
    highlights: ["Diplomatic Logistics", "Secured Travel", "Confidential Protocols", "Global Coordination"],
    href: "/sbu/diplomatic-travel-security",
  },
];

const TRUST = [
  { icon: ShieldCheck, title: "Trust & Integrity", text: "Uncompromising standards across every transaction and partnership." },
  { icon: Globe2, title: "Global Reach", text: "Active operations spanning Pakistan, Morocco, the United Kingdom and beyond." },
  { icon: Handshake, title: "Strategic Partnership", text: "Preferred partner for governments, enterprises, and local suppliers alike." },
  { icon: TrendingUp, title: "Operational Excellence", text: "Vertically integrated supply chains engineered for resilience and growth." },
];

const ALLIANCES = [
  {
    name: "Sahiwal Chamber of Commerce & Industry",
    region: "Pakistan",
    role: "Registered Member",
    icon: Building2,
    flag: "🇵🇰",
    isGlobal: false,
  },
  {
    name: "Casablanca Chamber of Commerce & Industry",
    region: "Casablanca, Morocco",
    role: "International Member",
    icon: Landmark,
    flag: "🇲🇦",
    isGlobal: false,
  },
  {
    name: "FPCCI Pakistan Brazil Business Council",
    region: "Pakistan · Brazil",
    role: "Council Member",
    icon: Network,
    flag: "🇵🇰 🇧🇷",
    isGlobal: false,
  },
  {
    name: "Diplomatic Insight Group",
    region: "Global",
    role: "Member",
    icon: BadgeCheck,
    flag: null,
    isGlobal: true,
  },
];

const PRODUCTS = [
  {
    name: "Technology & Electronics",
    tagline: "Enterprise-grade IT distribution.",
    items: ["Computers", "Laptops", "Mobile Devices", "IT Equipment & Accessories"],
    image: productTech,
    code: "01",
  },
  {
    name: "Agriculture & Food Products",
    tagline: "Premium commodities, traceable quality.",
    items: ["Rice", "Dairy", "Vegetables", "Fruits", "Olive Oil", "Meat", "Cheese", "Dry Fruits", "Chocolates"],
    image: productAgri,
    code: "02",
  },
  {
    name: "Consumer & Industrial",
    tagline: "Branded goods to industrial supply.",
    items: ["Shoes", "Fabrics", "Cosmetics", "Perfume", "Machinery", "Automobile Spare Parts"],
    image: productConsumer,
    code: "03",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] w-full overflow-visible pb-32 md:pb-40">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImageAsset.url}
            alt="Global commerce and connected industries"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08172D]/35 via-[#08172D]/40 to-[#08172D]/35" />
        </div>

        <div className="relative container-pro min-h-[85vh] md:min-h-[88vh] flex flex-col items-center justify-center text-center pt-48 md:pt-56 pb-20">
          <div className="rise max-w-5xl mx-auto">
            <h1 className="hero-title text-white font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] md:whitespace-nowrap">
              Mohsan &amp; Abdullah Intl (Pvt) Ltd.
            </h1>
            <p className="hero-tagline mt-4 md:mt-6 text-gold font-bold font-display text-2xl md:text-4xl lg:text-5xl leading-[1.15]">
              Your Gateway to Global Excellence
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/business-units" className="btn-gold">Our Business Units <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-ghost">Get in Touch</Link>
            </div>
          </div>
        </div>

        {/* Floating stats card — overlaps hero & next section */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[92%] max-w-5xl z-20 px-0">
          <div className="rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(8,23,45,0.45)] ring-1 ring-navy/10 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-navy/10">
              {[
                { k: "18+", v: "Years of Trust" },
                { k: "3", v: "Continents" },
                { k: "3", v: "Strategic Units" },
                { k: "100%", v: "Integrity" },
              ].map((s) => (
                <div key={s.v} className="px-6 py-6 md:py-8 text-center">
                  <div className="font-display text-3xl md:text-5xl text-gold leading-none">{s.k}</div>
                  <div className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-navy/70 mt-3">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* OUR CORPORATE GROUP */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden bg-[linear-gradient(180deg,#fbf8f1_0%,#f5efe2_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #08172d 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />

        <div className="container-pro relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-4 text-navy/70">
              <span className="w-10 h-px bg-gold-deep" />
              <span className="text-[11px] uppercase tracking-[0.42em] font-semibold text-gold-deep">Corporate Group</span>
              <span className="w-10 h-px bg-gold-deep" />
            </div>
            <h2 className="mt-6 font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Our <span className="italic gold-text">Corporate Group</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              Building global business excellence through a growing network of companies.
            </p>
          </div>

          <div className="relative mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-0 items-stretch max-w-4xl mx-auto">
            {/* Center connector — visible on md+ */}
            <div aria-hidden className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none z-10">
              <div className="relative h-3/5 w-px bg-gradient-to-b from-transparent via-gold-deep/50 to-transparent" />
              <div className="absolute w-10 h-10 rounded-full bg-white border border-gold/40 shadow-[0_10px_30px_-10px_rgba(220,158,41,0.5)] flex items-center justify-center">
                <span className="w-2 h-2 rotate-45 bg-gold-deep" />
              </div>
            </div>
            {/* Mobile connector */}
            <div aria-hidden className="md:hidden flex justify-center -my-2">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-deep/50 to-transparent" />
            </div>

            {[
              {
                logo: mohsanCoLogo.url,
                name: "Mohsan & Co",
                established: "2007",
              },
              {
                logo: mohsanAbdullahLogo.url,
                name: "Mohsan & Abdullah Intl (Pvt) Ltd",
                established: "2025",
              },
            ].map((c, i) => (
              <article
                key={c.name}
                className={`group relative bg-white border border-line p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-30px_rgba(8,23,45,0.35)] hover:border-gold/50 shadow-[0_20px_40px_-30px_rgba(8,23,45,0.25)] ${i === 0 ? "md:border-r-0" : ""}`}
              >
                {/* Corner marks */}
                <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/40" />
                <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/40" />
                <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/40" />
                <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/40" />

                <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(220,158,41,0.12)_0%,transparent_70%)]" />
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6 w-10 h-px bg-gold-deep/60" />

                <h3 className="mt-4 font-display text-xl md:text-2xl text-navy leading-tight">
                  {c.name}
                </h3>
                <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-muted-foreground font-semibold">
                  Established <span className="text-navy">{c.established}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW — Editorial premium layout */}
      <section className="relative bg-white overflow-hidden">
        {/* Navy plinth */}
        <div className="absolute inset-x-0 top-0 h-[55%] bg-navy" />
        <img src={globalMap} alt="" className="absolute inset-x-0 top-0 h-[55%] w-full object-cover opacity-[0.08] mix-blend-screen" />
        <div className="absolute inset-x-0 top-[55%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container-pro relative pt-24 md:pt-32 pb-28 md:pb-36">
          {/* Eyebrow on dark */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-4 text-white/70">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.42em] font-semibold text-gold">About Mohsan & Co.</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="mt-8 font-display text-white text-[34px] sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] max-w-5xl mx-auto break-words hyphens-auto px-2">
              A deep-rooted <span className="italic gold-text">multinational</span><br className="hidden md:block" /> corporation.
            </h2>
          </div>

          {/* Elevated editorial card */}
          <div className="relative grid lg:grid-cols-12 gap-0 bg-white shadow-[0_60px_140px_-40px_rgba(8,23,45,0.45)] border border-line">
            {/* Image */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[640px]">
              <img
                src={boardroom}
                alt="Executive boardroom"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />

              {/* Established medallion */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-7 py-5 border-l-2 border-gold shadow-xl">
                <div className="text-[9px] uppercase tracking-[0.32em] text-gold-deep font-semibold">Established</div>
                <div className="font-display text-4xl text-navy leading-none mt-1">2007</div>
              </div>

              {/* Corner marks */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/60" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/60" />
            </div>

            {/* Content */}
            <div className="lg:col-span-6 relative p-10 md:p-14 lg:p-20 flex flex-col justify-center">
              {/* Watermark numeral */}
              <div className="absolute top-8 right-10 font-display text-[140px] leading-none text-gold/[0.06] select-none pointer-events-none">
                01
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-gold-deep font-semibold">
                  <span className="w-8 h-px bg-gold-deep" />
                  Our Corporate Story
                </div>

                <div className="mt-8 space-y-6 text-[15.5px] text-muted-foreground leading-[1.9]">
                  <p className="first-letter:font-display first-letter:text-6xl first-letter:text-gold-deep first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                    Since our establishment in 2007 under the leadership of CEO Mohsan Raza Rafique, Mohsan & Co. has stood as a deep-rooted multinational corporation and a reliable engine of commerce across continents.
                  </p>
                  <p>
                    Our commitment to integrity, operational excellence, and strategic diversification has positioned us as the preferred partner for governments, international enterprises, and local suppliers alike.
                  </p>
                </div>

                <blockquote className="mt-10 relative pl-7 py-1 border-l-2 border-gold">
                  <p className="font-display italic text-xl md:text-2xl text-navy leading-snug">
                    "We don't just trade; we build essential supply chains that drive global stability and growth."
                  </p>
                </blockquote>

                <Link
                  to="/about"
                  className="mt-12 inline-flex items-center gap-4 text-navy font-semibold uppercase tracking-[0.22em] text-xs hover:text-gold-deep transition-colors group"
                >
                  <span>Discover Our Story</span>
                  <span className="w-12 h-px bg-navy group-hover:bg-gold group-hover:w-20 transition-all duration-500" />
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Premium stat strip below card */}
          <div className="relative mt-0 grid grid-cols-1 md:grid-cols-3 bg-navy text-white border border-gold/20 border-t-0">
            {[
              { k: "2007", v: "Established", sub: "18+ Years of Trust" },
              { k: "3", v: "Continents", sub: "Pakistan · Morocco · UK" },
              { k: "3", v: "Strategic Units", sub: "Vertically Integrated" },
            ].map((h, idx) => (
              <div
                key={h.v}
                className={`relative p-8 md:p-10 ${idx < 2 ? "md:border-r border-white/10" : ""} group`}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="font-display text-4xl md:text-5xl gold-text leading-[1.15] pb-1">{h.k}</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/85 mt-3 font-semibold">{h.v}</div>
                <div className="text-[11px] text-white/50 mt-2">{h.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SBUS — Premium redesign */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container-pro relative">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
            <div className="md:col-span-7">
              <span className="eyebrow text-gold-deep">Strategic Business Units</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
                Three pillars. <span className="italic text-gold-deep">One</span> trusted partner.
              </h2>
              <span className="gold-rule mt-6" />
            </div>
            <p className="md:col-span-5 text-muted-foreground leading-relaxed md:pb-3">
              Three vertically integrated divisions of a single multinational, each engineered for global scale, regulatory rigor, and uncompromising quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {SBUS.map((s, i) => (
              <Link
                key={s.title}
                to={s.href}
                className="group relative bg-white border border-line overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-30px_rgba(220,158,41,0.45)] hover:border-gold/60 cursor-pointer"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

                  {/* SBU number */}
                  <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
                    SBU · 0{i + 1}
                  </div>

                  {/* Icon medallion */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-gold/95 backdrop-blur-sm text-navy flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110">
                    <s.icon size={22} />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-2xl lg:text-[26px] text-white leading-tight">{s.title}</h3>
                  </div>
                </div>

                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                  <ul className="mt-6 space-y-2.5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm text-navy">
                        <span className="w-1.5 h-1.5 bg-gold rotate-45" />
                        <span className="font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-navy group-hover:text-gold-deep transition-colors">
                      Explore Division
                    </span>
                    <span className="w-9 h-9 border border-line group-hover:border-gold group-hover:bg-gold text-navy flex items-center justify-center transition-all">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pro">
          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <div>
              <span className="eyebrow text-gold-deep">Why Stakeholders Trust Us</span>
              <h2 className="mt-5 text-4xl md:text-5xl text-navy leading-tight">Built on integrity. Engineered for excellence.</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Governments, international enterprises and local suppliers alike rely on Mohsan & Co. for transparent, secure and resilient commerce that performs across continents.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {TRUST.map((t) => (
              <div key={t.title} className="bg-white p-10 hover:bg-paper transition-colors group">
                <div className="w-14 h-14 border border-gold text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                  <t.icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-xl text-navy">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLIANCES — Premium corporate redesign */}
      <section className="relative py-24 md:py-32 bg-navy text-white overflow-hidden">
        <img src={globalMap} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/60" />

        <div className="container-pro relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow text-gold justify-center">Memberships & Affiliations</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
              A global network of <span className="italic text-gold">trusted institutions</span>.
            </h2>
            <span className="gold-rule mt-6 mx-auto" />
            <p className="mt-6 text-white/60 leading-relaxed">
              Mohsan & Co. is proud to be affiliated with leading chambers of commerce, business councils, and diplomatic institutions across the globe.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALLIANCES.map((a) => (
              <article
                key={a.name}
                className="group relative bg-white/[0.03] border border-white/10 p-8 flex flex-col h-full transition-all duration-500 hover:border-gold/60 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gold/10 border border-gold/30 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                  <a.icon size={22} />
                </div>

                <div className="mt-8 flex-1">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-gold font-semibold">
                    {a.role}
                  </div>
                  <h3 className="mt-3 font-display text-xl text-white leading-snug">
                    {a.name}
                  </h3>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
                  <Globe2 size={13} className="text-gold" />
                  {a.region}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* PRODUCTS — Premium redesign */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="container-pro">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
            <div className="md:col-span-7">
              <span className="eyebrow text-gold-deep">Product Categories</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05]">
                A curated portfolio <span className="italic text-gold-deep">across categories</span>.
              </h2>
              <span className="gold-rule mt-6" />
            </div>
            <p className="md:col-span-5 text-muted-foreground leading-relaxed md:pb-3">
              From enterprise IT and luxury consumer goods to essential commodities — distributed with precision through our global supply network.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCTS.map((p) => (
              <article
                key={p.name}
                className="group relative bg-paper overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-30px_rgba(8,23,45,0.3)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

                  {/* Category code */}
                  <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/80 font-semibold">
                      Category
                    </div>
                    <div className="font-display text-4xl text-gold leading-none">{p.code}</div>
                  </div>

                  {/* Content over image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <h3 className="font-display text-2xl lg:text-3xl text-white leading-tight">{p.name}</h3>
                    <p className="mt-2 text-sm text-gold/90 italic">{p.tagline}</p>
                  </div>
                </div>

                {/* Item list — premium chips */}
                <div className="p-8 lg:p-10 bg-white border-t-2 border-gold/20 group-hover:border-gold transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-6 h-px bg-gold-deep" />
                    <span className="text-[10px] uppercase tracking-[0.28em] text-gold-deep font-semibold">
                      What's Included
                    </span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {p.items.map((i) => (
                      <li
                        key={i}
                        className="group/chip inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-navy bg-paper border border-line/80 pl-2 pr-3 py-1.5 hover:border-gold hover:bg-gold/5 hover:text-gold-deep transition-all duration-300"
                      >
                        <Check size={11} strokeWidth={2.5} className="text-gold-deep" />
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

      {/* REGISTERED FROM — Affiliations marquee */}
      <section className="relative py-20 md:py-28 bg-paper overflow-hidden border-t border-line">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(8,23,45,0.12) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container-pro relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-4 text-gold-deep">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.42em] font-semibold">Affiliations</span>
              <span className="w-10 h-px bg-gold" />
            </div>
            <h2 className="mt-6 font-display text-navy text-4xl md:text-5xl lg:text-[56px] leading-[1.05]">
              Registered <span className="italic text-gold-deep">From</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-[15.5px] md:text-base leading-relaxed">
              Our memberships, registrations, and institutional affiliations strengthen our global business presence and industry credibility.
            </p>
            <span className="block mx-auto gold-rule mt-8" />
          </div>

          <div className="relative mt-16 marquee-mask">
            <div className="flex w-max animate-marquee gap-6 md:gap-8">
              {[...AFFILIATIONS, ...AFFILIATIONS].map((a, i) => (
                <div
                  key={`${a.name}-${i}`}
                  className="group shrink-0 w-[200px] h-[140px] md:w-[240px] md:h-[160px] bg-white border border-line rounded-xl shadow-[0_8px_24px_-12px_rgba(8,23,45,0.15)] flex items-center justify-center p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(8,23,45,0.25)] hover:border-gold/50"
                >
                  <img
                    src={a.src}
                    alt={a.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Premium dedicated conversion section */}
      <section className="relative py-28 md:py-36 bg-paper overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,158,41,0.08),transparent_60%)]" />
        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-gold" />

        <div className="container-pro relative">
          <div className="relative max-w-6xl mx-auto">
            {/* Gold glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent blur-3xl opacity-60" />

            {/* Premium card */}
            <div className="relative bg-navy rounded-2xl overflow-hidden shadow-[0_60px_120px_-30px_rgba(8,23,45,0.5)] border border-gold/20">
              {/* Inner gold border */}
              <div className="absolute inset-3 border border-gold/15 rounded-xl pointer-events-none" />

              {/* Background texture */}
              <img src={globalMap} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
              <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gold/15 blur-3xl" />
              <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />

              <div className="relative p-10 md:p-16 lg:p-20 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.28em] font-semibold">
                    <Sparkles size={12} />
                    Partner With Us
                  </div>
                  <h2 className="mt-7 text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                    Let's build the next <span className="gold-text italic">supply chain</span> — together.
                  </h2>
                  <p className="mt-7 text-white/70 max-w-xl leading-relaxed text-lg">
                    From Sahiwal to Casablanca to Stockton-on-Tees — speak with our team about partnerships, supply, or strategic collaboration.
                  </p>

                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                  <Link to="/contact" className="btn-gold w-full text-center justify-center !py-4">
                    Contact Our Team <ArrowRight size={16} />
                  </Link>
                  <Link to="/business-units" className="btn-ghost w-full text-center justify-center !py-4">
                    Explore Business Units
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
