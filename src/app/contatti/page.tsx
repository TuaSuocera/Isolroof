import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import ContactForm from '@/components/contatti/ContactForm'
import ContactInfo from '@/components/contatti/ContactInfo'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = buildMetadata({
  title: 'Contatti',
  description: 'Contatta Isolroof per un sopralluogo gratuito. Impermeabilizzazioni, lattoneria, resine e tegola canadese. Rispondiamo entro 24 ore.',
  path: '/contatti',
})

export default function ContattiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-28 pb-20">
        <div className="container-site">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-flame">
              Parliamoci
            </p>
            <h1 className="text-4xl font-extrabold text-white lg:text-6xl">Contattaci</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Raccontaci il tuo problema. Ti risponderemo entro 24 ore e, se necessario, organizziamo un sopralluogo gratuito.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            {/* Info */}
            <AnimatedSection>
              <ContactInfo />
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl bg-brand-light p-8">
                <h2 className="mb-6 text-xl font-bold text-brand-black">
                  Inviaci un messaggio
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
