"use client"

import { Star, Play } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

const videoReviews = [
  { id: 1, title: "Видеоотзыв клиента", name: "Кристина", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/DAMLwLMpV1o0sjxz5ULlAC/public/videos/rew1.mp4" },
  { id: 2, title: "Видеоотзыв клиента", name: "Елена", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/8R2qeWKO_GL7TX1zqgLc5r/public/videos/rew2.mp4" },
  { id: 3, title: "Видеоотзыв клиента", name: "Оксана", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/6uCDWSQImhTr4W4Yu1ASvF/public/videos/rew3.mp4" },
  { id: 4, title: "Видеоотзыв клиента", name: "Юлия", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/ULRVaNIJXA78khorbr5Z_S/public/videos/rew4.mp4" },
  { id: 5, title: "Видеоотзыв клиента", name: "Виктор", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/mUL6OLA02dJz4BkELzsoES/public/videos/rew5.mp4" },
  { id: 6, title: "Видеоотзыв клиента", name: "Никита", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/pu1mvm0gITNqpklQiYSD9g/public/videos/rew6.mp4" },
  { id: 7, title: "Видеоотзыв клиента", name: "Ирина", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/iDY_SuVLeQW3iw1yIi97PN/public/videos/rew7.mp4" },
  { id: 8, title: "Видеоотзыв клиента", name: "Ирина", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/PW0eqoKM1bUQ_vsEF1wuvM/public/videos/rew8.mp4" },
  { id: 9, title: "Видеоотзыв клиента", name: "Ксения", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kix0cl1VfD5HN4Kvc9fQzSlik9oq/zMBwn-KL5Wjwg6Yzx5IQnX/public/videos/rew9.mp4" },
]

function VideoCard({ id, title, name, src }: { id: number; title: string; name: string; src: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.load()
    }
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying(true)
      videoRef.current.muted = false
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {
        setHasError(true)
        setIsPlaying(false)
      })
    }
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
    if (videoRef.current && !isPlaying) {
      videoRef.current.currentTime = 0.5
    }
  }

  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-border shadow-md bg-gray-900 group">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-white/70 p-4 text-center">
          <p className="text-sm mb-2">Видео недоступно</p>
          <p className="text-xs">Обратитесь к администратору</p>
        </div>
      )}

      <video
        ref={videoRef}
        preload="metadata"
        playsInline
        muted
        controls={isPlaying}
        className={`w-full h-full object-cover ${!isLoaded ? "opacity-0" : "opacity-100"} transition-opacity`}
        onLoadedData={handleLoadedData}
        onError={() => setHasError(true)}
        onEnded={() => setIsPlaying(false)}
        onPause={() => !videoRef.current?.seeking && setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg z-20">
        {name}
      </div>

      {!isPlaying && isLoaded && !hasError && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer z-10"
          aria-label={`Воспроизвести ${title}`}
        >
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
          </div>
        </button>
      )}
    </div>
  )
}

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
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#f0f4f8" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Видеоотзывы</h2>
            <p className="text-muted-foreground mt-4">Наши клиенты делятся своим опытом</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoReviews.map((video) => (
              <VideoCard key={video.id} id={video.id} title={video.title} name={video.name} src={video.src} />
            ))}
          </div>
        </div>
      </section>

      {/* Text Reviews */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#f0f4f8" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Текстовые отзывы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {textReviews.map((review, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: "#f0f4f8" }}>
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
