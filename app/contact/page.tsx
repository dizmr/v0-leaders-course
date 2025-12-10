"use client"

import type React from "react"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { useState } from "react"
import { submitContactForm } from "@/app/actions/submit-contact"

const offices = [
  {
    city: "Вильнюс",
    country: "Литва",
    address: "Gedimino pr. 44A, LT-01110 Vilnius",
  },
  {
    city: "Дубай",
    country: "ОАЭ",
    address: "Levels 6 and 7, Central Park Towers (Offices Tower), DIFC, PO Box 9275, Dubai, UAE",
  },
  {
    city: "Тель-Авив",
    country: "Израиль",
    address: "2 Weizmann St., Tel Aviv, Israel",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    console.log("[v0] Form submit started", formData)

    try {
      const result = await submitContactForm(formData)
      console.log("[v0] Form submit result:", result)

      if (result.success) {
        setFormData({ name: "", email: "", phone: "", message: "" })
        setSubmitStatus("success")
      } else {
        setErrorMessage(result.error || "Неизвестная ошибка")
        setSubmitStatus("error")
      }
    } catch (err: any) {
      console.log("[v0] Form submit error:", err)
      setErrorMessage(err.message || "Ошибка при отправке")
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Контакты</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#f0f4f8" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="bg-white p-6 lg:p-10 rounded-2xl border border-gray-200 shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-8">Напишите нам</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    placeholder="Расскажите о вашей ситуации..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-accent text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Отправка..."
                  ) : (
                    <>
                      <Send size={18} />
                      Отправить сообщение
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-center font-medium">Сообщение успешно отправлено!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-center font-medium">Ошибка: {errorMessage}</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground mb-6">Быстрая связь</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:support@leaders-course.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Mail size={22} className="text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">support@leaders-course.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+37060311904"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Phone size={22} className="text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-medium text-foreground">+3 (706) 031-19-04</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                      <MessageCircle size={22} className="text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium text-foreground">+3 (706) 310-97-82</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground mb-6">Наши офисы</h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {office.city}, {office.country}
                        </p>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
