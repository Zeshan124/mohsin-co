import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import boardroom from "@/assets/about-boardroom.jpg";
import cooPhoto from "@/assets/coo.png.asset.json";
import { Target, BarChart3, Shield } from "lucide-react";

export const Route = createFileRoute("/coo-message")({
  head: () => ({
    meta: [
      { title: "COO Message — Mohsan & Co." },
      { name: "description", content: "A message from Rana Ali Akhtar, Chief Operating Officer of Mohsan & Co." },
      { property: "og:title", content: "COO Message — Mohsan & Co." },
      { property: "og:description", content: "Message from the Chief Operating Officer of Mohsan & Co." },
      { property: "og:url", content: "/coo-message" },
      { property: "og:image", content: boardroom },
    ],
    links: [{ rel: "canonical", href: "/coo-message" }],
  }),
  component: COOMessagePage,
});

function COOMessagePage() {
  return (
    <>
      <PageHero
        eyebrow="COO Message"
        title="Message from the Chief Operating Officer"
        subtitle="Rana Ali Akhtar — Chief Operating Officer, Mohsan & Co."
        image={boardroom}
      />

      <div className="relative bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #08172D 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Profile + Letter */}
        <section className="relative py-16 md:py-24">
          <div className="container-pro grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative">
                <span aria-hidden className="absolute -top-3 -left-3 h-16 w-px bg-gold" />
                <span aria-hidden className="absolute -top-3 -left-3 h-px w-16 bg-gold" />
                <span aria-hidden className="absolute -bottom-3 -right-3 h-16 w-px bg-gold" />
                <span aria-hidden className="absolute -bottom-3 -right-3 h-px w-16 bg-gold" />
                <div className="relative aspect-[3/4] w-full max-w-[420px] mx-auto overflow-hidden bg-paper">
                  <img
                    src={cooPhoto.url}
                    alt="Rana Ali Akhtar, COO of Mohsan & Co."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h2 className="font-display text-[28px] md:text-[32px] leading-[1.1] text-navy">
                  Rana Ali Akhtar
                </h2>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">
                  Chief Operating Officer (COO), Mohsan &amp; Co.
                </p>
                <span aria-hidden className="mt-5 block h-px w-16 bg-gold mx-auto lg:mx-0" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">
                Message from the COO
              </p>
              <h3 className="mt-4 font-display text-[30px] md:text-[40px] leading-[1.1] text-navy">
                Welcome.
              </h3>
              <span aria-hidden className="mt-6 block h-px w-20 bg-gold" />

              <div className="mt-8 space-y-6 text-[16px] leading-[1.85] text-navy/85">
                <p>
                  As the Chief Operating Officer, my commitment since 2007 has been to ensure Mohsan &amp; Co. operates as a dynamic, resilient, and unified enterprise. My core mandate is the continuous strengthening of our business foundationto secure the interests of every stakeholder.
                </p>
                <p>
                  Trust is earned through demonstrable stability and strategic action. We deliver this through:
                </p>

                <p>
                  Our focus is not just on current success, but on building the robust, agile framework necessary for sustained excellence. We are committed to ensuring that Mohsan &amp; Co. remains an unwavering source of value and trust for all connected to our journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Operations Framework — Premium Cards */}
        <section className="relative py-16 md:py-24 border-t border-line bg-gradient-to-b from-paper/60 to-white">
          <div className="container-pro">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  Icon: Target,
                  num: "01",
                  title: "Dynamic Alignment",
                  body: "We guarantee that all operational activities are mutually reinforcing and directly aligned with the overarching financial and strategic goals of the company. This process ensures resource optimization and maximum efficiency across our entire portfolio.",
                },
                {
                  Icon: BarChart3,
                  num: "02",
                  title: "Data-Driven Performance",
                  body: "We leverage intensive departmental data review to constantly assess productivity, preemptively address technology needs, and refine our organizational structure. This proactive approach locks in reliable, predictable performance and drives growth.",
                },
                {
                  Icon: Shield,
                  num: "03",
                  title: "Corporate Governance & Stewardship",
                  body: "We enforce a singular standard of ethical conduct and fiscal prudence across all executive functions. This accountability assures long-term financial stability and secures our reputation as a responsible global partner.",
                },
              ].map(({ Icon, num, title, body }, i) => (
                <article
                  key={i}
                  className="group relative bg-white border border-line border-l-[3px] border-l-gold p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(8,23,45,0.35)] overflow-hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(8,23,45,0.025) 0%, rgba(255,255,255,0) 60%)",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute top-6 right-6 font-display text-[44px] leading-none text-navy/[0.06] tracking-tight"
                  >
                    {num}
                  </span>
                  <div className="flex items-center justify-center w-14 h-14 bg-navy text-gold border border-gold/40 shadow-[0_14px_30px_-14px_rgba(8,23,45,0.5)]">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="mt-3 font-display text-[22px] md:text-[24px] leading-[1.2] text-navy">
                    {title}
                  </h4>
                  <span aria-hidden className="mt-5 block h-px w-12 bg-gold transition-all duration-500 group-hover:w-20" />
                  <p className="mt-5 text-[14.5px] leading-[1.8] text-navy/75">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
