"use client"

import { Download, Shield, Scale, Award, FileText, Globe } from "lucide-react"

const documents = [
  {
    id: 1,
    title: "Правовая информация",
    titleEn: "Legal Information",
    description: "Полная правовая информация о компании Leader's Course",
    icon: Scale,
    url: "https://www.leaders-course.com/_files/ugd/e1971a_2ab0e383fb9a4db78987800b3fe99ef9.docx?dn=Правовая_информация_Leaders-Course.docx",
    urlEn:
      "https://www.leaders-course.com/_files/ugd/e1971a_b18df16b9bcd4a43b5d4ab7641a562d6.docx?dn=Legal_Information_Leaders_Course_EN.docx",
  },
  {
    id: 2,
    title: "Политика конфиденциальности",
    titleEn: "Privacy Policy",
    description: "Информация о защите ваших персональных данных и их обработке",
    icon: Shield,
    url: "https://www.leaders-course.com/_files/ugd/e1971a_c418885928e24fc9902b39602798b28a.docx?dn=Политика_конфиденциальности_Leaders_Course.docx",
    urlEn:
      "https://www.leaders-course.com/_files/ugd/e1971a_e5e778c503504a829e9b8a8e80ab9b35.docx?dn=Privacy_Policy_Leaders_Course_EN.docx",
  },
  {
    id: 3,
    title: "Сертификат регистрации компании",
    titleEn: "Company Registration Certificate",
    description: "Официальный сертификат регистрации компании",
    icon: Award,
    url: "https://5630c74c-516d-44bb-8d28-48474ce94c5e.filesusr.com/ugd/5a821e_252ec30c68804af2af29265a00a88b58.pdf",
    isPdf: true,
  },
  {
    id: 5,
    title: "Партнерство с организацией FATF",
    titleEn: "FATF Partnership Certificate",
    description: "Сертификат партнерства с международной организацией FATF (Financial Action Task Force)",
    icon: Globe,
    url: "https://blobs.vusercontent.net/blob/Partnership%20document%20with%20FATF-Tc6XkgDIVb29CJ40mpeJtaPlIUD3Yd.pdf",
    isPdf: true,
  },
  {
    id: 4,
    title: "Application for data processing",
    titleEn: "Заявка на обработку данных",
    description: "Форма для подачи заявки на обработку персональных данных",
    icon: FileText,
    url: "https://docs.google.com/forms/d/e/1FAIpQLScBdLFIjHsogOwo6A_gBIpa9SKvpIA6je5Gnp7Cy0Fy7RrNXw/viewform",
    isForm: true,
  },
]

export default function LegalPage() {
  return (
    <div className="overflow-hidden" style={{ backgroundColor: "#f0f4f8" }}>
      {/* Hero Section */}
      <section className="min-h-[50vh] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/city-skyline-night-professional.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/20" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Legal & Privacy</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Все необходимые правовые документы для ознакомления
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#f0f4f8" }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 gap-6">
            {documents.map((doc) => {
              const Icon = doc.icon
              return (
                <div
                  key={doc.id}
                  className="group p-6 lg:p-8 rounded-2xl bg-white border border-gray-200 shadow-soft card-hover"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-300">
                      <Icon size={26} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {doc.title}
                      </h3>
                      {doc.titleEn && <p className="text-sm text-muted-foreground mb-2">{doc.titleEn}</p>}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-accent transition-all duration-300 text-sm"
                        >
                          <Download size={16} />
                          {doc.isPdf ? "Скачать PDF" : doc.isForm ? "Открыть форму" : "Скачать (RU)"}
                        </a>
                        {doc.urlEn && (
                          <a
                            href={doc.urlEn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-foreground rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 text-sm border border-gray-200"
                          >
                            <Download size={16} />
                            Download (EN)
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Telegram CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: "#f0f4f8" }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="p-8 lg:p-10 rounded-2xl bg-white border border-gray-200 shadow-soft text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Свяжитесь с нами</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              При возникновении вопросов по правовым документам вы можете связаться с нашей командой для получения
              разъяснений.
            </p>
            <a
              href="https://t.me/Leaders_course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-300"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
