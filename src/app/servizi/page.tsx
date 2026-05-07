import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { SERVICES, SERVICE_ICONS } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CtaStrip from '@/components/home/CtaStrip'

export const metadata: Metadata = buildMetadata({
  title: 'Servizi',
  description: 'Impermeabilizzazioni, lattoneria tetti, applicazione di resine e tegola canadese. Scopri tutti i servizi Isolroof.',
  path: '/servizi',
})

export default function ServiziPage() {
  return (
    <>
      <section className="bg-brand-black pt-28 pb-20">
        <div className="container-site">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-flame">
              Cosa facciamo
            </p>
            <h1 className="text-4xl font-extrabold text-white lg:text-6xl">I nostri servizi</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Soluzioni complete per la protezione e il mantenimento del tuo tetto, dalla diagnostica alla realizzazione.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <Link
                  href={`/servizi/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-lg"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="text-4xl">{SERVICE_ICONS[service.slug]}</div>
                    <h2 className="text-xl font-bold text-brand-black group-hover:text-brand-red transition-colors">
                      {service.name}
                    </h2>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-brand-gray">
                    {service.shortDescription}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-brand-gray">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-red">
                    Approfondisci
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  )
}
