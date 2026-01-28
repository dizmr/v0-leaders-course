import { Award, Globe, Users, Zap, Shield, Scale } from "lucide-react"
import Link from "next/link"

const teamFeatures = [
  {
    icon: Award,
    title: "Индивидуальный подход",
    description: "Рассматриваем каждую ситуацию отдельно и ищем максимально эффективный путь решения",
  },
  {
    icon: Scale,
    title: "Юридическая точность",
    description: "Работаем строго в рамках действующего законодательства",
  },
  {
    icon: Globe,
    title: "Международный опыт",
    description: "Успешно сопровождаем клиентов из Европы, СНГ, Ближнего Востока и Азии",
  },
  {
    icon: Users,
    title: "Удалённая работа 24/7",
    description: "Умеем вести дела на удалёнке от начала до конца в любое время",
  },
  {
    icon: Shield,
    title: "Конфиденциальность",
    description: "Гарантируем полную защиту персональных данных и коммерческой тайны",
  },
  {
    icon: Zap,
    title: "Быстрые результаты",
    description: "Стремимся к максимально быстрому разрешению каждого дела",
  },
]

const stats = [
  { value: "90%+", description: "клиентов приходят к нам по рекомендации" },
  { value: "50+", description: "международных проектов" },
  { value: "4 дня", description: "наш самый быстрый кейс" },
]

export default function TeamPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Будем знакомы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Команда экспертов, готовых защитить ваши интересы
          </p>
        </div>
      </section>

      {/* About Team */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-foreground leading-relaxed">
              <strong>Leader's Course</strong> — это команда юридических экспертов, специализирующихся на возврате
              активов, потерянных в результате действий недобросовестных брокеров, финансовых платформ и
              псевдоинвестиций.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы объединили опыт юристов, финансовых аналитиков и специалистов по международному праву, чтобы защищать
              интересы тех, кто оказался в трудной ситуации. Наши специалисты имеют практику работы с криптовалютными
              платформами, банками, регуляторами, а также владеют инструментами для взаимодействия с блокчейн-системами
              и офшорными структурами.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Почему выбирают нас</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-6 lg:p-8 rounded-xl bg-card border border-border card-hover">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-soft">
                <p className="text-4xl lg:text-5xl font-bold text-accent mb-4">{stat.value}</p>
                <p className="text-muted-foreground text-lg">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Станьте нашим клиентом</h2>
          <p className="text-lg text-muted-foreground mb-8">Получите бесплатную консультацию уже сегодня</p>
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
