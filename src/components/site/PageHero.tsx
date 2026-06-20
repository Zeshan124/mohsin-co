import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative h-[72vh] min-h-[560px] w-full overflow-hidden">
      {image ? (
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-navy" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy/95" />
      <div className="relative h-full container-pro flex flex-col justify-end pb-24 pt-48 md:pt-56">
        <div className="rise">
          <span className="eyebrow text-gold">{eyebrow}</span>
          <h1 className="mt-6 text-5xl md:text-6xl text-white max-w-4xl leading-[1.05]">{title}</h1>
          {subtitle ? <p className="mt-6 text-lg text-white/80 max-w-2xl">{subtitle}</p> : null}
          <nav className="mt-10 text-xs uppercase tracking-[0.2em] text-white/60 flex items-center gap-2">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gold">{eyebrow}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
