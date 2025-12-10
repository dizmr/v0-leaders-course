"use client"

import { Play } from "lucide-react"

const videoReviews = [
  { id: 1, title: "Видеоотзыв клиента", placeholder: "Ячейка для вашего видео" },
  { id: 2, title: "Видеоотзыв клиента", placeholder: "Ячейка для вашего видео" },
  { id: 3, title: "Видеоотзыв клиента", placeholder: "Ячейка для вашего видео" },
  { id: 4, title: "Видеоотзыв клиента", placeholder: "Ячейка для вашего видео" },
  { id: 5, title: "Видеоотзыв клиента", placeholder: "Ячейка для вашего видео" },
  { id: 6, title: "Видеоотзыв клиента", placeholder: "Ячейка для вашего видео" },
]

export default function VideoReviews() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Видеоматериалы</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4">Видеоотзывы клиентов</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoReviews.map((video) => (
            <div
              key={video.id}
              className="group relative h-64 rounded-lg bg-primary/5 border-2 border-dashed border-border hover:border-accent transition-all duration-300 overflow-hidden flex items-center justify-center cursor-pointer hover:bg-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 group-hover:to-primary/20 transition-all"></div>
              <div className="relative z-10 text-center">
                <Play size={48} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-foreground font-semibold">{video.placeholder}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
