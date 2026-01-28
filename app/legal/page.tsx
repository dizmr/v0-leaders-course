"use client"

import { Download, FileText, Shield, Lock, Scale, BookOpen } from "lucide-react"

const documents = [
  {
    id: 1,
    title: "Политика конфиденциальности",
    description: "Информация о защите ваших персональных данных и их обработке",
    icon: Shield,
    filename: "privacy-policy.pdf",
  },
  {
    id: 2,
    title: "Условия использования",
    description: "Полные условия предоставления наших услуг",
    icon: FileText,
    filename: "terms-of-service.pdf",
  },
  {
    id: 3,
    title: "Соглашение о конфиденциальности",
    description: "Документ о защите коммерческой тайны и конфиденциальной информации",
    icon: Lock,
    filename: "nda.pdf",
  },
  {
    id: 4,
    title: "Договор оферты",
    description: "Публичный договор на оказание юридических услуг",
    icon: Scale,
    filename: "offer-agreement.pdf",
  },
  {
    id: 5,
    title: "Политика AML/KYC",
    description: "Политика противодействия отмыванию денег и идентификации клиентов",
    icon: BookOpen,
    filename: "aml-kyc-policy.pdf",
  },
]

export default function LegalPage() {
  const handleDownload = (filename: string) => {
    const link = document.createElement("a")
    link.href = `/documents/${filename}`
    link.download = filename
    link.click()
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Legal & Privacy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Все необходимые правовые документы для ознакомления
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc) => {
              const Icon = doc.icon
              return (
                <div key={doc.id} className="group p-6 lg:p-8 rounded-2xl bg-card border border-border card-hover">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-300">
                      <Icon size={26} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>
                      <button
                        onClick={() => handleDownload(doc.filename)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-foreground rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 text-sm"
                      >
                        <Download size={16} />
                        Скачать PDF
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info Block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-soft">
            <h3 className="text-xl font-semibold text-foreground mb-4">Важная информация</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Все представленные документы являются официальными документами компании Leader's Course. Перед началом
              сотрудничества рекомендуем внимательно ознакомиться с условиями предоставления услуг и политикой
              конфиденциальности.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              При возникновении вопросов по правовым документам вы можете связаться с нашей командой для получения
              разъяснений.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
