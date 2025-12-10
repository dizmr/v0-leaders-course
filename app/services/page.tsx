import { FileCheck, Database, Handshake, Globe, Scale, Search, FileText, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileCheck,
    title: "Анализ брокерской деятельности",
    description:
      "Полный анализ действий брокера и выявление нарушений в работе с вашими средствами. Мы изучаем все аспекты взаимодействия и определяем возможные пути возврата.",
    features: ["Проверка лицензий", "Анализ договоров", "Выявление нарушений", "Оценка шансов возврата"],
  },
  {
    icon: Database,
    title: "Сбор доказательной базы",
    description:
      "Профессиональный сбор и систематизация всех необходимых доказательств для вашего дела. Формируем полную картину для успешного разрешения ситуации.",
    features: ["Сбор документов", "Фиксация переписки", "Анализ транзакций", "Подготовка заявлений"],
  },
  {
    icon: Handshake,
    title: "Досудебное урегулирование",
    description:
      "Эффективные переговоры и решение конфликтов без судебных разбирательств. В большинстве случаев удается добиться возврата средств без суда.",
    features: ["Переговоры с брокерами", "Претензионная работа", "Медиация", "Мировые соглашения"],
  },
  {
    icon: Globe,
    title: "Международное сопровождение",
    description:
      "Работа с международными регуляторами и финансовыми органами по всему миру. Опыт работы в различных юрисдикциях.",
    features: ["Работа с регуляторами", "Международные запросы", "Кросс-граничные споры", "Офшорные юрисдикции"],
  },
  {
    icon: Scale,
    title: "Правовая экспертиза",
    description:
      "Глубокий анализ правовых аспектов вашего дела с учетом международного и национального законодательства.",
    features: ["Юридический анализ", "Экспертные заключения", "Правовые стратегии", "Оценка рисков"],
  },
  {
    icon: Search,
    title: "Поиск активов",
    description: "Поиск и идентификация активов недобросовестных компаний для возможного взыскания средств.",
    features: ["Трейсинг активов", "Блокчейн анализ", "Международный поиск", "Идентификация бенефициаров"],
  },
  {
    icon: FileText,
    title: "Подготовка документов",
    description: "Профессиональная подготовка всей необходимой документации для защиты ваших интересов.",
    features: ["Претензии", "Жалобы регуляторам", "Исковые заявления", "Апелляции"],
  },
  {
    icon: Users,
    title: "Консультации",
    description: "Индивидуальные консультации по всем вопросам, связанным с защитой ваших финансовых интересов.",
    features: ["Первичная оценка", "Разбор ситуации", "План действий", "Постоянная поддержка"],
  },
]

export default function ServicesPage() {
  return (
    <div className="overflow-hidden" style={{ backgroundColor: "#f0f4f8" }}>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/city-skyline-night-professional.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/20" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Наши услуги</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Комплексный подход к защите ваших финансовых интересов. Мы предлагаем полный спектр юридических услуг.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#f0f4f8" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-6 lg:p-8 rounded-2xl bg-white border border-gray-200 shadow-soft card-hover"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                      <Icon size={28} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Нужна помощь?</h2>
          <p className="text-lg text-muted-foreground mb-8">Свяжитесь с нами для бесплатной первичной консультации</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-accent text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  )
}
