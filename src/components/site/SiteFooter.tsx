import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SocialIcon } from "./SocialIcon";
import logoAsset from "@/assets/mohsan-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative bg-navy-deep text-white overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-navy-soft/40 blur-3xl pointer-events-none" />


      <div className="relative container-pro py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <img src={logoAsset.url} alt="Mohsan & Co." className="h-16 w-16" />
              <div className="border-l border-white/15 pl-4">
                <div className="font-display text-xl tracking-wide">
                  MOHSAN <span className="text-gold">&</span> CO.
                </div>
                <div className="text-[9px] uppercase tracking-[0.32em] text-white/50 font-semibold mt-1">
                  Intl (Pvt) Ltd · Since 2007
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm text-white/65 leading-[1.85] max-w-sm">
              We don't just trade; we build essential supply chains that drive global stability and growth.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 px-4 py-2.5 border border-gold/30 bg-gold/5">
              <span className="w-1.5 h-1.5 bg-gold rotate-45" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
                A Multinational Corporation
              </span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <SocialIcon
                href="https://www.facebook.com/mohsaraza786"
                label="Facebook"
                variant="dark"
                size="md"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/mohsanimpexp"
                label="LinkedIn"
                variant="dark"
                size="md"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Company links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-gold font-semibold pb-4 border-b border-gold/20">
              Company
            </h4>
            <ul className="mt-6 space-y-4 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/business-units", label: "Business Units" },
                { to: "/team", label: "Team" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
                  >
                    <span className="w-0 h-px bg-gold transition-all duration-500 group-hover:w-4" />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Units */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-gold font-semibold pb-4 border-b border-gold/20">
              Business Units
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {[
                "Global Technology & General Trade",
                "Agriculture & Premium Commodity Trading",
                "Diplomatic Travel & Security Services",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-2 w-1 h-1 bg-gold shrink-0 rotate-45" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Presence */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-gold font-semibold pb-4 border-b border-gold/20">
              Global Presence
            </h4>
            <ul className="mt-6 space-y-5 text-sm text-white/70">
              {[
                { label: "Sahiwal", country: "Pakistan" },
                { label: "Casablanca", country: "Morocco" },
                { label: "Stockton-on-Tees", country: "United Kingdom" },
              ].map((p) => (
                <li key={p.label} className="flex gap-3">
                  <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                  <div className="leading-snug">
                    <div className="text-white">{p.label}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mt-0.5">
                      {p.country}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-6 border-t border-white/10 space-y-3">
              <a
                href="tel:+923006920282"
                className="group flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
              >
                <Phone size={14} className="text-gold" />
                <span>+92 300 6920282</span>
              </a>
              <a
                href="mailto:info@mohsanandco.com"
                className="group flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
              >
                <Mail size={14} className="text-gold" />
                <span>info@mohsanandco.com</span>
                <ArrowUpRight size={12} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-navy-deep/80">
        <div className="container-pro py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Mohsan & Co Intl (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/40">
            <span className="w-6 h-px bg-gold/40" />
            <span>Cultivating Trust · Connecting Global Commerce</span>
            <span className="w-6 h-px bg-gold/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
