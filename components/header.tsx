"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О нас" },
  { href: "/team", label: "Команда" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/legal", label: "Legal & Privacy" },
  { href: "/contact", label: "Контакты" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="mailto:support@leaders-course.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={14} />
                <span className="hidden sm:inline">support@leaders-course.com</span>
              </a>
              <a href="tel:+37060311904" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={14} />
                <span>+3 (706) 031-19-04</span>
              </a>
            </div>
            <span className="hidden md:inline text-primary-foreground/70 text-xs">
              Gedimino pr. 44A, Vilnius, Литва
            </span>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 border-b ${
          scrolled ? "bg-card/98 backdrop-blur-md shadow-soft border-border" : "bg-card border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src="/logo-emblem.jpg"
                  alt="Leader's Course Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-foreground text-base block leading-tight">Leader's Course</span>
                <span className="text-xs text-muted-foreground">Law & Order</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium shadow-sm hover:shadow-md btn-glow transition-all duration-300"
            >
              Консультация
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-all animate-fade-in stagger-${index + 1} ${
                        isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                      }`}
                      style={{ opacity: 0 }}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 px-4 py-3 bg-accent text-accent-foreground rounded-lg font-medium text-center animate-fade-in stagger-6"
                  style={{ opacity: 0 }}
                >
                  Бесплатная консультация
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
