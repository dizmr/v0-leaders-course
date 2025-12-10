"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

const videoReviews = [
  { id: 1, title: "Видеоотзыв клиента" },
  { id: 2, title: "Видеоотзыв клиента" },
  { id: 3, title: "Видеоотзыв клиента" },
  { id: 4, title: "Видеоотзыв клиента" },
  { id: 5, title: "Видеоотзыв клиента" },
  { id: 6, title: "Видеоотзыв клиента" },
  { id: 7, title: "Видеоотзыв клиента" },
  { id: 8, title: "Видеоотзыв клиента" },
  { id: 9, title: "Видеоотзыв клиента" },
]

const textReviews = [
  {
    name: "Александр К.",
    location: "Алматы",
    text: "Благодаря команде Leader's Course удалось вернуть средства, потерянные в результате мошеннических действий брокера. Профессиональный подход и постоянная связь на всех этапах работы.",
    rating: 5,
  },
  {
    name: "Марина С.",
    location: "Москва",
    text: "Обратилась после неудачного опыта с криптовалютной платформой. Команда быстро разобралась в ситуации и помогла вернуть значительную часть средств. Рекомендую!",
    rating: 5,
  },
  {
    name: "Дмитрий Л.",
    location: "Ростов",
    text: "Отличная работа юристов. Все было сделано профессионально и в срок. Особенно ценю оперативность и внимание к деталям.",
    rating: 5,
  },
]

export default function ReviewsPage() {
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preloadVideos = async () => {
      if (videoContainerRef.current) {
        const videos = videoContainerRef.current.querySelectorAll("video")

        videos.forEach((video, index) => {
          // Устанавливаем preload в auto
          video.preload = "auto"

          // Принудительно загружаем видео
          video.load()

          // Пытаемся начать буферизацию
          const playPromise = video.play()
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Сразу ставим на паузу после начала загрузки
                video.pause()
                video.currentTime = 0
              })
              .catch(() => {
                // Игнорируем ошибки autoplay
              })
          }
        })
      }
    }

    // Загружаем сразу
    preloadVideos()

    // И повторно через небольшую задержку для надежности
    const timer = setTimeout(preloadVideos, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/abstract-geometric-pattern-business.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/20" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm font-medium text-white">Отзывы</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Отзывы клиентов</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Реальные истории успеха наших клиентов
          </p>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Видеоотзывы</h2>
            <p className="text-muted-foreground mt-4">Наши клиенты делятся своим опытом</p>
          </div>

          <div ref={videoContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoReviews.map((video) => (
              <div
                key={video.id}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-border shadow-md bg-black"
              >
                <video
                  controls
                  preload="auto"
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                  poster={`/videos/rew${video.id}.jpg`}
                >
                  <source src={`/videos/rew${video.id}.mp4`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Reviews */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Текстовые отзывы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {textReviews.map((review, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-soft card-hover"
              >
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Станьте следующей историей успеха</h2>
          <p className="text-lg text-muted-foreground mb-8">Свяжитесь с нами для бесплатной консультации</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-accent text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  )
}
