"use client";
import React from "react";

const servicesList = [
  {
    id: "suspension",
    title: "Ремонт ходової частини",
    subtitle: "Діагностика та усунення стуків, люфтів, вібрацій",
    description:
      "Комплексна перевірка підвіски на стенді, заміна амортизаторів, сайлентблоків, кульових опор, рульових тяг та наконечників.",
    icon: "🛠️",
    tags: ["Амортизатори", "Сайлентблоки", "Рульове управління"],
  },
  {
    id: "diagnostics",
    title: "Комп'ютерна діагностика",
    subtitle: "Дилерські сканери для всіх марок авто",
    description:
      "Глибоке зчитування кодів несправностей усіх блоків управління, скидання сервісних інтервалів, калібрування датчиків та адаптація.",
    icon: "💻",
    tags: ["Сканування ЕБУ", "Адаптація", "Помилки"],
  },
  {
    id: "engine",
    title: "Ремонт двигунів та КПП",
    subtitle: "Професійне відновлення серця авто",
    description:
      "Від регулярного ТО і заміни ременів/ланцюгів ГРМ до повного капітального ремонту двигунів та коробок передач з гарантією.",
    icon: "⚙️",
    tags: ["Капремонт ДВЗ", "Заміна ГРМ", "МКПП/АКПП"],
  },
  {
    id: "ac",
    title: "Ремонт автокондиціонерів",
    subtitle: "Клімат-контроль та заправка фреоном",
    description:
      "Вакуумація та точна заправка фреоном, пошук витоків ультрафіолетом, пайка та промивка радіаторів, антибактеріальна обробка салону.",
    icon: "❄️",
    tags: ["Заправка фреону", "Пайка радіаторів", "Антисептик"],
  },
  {
    id: "tuning",
    title: "Тюнінг та стайлінг",
    subtitle: "Розкриття потенціалу та індивідуальності",
    description:
      "Чіп-тюнінг двигуна (Stage 1 / Stage 2), кастомні вихлопні системи, покращення гальмівної системи та спортивної підвіски.",
    icon: "🏁",
    tags: ["Чіп-тюнінг", "Вихлопні системи", "Гальма"],
  },
  {
    id: "parts",
    title: "Автозапчастини в наявності",
    subtitle: "Підбір оригіналів та якісних замінників",
    description:
      "Власний склад популярних витратних матеріалів та запчастин, швидка доставка рідкісних комплектуючих під замовлення від перевірених постачальників.",
    icon: "📦",
    tags: ["Власний склад", "Оригінали", "Гарантія"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Заголовок секції */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs uppercase tracking-widest font-bold">
          Повний спектр робіт
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Послуги автосервісу <span className="text-red-600">PRO-TECH</span>
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg">
          Надаємо професійне технічне обслуговування та ремонт автомобілів будь-якої складності з гарантією на виконані роботи.
        </p>
      </div>

      {/* Сітка карток послуг */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {servicesList.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="group relative rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/95 border border-white/10 hover:border-red-500/50 p-6 sm:p-8 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(229,9,20,0.2)] hover:-translate-y-1 scroll-mt-28"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-black/80 border border-red-500/40 text-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(229,9,20,0.25)] group-hover:scale-110 group-hover:border-red-500/80 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-semibold text-neutral-400 mt-1 uppercase tracking-wider">
                {service.subtitle}
              </p>
              <p className="text-neutral-300 text-sm mt-4 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] text-neutral-400 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contacts"
                className="text-xs font-bold text-red-500 hover:text-red-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                Запис &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
