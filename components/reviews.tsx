"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "Александр П.",
    company: "Инвестор",
    text: "Отличная команда! Быстро разобралась в моей ситуации и добилась результата. Рекомендую!",
    rating: 5,
  },
  {
    name: "Мария К.",
    company: "Предприниматель",
    text: "Профессиональный подход к каждому случаю. Очень благодарна за помощь в возврате средств.",
    rating: 5,
  },
  {
    name: "Иван С.",
    company: "Финансовый аналитик",
    text: "Компетентные специалисты, которые действительно разбираются в финтехе и криптовалютах.",
    rating: 5,
  },
  {
    name: "Елена Л.",
    company: "Бизнесмен",
    text: "Спасибо за помощь! Даже когда другие говорили, что это невозможно, вы добились результата.",
    rating: 5,
  },
  {
    name: "Дмитрий В.",
    company: "Частный инвестор",
    text: "Честная консультация, честный результат. Буду рекомендовать друзьям и коллегам.",
    rating: 5,
  },
  {
    name: "Ольга Т.",
    company: "Экспортер",
    text: "Надежная команда, которая реально помогает людям. Спасибо за поддержку на всех этапах!",
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Отзывы</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4">Отзывы клиентов</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-6 rounded-md bg-card border border-border hover:border-accent hover:shadow-xl transition-all duration-300 soft-shadow-hover"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent group-hover:scale-110 transition-transform"
                  />
                ))}
              </div>

              <p className="text-foreground/90 mb-4 leading-relaxed text-sm">"{review.text}"</p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
