import React from "react";

export interface HeroServiceItem {
  id: string;
  title: string;
  icon: string;
}

interface HeroServiceColumnProps {
  items: HeroServiceItem[];
  className?: string;
}

export default function HeroServiceColumn({
  items,
  className = "",
}: HeroServiceColumnProps) {
  return (
    <div className={`space-y-2 sm:space-y-3 ${className}`}>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group block p-2 sm:p-3.5 rounded-xl bg-black/60 sm:bg-black/75 hover:bg-black/95 backdrop-blur-xs border border-white/10 hover:border-red-500/60 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl cursor-pointer sm:max-w-xs"
        >
          <div className="flex items-center justify-between gap-1.5 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="text-base sm:text-xl shrink-0 p-1 sm:p-1.5 rounded-lg bg-red-600/20 border border-red-500/30 group-hover:scale-110 group-hover:bg-red-600/30 transition-all duration-300">
                {item.icon}
              </span>
              <h3 className="text-white font-bold text-[11px] sm:text-sm tracking-tight sm:tracking-wide group-hover:text-red-400 transition-colors truncate">
                {item.title}
              </h3>
            </div>
            <span className="text-neutral-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm font-bold shrink-0">
              &rarr;
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
