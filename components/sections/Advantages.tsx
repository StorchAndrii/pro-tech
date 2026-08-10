"use client";
import React from "react";

const advantages = [
  {
    number: "01",
    title: "Сучасне обладнання",
    description:
      "Використовуємо високоточні дилерські діагностичні сканери та спеціалізовані інструменти для ремонту вузлів будь-якої складності.",
  },
  {
    number: "02",
    title: "Чесні ціни та гарантія",
    description:
      "Фіксуємо вартість робіт до початку ремонту. Надаємо офіційну гарантію на всі виконані послуги та встановлені деталі.",
  },
  {
    number: "03",
    title: "Власний склад запчастин",
    description:
      "Швидкий підбір та наявність основних розхідників і деталей дозволяє виконати ремонт без зайвих очікувань.",
  },
  {
    number: "04",
    title: "Досвідчені майстри",
    description:
      "Фахівці з багаторічним досвідом роботи з європейськими, японськими та американськими автомобілями.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Ліва текстова колонка */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs uppercase tracking-widest font-bold">
            Чому обирають нас
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Якісний сервіс для вашого авто без компромісів
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            В автосервісі <strong className="text-white">PRO-TECH</strong> ми дбаємо про надійність та безпеку вашого автомобіля. Індивідуальний підхід до кожного клієнта та прозорі умови обслуговування.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-black flex items-center justify-center font-black text-xs text-white">
                PT
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-black flex items-center justify-center font-bold text-xs text-neutral-300">
                10+
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Понад 10 років досвіду</p>
              <p className="text-xs text-neutral-400">Тисячі задоволених водіїв</p>
            </div>
          </div>
        </div>

        {/* Права сітка переваг */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-red-500/40 transition-all duration-300 backdrop-blur-md group hover:-translate-y-1"
            >
              <span className="text-2xl font-black text-red-600/80 group-hover:text-red-500 transition-colors">
                {adv.number}
              </span>
              <h3 className="text-lg font-bold text-white mt-3 group-hover:text-red-400 transition-colors">
                {adv.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
