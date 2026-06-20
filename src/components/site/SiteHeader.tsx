import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight, FileText, Images, Newspaper, Briefcase, ChevronDown, CreditCard } from "lucide-react";
import { HeaderSocialPill } from "./HeaderSocialPill";
import logoAsset from "@/assets/mohsan-logo.asset.json";

const BUSINESS_UNITS = [
  { to: "/business-units", label: "Overview", desc: "Business Units Overview" },
  { to: "/sbu/global-technology-trade", label: "SBU 1: IT & General Trade", desc: "Global Technology & Trade" },
  { to: "/sbu/agriculture-commodities", label: "SBU 2: Agriculture Supply", desc: "Agriculture & Commodities" },
  { to: "/sbu/diplomatic-travel-security", label: "SBU 3: Diplomatic Services", desc: "Diplomatic Travel & Security" },
] as const;

type AboutItem = { to?: string; label: string; desc: string };
const ABOUT_ITEMS: AboutItem[] = [
  { to: "/about", label: "Overview", desc: "About Mohsan & Co." },
  { to: "/ceo-message", label: "CEO Message", desc: "Message from the Chief Executive Officer" },
  { to: "/coo-message", label: "COO Message", desc: "Message from the Chief Operating Officer" },
  { to: "/mission-vision-goal", label: "Mission Vision Goal", desc: "Our guiding principles" },
  { to: "/core-values", label: "Our Core Values", desc: "Principles that define us" },
];

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us", dropdown: "about" as const },
  { to: "/business-units", label: "Business Units", dropdown: "bu" as const },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact Us" },
] as const;

const TOP_LINKS = [
  { to: "/news-events", label: "News & Events", Icon: Newspaper },
  { to: "/gallery", label: "Gallery", Icon: Images },
  { to: "/careers", label: "Careers", Icon: Briefcase },
  { to: "/payment", label: "Payment", Icon: CreditCard },
] as const;

