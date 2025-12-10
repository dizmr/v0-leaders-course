"use client"

import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const benefits = [
  "Индивидуальный подход к каждому клиенту",
  "Работа строго в рамках законодательства",
  "Международный опыт и экспертиза",
  "Удалённая работа от начала до конца",
]

const helpFor = [
  "Пострадавшим от брокеров-мошенников и офшорных схем",
  "Жертвам крипто-пирамид (MTI, QubitTech, Finiko, Auvoria Prime)",
  "Людям, обманутым псевдоюристами при возврате денег",
  "Пользователям Revolut, Wise, Binance и других платформ",
]

export default function About() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/modern-office-building-cityscape-professional-dark.jpg')" }}
      />
      {/* Тёмный оверлей для читаемости */}
      <div className="absolute inset-0 bg-background/85" />
      {/* Градиентные акценты */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-sm mb-6">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium text-accent">О компании</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Мы работаем на стыке права, технологий и финансов
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Наша команда сопровождает проекты, связанные с международными платёжными системами, брокерской
              деятельностью и цифровыми активами. Мы понимаем, как устроен глобальный финансовый ландшафт.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium shadow-soft hover:shadow-soft-lg btn-glow transition-all duration-300"
            >
              Подробнее о нас
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {/* Benefits Card */}
            <div className="p-6 lg:p-8 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-6">Почему нам доверяют</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help For Card */}
            <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-6">Кому мы помогаем</h3>
              <ul className="space-y-3">
                {helpFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-accent font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
