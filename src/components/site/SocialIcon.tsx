import type { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  variant: "light" | "dark";
  size?: "sm" | "md";
  children: ReactNode;
}

export function SocialIcon({ href, label, variant, size = "md", children }: SocialIconProps) {
  const isLight = variant === "light";
  const isSm = size === "sm";

  const containerSize = isSm ? "w-7 h-7" : "w-9 h-9";
  const iconSize = isSm ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        ${containerSize}
        relative
        inline-flex items-center justify-center
        rounded-full
        backdrop-blur-md
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-0.5 hover:scale-110
        ${isLight
          ? "bg-navy text-white border border-gold/50 shadow-[0_2px_10px_rgba(8,23,45,0.18)] hover:bg-gold hover:text-white hover:border-gold hover:shadow-[0_8px_24px_rgba(220,158,41,0.35)]"
          : "bg-white/10 border border-gold/25 text-white/90 hover:bg-gold hover:text-white hover:border-gold hover:shadow-[0_8px_24px_rgba(220,158,41,0.35)]"
        }
      `}
    >
      <span className={`${iconSize} transition-colors duration-500`}>
        {children}
      </span>
    </a>
  );
}