const COMPANY_PROFILE_PDF = "/__l5e/assets-v1/ea00b2d6-f098-4767-8fc7-37d2fda3e686/Company_Profile_Mohsan_&_CO.pdf";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"bu" | "about" | null>(null);
  const [mobileBuOpen, setMobileBuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const { location } = useRouterState();
  const ddTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileBuOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  const openDd = (key: "bu" | "about") => {
    if (ddTimer.current) clearTimeout(ddTimer.current);
    setActiveDropdown(key);
  };
  const closeDd = () => {
    if (ddTimer.current) clearTimeout(ddTimer.current);
    ddTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const buActive = location.pathname.startsWith("/business-units") || location.pathname.startsWith("/sbu");
  const aboutActive = ["/about", "/ceo-message", "/coo-message", "/mission-vision-goal", "/core-values"].includes(location.pathname);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* TOP BAR */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-line/70 transition-all duration-500">
        <div className="container-pro flex items-center justify-between h-9 text-[10.5px] uppercase tracking-[0.26em] font-semibold">
          <div className="flex items-center gap-5 md:gap-7">
            {TOP_LINKS.map(({ to, label, Icon }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`group inline-flex items-center gap-2 transition-colors ${
                    active ? "text-gold" : "text-navy/75 hover:text-gold-deep"
                  }`}
                >
                  <Icon size={12} className="text-gold" />
                  <span className="hidden sm:inline">{label}</span>
                  <span
                    className={`h-px bg-gold transition-all duration-500 ${
                      active ? "w-6" : "w-0 group-hover:w-5"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <HeaderSocialPill
              href="https://www.facebook.com/mohsaraza786"
              label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </HeaderSocialPill>
            <HeaderSocialPill
              href="https://www.linkedin.com/in/mohsanimpexp"
              label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </HeaderSocialPill>
          </div>
          <div className="md:hidden text-[9.5px] text-navy/55">Since 2007</div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-line shadow-[0_8px_40px_-20px_rgba(8,23,45,0.18)] transition-all duration-500">
        <div className="container-pro flex items-center justify-between gap-6 h-24">
          <Link to="/" className="flex items-center group shrink-0 gap-3">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full transition-all duration-500 bg-paper/0 group-hover:bg-gold/5" />
              <img
                src={logoAsset.url}
                alt="Mohsan & Co."
                className="relative h-[64px] w-[64px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-baseline font-display text-xl md:text-2xl tracking-tight">
              <span className="text-navy">Mohsan</span>
              <span className="text-gold mx-0.5">&</span>
              <span className="text-navy">Co</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              if ("dropdown" in item && item.dropdown) {
                const ddKey = item.dropdown;
                const isOpen = activeDropdown === ddKey;
                const isActive = ddKey === "bu" ? buActive : aboutActive;
                const items = ddKey === "bu"
                  ? BUSINESS_UNITS.map((b) => ({ to: b.to, label: b.label, desc: b.desc }))
                  : ABOUT_ITEMS;
                return (
                  <div
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => openDd(ddKey)}
                    onMouseLeave={closeDd}
                  >
                    <Link
                      to={item.to}
                      className={`group relative px-4 xl:px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] whitespace-nowrap transition-colors inline-flex items-center gap-1.5 ${
                        isActive ? "text-gold-deep" : "text-navy/85 hover:text-navy"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      <span
                        className={`absolute left-4 right-7 xl:left-5 xl:right-8 bottom-2 h-px origin-left bg-gold-deep transition-transform duration-500 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[340px] transition-all duration-300 ${
                        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="bg-white border border-line shadow-[0_30px_60px_-15px_rgba(8,23,45,0.25)] overflow-hidden">
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                        <div className="py-2">
                          {items.map((it) => {
                            const itemActive = !!it.to && location.pathname === it.to;
                            const baseClasses = `group/i flex items-start justify-between gap-4 px-5 py-3.5 border-l-2 transition-all duration-300 ${
                              itemActive
                                ? "border-gold bg-gold/5"
                                : it.to
                                  ? "border-transparent hover:border-gold hover:bg-gold/5"
                                  : "border-transparent cursor-default opacity-80"
                            }`;
                            const content = (
                              <>
                                <div className="min-w-0">
                                  <div className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                                    itemActive ? "text-gold-deep" : it.to ? "text-navy group-hover/i:text-gold-deep" : "text-navy/70"
                                  }`}>
                                    {it.label}
                                  </div>
                                  <div className="mt-1 text-[11px] normal-case tracking-normal text-navy/55">
                                    {it.desc}
                                  </div>
                                </div>
                                {it.to ? (
                                  <ArrowRight size={14} className="text-gold opacity-0 group-hover/i:opacity-100 mt-1 transition-opacity" />
                                ) : null}
                              </>
                            );
                            return it.to ? (
                              <Link key={it.label} to={it.to} className={baseClasses}>{content}</Link>
                            ) : (
                              <div key={it.label} className={baseClasses} aria-disabled="true">{content}</div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group relative px-4 xl:px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] whitespace-nowrap transition-colors ${
                    active ? "text-gold-deep" : "text-navy/85 hover:text-navy"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-4 right-4 xl:left-5 xl:right-5 bottom-2 h-px origin-left bg-gold-deep transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_PROFILE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden md:inline-flex whitespace-nowrap px-5 py-2.5 text-[11px]"
            >
              <FileText size={12} />
              <span>Company Profile</span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 border transition-colors text-navy border-line hover:border-gold"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {open && (
        <div className="lg:hidden bg-white border-t border-line shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="container-pro py-6 flex flex-col gap-1">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              if ("dropdown" in item && item.dropdown) {
                const ddKey = item.dropdown;
                const isOpen = ddKey === "bu" ? mobileBuOpen : mobileAboutOpen;
                const setIsOpen = ddKey === "bu" ? setMobileBuOpen : setMobileAboutOpen;
                const isActive = ddKey === "bu" ? buActive : aboutActive;
                const items: Array<{ to?: string; label: string }> = ddKey === "bu"
                  ? BUSINESS_UNITS.map((b) => ({ to: b.to, label: b.label }))
                  : ABOUT_ITEMS.map((a) => ({ to: a.to, label: a.label }));
                return (
                  <div key={item.to} className="border-b border-line">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-full flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.22em] transition-colors ${
                        isActive ? "text-gold-deep" : "text-navy hover:text-gold-deep"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={`text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="pb-3 pl-3 border-l-2 border-gold/30 ml-1 mb-3 flex flex-col">
                        {items.map((it) => {
                          const itemActive = !!it.to && location.pathname === it.to;
                          const cls = `flex items-center justify-between py-3 pl-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                            itemActive ? "text-gold-deep" : it.to ? "text-navy/80 hover:text-gold-deep" : "text-navy/60 cursor-default"
                          }`;
                          return it.to ? (
                            <Link key={it.label} to={it.to} className={cls}>
                              <span>{it.label}</span>
                              <ArrowRight size={12} className="text-gold opacity-60" />
                            </Link>
                          ) : (
                            <div key={it.label} className={cls} aria-disabled="true">
                              <span>{it.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.22em] border-b border-line transition-colors ${
                    active ? "text-gold-deep" : "text-navy hover:text-gold-deep"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={14} className={active ? "text-gold-deep" : "text-gold opacity-60"} />
                </Link>
              );
            })}

            {TOP_LINKS.map(({ to, label, Icon }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.22em] border-b border-line last:border-0 transition-colors ${
                    active ? "text-gold-deep" : "text-navy hover:text-gold-deep"
                  }`}
                >
                  <span className="inline-flex items-center gap-2"><Icon size={14} className="text-gold" /> {label}</span>
                  <ArrowRight size={14} className={active ? "text-gold-deep" : "text-gold opacity-60"} />
                </Link>
              );
            })}

            <a
              href={COMPANY_PROFILE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-navy text-white px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] border-l-[3px] border-r-[3px] border-gold hover:bg-gold hover:text-navy transition-colors"
            >
              <FileText size={14} />
              Company Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
