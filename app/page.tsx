import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Services />
      <About />
    </div>
  )
}
