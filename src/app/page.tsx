import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import NumberBand from '@/components/sections/NumberBand'
import Services from '@/components/sections/Services'
import Values from '@/components/sections/Values'
import Works from '@/components/sections/Works'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = buildMetadata({
  title: 'Isolroof — Impermeabilizzazioni, Lattoneria e Resine',
  description:
    'Specialisti in impermeabilizzazioni di tetti e terrazze, lattoneria, applicazione di resine e tegola canadese. 20 anni di esperienza. Sopralluogo gratuito.',
  path: '',
  rawTitle: true,
})

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
