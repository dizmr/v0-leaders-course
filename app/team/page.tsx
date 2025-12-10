import { Award, Globe, Users, Zap, Shield, Scale, MapPin, GraduationCap, Clock, Languages } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const specialists = [
  {
    name: "Кудинова Алина Сергеевна",
    title:
      "Международный эксперт по цифровым активам, возврату средств от лже-брокеров и правовому сопровождению Web3-проектов",
    location: "Вильнюс, Литва",
    education: "РГУП (Москва), MRU (Литва)",
    experience: "20+ лет юридической практики",
    image: "/professional-european-woman-lawyer-blonde-in-dark-.jpg",
    languages: "Русский, английский, литовский (на уровне делового общения)",
    bio: "Родилась в России в 1979 году. Получила базовое юридическое образование в Российском государственном университете правосудия (РГУП, Москва), а позже завершила программу международного права в Миколас Ромерис Университете (MRU, Вильнюс, Литва). Юридическую карьеру начала в России в начале 2000-х, где более десяти лет проработала в структурах, связанных с контролем финансовых операций и защитой прав граждан в экономических спорах. После переезда в Литву в 2014 году сосредоточилась на правовом сопровождении клиентов, пострадавших от действий лже-брокеров, криптоафер и недобросовестных платёжных платформ. С 2017 года — активно вовлечена в сферу Web3, криптовалют и цифровой безопасности.",
    specializations: [
      "Юридическая помощь при возврате средств с брокерских и крипто-платформ",
      "Лицензирование криптовалютных и FinTech-проектов",
      "Анализ схем мошенничества и блокировка активов",
      "Участие в международных арбитражных спорах",
      "Сопровождение выхода на рынок ЕС и построение юридической структуры",
      "Комплаенс, AML и правовая проверка токенов и smart-контрактов",
    ],
    jurisdictions: "Литва, Эстония, Германия, ОАЭ, Кипр",
    achievements:
      "Участница профессиональных форумов в области FinTech, член сетевого сообщества Women in Blockchain EU. Юридический подход Алины — это сочетание глубокой аналитики, высокого уровня ответственности и стремления защитить интересы клиента в цифровой среде.",
  },
  {
    name: "Наумов Александр Владимирович",
    title: "Эксперт по Web3-праву, финансовой безопасности и возврату средств от лже-брокеров",
    location: "Вильнюс, Литва",
    education: "Университет Тель-Авива / Университет Шарджи",
    experience: "15+ лет практики",
    image: "/professional-european-man-lawyer-dark-hair-in-dark.jpg",
    languages: "Русский, английский, литовский (со словарём)",
    bio: "Родился в 1984 году. Получил юридическое образование в одном из ведущих университетов Ближнего Востока — Университете Тель-Авива (Израиль) / Университете Шарджи (ОАЭ), где специализировался на международном праве и цифровом регулировании. Юридическую практику начал в 2009 году, сосредоточившись на защите прав клиентов в сфере финансовых споров и интернет-безопасности. С 2014 года профессионально сопровождает пострадавших от лже-брокеров, мошеннических онлайн-платформ и псевдо-криптосервисов. С 2018 года активно работает в области Web3 и DeFi, участвуя в запуске более 30 криптовалютных и финтех-проектов в Эстонии, Литве, Германии и на Ближнем Востоке.",
    specializations: [
      "Юридическая помощь при возврате средств от мошеннических брокеров",
      "Аудит смарт-контрактов с юридической точки зрения",
      "Сопровождение лицензирования крипто- и Web3-платформ",
      "Составление международных претензий и работа с регуляторами",
      "Блокировка и возврат активов через банки, платёжные системы и криптобиржи",
      "Снижение юридических рисков при запуске финтех-платформ",
    ],
    jurisdictions: "ЕС, СНГ, Азия, Ближний Восток",
    achievements:
      "Программа «Regulation of Crypto Assets in the EU», European University Institute. Участник Baltic LegalTech & Blockchain Hub. Спикер конференций по цифровому праву и борьбе с онлайн-мошенничеством.",
  },
  {
    name: "Ходорковский Ян Викторович",
    title:
      "Compliance Officer, специалист в области цифровых финансов, блокчейн-юриспруденции и международного регулирования FinTech-платформ",
    location: "Вильнюс, Литва",
    education: "LLM – Financial Law & Technology, Бристольская Академия Права (Великобритания)",
    experience: "14 лет юридической практики",
    image: "/professional-european-man-lawyer-with-glasses-in-d.jpg",
    languages: "Русский, английский",
    bio: "Родился в 1987 году. Получил высшее экономико-юридическое образование в Краснодарском Экономическом Университете при Президенте РФ (2006). В 2011 году завершил магистратуру в Бристольской Академии Права (Великобритания) по специальности Financial Legislations. Профессиональный путь начал в 2011 году в UniCredit Group, где работал в области комплаенса и правового анализа финансовых операций. С 2016 по 2019 год занимал должность старшего юрисконсульта в Swiss RE, отвечая за трансграничное сопровождение сделок и правовую экспертизу в сфере страхования и цифровых продуктов. С 2019 года — независимый юридический консультант в структурах финансового регулирования. В 2023 году прошёл профессиональную аттестацию в Leaders Legal Group.",
    specializations: [
      "Международное лицензирование криптоплатформ и цифровых финансовых сервисов",
      "Построение юридической структуры FinTech-стартапов",
      "Внутренний и внешний комплаенс, борьба с финансовыми рисками",
      "Арбитраж и досудебное урегулирование споров",
      "Правовая защита интеллектуальной собственности",
      "Клиринговая деятельность и расчёты в цифровой среде",
    ],
    jurisdictions: "Европа, США, СНГ",
    achievements:
      "С 2017 года лично курировал юридическое сопровождение более 30 блокчейн-проектов в Европе, США и странах СНГ. Участник INTA и FICPI, активный участник международных FinTech и Blockchain-форумов.",
  },
  {
    name: "Либерман Тимур Александрович",
    title: "Эксперт по Web3-праву, финансовой безопасности и возврату средств от лже-брокеров",
    location: "Вильнюс, Литва",
    education: "Университет Витаутаса Великого (Vytauto Didžiojo universitetas, Литва)",
    experience: "9 лет практики",
    image: "/professional-young-european-man-lawyer-in-dark-bus.jpg",
    languages: "Русский, английский, литовский (со словарём)",
    bio: "Родился в 1993 году. Получил юридическое образование в Университете Витаутаса Великого (Литва), где специализировался на международном праве и цифровом регулировании. В 2014 году начал юридическую практику в сфере финансовых споров и защиты прав клиентов в интернете. С 2016 года сосредоточен на юридическом сопровождении клиентов, пострадавших от действий лже-брокеров, фишинговых платформ и псевдо-криптосервисов. С 2019 года активно работает в области Web3 и DeFi, сопровождая юридически более 25 проектов по запуску криптовалютных стартапов, в том числе в Эстонии, Германии и Литве.",
    specializations: [
      "Юридическая помощь при возврате средств от мошеннических брокеров",
      "Аудит смарт-контрактов с юридической точки зрения",
      "Сопровождение лицензирования крипто- и Web3-платформ",
      "Составление международных претензий и взаимодействие с регуляторами",
      "Блокировка и возврат активов через банки, платёжные шлюзы и биржи",
    ],
    jurisdictions: "ЕС, СНГ, Азия",
    achievements:
      "Программа «Regulation of Crypto Assets in the EU», European University Institute. Участник Baltic LegalTech & Blockchain Hub. Спикер тематических мероприятий по борьбе с онлайн-мошенничеством.",
  },
  {
    name: "Самусенко Кристина Михайловна",
    title: "Эксперт по цифровой безопасности, Web3-праву и возврату активов от криптовалютных мошенников",
    location: "Израиль",
    education: "Университет имени Бар-Илана (Bar-Ilan University, Израиль)",
    experience: "7 лет юридической практики",
    image: "/professional-european-woman-lawyer-brunette-in-dar.jpg",
    languages: "Русский, английский, иврит",
    bio: "Родилась 19 сентября 1996 года. Получила высшее юридическое образование в Университете имени Бар-Илана (Израиль), где специализировалась на финансовом праве и регулировании цифровых активов. С 2018 года начала карьеру в сфере правовой защиты клиентов, столкнувшихся с финансовыми махинациями в интернете. За годы практики помогла десяткам пострадавших от лже-брокеров, фишинговых платформ и нелегальных криптообменников вернуть свои средства и отстоять права через международные регуляторы. С 2021 года активно работает в направлении Web3 и крипто-правового консалтинга, в том числе участвует в сопровождении проектов, связанных с лицензированием криптоплатформ и анализом смарт-контрактов на предмет юридических рисков.",
    specializations: [
      "Возврат средств от криптовалютных мошенников и фишинговых схем",
      "Юридический анализ смарт-контрактов",
      "Лицензирование криптоплатформ в юрисдикциях Израиля, ЕС и ОАЭ",
      "Сопровождение клиентов в спорах с брокерами и платёжными системами",
      "Подготовка претензий, жалоб и обращений в финансовые регуляторы",
    ],
    jurisdictions: "Израиль, ЕС, ОАЭ",
    achievements:
      "Прошла специализированный курс «Cyber Law & Digital Finance», организованный израильской ассоциацией адвокатов. Участвует в международных конференциях по защите прав потребителей в цифровой среде.",
  },
]

