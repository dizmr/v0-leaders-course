"use client"

import { Download, FileText, Shield, Lock } from "lucide-react"
import { useState } from "react"

const documents = [
  {
    id: 1,
    title: "Политика конфиденциальности",
    description: "Информация о защите ваших персональных данных",
    icon: Shield,
    filename: "privacy-policy.pdf",
  },
  {
    id: 2,
    title: "Условия использования",
    description: "Полные условия предоставления услуг",
    icon: FileText,
    filename: "terms-of-service.pdf",
  },
  {
    id: 3,
    title: "Соглашение о конфиденциальности",
    description: "Документ о защите коммерческой тайны",
    icon: Lock,
    filename: "nda.pdf",
  },
]

export default function LegalPrivacy() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleDownload = (filename: string) => {
    console.log("[v0] Download initiated for:", filename)
    // Create a download placeholder - in production, replace with actual file URL
    const link = document.createElement("a")
    link.href = `#` // Replace with actual file URL
    link.download = filename
    link.click()
  }

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Правовая информация</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4">Legal & Privacy</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Все необходимые документы для ознакомления. Скачайте нужный документ для получения полной информации.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => {
            const Icon = doc.icon
            return (
              <div
                key={doc.id}
                onMouseEnter={() => setHoveredId(doc.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group p-8 rounded-lg bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 soft-shadow-hover cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300">
                  <Icon size={24} className="text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {doc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 mb-6 leading-relaxed">{doc.description}</p>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(doc.filename)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-accent transition-all duration-300 group-hover:shadow-lg"
                >
                  <Download size={18} />
                  Скачать
                </button>

                {/* Upload Placeholder */}
                {hoveredId === doc.id && (
                  <p className="text-xs text-muted-foreground mt-3 text-center">Кликните для скачивания шаблона</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-lg bg-secondary/20 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Собственные документы</h3>
          <p className="text-foreground/70 leading-relaxed">
            Вы можете загрузить собственные правовые документы, шаблоны и соглашения. Все документы хранятся в
            защищенном виде и доступны только вам и вашим клиентам при необходимости.
          </p>
        </div>
      </div>
    </section>
  )
}
