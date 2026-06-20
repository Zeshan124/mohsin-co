import { createFileRoute } from "@tanstack/react-router";
import { Mail, ShieldCheck, BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroAsset from "@/assets/hero-payment.jpg.asset.json";
import mohsanCoLogo from "@/assets/mohsan-co-logo.asset.json";
import mohsanAbdullahLogo from "@/assets/mohsan-abdullah-logo.asset.json";
import meezanLogo from "@/assets/payments/meezan-bank.png.asset.json";
import mcbLogo from "@/assets/payments/mcb.asset.json";
import paypalLogo from "@/assets/payments/paypal.asset.json";
import visaMcLogo from "@/assets/payments/visa-mc.asset.json";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment — Mohsan & Co." },
      {
        name: "description",
        content:
          "Secure & trusted payment channels for Mohsan & Abdullah Intl (Pvt) Ltd — Meezan Bank, MCB Bank, PayPal, Visa and MasterCard.",
      },
      { property: "og:title", content: "Payment — Mohsan & Co." },
      {
        property: "og:description",
        content: "Secure and trusted international payment channels.",
      },
      { property: "og:url", content: "/payment" },
      { property: "og:image", content: heroAsset.url },
    ],
    links: [{ rel: "canonical", href: "/payment" }],
  }),
  component: PaymentPage,
});

type PaymentCard = {
  name: string;
  account: string;
  number?: string;
  logo: string;
  logoBg: string;
};

const PAYMENTS: PaymentCard[] = [
  {
    name: "Meezan Bank",
    account: "MOHSAN & ABDULLAH INTL PVT LTD",
    number: "PK56MEZN0021070113656697",
    logo: meezanLogo.url,
    logoBg: "bg-white",
  },
  {
    name: "MCB Bank",
    account: "MOHSAN & CO",
    number: "PK50MUCB0510322961000726",
    logo: mcbLogo.url,
    logoBg: "bg-white",
  },
  {
    name: "PayPal",
    account: "MOHSAN & ABDULLAH INTL PVT LTD",
    logo: paypalLogo.url,
    logoBg: "bg-white",
  },
  {
    name: "Visa / MasterCard",
    account: "MOHSAN & ABDULLAH INTL PVT LTD",
    logo: visaMcLogo.url,
    logoBg: "bg-white",
  },
];

const PAYMENT_EMAILS = [
  { label: "General Enquiries", email: "info@mohsanandco.com" },
];

function PaymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Payment"
        title="PAYMENT"
        subtitle="Secure & Trusted Payment Channels"
        image={heroAsset.url}
      />

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-pro grid grid-cols-1 lg:grid-cols-10 gap-10">
          {/* LEFT — 70% */}
          <div className="lg:col-span-7">
            <span className="eyebrow text-gold">Payment Channels</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-4">PAYMENT</h2>
            <div className="mt-4 h-px w-24 bg-gold" />
            <p className="mt-6 text-navy/75 max-w-2xl leading-relaxed">
              We ensure your licensed gateway to premium goods and success by providing
              Advanced IT, Luxury Products, and Essential Commodities in the High-Tech World.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5">
              {PAYMENTS.map((p) => (
                <article
                  key={p.name}
                  className="group relative bg-white border border-line shadow-[0_20px_60px_-30px_rgba(8,23,45,0.25)] hover:shadow-[0_30px_70px_-25px_rgba(8,23,45,0.35)] transition-all duration-500"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
                  <div className="flex items-stretch gap-5 p-5 md:p-6">
                    {/* LEFT — logo */}
                    <div className="shrink-0 flex items-center">
                      <div
                        className={`h-20 w-28 md:h-24 md:w-36 ${p.logoBg} border border-line flex items-center justify-center p-3 overflow-hidden`}
                      >
                        <img
                          src={p.logo}
                          alt={`${p.name} logo`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* CENTER */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="text-[10.5px] uppercase tracking-[0.26em] text-gold-deep font-semibold">
                        Payment Method
                      </div>
                      <div className="mt-1 font-display text-xl md:text-2xl text-navy">{p.name}</div>
                      <div className="mt-3 text-[10.5px] uppercase tracking-[0.22em] text-navy/55 font-semibold">
                        Account Name
                      </div>
                      <div className="text-navy text-sm md:text-[15px] font-medium break-words">
                        {p.account}
                      </div>
                      {p.number ? (
                        <>
                          <div className="mt-2 text-[10.5px] uppercase tracking-[0.22em] text-navy/55 font-semibold">
                            Account Number / IBAN
                          </div>
                          <div className="text-navy font-mono text-sm md:text-[15px] tracking-wider break-all">
                            {p.number}
                          </div>
                        </>
                      ) : null}
                    </div>

                    {/* RIGHT — verified */}
                    <div className="shrink-0 flex flex-col items-end justify-center gap-2">
                      <div className="inline-flex items-center gap-1.5 border border-gold/40 bg-gold/5 px-2.5 py-1.5">
                        <BadgeCheck size={14} className="text-gold-deep" />
                        <span className="text-[9.5px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT — 30% */}
          <aside className="lg:col-span-3 flex flex-col gap-6">
            <div className="bg-white border border-line shadow-[0_20px_60px_-30px_rgba(8,23,45,0.25)]">
              <div className="px-6 py-5 border-b border-line bg-navy text-white">
                <div className="text-[10.5px] uppercase tracking-[0.26em] text-gold font-semibold">
                  Company Verification
                </div>
                <div className="mt-1 font-display text-lg">Registered Entities</div>
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <img
                  src={mohsanCoLogo.url}
                  alt="Mohsan & Co."
                  className="h-20 w-auto object-contain"
                />
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-navy font-semibold">
                  Mohsan &amp; Co.
                </div>

                <div className="my-6 flex items-center w-full gap-3">
                  <div className="h-px flex-1 bg-line" />
                  <BadgeCheck size={14} className="text-gold" />
                  <div className="h-px flex-1 bg-line" />
                </div>

                <img
                  src={mohsanAbdullahLogo.url}
                  alt="Mohsan & Abdullah Intl (Pvt) Ltd"
                  className="h-20 w-auto object-contain"
                />
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-navy font-semibold">
                  Mohsan &amp; Abdullah Intl (Pvt) Ltd
                </div>
              </div>
            </div>

            <div className="bg-white border border-line shadow-[0_20px_60px_-30px_rgba(8,23,45,0.25)]">
              <div className="px-6 py-5 border-b border-line">
                <div className="text-[10.5px] uppercase tracking-[0.26em] text-gold-deep font-semibold">
                  Contact
                </div>
                <div className="mt-1 font-display text-lg text-navy">Need Payment Assistance?</div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {PAYMENT_EMAILS.map((c) => (
                  <a
                    key={c.email}
                    href={`mailto:${c.email}`}
                    className="group flex items-center gap-3 border border-line hover:border-gold p-3 transition-colors"
                  >
                    <div className="h-10 w-10 bg-navy text-gold flex items-center justify-center shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-navy/55 font-semibold">
                        {c.label}
                      </div>
                      <div className="text-sm text-navy group-hover:text-gold-deep transition-colors truncate">
                        {c.email}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-navy/60">
                  <ShieldCheck size={12} className="text-gold" />
                  Secure Corporate Channels
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
