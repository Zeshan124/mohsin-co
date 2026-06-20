import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import heroPort from "@/assets/hero-port.jpg";
import g1 from "@/assets/gallery/g1.png.asset.json";
import g2 from "@/assets/gallery/g2.png.asset.json";
import g3 from "@/assets/gallery/g3.png.asset.json";
import g15 from "@/assets/gallery/g15.png.asset.json";
import g16 from "@/assets/gallery/g16.png.asset.json";
import g17 from "@/assets/gallery/g17.png.asset.json";
import g18 from "@/assets/gallery/g18.png.asset.json";
import g19 from "@/assets/gallery/g19.png.asset.json";
import g20 from "@/assets/gallery/g20.png.asset.json";
import g21 from "@/assets/gallery/g21.png.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mohsan & Co." },
      { name: "description", content: "A visual showcase of Mohsan & Co.'s operations, leadership, partnerships, exhibitions, corporate activities, and global business engagements." },
      { property: "og:title", content: "Gallery — Mohsan & Co." },
      { property: "og:description", content: "A visual showcase of Mohsan & Co.'s operations, leadership, partnerships, exhibitions, corporate activities, and global business engagements." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: heroPort },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Category = "All" | "Corporate Meetings" | "Leadership" | "Exhibitions" | "Business Activities";

type Item = { src: string; cat: Exclude<Category, "All">; alt: string };

const ITEMS: Item[] = [
  { src: g3.url,  cat: "Corporate Meetings",  alt: "Diplomatic engagement & delegation meeting" },
  { src: g1.url,  cat: "Corporate Meetings",  alt: "Bilateral meeting at the Embassy of the Philippines" },
  { src: g15.url, cat: "Corporate Meetings",  alt: "Courtesy call at the Embassy of the Kingdom of Morocco" },
  { src: g19.url, cat: "Corporate Meetings",  alt: "Meeting at the Embassy of the Republic of Türkiye" },
  { src: g18.url, cat: "Corporate Meetings",  alt: "Diplomatic meeting at the Embassy of Hungary" },
  { src: g16.url, cat: "Exhibitions",         alt: "Recognition ceremony — international business forum" },
  { src: g17.url, cat: "Exhibitions",         alt: "Interactive session — Exploring Business Opportunities in Poland" },
  { src: g21.url, cat: "Business Activities", alt: "Pakistan–Poland Business Council engagement" },
  { src: g20.url, cat: "Business Activities", alt: "Executive roundtable discussion" },
  { src: g2.url,  cat: "Leadership",          alt: "Leadership visit — Embassy of Pakistan, Rabat" },
];

const CATEGORIES: Category[] = ["All", "Corporate Meetings", "Leadership", "Exhibitions", "Business Activities"];

function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);
  const current = index !== null ? items[index] : null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, prev, next]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of global commerce."
        subtitle="A visual record of partnerships, operations, and engagements that define our work across continents."
        image={heroPort}
      />

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-pro">
          {/* Premium intro */}
          <div className="max-w-3xl mb-14 md:mb-20">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold font-semibold mb-5">Gallery</div>
            <div className="h-px w-16 bg-gold mb-7" />
            <h2 className="font-display text-3xl md:text-5xl text-navy leading-[1.1] tracking-tight">
              A visual showcase of Mohsan &amp; Co.
            </h2>
            <p className="mt-6 text-navy/70 text-base md:text-lg leading-relaxed">
              Operations, leadership, partnerships, exhibitions, corporate activities, and global business engagements — captured across continents.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold border transition-all ${
                  active === c
                    ? "bg-navy text-gold border-navy"
                    : "bg-white text-navy border-line hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Uniform grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {items.map((it, i) => (
              <button
                key={`${it.src}-${i}`}
                onClick={() => setIndex(i)}
                className="group relative block overflow-hidden rounded-xl bg-white border border-line shadow-[0_2px_12px_rgba(10,22,48,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(10,22,48,0.25)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden bg-navy/5">
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-5 pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">{it.cat}</div>
                  <div className="text-white text-sm mt-1.5 leading-snug">{it.alt}</div>
                </div>
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-navy font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {it.cat}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {current && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out animate-in fade-in duration-200"
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 text-white hover:text-gold p-2 transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white hover:text-gold p-2 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white hover:text-gold p-2 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[88vw] object-contain shadow-2xl cursor-default"
          />
          <div className="absolute bottom-6 left-0 right-0 text-center px-6">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">{current.cat}</div>
            <div className="text-white text-sm mt-1.5">{current.alt}</div>
            <div className="text-white/50 text-[11px] mt-2">{(index ?? 0) + 1} / {items.length}</div>
          </div>
        </div>
      )}
    </>
  );
}
