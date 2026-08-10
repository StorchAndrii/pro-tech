"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-auto flex items-center">
            <img
              src="/images/name.png"
              alt="Автосервіс PRO-TECH"
              className="h-8 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Навігація для десктопу */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <Link
            href="#services"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Послуги
          </Link>
          <Link
            href="#advantages"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Переваги
          </Link>
          <Link
            href="#contacts"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Контакти
          </Link>
        </nav>

        {/* Телефони та кнопка запису */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex flex-col text-right">
            <a
              href="tel:+380678387111"
              className="text-xs font-semibold text-neutral-200 hover:text-red-500 transition-colors"
            >
              (067) 838-71-11
            </a>
            <a
              href="tel:+380979961909"
              className="text-xs font-semibold text-neutral-400 hover:text-red-500 transition-colors"
            >
              (097) 996-19-09
            </a>
          </div>

          <a
            href="#contacts"
            className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)]"
          >
            <span className="relative z-10">Записатись</span>
          </a>
        </div>

        {/* Мобільна кнопка гамбургера */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5"
          aria-label="Меню"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Мобільне меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-red-500"
          >
            Послуги
          </Link>
          <Link
            href="#advantages"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-red-500"
          >
            Переваги
          </Link>
          <Link
            href="#contacts"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-red-500"
          >
            Контакти
          </Link>
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href="tel:+380678387111"
              className="block text-sm font-semibold text-white"
            >
              📞 (067) 838-71-11
            </a>
            <a
              href="tel:+380979961909"
              className="block text-sm font-semibold text-neutral-300"
            >
              📞 (097) 996-19-09
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 rounded-lg bg-red-600 text-white font-bold text-sm uppercase tracking-wider"
            >
              Записатися на діагностику
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
