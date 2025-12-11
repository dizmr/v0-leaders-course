"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const addresses = [
  {
    text: "Gedimino pr. 44A, LT-01110 Vilnius, Литва",
    mapUrl: "https://maps.google.com/?q=Gedimino+pr.+44A,+Vilnius,+Lithuania",
  },
  {
    text: "2 Weizmann St., Tel Aviv, Israel",
    mapUrl: "https://maps.google.com/?q=2+Weizmann+St,+Tel+Aviv,+Israel",
  },
  {
    text: "Levels 6 and 7, Central Park Towers (Offices Tower), DIFC, PO Box 9275, Dubai, UAE",
    mapUrl: "https://maps.google.com/?q=Central+Park+Towers,+DIFC,+Dubai,+UAE",
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/night-city-skyline-professional-dark-blue-urban.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-primary/95" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-lg overflow-hidden">
                  <Image
                    src="/logo-emblem.jpg"
                    alt="Leader's Course Logo"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-semibold text-white text-lg block leading-tight">Leader's Course</span>
                  <span className="text-white/60 text-xs">Law & Order</span>
                </div>
              </Link>
              <p className="text-white/70 leading-relaxed">
                Юридическая защита ваших финансовых интересов. Работаем с клиентами по всему миру.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Навигация</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Главная" },
                  { href: "/services", label: "Услуги" },
                  { href: "/about", label: "О нас" },
                  { href: "/team", label: "Команда" },
                  { href: "/reviews", label: "Отзывы" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/70 hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Правовая информация</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/legal" className="text-white/70 hover:text-accent transition-colors">
                    Legal & Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-white/70 hover:text-accent transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-white/70 hover:text-accent transition-colors">
                    Условия использования
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact - Added clickable map links */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Контакты</h4>
              <ul className="space-y-4">
                {addresses.map((address, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MapPin size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <a
                      href={address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-accent transition-colors group flex items-start gap-1"
                    >
                      <span>{address.text}</span>
                      <ExternalLink
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0"
                      />
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-accent flex-shrink-0" />
                  <a
                    href="mailto:support@leaders-course.com"
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    support@leaders-course.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-accent flex-shrink-0" />
                  <span className="text-white/70">+3 (706) 031-19-04</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">© 2025 Leader's Course. Все права защищены.</p>
              <div className="flex gap-6">
                <a
                  href="https://t.me/Leaders_course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  Telegram
                </a>
                <a
                  href="https://t.me/Zlypkor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  Telegram (Zlypkor)
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
