"use client"

import { Users, CheckCircle, Clock, MessageCircle, ThumbsUp } from "lucide-react"

const achievements = [
  { icon: Users, number: "13000+", label: "довольных клиентов" },
  { icon: CheckCircle, number: "10000+", label: "успешных дел" },
  { icon: Clock, number: "10 минут", label: "среднее время отклика" },
  { icon: MessageCircle, number: "24/7", label: "поддержка клиентов" },
  { icon: ThumbsUp, number: "99%", label: "положительных отзывов" },
]

export default function Achievements() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Доверяют нам 13000+ клиентов по всему миру
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-lg bg-white border border-border hover:border-accent hover:shadow-lg transition-all duration-300 soft-shadow-hover"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                    <Icon size={26} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-primary group-hover:text-accent transition-colors">
                  {achievement.number}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                  {achievement.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
