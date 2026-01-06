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
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/modern-office-building-cityscape-professional-dark.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/20" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">О компании</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Мы работаем на стыке права, технологий и финансов
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
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
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-foreground leading-relaxed">
              <strong>Leader's Course — международная компания с многолетним юридическим опытом в кибербезопасности. 
С 2023 года она является дочерней структурой  (Financial Action Task Force) — межправительственной организации, основанной в 1989 году по инициативе G7.
                </strong>
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              FATF разрабатывает мировые стандарты противодействия отмыванию преступных доходов и работает в более чем 38 странах, а также с двумя региональными организациями: Еврокомиссией и Советом сотрудничества арабских государств Персидского залива.
В 2023 году из-за политических обстоятельств Россия прекратила прямое участие в FATF, но сохранила доступ к помощи и контролю. Именно поэтому Leader's Course стала официальным посредником в защите граждан в международных финансовых вопросах.
В том же  2023 году власти ОАЭ запустили национальную кампанию по борьбе с интернет-мошенничеством и махинациями в криптовалюте. Уделяя особое внимание фальшивым инвестиционным проектам и онлайн-маркетплейсам. Входе чего было выявлено большое колличество пострадавших клиентов граждан Российской Федерации.В связи с этим компания Leader's Course переехала в Дубай.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы получили информацию о мошеннических брокерах, которые регистрировали фирмы и счета в ОАЭ для уклонения от налогов, а также список пострадавших соотечественников. Благодаря знанию менталитета, языка ,норм , законов в РФ, мы успешно помогаем клиентам из США, Латвии, Эстонии, Нидерландов, Казахстана и других стран.Leader's Course имеет филиалы во многих государствах . 
Все международные вопросы мы решаем  взаимодействуя т с FATF, как дочерняя компания.Которая собирает и анализирует финансовую информацию для выявления незаконных потоков. Через посредников, таких как наша компания, реализуются выплаты пострадавшим — независимо от того, физическое это или юридическое лицо.
Все вопросы на территории РФ будут решатся согласно:  Федеральному закону РФ № 259-ФЗ от 31.07.2020 о цифровых финансовых активах и цифровой валюте, а также № 161-ФЗ «О национальной платежной системе», в России возбуждено более 700 уголовных дел по инвестиционным проектам за уклонение от налогов в особо крупных размерах. В 2025 году большинство таких дел завершилось проигрышем мошенников: суд обязал их выплатить налоги и вернуть средства вкладчикам. Однако многие компании не делают это добровольно, особенно если зарегистрированы за рубежом.Поэтому связь с клиентами осуществляется индивидуальным порядком.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы, Leader's Course, с успешным портфелем юридической помощи, с 2025 года можем вернуть средства клиентам независимо от страны регистрации мошеннической компании.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Наши принципы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div
                  key={index}
                  className="p-6 lg:p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-border card-hover"
                >
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
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">Кому мы помогаем</h2>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 lg:p-10 shadow-soft">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
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
