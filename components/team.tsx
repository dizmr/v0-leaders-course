"use client"

import { Users, Award, Globe, Zap } from "lucide-react"

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Наша команда</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4">БУДЕМ ЗНАКОМЫ</h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Leader's Course — это команда юридических экспертов, специализирующихся на возврате активов, потерянных в
              результате действий недобросовестных брокеров, финансовых платформ и псевдоинвестиций.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Мы объединили опыт юристов, финансовых аналитиков и специалистов по международному праву, чтобы защищать
              интересы тех, кто оказался в трудной ситуации. Наши специалисты имеют практику работы с криптовалютными
              платформами, банками, регуляторами, а также владеют инструментами для взаимодействия с блокчейн-системами
              и офшорными структурами.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Award,
                title: "Индивидуальный подход",
                desc: "рассматриваем каждую ситуацию отдельно и ищем максимально эффективный путь решения",
              },
              {
                icon: Globe,
                title: "Юридическая точность",
                desc: "работаем строго в рамках действующего законодательства",
              },
              {
                icon: Zap,
                title: "Международный опыт",
                desc: "успешно сопровождаем клиентов из Европы, СНГ, Ближнего Востока и Азии",
              },
              { icon: Users, title: "24/7 Удалённая работа", desc: "умеем вести дела на удалёнке от начала до конца" },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-4 rounded-md bg-background border border-border hover:border-accent transition-all soft-shadow-hover"
                >
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}:</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-accent mb-2">90%+</div>
            <p className="text-sm text-muted-foreground">90% клиентов приходят к нам по рекомендации</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Мы сопровождали запуск более 50 международных проектов</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-accent mb-2">4 дня</div>
            <p className="text-sm text-muted-foreground">Наш самый быстрый кейс — выигранное дело за 4 дня</p>
          </div>
        </div>
      </div>
    </section>
  )
}
