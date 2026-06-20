import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, Sparkles, Handshake, Leaf, Users } from "lucide-react";
import boardroom from "@/assets/about-boardroom.jpg";

export const Route = createFileRoute("/core-values")({
  head: () => ({
    meta: [
      { title: "Our Core Values — Mohsan & Co." },
      { name: "description", content: "The core values that guide Mohsan & Co. across diplomatic services, international trade, agriculture, and future ventures." },
      { property: "og:title", content: "Our Core Values — Mohsan & Co." },
      { property: "og:description", content: "Integrity, excellence, partnership, sustainability, and talent — the principles of Mohsan & Co." },
      { property: "og:url", content: "/core-values" },
      { property: "og:image", content: boardroom },
    ],
    links: [{ rel: "canonical", href: "/core-values" }],
  }),
  component: CoreValuesPage,
});

const VALUES = [
  {
    num: "01",
    Icon: ShieldCheck,
    title: "Uncompromising Integrity & Discretion",
    alignment:
      "This is paramount for fostering and maintaining the absolute trust required by our Diplomatic Logistics SBU, ensuring the confidentiality of sensitive operations. It also underpins ethical dealing across our complex global commodity and electronics trade, building long-term reliability.",
    responsibility:
      "Governs all ethical conduct, anti-corruption policies, and strictly protects sensitive stakeholder information and intellectual property, solidifying our reputation as a trusted global entity.",
  },
  {
    num: "02",
    Icon: Sparkles,
    title: "Excellence in Quality & Safety",
    alignment:
      "Critical for our Agriculture SBU, guaranteeing superior food safety, traceability, and the premium quality of our commodities. For our Electronics and General Trade SBU, it ensures product reliability, brand integrity, and consumer satisfaction across our diverse range of goods.",
    responsibility:
      "Demonstrates our commitment to consumer protection, rigorous internal quality controls, and adherence to international health, safety, and environmental standards throughout our supply chains.",
  },
  {
    num: "03",
    Icon: Handshake,
    title: "Strategic Partnership & Growth",
    alignment:
      "This value drives our mission to act as a \u201Ccatalyst for strategic partnerships,\u201D fostering synergistic relationships with suppliers, buyers, and international bodies. It is essential for our expansion into new ventures like textiles and machinery, ensuring mutual business growth and shared success.",
    responsibility:
      "Cultivates fair dealing, transparent communication, and collaborative relationships, contributing to the economic stability and prosperity of the communities and nations where we operate.",
  },
  {
    num: "04",
    Icon: Leaf,
    title: "Pioneering Sustainability & Stewardship",
    alignment:
      "Crucial for our responsible farming practices within the Agriculture SBU, minimizing environmental footprint. It guides our approach to managing the ecological impact of large-scale trade, manufacturing processes (e.g., future textile SBU), and resource utilization across all operations.",
    responsibility:
      "Focuses on environmental impact reduction, promoting resource efficiency, circular economy principles, and long-term ecological health, ensuring we operate responsibly for future generations.",
  },
  {
    num: "05",
    Icon: Users,
    title: "Nurturing Talent & Inclusivity",
    alignment:
      "Directly supports our Vision to create \u201Cunparalleled opportunities for fresh talent and students\u201D for advanced study and professional integration. This value ensures we attract, develop, and retain the best minds to drive innovation and leadership across our evolving business units.",
    responsibility:
      "Commits us to fair labor practices, continuous professional development, fostering a diverse and inclusive workplace, and making significant community investments through educational and skills training programs.",
  },
];

function CoreValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Core Values"
        title="Principles That Define Mohsan & Co."
        subtitle="High professionalism, strong ethical governance, and a commitment to societal impact."
        image={boardroom}
      />

      <div className="relative bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #08172D 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Overview */}
        <section className="relative py-16 md:py-24">
          <div className="container-pro">
            {/* Section label */}
            <div className="text-center">
              <p className="inline-block text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">
                Overview
              </p>
            </div>

            {/* Main heading */}
            <div className="mt-5 text-center">
              <h2 className="font-display text-[34px] md:text-[48px] leading-[1.05] text-navy">
                Our Core Values
              </h2>
              <span aria-hidden className="mx-auto mt-6 block h-px w-24 bg-gold" />
            </div>

            {/* Introductory content */}
            <div className="mt-12 mx-auto max-w-[820px] text-center">
              <p className="text-[17px] md:text-[18px] leading-[1.9] text-navy/85">
                Given Mohsan &amp; Co.&apos;s complex operations spanning sensitive diplomatic services, comprehensive international trade, quality-controlled agriculture, and future expansion into textiles and student programs, the core values must reflect high professionalism, strong ethical governance, and a commitment to societal impact (Corporate Responsibility and Best Practices)
              </p>
            </div>

            {/* Core values grid */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {VALUES.map((v) => (
                <div
                  key={v.num}
                  className="group relative flex flex-col bg-white border border-line px-6 pt-8 pb-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(8,23,45,0.14)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center border border-gold/40 bg-gradient-to-br from-paper to-white shadow-[0_8px_24px_-12px_rgba(8,23,45,0.14)]">
                    <v.Icon size={26} className="text-gold-deep" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-[16px] leading-[1.35] text-navy">
                    {v.title}
                  </h3>
                  <span aria-hidden className="mx-auto mt-4 block h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Alignment highlight */}
        <section className="relative">
          <div className="container-pro">
            <div className="relative border-l-2 border-gold bg-paper px-8 py-10 md:px-14 md:py-14">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, #08172D 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">Business Alignment</p>
                <p className="mt-5 text-[16px] md:text-[17px] leading-[1.9] text-navy/85 max-w-4xl">
                  <span className="font-semibold text-navy">Directly supports our Vision to create &ldquo;unparalleled opportunities for fresh talent and students&rdquo; for advanced study and professional integration. This value ensures we attract, develop, and retain the best minds to drive innovation and leadership across our evolving business units.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Individual values */}
        <section className="relative pb-10">
          <div className="container-pro space-y-12">
            {VALUES.map(({ num, Icon, title, alignment, responsibility }) => (
              <article key={num} className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 border-t border-line pt-12">
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-20 h-20 border border-gold/60 bg-gradient-to-br from-paper to-white flex items-center justify-center shadow-[0_8px_24px_-12px_rgba(8,23,45,0.18)]">
                      <Icon size={36} className="text-gold-deep" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">Value {num}</p>
                      <h3 className="mt-2 font-display text-[24px] md:text-[26px] leading-[1.15] text-navy">
                        {title}
                      </h3>
                      <span aria-hidden className="mt-4 block h-px w-14 bg-gold" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-5 text-[16px] leading-[1.9] text-navy/85">
                  <p>
                    <span className="font-semibold text-navy">Business Alignment:</span> {alignment}
                  </p>
                  <p>
                    <span className="font-semibold text-navy">Corporate Responsibility &amp; Best Practice:</span> {responsibility}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="relative py-16 md:py-20 mt-10 bg-navy text-white">
          <div className="container-pro">
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold">Products</p>
            <h2 className="mt-4 font-display text-[30px] md:text-[38px] leading-[1.1] text-white max-w-3xl">
              A diverse portfolio across global trade
            </h2>
            <span aria-hidden className="mt-6 block h-px w-20 bg-gold" />
            <p className="mt-8 text-[17px] md:text-[18px] leading-[1.9] text-white/85 max-w-4xl">
              Rice, Shoes, Fabrics, Dairy, Products, Vegetables, Fruits, IT equipment &amp; Accessories, Olive Oil, Meat, Cheese, Cosmetic, Dry Fruits, Chocolates and Automobile Spare Parts, Perfume, Machinery.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
