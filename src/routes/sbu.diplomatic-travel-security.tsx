import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Target, ShieldCheck, Plane, Lock, Globe2, Check, ArrowRight, ChevronRight, Briefcase } from "lucide-react";
import heroImg from "@/assets/sbu03-hero.jpg";
import logisticsImg from "@/assets/sbu03-logistics.jpg";
import securityImg from "@/assets/sbu03-security.jpg";
import globalImg from "@/assets/sbu03-global.jpg";
import airportImg from "@/assets/gallery-airport.jpg";

export const Route = createFileRoute("/sbu/diplomatic-travel-security")({
  head: () => ({
    meta: [
      { title: "Global Distribution Solutions — SBU 03 | Mohsan & Co." },
      { name: "description", content: "Diplomatic Travel & Security — Critical Global Facilitation with precision, discretion, and assured security." },
      { property: "og:title", content: "Diplomatic Travel & Security — Mohsan & Co." },
      { property: "og:description", content: "Meticulous arrangement of international travel for diplomats and high-level government personnel." },
      { property: "og:url", content: "/sbu/diplomatic-travel-security" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/sbu/diplomatic-travel-security" }],
  }),
  component: SBU03Page,
});

const FEATURE_BLOCKS = [
  {
    icon: Eye,
    title: "Discretion",
    image: securityImg,
    blurb: "We operate strictly behind the scenes, maintaining the confidentiality essential to sensitive global engagements.",
  },
  {
    icon: Target,
    title: "Precision",
    image: logisticsImg,
    blurb: "Meticulous planning, exacting scheduling, and proactive mitigation of disruptions across every leg of the journey.",
  },
  {
    icon: ShieldCheck,
    title: "Assured Security",
    image: airportImg,
    blurb: "The highest standard of security protocols, applied with professionalism throughout every movement we facilitate.",
  },
];

const CATEGORY_TABLE = [
  {
    icon: Briefcase,
    category: "Logistics Arrangement",
    focus: "Meticulous arrangement of international flights, ground transport, and specialized accommodations.",
    assurance: "Precision Scheduling: Reliability and proactive mitigation of travel disruptions.",
    assuranceLabel: "Precision Scheduling",
  },
  {
    icon: Lock,
    category: "Confidential Security Protocols",
    focus: "Implementation of advanced risk assessment and personnel protection measures.",
    assurance: "Discreet Protection: Maintaining strict secrecy and low visibility essential for sensitive international movements.",
    assuranceLabel: "Discreet Protection",
  },
  {
    icon: Globe2,
    category: "Global Facilitation",
    focus: "Seamless coordination across jurisdictions, including permits, clearances, and emergency support.",
    assurance: "Unwavering Support: Reliability that sustains critical global dialogue and complex sovereign engagements.",
    assuranceLabel: "Unwavering Support",
  },
];

function CategoryTable({ rows }: { rows: typeof CATEGORY_TABLE }) {
  return (
    <div className="mt-12 border border-line bg-white overflow-hidden">
      <div className="hidden lg:grid grid-cols-12 bg-navy text-white text-[11px] uppercase tracking-[0.22em] font-semibold">
        <div className="col-span-3 px-8 py-5">Category</div>
        <div className="col-span-5 px-8 py-5 border-l border-white/10">Core Function</div>
        <div className="col-span-4 px-8 py-5 border-l border-white/10">Client Advantage &amp; Assurance</div>
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
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold-deep mb-2 lg:hidden">Core Function</div>
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

function SBU03Page() {
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
            <span className="text-gold">SBU 03</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gold text-navy w-16 h-16 flex flex-col items-center justify-center">
                  <div className="text-[9px] uppercase tracking-[0.2em] leading-none">SBU</div>
                  <div className="font-display text-2xl leading-none mt-0.5">03</div>
                </div>
                <span className="eyebrow text-gold">Strategic Business Unit 03</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02]">
                Global Distribution <span className="italic text-gold">Solutions</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-white/85 font-light italic">
                SBU-3: Diplomatic Travel &amp; Security: Critical Global Facilitation
              </p>
              <span className="gold-rule mt-8" />
            </div>
            <div className="lg:col-span-4">
              <p className="text-white/80 leading-relaxed text-[16px] border-l-2 border-gold pl-6">
                Mohsan &amp; CO's SBU 3 operates in a highly specialized sector, executing the meticulous arrangement of international travel for diplomats and high-level government personnel. This critical service is foundational to global dialogue, requiring exceptional precision, unparalleled discretion, and unwavering reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01 — Core Commitment */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow text-gold-deep">Section 01</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
                Core Commitment: <span className="italic text-gold-deep">Discretion, Precision, and Assured Security</span>
              </h2>
              <span className="gold-rule mt-6" />
              <p className="mt-8 text-navy/75 leading-relaxed text-[17px]">
                We are entrusted with facilitating sensitive movements, approaching this responsibility with the utmost professionalism. Our pledge is to ensure the highest standard of security protocols and strict confidentiality essential to sensitive global engagements. We are proud to support global diplomacy by operating strictly behind the scenes.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden border border-line">
                <img src={logisticsImg} alt="Executive Aviation" loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Division I</div>
                  <h3 className="font-display text-2xl text-white">Executive Aviation</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden border border-line sm:mt-12">
                <img src={securityImg} alt="Security Detail" loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">Division II</div>
                  <h3 className="font-display text-2xl text-white">Security Detail</h3>
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

      {/* SECTION 02 — Service Focus */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="container-pro">
          <div className="max-w-4xl">
            <span className="eyebrow text-gold-deep">Section 02</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
              Service Focus: <span className="italic text-gold-deep">Specialized Diplomatic Support</span>
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-8 text-navy/75 leading-relaxed text-[17px]">
              Our services are custom-designed to remove logistical burdens from diplomatic teams, allowing them to focus entirely on their mission.
            </p>
          </div>

          <CategoryTable rows={CATEGORY_TABLE} />
        </div>
      </section>

      {/* SECTION 03 — Operational Excellence */}
      <section className="relative py-20 md:py-28 bg-navy text-white overflow-hidden">
        <img src={globalImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />

        <div className="relative container-pro">
          <div className="max-w-4xl">
            <span className="eyebrow text-gold">Section 03</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-white leading-tight">
              Operational Excellence: <span className="italic text-gold">Trust and Professionalism</span>
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-8 text-white/80 leading-relaxed text-[17px]">
              Leveraging our robust international logistics framework, we manage the global movement of premier consumer brands and foundational industrial assets. Our meticulous channeling ensures that products retain their authenticity and value from the source to the final point of sale, meeting the exacting standards of our buyers.
            </p>
            <p className="mt-5 text-white/80 leading-relaxed text-[17px]">
              Our reputation is built on the competence and professionalism of our dedicated SBU 3 team.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="group bg-navy-soft/60 backdrop-blur border border-white/10 p-10 lg:p-12 transition-all duration-500 hover:border-gold/50">
              <div className="w-14 h-14 bg-gold text-navy flex items-center justify-center mb-7">
                <Briefcase size={26} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-3">01 — Principle</div>
              <h3 className="font-display text-3xl text-white leading-tight">High-Degree Professionalism</h3>
              <span className="block w-12 h-px bg-gold mt-5" />
              <p className="mt-6 text-white/80 leading-relaxed">
                Every operation is executed with a commitment to the highest industry standards for conduct and service delivery. We understand the stakes involved and ensure our team acts as a seamless, silent extension of the diplomatic mission.
              </p>
            </div>

            <div className="group bg-navy-soft/60 backdrop-blur border border-white/10 p-10 lg:p-12 transition-all duration-500 hover:border-gold/50">
              <div className="w-14 h-14 bg-gold text-navy flex items-center justify-center mb-7">
                <Lock size={26} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold mb-3">02 — Principle</div>
              <h3 className="font-display text-3xl text-white leading-tight">Risk Mitigation and Confidentiality</h3>
              <span className="block w-12 h-px bg-gold mt-5" />
              <p className="mt-6 text-white/80 leading-relaxed">
                We prioritize comprehensive security planning, maintaining the necessary secrecy and confidentiality required by our clients. Our protocols provide assured security oversight throughout the journey.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl border-t border-white/10 pt-10">
            <p className="text-white/85 leading-relaxed text-[18px] italic">
              By partnering with Mohsan &amp; CO Diplomatic Travel &amp; Security, clients secure a dependable, discrete channel for their most critical international movements.
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
