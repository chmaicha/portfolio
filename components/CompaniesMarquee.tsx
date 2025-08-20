"use client";
import Image from "next/image";

type Company = { name: string; src: string; href?: string };

export default function CompaniesMarquee({
  items,
  height = 80,           // card height (px)
  gap = 32,              // space between cards (px)
  speed = 28,            // seconds per full cycle (slower = bigger)
  direction = "rtl",     // "rtl" or "ltr"
}: {
  items: Company[];
  height?: number;
  gap?: number;
  speed?: number;
  direction?: "rtl" | "ltr";
}) {
  // style helpers
  const styleVars = {
    ["--gap" as any]: `${gap}px`,
    ["--speed" as any]: `${speed}s`,
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-violet-800/40 bg-black/30">
      {/* soft masks at edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0214] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0214] to-transparent" />

      {/* Track (width = content * 2). Negative horizontal margin removes outer gap → seamless */}
      <div
        className={`flex w-max select-none -mx-[var(--gap)] ${
          direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"
        }`}
        style={styleVars as React.CSSProperties}
      >
        {/* We render the row twice for the loop */}
        {[0, 1].map((half) => (
          <div key={half} className="flex px-[var(--gap)]">
            {items.map((p) => {
              const Card = (
                <div
                  className="flex shrink-0 items-center justify-center rounded-xl border border-violet-800/40 bg-white p-3 shadow-sm"
                  style={{ height, width: Math.round(height * 2.2) }}
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={Math.round(height * 1.8)}
                    height={Math.round(height * 0.6)}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              );
              return p.href ? (
                <a key={`${half}-${p.name}`} href={p.href} target="_blank" rel="noreferrer"
                   className="shrink-0 mr-[var(--gap)] last:mr-0">
                  {Card}
                </a>
              ) : (
                <div key={`${half}-${p.name}`} className="shrink-0 mr-[var(--gap)] last:mr-0">
                  {Card}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Right → Left (standard marquee) */
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl var(--speed) linear infinite;
        }

        /* Left → Right (if you prefer) */
        @keyframes marquee-ltr {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr var(--speed) linear infinite;
        }

        /* Pause on hover */
        .animate-marquee-rtl:hover,
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-rtl,
          .animate-marquee-ltr {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </div>
  );
}
