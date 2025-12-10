"use client"

import Link from "next/link"
import { ArrowRight, Shield, Users, Globe, CheckCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/modern-office-building-cityscape-professional-dark.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-soft"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
              <Shield size={16} className="text-accent" />
              <span className="text-sm font-medium text-white">Юридическая защита ваших интересов</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 animate-fade-in-up text-balance">
              Высокий стандарт защиты <span className="text-accent">финансовых интересов</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed animate-fade-in-up stagger-2"
              style={{ opacity: 0 }}
            >
              Юридическая помощь в возврате активов без судебных разбирательств. Работаем с клиентами по всему миру.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-10 animate-fade-in-up stagger-3" style={{ opacity: 0 }}>
              {["Бесплатная первичная консультация", "Работа без предоплаты", "Конфиденциальность гарантирована"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-accent flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ),
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4" style={{ opacity: 0 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold shadow-lg btn-glow transition-all duration-300"
              >
                Получить консультацию
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
              >
                Узнать больше
              </Link>
            </div>
          </div>

          {/* Right content - Trust Block */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 lg:p-10 animate-scale-in stagger-5"
            style={{ opacity: 0 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">Доверяют нам</h2>
            <p className="text-4xl sm:text-5xl font-bold text-accent mb-8 text-center">13000+ клиентов</p>
            <p className="text-white/70 text-center mb-10">по всему миру</p>

            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-3">
                  <Users size={22} className="text-accent" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-white">13K+</p>
                <p className="text-white/60 text-sm mt-1">Клиентов</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-3">
                  <Globe size={22} className="text-accent" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-white">50+</p>
                <p className="text-white/60 text-sm mt-1">Стран</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-3">
                  <Shield size={22} className="text-accent" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-white">90%</p>
                <p className="text-white/60 text-sm mt-1">По рекомендации</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
