import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
  Calendar,
  Tag,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/about-boardroom.jpg";
import newsEventsImg from "@/assets/News_and_Events.jpg.asset.json";
import imgGlobal from "@/assets/global-map.jpg";
import imgShipping from "@/assets/gallery-shipping.jpg";
import imgWarehouse from "@/assets/gallery-warehouse.jpg";
import imgProduce from "@/assets/gallery-produce.jpg";
import imgRice from "@/assets/gallery-rice.jpg";
import imgAirport from "@/assets/gallery-airport.jpg";
import imgTech from "@/assets/gallery-tech.jpg";

export const Route = createFileRoute("/news-events")({
  head: () => ({
    meta: [
      { title: "News & Events — Mohsan & Co." },
      {
        name: "description",
        content:
          "Corporate newsroom: announcements, milestones, partnerships, press releases and events from Mohsan & Abdullah Intl (Pvt) Ltd.",
      },
      { property: "og:title", content: "News & Events — Mohsan & Co." },
      {
        property: "og:description",
        content:
          "Latest corporate updates, global trade developments and executive engagements from across our group.",
      },
      { property: "og:url", content: "/news-events" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/news-events" }],
  }),
  component: NewsEventsPage,
});

const categories = [
  "Top Stories of the Week",
  "From DiploTV",
  "Explore Yunnan, Discover South Asia",
  "Pakistan-Focus",
  "Download Catalog",
];

const downloads = [
  { title: "Company Profile", meta: "PDF · Corporate Overview" },
  { title: "Corporate Brochure", meta: "PDF · Group Capabilities" },
  { title: "Business Portfolio", meta: "PDF · Strategic Business Units" },
];

const featureArticle = {
  image: imgGlobal,
  category: "Thediplomaticinsight News",
  title: "Hello WORLD",
  date: "June 12, 2026",
  summary:
    "Hello You could move about freely had it not been for borders and immigration regimes. That's why much of diplomacy focuses on making country-to-country travel easier and secure. Agreements for visa-free travel, e-visa regimes, or sometimes just a quicker visa process are touted as diplomatic achievements, and rightly so. Borders - the curious construct - carry people, ideas, wealth, and cultures in a managed way. But when instability ensues, it can carry spillover consequences as well.\n\nThat's why the US decided to stop all immigration from several developing countries, to curb transnational instability. But stopping the flow of people and wealth could have unintended consequences.\n\nHow the weight of the civilisation shifted from open to closed borders is as much about our increasingly tenuous international order as it is about drifting away from human-centric policies.",
};

const latestNews = [
  {
    image: imgRice,
    category: "Agriculture",
    date: "June 08, 2026",
    title: "Premium basmati exports reach record volumes this quarter",
    excerpt:
      "Sustained demand from premium markets drives a milestone shipment season for our agricultural commodities division.",
  },
  {
    image: imgTech,
    category: "Technology & Electronics",
    date: "June 02, 2026",
    title: "New regional hub strengthens electronics trade pipeline",
    excerpt:
      "A new operational hub deepens supplier relationships and accelerates time-to-market for enterprise clients.",
  },
  {
    image: imgAirport,
    category: "Diplomatic Services",
    date: "May 25, 2026",
    title: "Expanded diplomatic travel desk for mission-critical journeys",
    excerpt:
      "Dedicated protocol officers now support high-priority diplomatic and corporate travel across key corridors.",
  },
  {
    image: imgShipping,
    category: "Global Trade",
    title: "Strategic logistics upgrade across the Middle East corridor",
    date: "May 18, 2026",
    excerpt:
      "Capacity additions and consolidated freight lanes deliver more reliable transit for high-value cargo.",
  },
  {
    image: imgProduce,
    category: "Agriculture",
    date: "May 09, 2026",
    title: "Long-term supply partnerships secured for specialty produce",
    excerpt:
      "Multi-year commitments stabilize sourcing and elevate quality assurance for international retail partners.",
  },
  {
    image: imgWarehouse,
    category: "Corporate Updates",
    date: "April 30, 2026",
    title: "Integrated warehousing platform goes live across three regions",
    excerpt:
      "A unified inventory and fulfillment platform brings transparency and speed to our cross-border operations.",
  },
];


function NewsEventsPage() {
  const [activeCat, setActiveCat] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="News & Events"
        subtitle="Corporate announcements, global developments, partnerships and executive engagements from across our group."
        image={heroImg}
      />

      <section className="py-20 bg-paper">
        <div className="container-pro">
          <div className="grid lg:grid-cols-[320px_1fr] gap-12">
            {/* LEFT SIDEBAR */}
            <aside className="space-y-10">
              {/* Categories */}
              <div className="bg-white border border-line">
                <div className="px-6 py-5 border-b border-line bg-navy">
                  <h3 className="font-display text-lg text-white tracking-wide">
                    NEWS WORLD
                  </h3>
                  <div className="mt-2 h-[2px] w-10 bg-gold" />
                </div>
                <ul>
                  {categories.map((c) => {
                    const active = activeCat === c;
                    return (
                      <li key={c}>
                        <button
                          onClick={() => setActiveCat(active ? null : c)}
                          className={`group w-full flex items-center justify-between px-6 py-4 border-b border-line last:border-b-0 text-left transition-colors ${
                            active
                              ? "bg-navy/[0.03] text-gold-deep"
                              : "text-navy hover:bg-navy/[0.03] hover:text-gold-deep"
                          }`}
                        >
                          <span className="flex items-center gap-3 text-sm font-medium">
                            <span
                              className={`h-[1px] w-5 transition-all ${
                                active
                                  ? "bg-gold w-8"
                                  : "bg-navy/30 group-hover:bg-gold group-hover:w-8"
                              }`}
                            />
                            {c}
                          </span>
                          <ChevronRight
                            size={14}
                            className="text-navy/40 group-hover:text-gold transition-colors"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Downloads */}
              <div className="bg-white border border-line">
                <div className="px-6 py-5 border-b border-line bg-navy">
                  <h3 className="font-display text-lg text-white tracking-wide">
                    Downloads
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
              <div className="relative overflow-hidden bg-navy text-white p-8 border-t-[3px] border-gold">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gold/10 blur-2xl" />
                <span className="eyebrow text-gold">Get In Touch</span>
                <h3 className="mt-4 font-display text-2xl leading-tight">
                  Have a Question?
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  For media inquiries and corporate announcements, contact our
                  team.
                </p>
                <div className="mt-6 space-y-4">
                  <a
                    href="tel:+923006920282"
                    className="flex items-start gap-3 group"
                  >
                    <span className="w-9 h-9 flex items-center justify-center border border-white/20 text-gold group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-colors">
                      <Phone size={14} />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.24em] text-white/50">
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
                    <span className="w-9 h-9 flex items-center justify-center border border-white/20 text-gold group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-colors">
                      <Mail size={14} />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.24em] text-white/50">
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
            <div className="space-y-20">
              {/* Featured image */}
              <div>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="eyebrow text-gold-deep">Featured</span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl text-navy leading-tight">
                      Top Stories
                    </h2>
                  </div>
                  <div className="hidden md:block h-[1px] flex-1 ml-8 bg-line" />
                </div>
                <div className="relative overflow-hidden border border-line bg-paper shadow-[0_30px_80px_-40px_rgba(8,23,45,0.35)]">
                  <img
                    src={newsEventsImg.url}
                    alt="News and Events"
                    className="block w-full h-auto object-contain"
                  />
                </div>

              </div>

              {/* Featured article */}
              <article className="bg-white border border-line shadow-[0_30px_80px_-50px_rgba(8,23,45,0.3)]">
                <div className="p-10 md:p-12">
                  <span className="eyebrow text-gold-deep">
                    {featureArticle.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl text-navy leading-tight">
                    {featureArticle.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-navy/55">
                    <span className="flex items-center gap-2">
                      <Calendar size={13} className="text-gold-deep" />
                      {featureArticle.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Tag size={13} className="text-gold-deep" />
                      Editorial
                    </span>
                  </div>
                  {featureArticle.summary.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="mt-6 text-navy/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.24em] font-semibold text-navy hover:text-gold-deep group w-fit"
                  >
                    Read More
                    <span className="w-10 h-[1px] bg-navy group-hover:bg-gold transition-colors" />
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </article>

            </div>
          </div>

          {/* Latest news grid — full width */}
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="eyebrow text-gold-deep">Newsroom</span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl text-navy leading-tight">
                  Latest News
                </h2>
              </div>
              <div className="hidden md:block h-[1px] flex-1 ml-8 bg-line" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((n) => (
                <article
                  key={n.title}
                  className="group bg-white border border-line flex flex-col hover:shadow-[0_30px_60px_-30px_rgba(8,23,45,0.35)] transition-shadow"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={n.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.24em] font-semibold bg-white text-navy">
                        {n.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-navy/55">
                      <Calendar size={12} className="text-gold-deep" />
                      {n.date}
                    </div>
                    <h3 className="mt-4 font-display text-lg text-navy leading-snug group-hover:text-gold-deep transition-colors">
                      {n.title}
                    </h3>
                    <p className="mt-3 text-sm text-navy/65 leading-relaxed flex-1">
                      {n.excerpt}
                    </p>
                    <a
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-navy group-hover:text-gold-deep"
                    >
                      Read More
                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
