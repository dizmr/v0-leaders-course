"use client"

const facts = [
  { number: "90%+", description: "90% клиентов приходят к нам по рекомендации" },
  { number: "50+", description: "Мы сопровождали запуск более 50 международных проектов" },
  { number: "4 дня", description: "Наш самый быстрый кейс — выигранное дело за 4 дня" },
  { number: "24/7", description: "Мы умеем вести дела на удалёнке от начала до конца" },
]

export default function InterestingFacts() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Интересные факты</h2>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-card border border-border hover:border-accent hover:shadow-xl transition-all duration-300 text-center cursor-pointer ink-shadow-hover skew-block"
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {fact.number}
              </div>
              <p className="text-foreground/80 text-sm group-hover:text-foreground transition-colors">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
