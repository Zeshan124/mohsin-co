import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Globe, Lightbulb, Target } from "lucide-react";
import boardroom from "@/assets/about-boardroom.jpg";

export const Route = createFileRoute("/mission-vision-goal")({
  head: () => ({
    meta: [
      { title: "Mission, Vision & Goal — Mohsan & Co." },
      { name: "description", content: "The corporate mission, vision, and goal statement guiding Mohsan & Co. across global trade, agriculture, and diplomatic services." },
      { property: "og:title", content: "Mission, Vision & Goal — Mohsan & Co." },
      { property: "og:description", content: "The strategic direction of Mohsan & Co.: mission, vision, and goal." },
      { property: "og:url", content: "/mission-vision-goal" },
      { property: "og:image", content: boardroom },
    ],
    links: [{ rel: "canonical", href: "/mission-vision-goal" }],
  }),
  component: MissionVisionGoalPage,
});

function MissionVisionGoalPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission • Vision • Goal"
        title="Our Strategic Direction"
        subtitle="The principles that guide every decision at Mohsan & Co."
        image={boardroom}
      />

      {/* Mission */}
      <section className="relative bg-white overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #08172D 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container-pro relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full border border-gold/30 bg-gold/5">
              <Globe size={40} className="text-gold" strokeWidth={1.5} />
            </div>
            <span aria-hidden className="gold-rule mx-auto mb-6" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep mb-4">Mission</p>
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.1] text-navy mb-10">Our Corporate Mission</h2>
            <div className="space-y-6 text-[17px] leading-[1.9] text-navy/85">
              <p>
                To serve as the definitive global nexus by employing state-of-the-art technology to strategically bridge the exchange of premium commodities, high-end electronics, and essential diplomatic logistics, thereby providing strong business connectivity across the world for our trade partners, all while upholding the highest standards of quality assurance and absolute operational discretion.
              </p>
              <p>
                We are committed to enriching the lives and accelerating the business growth of our stakeholders by acting as a catalyst for strategic partnerships, fostering a healthy and luxurious lifestyle, and providing innovative connectivity and transparency that keeps them informed and fully engaged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative bg-paper overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #08172D 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container-pro relative py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full border border-gold/30 bg-gold/5">
                  <Lightbulb size={40} className="text-gold" strokeWidth={1.5} />
                </div>
                <span aria-hidden className="gold-rule mb-6 block" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep mb-4">Vision</p>
                <h2 className="font-display text-[32px] md:text-[40px] leading-[1.1] text-navy">Our Corporate Vision</h2>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6 text-[17px] leading-[1.9] text-navy/85">
                <p>
                  To be the globally recognized, multi-sector leader that redefines excellence in trade and strategic services, consistently expanding our core operations in premium commodities and high-end electronics while pioneering new ventures in Textile Manufacturing, advanced Textile Machinery, and specialized Travel-Tourism.
                </p>
                <p>
                  We envision a future where Mohsan &amp; Co. fosters sustainable global growth, driven by innovation, and actively shapes the next generation of industry leaders by creating unparalleled opportunities for fresh talent and students seeking advanced study and professional integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal */}
      <section className="relative bg-white overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #08172D 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container-pro relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full border border-gold/40 bg-gold/10">
              <Target size={48} className="text-gold" strokeWidth={1.5} />
            </div>
            <span aria-hidden className="block h-px w-20 bg-gold mx-auto mb-8" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep mb-4">Goal</p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] text-navy mb-12">Our Goal Statement</h2>
            <div className="relative border-l-2 border-gold pl-10 md:pl-14 text-left">
              <div className="text-[18px] md:text-[20px] leading-[1.9] text-navy/85">
                <p>
                  To establish Mohsan and Co. as the premier integrated solutions provider and a trusted, indispensable partner across key sectors—global trade, agriculture, and specialized diplomatic services by maximizing efficiency, achieving uncompromising quality standards, and securing a leading market position in each domain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
