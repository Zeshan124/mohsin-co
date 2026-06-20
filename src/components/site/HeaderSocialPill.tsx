import type { ReactNode } from "react";

interface HeaderSocialPillProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function HeaderSocialPill({ href, label, children }: HeaderSocialPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group
        inline-flex items-center justify-center
        h-7 w-7
        rounded-full
        bg-navy
        border border-gold
        text-gold
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        shadow-[0_2px_8px_rgba(8,23,45,0.2)]
        hover:-translate-y-0.5 hover:bg-gold hover:text-navy
        hover:shadow-[0_6px_20px_rgba(220,158,41,0.35),0_0_12px_rgba(220,158,41,0.25)]
        hover:border-navy
      "
    >
      <span className="w-3.5 h-3.5 transition-colors duration-500">
        {children}
      </span>
    </a>
  );
}
