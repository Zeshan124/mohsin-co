import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  FileText,
  Phone,
  Mail,
  ChevronRight,
  Shield,
  Award,
  Handshake,
  Leaf,
  Users,
  
  Briefcase,
  MapPin,
  Upload,
  Linkedin,
  Send,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/about-boardroom.jpg";
import featuredImg from "@/assets/gallery-partnership.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Mohsan & Co." },
      {
        name: "description",
        content:
          "Explore career opportunities at Mohsan & Abdullah Intl (Pvt) Ltd. Join a premium multinational corporate group across trade, agriculture, technology and diplomatic services.",
      },
      { property: "og:title", content: "Careers — Mohsan & Co." },
      {
        property: "og:description",
        content:
          "Join a premium multinational corporate group. Browse open positions and apply to grow with our global enterprise.",
      },
      { property: "og:url", content: "/careers" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const positions = [
  "Sales & Marketing",
  "Area Sales Manager",
  "Digital / Social Marketing Manager",
  "Driver / Office Boy",
];

const downloads = [
  { title: "Job Application Form", meta: "PDF · Application Form" },
  { title: "Company Profile", meta: "PDF · Corporate Overview" },
];

const coreValues = [
  {
    Icon: Shield,
    title: "Uncompromising Integrity & Discretion",
  },
  {
    Icon: Award,
    title: "Excellence in Quality & Safety",
  },
  {
    Icon: Handshake,
    title: "Strategic Partnership & Growth",
  },
  {
    Icon: Leaf,
    title: "Pioneering Sustainability & Stewardship",
  },
  {
    Icon: Users,
    title: "Nurturing Talent & Inclusivity",
  },
];

function CareersPage() {
  const [activePosition, setActivePosition] = useState(positions[0]);

  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Careers"
        subtitle="Build your career with a multinational corporate group operating across technology, agriculture and diplomatic services."
        image={heroImg}
        
      />

      <section className="py-20 bg-paper">
        <div className="container-pro">
          <div className="grid lg:grid-cols-[320px_1fr] gap-12">
            {/* LEFT SIDEBAR */}
            <aside className="space-y-10">
              {/* Available Positions */}
              <div className="bg-white border border-line">
                <div className="px-6 py-5 border-b border-line bg-navy">
                  <h3 className="font-display text-lg text-white tracking-wide">
                    Available Positions
                  </h3>
                  <div className="mt-2 h-[2px] w-10 bg-gold" />
                </div>
                <ul>
                  {positions.map((p) => {
                    const active = activePosition === p;
                    return (
                      <li key={p}>
                        <button
                          onClick={() => setActivePosition(p)}
                          className={`group w-full flex items-center justify-between px-6 py-4 border-b border-line last:border-b-0 text-left transition-colors ${
                            active
                              ? "bg-gold text-navy"
                              : "text-navy hover:bg-navy/[0.03] hover:text-gold-deep"
                          }`}
                        >
                          <span className="flex items-center gap-3 text-sm font-medium">
                            <span
                              className={`h-[1px] transition-all ${
                                active
                                  ? "w-8 bg-navy"
                                  : "w-5 bg-navy/30 group-hover:bg-gold group-hover:w-8"
                              }`}
                            />
                            {p}
                          </span>
                          <ChevronRight
                            size={14}
                            className={
                              active
                                ? "text-navy"
                                : "text-navy/40 group-hover:text-gold transition-colors"
                            }
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Download Catalog */}
              <div className="bg-white border border-line">
                <div className="px-6 py-5 border-b border-line bg-navy">
                  <h3 className="font-display text-lg text-white tracking-wide">
                    Download Catalog
                  </h3>
                  <div className="mt-2 h-[2px] w-10 bg-gold" />
                </div>
                <ul className="p-3">
                  {downloads.map((d) => (
                    <li key={d.title}>
                      <a
                        href="#"
                        className="group flex items-center gap-4 px-3 py-4 border-b border-line last:border-b-0 hover:bg-navy/[0.03] transition-colors"
                      >
                        <span className="w-11 h-11 flex items-center justify-center bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                          <FileText size={18} />
                        </span>
                        <span className="flex-1">
                          <span className="block text-sm font-display text-navy group-hover:text-gold-deep transition-colors">
                            {d.title}
                          </span>
                          <span className="block text-[11px] uppercase tracking-[0.18em] text-navy/50 mt-1">
                            {d.meta}
                          </span>
                        </span>
                        <Download
                          size={16}
                          className="text-navy/40 group-hover:text-gold transition-colors"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact box */}
              <div className="relative overflow-hidden bg-gold text-navy p-8 border-t-[3px] border-navy">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
                <span className="inline-block text-[11px] uppercase tracking-[0.28em] font-semibold text-navy/70">
                  Recruitment Desk
                </span>
                <h3 className="mt-4 font-display text-2xl leading-tight text-white drop-shadow-sm">
                  Have a Question?
                </h3>
                <div className="mt-6 space-y-4">
                  <a
                    href="tel:+923006920282"
                    className="flex items-start gap-3 group"
                  >
                    <span className="w-9 h-9 flex items-center justify-center border border-navy/20 text-navy bg-white/40 group-hover:bg-navy group-hover:text-gold transition-colors">
                      <Phone size={14} />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.24em] text-navy/70">
                        Phone
                      </span>
                      <span className="block text-sm text-white mt-0.5">
                        +92 300 6920282
                      </span>
                    </span>
                  </a>
                  <a
                    href="mailto:info@mohsanandco.com"
                    className="flex items-start gap-3 group"
                  >
                    <span className="w-9 h-9 flex items-center justify-center border border-navy/20 text-navy bg-white/40 group-hover:bg-navy group-hover:text-gold transition-colors">
                      <Mail size={14} />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.24em] text-navy/70">
                        Email
                      </span>
                      <span className="block text-sm text-white mt-0.5 break-all">
                        info@mohsanandco.com
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="space-y-16">
              {/* Featured Image */}
              <div className="relative overflow-hidden border border-line shadow-[0_30px_80px_-40px_rgba(8,23,45,0.35)]">
                <img
                  src={featuredImg}
                  alt="Corporate team at Mohsan & Co."
                  className="w-full h-[420px] md:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.28em] font-semibold bg-gold text-navy">
                    Careers at Mohsan & Co.
                  </span>
                  <h2 className="mt-5 font-display text-3xl md:text-4xl text-white leading-tight max-w-2xl">
                    Build a career inside a multinational group of enterprises.
                  </h2>
                </div>
              </div>

              {/* Core Values */}
              <div>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <span className="eyebrow text-gold-deep">Corporate Culture</span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl text-navy leading-tight">
                      Our Core Values
                    </h2>
                  </div>
                  <div className="hidden md:block h-[1px] flex-1 ml-8 bg-line" />
                </div>

                <p className="text-navy/75 leading-relaxed max-w-4xl">
                  Given Mohsan & Co.'s complex operations spanning sensitive
                  diplomatic services, comprehensive international trade,
                  quality-controlled agriculture, and future expansion into
                  textiles and student programs, the core values must reflect
                  high professionalism, strong ethical governance, and a
                  commitment to societal impact (Corporate Responsibility and
                  Best Practices).
                </p>

                <div className="mt-10 grid sm:grid-cols-2 gap-5">
                  {coreValues.map(({ Icon, title }) => (
                    <div
                      key={title}
                      className="group relative bg-white border border-line p-6 flex items-start gap-5 hover:border-gold transition-colors"
                    >
                      <span className="shrink-0 w-12 h-12 flex items-center justify-center bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                        <Icon size={20} />
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-lg text-navy leading-snug">
                          {title}
                        </h3>
                      </div>
                      <span className="absolute left-0 top-0 h-full w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />
                    </div>
                  ))}
                </div>

                {/* Business Alignment Highlight */}
                <div className="mt-10 relative bg-white border border-line border-l-[4px] border-l-gold p-8 md:p-10 shadow-[0_20px_60px_-40px_rgba(8,23,45,0.4)]">
                  <span className="eyebrow text-gold-deep">Business Alignment</span>
                  <p className="mt-4 text-navy/80 leading-relaxed text-lg">
                    Directly supports our Vision to create{" "}
                    <span className="text-navy font-medium">
                      "unparalleled opportunities for fresh talent and students"
                    </span>{" "}
                    for advanced study and professional integration. This value
                    ensures we attract, develop, and retain the best minds to
                    drive innovation and leadership across our evolving business
                    units.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* APPLY FOR A POSITION */}
      <section className="py-20 bg-white border-t border-line">
        <div className="container-pro">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-gold-deep">Recruitment</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-[1.08]">
              Apply for a Position
            </h2>
            <p className="mt-5 text-lg text-navy/70 leading-relaxed">
              Submit your application and become part of our growing global team.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-14 max-w-5xl mx-auto bg-paper border border-line p-8 md:p-12 shadow-[0_30px_80px_-50px_rgba(8,23,45,0.35)]"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name" required icon={Users}>
                <input type="text" required className={inputCls} placeholder="Your full name" />
              </Field>
              <Field label="Email Address" required icon={Mail}>
                <input type="email" required className={inputCls} placeholder="you@example.com" />
              </Field>
              <Field label="Phone Number" required icon={Phone}>
                <input type="tel" required className={inputCls} placeholder="+92 300 0000000" />
              </Field>
              <Field label="Current Location" required icon={MapPin}>
                <input type="text" required className={inputCls} placeholder="City, Country" />
              </Field>
              <Field label="Position Applying For" required icon={Briefcase}>
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Select a position</option>
                  {positions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </Field>
              <Field label="Years of Experience" required icon={Award}>
                <input type="number" min={0} required className={inputCls} placeholder="e.g. 5" />
              </Field>
              <Field label="Upload CV / Resume" required icon={Upload}>
                <input type="file" required accept=".pdf,.doc,.docx" className={`${inputCls} file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-navy file:text-gold file:text-xs file:uppercase file:tracking-[0.2em] file:cursor-pointer`} />
              </Field>
              <Field label="LinkedIn Profile" icon={Linkedin}>
                <input type="url" className={inputCls} placeholder="https://linkedin.com/in/..." />
              </Field>
              <div className="md:col-span-2">
                <Field label="Cover Letter" icon={FileText}>
                  <textarea rows={5} className={inputCls} placeholder="Tell us why you'd be a great fit..." />
                </Field>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-xs uppercase tracking-[0.22em] text-navy/55">
                Fields marked <span className="text-gold-deep">*</span> are required
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy font-semibold text-sm uppercase tracking-[0.22em] hover:bg-navy hover:text-gold transition-colors"
              >
                Submit Application
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full bg-white border border-line px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors";

function Field({
  label,
  required,
  icon: Icon,
  children,
}: {
  label: string;
  required?: boolean;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] font-semibold text-navy/70 mb-2">
        <Icon size={13} className="text-gold-deep" />
        {label}
        {required && <span className="text-gold-deep">*</span>}
      </span>
      {children}
    </label>
  );
}
