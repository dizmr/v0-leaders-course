"use client"

import { Play, Star } from "lucide-react"
import Link from "next/link"

const videoReviews = [
  { id: 1, title: "Видеоотзыв клиента" },
  { id: 2, title: "Видеоотзыв клиента" },
  { id: 3, title: "Видеоотзыв клиента" },
  { id: 4, title: "Видеоотзыв клиента" },
  { id: 5, title: "Видеоотзыв клиента" },
  { id: 6, title: "Видеоотзыв клиента" },
]

const textReviews = [
  {
    name: "Александр К.",
    location: "Германия",
    text: "Благодаря команде Leader's Course удалось вернуть средства, потерянные в результате мошеннических действий брокера. Профессиональный подход и постоянная связь на всех этапах работы.",
    rating: 5,
  },
  {
    name: "Марина С.",
    location: "ОАЭ",
    text: "Обратилась после неудачного опыта с криптовалютной платформой. Команда быстро разобралась в ситуации и помогла вернуть значительную часть средств. Рекомендую!",
    rating: 5,
  },
  {
    name: "Дмитрий Л.",
    location: "Израиль",
    text: "Отличная работа юристов. Все было сделано профессионально и в срок. Особенно ценю оперативность и внимание к деталям.",
    rating: 5,
  },
]

export default function ReviewsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium text-accent">Отзывы</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Отзывы клиентов</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории успеха наших клиентов
          </p>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Видеоотзывы</h2>
            <p className="text-muted-foreground mt-4">Наши клиенты делятся своим опытом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoReviews.map((video) => (
              <div
                key={video.id}
                className="group relative aspect-video rounded-2xl bg-secondary/50 border-2 border-dashed border-border hover:border-accent transition-all duration-300 overflow-hidden flex items-center justify-center cursor-pointer card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Play size={28} className="text-primary group-hover:text-accent-foreground ml-1" />
                  </div>
                  <p className="text-foreground/70 font-medium">Ячейка для видео</p>
                  <p className="text-muted-foreground text-sm mt-1">Нажмите для воспроизведения</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Reviews */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Текстовые отзывы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {textReviews.map((review, index) => (
              <div key={index} className="p-8 rounded-2xl bg-card border border-border shadow-soft card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Станьте следующей историей успеха</h2>
          <p className="text-lg text-muted-foreground mb-8">Свяжитесь с нами для бесплатной консультации</p>
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
