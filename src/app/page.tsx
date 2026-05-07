import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ServicesPreview from '@/components/home/ServicesPreview'
import StatsBar from '@/components/home/StatsBar'
import WhyUs from '@/components/home/WhyUs'
import CtaStrip from '@/components/home/CtaStrip'
import { COMPANY, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — Impermeabilizzazioni e Lattoneria Tetti`,
  description: COMPANY.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <StatsBar />
      <WhyUs />
      <CtaStrip />
    </>
  )
}
