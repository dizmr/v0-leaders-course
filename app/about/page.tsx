import { Check, Award, Globe, Users, Zap } from "lucide-react"
import Link from "next/link"

const stats = [
  { value: "13000+", label: "Клиентов" },
  { value: "50+", label: "Международных проектов" },
  { value: "90%", label: "По рекомендации" },
  { value: "4 дня", label: "Самый быстрый кейс" },
]

const principles = [
  {
    icon: Award,
    title: "Индивидуальный подход",
    description: "Рассматриваем каждую ситуацию отдельно и ищем максимально эффективный путь решения",
  },
  {
    icon: Globe,
    title: "Юридическая точность",
    description: "Работаем строго в рамках действующего законодательства",
  },
  {
    icon: Zap,
    title: "Международный опыт",
    description: "Успешно сопровождаем клиентов из Европы, СНГ, Ближнего Востока и Азии",
  },
  {
    icon: Users,
    title: "Удалённая работа",
    description: "Умеем вести дела на удалёнке от начала до конца",
  },
]

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">О компании</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы работаем на стыке права, технологий и финансов
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-foreground leading-relaxed">
              <strong>Leader's Course</strong> — это команда юридических экспертов, специализирующихся на возврате
              активов, потерянных в результате действий недобросовестных брокеров, финансовых платформ и
              псевдоинвестиций.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша команда сопровождает проекты, связанные с международными платёжными системами, брокерской
              деятельностью и цифровыми активами. Мы понимаем, как устроен глобальный финансовый ландшафт, и умеем
              адаптироваться под требования быстро меняющейся среды.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Юристы компании помогают запускать и легализовывать бизнес в сфере криптовалют, DeFi и Web3 — от первичной
              консультации до полного сопровождения проекта под ключ. Мы оформляем документы, подбираем юрисдикции,
              взаимодействуем с банками, регулирующими органами и комплаенс-службами.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы объединили опыт юристов, финансовых аналитиков и специалистов по международному праву, чтобы защищать
              интересы тех, кто оказался в трудной ситуации.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Наши принципы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div key={index} className="p-6 lg:p-8 rounded-xl bg-card border border-border card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">{principle.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">Кому мы помогаем</h2>

          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 shadow-soft">
            <ul className="space-y-4">
              {[
                "Пострадавшим от брокеров-мошенников и офшорных схем",
                "Жертвам крипто-пирамид (MTI, QubitTech, Finiko, Auvoria Prime)",
                "Людям, обманутым псевдоюристами при возврате денег",
                "Пользователям Revolut, Wise, Binance и других платформ",
                "Инвесторам, столкнувшимся с недобросовестными управляющими",
                "Предпринимателям в сфере fintech и криптовалют",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-accent" />
                  </div>
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Готовы помочь вам</h2>
          <p className="text-lg text-muted-foreground mb-8">Свяжитесь с нами для бесплатной консультации</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-accent text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  )
}
