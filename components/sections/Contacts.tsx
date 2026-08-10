"use client";
import React, { useState } from "react";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Діагностика підвіски / ходової");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs uppercase tracking-widest font-bold">
          Зв'язок з нами
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Записатися на автосервіс <span className="text-red-600">PRO-TECH</span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base">
          Залиште контакти або зателефонуйте майстру напряму для безкоштовної консультації та прорахунку вартості робіт.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Ліва колонка: Контактні дані */}
        <div className="lg:col-span-5 space-y-6">
          {/* Картка телефонів */}
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl">
            <h3 className="text-xs uppercase tracking-widest font-bold text-red-500 mb-4">
              Номери телефонів
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+380678387111"
                className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Київстар / Viber / Telegram</p>
                  <p className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    (067) 838-71-11
                  </p>
                </div>
              </a>

              <a
                href="tel:+380979961909"
                className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Додатковий номер</p>
                  <p className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    (097) 996-19-09
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Графік роботи */}
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-red-500">
              Графік роботи
            </h3>
            <div className="space-y-2 text-sm text-neutral-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Пн – Пт:</span>
                <span className="font-semibold text-white">09:00 – 19:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Субота:</span>
                <span className="font-semibold text-white">09:00 – 16:00</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Неділя:</span>
                <span className="font-semibold text-red-400">За домовленістю</span>
              </div>
            </div>
          </div>

          {/* Адреса сервісу */}
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl space-y-2">
            <h3 className="text-xs uppercase tracking-widest font-bold text-red-500">
              Локація сервісу
            </h3>
            <p className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="text-red-500">📍</span> м. Кривий Ріг, вул. Володимира Великого, 69
            </p>
          </div>
        </div>

        {/* Права колонка: Форма онлайн-запису */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-600/20 text-green-500 border border-green-500/30 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Дякуємо за заявку!</h3>
              <p className="text-neutral-400 text-sm max-w-md mx-auto">
                Майстер зв'яжеться з вами за номером <strong className="text-white">{phone}</strong> найближчим часом для підтвердження зручного часу.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Онлайн-запис на сервіс
              </h3>
              <p className="text-xs text-neutral-400">
                Заповніть коротку форму, і ми передзвонимо вам протягом 15 хвилин.
              </p>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Ваше ім'я
                </label>
                <input
                  type="text"
                  required
                  placeholder="Олександр"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-red-500 focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Номер телефону
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+38 (0__) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-red-500 focus:outline-none text-white text-sm placeholder-neutral-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Оберіть необхідну послугу
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-red-500 focus:outline-none text-white text-sm transition-colors"
                >
                  <option className="bg-neutral-900" value="Ремонт ходової частини">Ремонт ходової частини</option>
                  <option className="bg-neutral-900" value="Комп'ютерна діагностика">Комп'ютерна діагностика</option>
                  <option className="bg-neutral-900" value="Ремонт двигунів та КПП">Ремонт двигунів та КПП</option>
                  <option className="bg-neutral-900" value="Ремонт автокондиціонерів">Ремонт автокондиціонерів</option>
                  <option className="bg-neutral-900" value="Тюнінг та доопрацювання">Тюнінг та доопрацювання</option>
                  <option className="bg-neutral-900" value="Підбір та замовлення автозапчастин">Підбір та замовлення автозапчастин</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(229,9,20,0.4)] hover:shadow-[0_0_35px_rgba(229,9,20,0.6)] transition-all duration-300"
              >
                Надіслати заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
