import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import boardroom from "@/assets/about-boardroom.jpg";
import ceoPhoto from "@/assets/ceo.png.asset.json";
import { Handshake, Users, Globe, Award } from "lucide-react";

export const Route = createFileRoute("/ceo-message")({
  head: () => ({
    meta: [
      { title: "CEO Message — Mohsan & Co." },
      { name: "description", content: "A message from Mohsan Raza Rafique, Chief Executive Officer of Mohsan & Co." },
      { property: "og:title", content: "CEO Message — Mohsan & Co." },
      { property: "og:description", content: "Elevating Our Future: A Message from the CEO of Mohsan & Co." },
      { property: "og:url", content: "/ceo-message" },
      { property: "og:image", content: boardroom },
    ],
    links: [{ rel: "canonical", href: "/ceo-message" }],
  }),
  component: CEOMessagePage,
});

function CEOMessagePage() {
  return (
    <>
      <PageHero
        eyebrow="CEO Message"
        title="Elevating Our Future: A Message from the CEO"
        subtitle="Mohsan Raza Rafique — Chief Executive Officer, Mohsan & Co."
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

        {/* Profile Section */}
        <section className="relative py-16 md:py-24">
          <div className="container-pro grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative">
                <span aria-hidden className="absolute -top-3 -left-3 h-16 w-px bg-gold" />
                <span aria-hidden className="absolute -top-3 -left-3 h-px w-16 bg-gold" />
                <span aria-hidden className="absolute -bottom-3 -right-3 h-16 w-px bg-gold" />
                <span aria-hidden className="absolute -bottom-3 -right-3 h-px w-16 bg-gold" />
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper">
                  <img
                    src={ceoPhoto.url}
                    alt="Mohsan Raza Rafique, CEO of Mohsan & Co."
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="mt-8">
                <h2 className="font-display text-[28px] md:text-[32px] leading-[1.1] text-navy">
                  Mohsan Raza Rafique
                </h2>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">
                  Chief Executive Officer
                </p>
                <span aria-hidden className="mt-5 block h-px w-16 bg-gold" />
                <p className="mt-5 text-[12px] uppercase tracking-[0.28em] text-navy/65">
                  Mohsan &amp; Co.
                </p>
                <p className="mt-2 text-[12px] uppercase tracking-[0.28em] text-navy/65">
                  Mohsan &amp; Abdullah Intl (Pvt) Ltd
                </p>
              </div>

            </div>

            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">
                Message from the CEO
              </p>
              <h3 className="mt-4 font-display text-[30px] md:text-[40px] leading-[1.1] text-navy">
                Valued Stakeholders—Our Employees, Partners, and Customers,
              </h3>
              <span aria-hidden className="mt-6 block h-px w-20 bg-gold" />

              <div className="mt-8 space-y-6 text-[16px] leading-[1.85] text-navy/85">
                <p>
                  As CEO of Mohsan &amp; Co, I am incredibly energized by the momentum we are building and the impact we are making across the globe. Since our founding in 2007, we have cultivated an organization that is not just multinational in scope, but multipurpose in its commitment to global excellence and stability.
                </p>

                <h4 className="font-display text-[22px] md:text-[24px] text-navy pt-4">
                  Our Core Mission and Shared Purpose
                </h4>
                <p>
                  Our mission is clear: to be the trusted bridge that connects crucial global resources, advanced technology, and vital diplomatic channels. This mission is powered by our collective vision of achieving seamless global commerce anchored by integrity and uncompromising quality.
                </p>
                <p>
                  At Mohsan &amp; Co., we recognize that true corporate strength is measured not just by balance sheets, but by the positive and responsible impact we create for every stakeholder. Our diverse operations—from empowering the digital infrastructure of tomorrow to ensuring the safety of global dialogue—are all united by a profound sense of purpose and social commitment.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Creating Value for All Stakeholders — Full-width Executive Section */}
        <section className="relative py-16 md:py-24 border-t border-line bg-gradient-to-b from-paper/60 to-white">
          <div className="container-pro">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">
                Stakeholder Value Framework
              </p>
              <h3 className="mt-4 font-display text-[34px] md:text-[46px] leading-[1.05] text-navy">
                Creating Value for All Stakeholders
              </h3>
              <span aria-hidden className="mt-6 mx-auto block h-[2px] w-20 bg-gold" />
              <p className="mt-7 text-[15px] md:text-[16px] leading-[1.85] text-navy/75">
                Our success is inherently linked to your success. We are deeply committed to ensuring that our work translates into meaningful value across our entire ecosystem:
              </p>
            </div>

            {/* Executive Panels */}
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  Icon: Handshake,
                  num: "01",
                  title: "For Our Customers and Partners",
                  body: "We pledge to deliver , high-quality solutions, whether it is providing reliable access to cutting-edge electronic equipment, offering wholesome, safe agricultural produce, or maintaining the absolute security and secrecy essential to international relations.",
                },
                {
                  Icon: Users,
                  num: "02",
                  title: "For Our Employees",
                  body: "You are the central force of our success. We are committed to fostering a culture where excellence is rewarded, continuous learning is encouraged, and where your commitment to high standards is the true differentiator of Mohsan & Co.",
                },
                {
                  Icon: Globe,
                  num: "03",
                  title: "Our Global Community",
                  body: "We embrace our role in global stability and responsibility. By employing rigorous, modern practices in agriculture, we guarantee purity and dependability. By meticulously executing diplomatic support, we proudly operate strictly behind the scenes to facilitate global dialogue. Our dedication to quality and security contributes directly to a more connected and stable world.",
                },
              ].map(({ Icon, num, title, body }, i) => (
                <article
                  key={i}
                  className="group relative bg-white border border-line border-l-[3px] border-l-gold p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(8,23,45,0.35)] overflow-hidden last:lg:col-span-1 md:[&:nth-child(3)]:col-span-2 lg:[&:nth-child(3)]:col-span-1"
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

            {/* Our Shared Commitment — Premium Executive Closing Block */}
            <div className="mt-14 relative overflow-hidden bg-navy text-white">
              <div aria-hidden className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/[0.06] blur-3xl" />
              <div aria-hidden className="absolute top-6 left-6 h-14 w-px bg-gold/50" />
              <div aria-hidden className="absolute top-6 left-6 h-px w-14 bg-gold/50" />
              <div aria-hidden className="absolute bottom-6 right-6 h-14 w-px bg-gold/50" />
              <div aria-hidden className="absolute bottom-6 right-6 h-px w-14 bg-gold/50" />

              <div className="relative grid lg:grid-cols-12 gap-10 p-10 md:p-16">
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-5">
                  <div className="flex items-center justify-center h-16 w-16 border border-gold/50 text-gold">
                    <Award size={28} strokeWidth={1.4} />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold">
                    Our Shared Commitment
                  </p>
                </div>
                <div className="lg:col-span-9 lg:border-l lg:border-white/10 lg:pl-10">
                  <h4 className="font-display text-[26px] md:text-[34px] leading-[1.15] text-white">
                    Together, we elevate every mission we undertake.
                  </h4>
                  <span aria-hidden className="mt-5 block h-px w-16 bg-gold" />
                  <div className="mt-6 space-y-5 text-[15.5px] leading-[1.9] text-white/85">
                    <p>
                      Every employee, every partner, and every customer contributes directly to the success of our core missions. Whether you are ensuring the quality of our harvest, negotiating a technology contract, or meticulously arranging complex logistics,you are valued.
                    </p>
                    <p>
                      Thank you for being part of this remarkable journey. Together, we will continue to elevate our company and ensure a more connected, secure, and prosperous future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
