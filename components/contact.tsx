"use client"

import type React from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative">
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Свяжитесь с нами</h2>
          <p className="text-muted-foreground mt-4 text-lg">Будем рады пообщаться с вами</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border ink-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6">Напишите нам</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm"
                  placeholder="Ваше полное имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none text-sm bg-slate-200"
                  placeholder="Расскажите о вашей ситуации..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 mt-6 skew-block"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Card 1 */}
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all ink-shadow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 skew-block">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Наши офисы</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Gedimino pr. 44A, LT-01110 Vilnius, Литва
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">DIFC, Dubai, UAE</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Tel Aviv, Israel</p>
                </div>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all ink-shadow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 skew-block">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Email</h4>
                  <a href="mailto:support@leaders-course.com" className="text-xs text-accent hover:underline">
                    support@leaders-course.com
                  </a>
                </div>
              </div>
            </div>

            {/* Info Card 3 */}
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all ink-shadow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 skew-block">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">WhatsApp</h4>
                  <p className="text-xs text-muted-foreground">
                    +3 (706) 031-19-04
                    <br />
                    +3 (706) 310-97-82
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
