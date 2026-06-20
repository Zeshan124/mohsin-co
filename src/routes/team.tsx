import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import boardroom from "@/assets/about-boardroom.jpg";
import ceoPhoto from "@/assets/ceo.png.asset.json";
import mdPhoto from "@/assets/team/team-md.png.asset.json";
import cooPhoto from "@/assets/team/team-coo.png.asset.json";
import cfoPhoto from "@/assets/team/team-cfo.png.asset.json";
import amPhoto from "@/assets/team/team-am.png.asset.json";
import legalPhoto from "@/assets/team/team-legal.png.asset.json";
import itPhoto from "@/assets/team/team-it.png.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Mohsan & Co." },
      { name: "description", content: "Meet the leadership and management team behind Mohsan & Abdullah Intl (Pvt) Ltd." },
      { property: "og:title", content: "Team — Mohsan & Co." },
      { property: "og:description", content: "Leadership and management guiding our global operations." },
      { property: "og:url", content: "/team" },
      { property: "og:image", content: boardroom },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const LEADERSHIP = [
  {
    name: "Mohsan Raza Rafique",
    role: "Chief Executive Officer",
    photo: ceoPhoto.url,
    photoClassName: "object-top",
  },
  {
    name: "Naheed Akhter",
    role: "Managing Director",
    photo: mdPhoto.url,
    photoClassName: "object-center",
  },
  {
    name: "Rana Ali Akhtar",
    role: "Chief Operating Officer",
    photo: cooPhoto.url,
    photoClassName: "object-center",
  },
  {
    name: "Ali Raza",
    role: "Chief Financial Officer",
    photo: cfoPhoto.url,
    photoClassName: "object-center",
  },
] as const;

const MANAGEMENT = [
  {
    name: "Abdul Rahman",
    role: "Assistant Manager",
    photo: amPhoto.url,
    photoClassName: "object-center",
  },
  {
    name: "Numan Zahid",
    role: "Legal Advisor",
    photo: legalPhoto.url,
    photoClassName: "object-center",
  },
  {
    name: "Umer Hayat",
    role: "IT Administrator",
    photo: itPhoto.url,
    photoClassName: "object-[46%_center]",
  },
] as const;

type Person = (typeof LEADERSHIP)[number] | (typeof MANAGEMENT)[number];

function Portrait({ p, size }: { p: Person; size: "lg" | "sm" }) {
  const nameClass =
    size === "lg"
      ? "font-display text-[22px] md:text-[24px] leading-[1.15] text-navy"
      : "font-display text-[17px] md:text-[18px] leading-[1.2] text-navy";
  const roleClass =
    size === "lg"
      ? "mt-3 text-[10.5px] font-semibold uppercase tracking-[0.32em] text-gold-deep"
      : "mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-deep";
  const captionPad = size === "lg" ? "mt-7" : "mt-5";
  const ruleWidth = size === "lg" ? "w-10 group-hover:w-20" : "w-7 group-hover:w-14";

  return (
    <figure className="group">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper">
        <img
          src={p.photo}
          alt={`${p.name}, ${p.role}`}
          loading="lazy"
          className={`h-full w-full object-cover grayscale-[18%] transition-all duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0 ${p.photoClassName}`}
        />
        {/* Subtle gold top-left corner accent */}
        <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-8 w-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="absolute left-0 top-0 h-px w-8 bg-gold" />
          <span className="absolute left-0 top-0 h-8 w-px bg-gold" />
        </span>
      </div>
      <span aria-hidden className={`mt-6 block h-px bg-gold transition-all duration-500 ${ruleWidth}`} />
      <figcaption className={captionPad}>
        <h3 className={nameClass}>{p.name}</h3>
        <p className={roleClass}>{p.role}</p>
      </figcaption>
    </figure>
  );
}

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The leaders engineering global trust."
        subtitle="A leadership and management team united by integrity, expertise, and a shared commitment to operational excellence."
        image={boardroom}
      />

      {/* Premium background wrapper */}
      <div className="relative bg-white">
        {/* Soft corporate texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #08172D 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Elegant gold vertical hairlines */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[12%] hidden w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent lg:block" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-[12%] hidden w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent lg:block" />

        {/* Executive Leadership */}
        <section className="relative py-20 md:py-28">
          <div className="container-pro">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">
                Board of Directors
              </p>
              <h2 className="mt-5 font-display text-[32px] md:text-[42px] leading-[1.1] text-navy">
                Executive Leadership
              </h2>
              <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-gold" />
            </div>

            <div className="mt-20 md:mt-24 grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4 lg:gap-x-14">
              {LEADERSHIP.map((p) => (
                <Portrait key={p.name} p={p} size="lg" />
              ))}
            </div>
          </div>
        </section>

        {/* Premium divider */}
        <div className="relative">
          <div className="container-pro">
            <div className="flex items-center justify-center gap-5 py-2">
              <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />
              <span aria-hidden className="h-px w-14 bg-gold" />
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />
              <span aria-hidden className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </div>
        </div>

        {/* Management Team */}
        <section className="relative pt-16 md:pt-20 pb-24 md:pb-32">
          <div className="container-pro">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-deep">
                Operational Stewardship
              </p>
              <h2 className="mt-5 font-display text-[28px] md:text-[36px] leading-[1.1] text-navy">
                Management Team
              </h2>
              <span aria-hidden className="mx-auto mt-6 block h-px w-12 bg-gold" />
            </div>

            <div className="mx-auto mt-16 md:mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:gap-x-12">
              {MANAGEMENT.map((p) => (
                <Portrait key={p.name} p={p} size="sm" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
