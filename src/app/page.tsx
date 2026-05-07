import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import NumberBand from '@/components/sections/NumberBand'
import Services from '@/components/sections/Services'
import Values from '@/components/sections/Values'
import Works from '@/components/sections/Works'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <NumberBand />
      <Services />
      <Values />
      <Works />
      <Contact />
    </>
  )
}
