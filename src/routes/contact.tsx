import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Building2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import boardroom from "@/assets/about-boardroom.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohsan & Co." },
      { name: "description", content: "Offices in Pakistan, Morocco and the United Kingdom. Reach out for partnerships, supply, or strategic collaboration." },
      { property: "og:title", content: "Contact — Mohsan & Co." },
      { property: "og:description", content: "Speak with our team across Pakistan, Morocco, and the United Kingdom." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: boardroom },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const OFFICES = [
  {
    country: "Pakistan",
    label: "Head Office",
    address: "Business Center -358 Al Razzaq Villas, Madhali Faisalabad Road, Sahiwal, Punjab, Pakistan 57000",
    items: [
      { icon: Phone, label: "Mobile / WhatsApp", value: "+92 300 6920282", href: "tel:+923006920282" },
      { icon: Phone, label: "Office", value: "+92 402035267", href: "tel:+92402035267" },
      { icon: Mail, label: "Email", value: "info@mohsanandco.com", href: "mailto:info@mohsanandco.com" },
    ],
    map: "https://www.google.com/maps?q=Sahiwal,Punjab,Pakistan&output=embed",
  },
  {
    country: "Morocco",
    label: "North Africa Office",
    address: "Siege Social Rue D Atlas IMM 45, Etg4, N 16 El Maarif, Casablanca, Morocco",
    items: [
      { icon: Phone, label: "Phone", value: "+212 775-478131", href: "tel:+212775478131" },
    ],
    map: "https://www.google.com/maps?q=El+Maarif,Casablanca,Morocco&output=embed",
  },
  {
    country: "United Kingdom",
    label: "Bizmax Tech Ltd",
    address: "36 Northcote St, Stockton-on-Tees TS18 3JB, United Kingdom",
    items: [
      { icon: Phone, label: "Phone", value: "+44 7301 953040", href: "tel:+447301953040" },
    ],
    map: "https://www.google.com/maps?q=36+Northcote+St,Stockton-on-Tees+TS18+3JB&output=embed",
  },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent. Our team will be in touch shortly.");
    }, 700);
  }

  return (
    <>
      <Toaster richColors position="top-center" />
      <PageHero
        eyebrow="Contact Us"
        title="Let's open the next chapter together."
        subtitle="Offices across three continents — ready to discuss partnerships, supply, or strategic collaboration."
        image={boardroom}
      />

      {/* OFFICES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pro">
          <div className="max-w-3xl">
            <span className="eyebrow text-gold-deep">Global Offices</span>
            <h2 className="mt-5 text-4xl md:text-5xl text-navy leading-tight">Where to find us worldwide.</h2>
            <span className="gold-rule mt-6" />
          </div>
          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {OFFICES.map((o) => (
              <article key={o.country} className="card-pro p-8 flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold text-navy flex items-center justify-center">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-gold-deep">{o.label}</div>
                    <div className="font-display text-2xl text-navy">{o.country}</div>
                  </div>
                </div>
                <span className="gold-rule mt-6" />
                <div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                  <span>{o.address}</span>
                </div>
                <div className="mt-6 space-y-3 flex-1">
                  {o.items.map((it) => (
                    <a key={it.value} href={it.href} className="flex items-start gap-3 text-sm text-navy hover:text-gold-deep transition-colors group">
                      <it.icon size={16} className="text-gold mt-1 shrink-0" />
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{it.label}</div>
                        <div className="font-medium">{it.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="container-pro grid lg:grid-cols-2 gap-12">
          <div className="bg-navy text-white p-10 md:p-14">
            <span className="eyebrow text-gold">Send a Message</span>
            <h3 className="mt-5 font-display text-3xl md:text-4xl">Tell us how we can help.</h3>
            <p className="mt-4 text-white/70">We respond to every inquiry within one business day.</p>

            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="name" label="Full Name" required />
                <Field name="email" label="Email Address" type="email" required />
                <Field name="phone" label="Phone Number" type="tel" />
                <Field name="subject" label="Subject" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-gold mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-white placeholder:text-white/30 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" disabled={submitting} className="btn-gold mt-4 w-full sm:w-auto disabled:opacity-60">
                {submitting ? "Sending…" : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            {OFFICES.map((o) => (
              <div key={o.country} className="card-pro overflow-hidden flex-1 min-h-[180px]">
                <div className="grid grid-cols-3 h-full">
                  <div className="p-6 border-r border-line">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-gold-deep">Office</div>
                    <div className="font-display text-xl text-navy mt-1">{o.country}</div>
                    <div className="gold-rule mt-3" />
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{o.address.split(",").slice(0, 2).join(",")}</p>
                  </div>
                  <iframe
                    src={o.map}
                    title={`${o.country} office map`}
                    loading="lazy"
                    className="col-span-2 w-full h-full border-0 grayscale contrast-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.22em] text-gold mb-2">{label}{required && <span className="text-gold-soft"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-white placeholder:text-white/30 transition-colors"
        placeholder={label}
      />
    </div>
  );
}
