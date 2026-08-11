import React from "react";
import HeroServiceColumn, { HeroServiceItem } from "./HeroServiceColumn";

export const leftServices: HeroServiceItem[] = [
  {
    id: "suspension",
    title: "Ремонт ходової",
    icon: "🛠️",
  },
  {
    id: "diagnostics",
    title: "Комп'ютерна діагностика",
    icon: "💻",
  },
  {
    id: "engine",
    title: "Ремонт двигунів та КПП",
    icon: "⚙️",
  },
];

export const rightServices: HeroServiceItem[] = [
  {
    id: "ac",
    title: "Автокондиціонери",
    icon: "❄️",
  },
  {
    id: "tuning",
    title: "Тюнінг та стайлінг",
    icon: "🏁",
  },
  {
    id: "parts",
    title: "Автозапчастини",
    icon: "📦",
  },
];

interface HeroServicesGridProps {
  className?: string;
}

export default function HeroServicesGrid({
  className = "",
}: HeroServicesGridProps) {
  return (
    <div
      className={`grid grid-cols-2 sm:flex sm:flex-row sm:justify-between gap-2 sm:gap-4 mt-3 sm:mt-6 min-h-0 ${className}`}
    >
      <HeroServiceColumn
        items={leftServices}
        className="hero-left-col opacity-0 w-full sm:w-auto"
      />
      <HeroServiceColumn
        items={rightServices}
        className="hero-right-col opacity-0 w-full sm:w-auto"
      />
    </div>
  );
}
