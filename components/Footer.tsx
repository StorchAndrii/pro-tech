"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Колонка 1: Логотип та опис */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/name.png"
                alt="PRO-TECH"
                className="h-8 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Професійний автосервіс повного циклу. Діагностика, обслуговування, капітальний ремонт та тюнінг автомобілів.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Працюємо щодня
              </span>
            </div>
          </div>

          {/* Колонка 2: Швидка навігація */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Навігація
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#services" className="hover:text-red-500 transition-colors">
                  Послуги сервісу
                </Link>
              </li>
              <li>
                <Link href="#advantages" className="hover:text-red-500 transition-colors">
                  Чому PRO-TECH
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-red-500 transition-colors">
                  Контакти та запис
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Послуги */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Популярні послуги
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>Ремонт ходової частини</li>
              <li>Комп'ютерна діагностика</li>
              <li>Ремонт двигунів та КПП</li>
              <li>Заправка кондиціонерів</li>
              <li>Чіп-тюнінг та вихлоп</li>
            </ul>
          </div>

          {/* Колонка 4: Контакти */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Контакти
            </h4>
            <div className="space-y-3 text-xs">
              <p>
                <span className="block text-neutral-500 text-[11px]">Телефон для запису:</span>
                <a href="tel:+380678387111" className="text-white font-semibold hover:text-red-400">
                  (067) 838-71-11
                </a>
              </p>
              <p>
                <span className="block text-neutral-500 text-[11px]">Додатковий телефон:</span>
                <a href="tel:+380979961909" className="text-white font-semibold hover:text-red-400">
                  (097) 996-19-09
                </a>
              </p>
              <p className="text-neutral-400 text-xs pt-1 flex items-center gap-1.5">
                <span className="text-red-500">📍</span> м. Кривий Ріг, вул. Володимира Великого, 69
              </p>
            </div>
          </div>
        </div>

        {/* Копірайт */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {currentYear} PRO-TECH Автосервіс. Всі права захищено.</p>
          <p className="flex items-center gap-2">
            Якість • Надійність • Швидкість
          </p>
        </div>
      </div>
    </footer>
  );
}