const teamDescription = {
  intro:
    "Leader's Course — это команда юридических экспертов, специализирующихся на возврате активов, потерянных в результате действий недобросовестных брокеров, финансовых платформ и псевдоинвестиций.",
  details:
    "Мы объединили опыт юристов, финансовых аналитиков и специалистов по международному праву, чтобы защищать интересы тех, кто оказался в трудной ситуации. Наши специалисты имеют практику работы с криптовалютными платформами, банками, регуляторами, а также владеют инструментами для взаимодействия с блокчейн-системами и офшорными структурами.",
  expertise:
    "Мы работаем на стыке права, технологий и финансов. Наша команда сопровождает проекты, связанные с международными платёжными системами, брокерской деятельностью и цифровыми активами. Мы понимаем, как устроен глобальный финансовый ландшафт, и умеем адаптироваться под требования быстро меняющейся среды.",
  crypto:
    "Юристы компании помогают запускать и легализовывать бизнес в сфере криптовалют, DeFi и Web3 — от первичной консультации до полного сопровождения проекта под ключ. Мы оформляем документы, подбираем юрисдикции, взаимодействуем с банками, регуляторами и комплаенс-службами.",
  broker:
    "В сфере брокерской деятельности мы обеспечиваем юридическую чистоту, готовим договорные конструкции, а также консультируем по вопросам лицензирования и международного регулирования.",
  partnership:
    "Работая с нами, клиенты получают не только защиту, но и стратегическое партнёрство: мы говорим на одном языке с IT-предпринимателями, инвесторами и fintech-компаниями.",
}

