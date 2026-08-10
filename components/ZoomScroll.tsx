"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroServicesGrid from "./HeroServicesGrid";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.6,
          markers: false,
        },
      });

      // 1. Плавна поява автомобіля
      tl.fromTo(
        ".hero-bg",
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, ease: "power1.inOut", duration: 0.35 },
        0
      )
        // 2. Проліт крізь трафарет логотипу
        .to(
          ".zoom-image",
          {
            scale: 25,
            opacity: 0,
            transformOrigin: "50% 50%",
            ease: "power2.inOut",
            duration: 1,
          },
          0
        )
        // 3. Верхній логотип та бейдж з'являються зверху
        .fromTo(
          ".hero-top-badge",
          { opacity: 0, y: -25 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.45 },
          0.3
        )
        // 4. Лівий блок карток елегантно виїжджає зліва
        .fromTo(
          ".hero-left-col",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, ease: "power2.out", duration: 0.45 },
          0.35
        )
        // 5. Правий блок карток елегантно виїжджає справа
        .fromTo(
          ".hero-right-col",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, ease: "power2.out", duration: 0.45 },
          0.35
        )
        // 6. Нижня плашка контактів з'являється знизу
        .fromTo(
          ".hero-bottom-bar",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.4 },
          0.4
        );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden select-none"
    >
      {/* Фоновий автомобіль */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg-main.png"
          alt="PRO-TECH"
          className="hero-bg object-cover w-full h-full opacity-0 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* Контент першого екрана */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-3 sm:pb-6 flex flex-col justify-start">
        {/* Верхній заголовок-бейдж з логотипом та адресою */}
        <div className="hero-top-badge opacity-0 text-center flex flex-col items-center gap-1">
          <img
            src="/images/logoBg.png"
            alt="PRO-TECH"
            className="h-24 sm:h-34 w-auto object-contain drop-shadow-[0_0_20px_rgba(229,9,20,0.5)] hover:scale-105 transition-transform duration-300"
          />
          <span className="inline-flex items-center gap-2 px-3 py-0.5 sm:px-4 sm:py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse" />
            Автосервіс PRO-TECH • Професійне обслуговування
          </span>
          <p className="text-neutral-300 text-[11px] sm:text-xs font-medium tracking-wide flex items-center gap-1.5 drop-shadow-md">
            <span className="text-red-500">📍</span> Кривий Ріг • вул. Володимира Великого 69
          </p>
        </div>

        <HeroServicesGrid />

        {/* Нижня плашка із контактами з visitka.jpg */}
        <div className="hero-bottom-bar opacity-0 mt-auto p-2.5 sm:p-3.5 rounded-xl bg-neutral-950/90 border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-4 text-xs">
              <span className="text-neutral-400 font-medium hidden sm:inline">Швидкий запис:</span>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <a
                  href="tel:+380678387111"
                  className="font-bold text-white hover:text-red-400 transition-colors text-xs sm:text-sm whitespace-nowrap"
                >
                  📞 (067) 838-71-11
                </a>
                <a
                  href="tel:+380979961909"
                  className="font-bold text-neutral-300 hover:text-red-400 transition-colors text-xs sm:text-sm whitespace-nowrap"
                >
                  📞 (097) 996-19-09
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="#services"
                className="flex-1 sm:flex-none text-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap"
              >
                Всі послуги
              </a>
              <a
                href="#contacts"
                className="flex-1 sm:flex-none text-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all whitespace-nowrap"
              >
                Записатись онлайн
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Верхній шар-трафарет логотипу */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-20">
        <img
          src="/images/mask-pt-portal.png"
          alt="PRO-TECH Portal"
          className="zoom-image w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
