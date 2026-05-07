import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import GalleryGrid from '@/components/galleria/GalleryGrid'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CtaStrip from '@/components/home/CtaStrip'

export const metadata: Metadata = buildMetadata({
  title: 'Galleria',
  description: 'Guarda i nostri lavori di impermeabilizzazione, lattoneria, resine e tegola canadese. Portfolio fotografico Isolroof.',
  path: '/galleria',
})

export default function GalleriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-28 pb-20">
        <div className="container-site">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-flame">
              Portfolio
            </p>
            <h1 className="text-4xl font-extrabold text-white lg:text-6xl">I nostri lavori</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Alcuni dei progetti completati negli ultimi anni. Ogni intervento è documentato con foto prima e dopo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <GalleryGrid />
        </div>
      </section>

      <CtaStrip />
    </>
  )
}