const clientsWeHelp = [
  "Пострадавшим по всему миру: клиентам, потерявшим средства из-за брокеров-мошенников и офшорных схем",
  "Жертвам крипто-пирамид (MTI, QubitTech, Finiko, Auvoria Prime)",
  "Людям, обманутым псевдоюристами при попытке вернуть деньги",
  "Пользователям платформ вроде Revolut, Wise и Binance — даже когда им отказали в возврате",
]

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
  { value: "13000+", description: "довольных клиентов" },
  { value: "10000+", description: "успешных дел" },
  { value: "99%", description: "положительных отзывов" },
]

export default function TeamPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/professional-team-meeting-legal-office.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/20" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Будем знакомы</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Leader's Course — «Ваша защита от недобросовестных брокеров»
          </p>
        </div>
      </section>

      {/* About Team - with beautiful background */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-foreground leading-relaxed font-medium">{teamDescription.intro}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{teamDescription.details}</p>
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border">
              <p className="text-lg text-foreground leading-relaxed">{teamDescription.expertise}</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{teamDescription.crypto}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{teamDescription.broker}</p>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <p className="text-lg text-foreground leading-relaxed italic">{teamDescription.partnership}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section - with background */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Наши специалисты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Команда профессионалов с международным опытом в области права, финансов и цифровых технологий
            </p>
          </div>

          <div className="space-y-12">
            {specialists.map((specialist, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-start p-6 lg:p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border`}
              >
                {/* Photo */}
                <div className="w-full lg:w-80 flex-shrink-0">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary/50">
                    <Image
                      src={specialist.image || "/placeholder.svg"}
                      alt={specialist.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg">{specialist.name}</p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{specialist.name}</h3>
                    <p className="text-accent font-medium mb-4 text-sm lg:text-base">{specialist.title}</p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
                        <MapPin size={14} className="text-accent" />
                        <span className="text-sm">{specialist.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
                        <Clock size={14} className="text-accent" />
                        <span className="text-sm">{specialist.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
                        <Languages size={14} className="text-accent" />
                        <span className="text-sm">{specialist.languages}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <GraduationCap size={16} className="text-accent flex-shrink-0" />
                      <span className="text-sm">{specialist.education}</span>
                    </div>
                    {specialist.jurisdictions && (
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Globe size={16} className="text-accent flex-shrink-0" />
                        <span className="text-sm">Юрисдикции: {specialist.jurisdictions}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{specialist.bio}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Основные компетенции:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {specialist.specializations.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                    <p className="text-sm text-foreground">{specialist.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients We Help - with full background */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-background to-secondary/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Наши клиенты</h2>
            <p className="text-lg text-muted-foreground">Мы помогаем пострадавшим по всему миру</p>
          </div>

          <div className="space-y-4">
            {clientsWeHelp.map((client, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border"
              >
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground leading-relaxed">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - with full background coverage */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/modern-office-building-with-glass-windows-professi.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/30" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Интересные факты</h2>
            <p className="text-lg text-white/70">Наши достижения в цифрах</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 lg:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - with full background */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионализм, опыт и индивидуальный подход к каждому клиенту
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 lg:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border card-hover"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={26} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Готовы начать?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации. Мы поможем вам вернуть ваши средства.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:shadow-soft-lg btn-glow transition-all duration-300"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  )
}
