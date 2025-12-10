"use client"

import Link from "next/link"
import { FileCheck, Database, Handshake, Globe, ArrowRight } from "lucide-react"

const services = [
  {
    icon: FileCheck,
    title: "Анализ брокерской деятельности",
    description: "Полный анализ действий брокера и выявление нарушений в работе с вашими средствами",
  },
  {
    icon: Database,
    title: "Сбор доказательной базы",
    description: "Профессиональный сбор и систематизация всех необходимых доказательств для вашего дела",
  },
  {
    icon: Handshake,
    title: "Досудебное урегулирование",
    description: "Эффективные переговоры и решение конфликтов без судебных разбирательств",
  },
  {
    icon: Globe,
    title: "Международное сопровождение",
    description: "Работа с международными регуляторами и финансовыми органами по всему миру",
  },
]

export default function Services() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/city-skyline-night-professional.jpg')" }}
      />
      {/* Тёмный оверлей для читаемости */}
      <div className="absolute inset-0 bg-background/90" />
      {/* Градиентные акценты */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/25 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/25 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-sm mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium text-accent">Наши услуги</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Юридические решения
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Комплексный подход к защите ваших финансовых интересов
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-soft card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                  <Icon size={26} className="text-primary group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium shadow-soft hover:shadow-soft-lg btn-glow transition-all duration-300"
          >
            Все услуги
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
