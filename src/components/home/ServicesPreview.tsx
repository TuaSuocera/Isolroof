import Link from 'next/link'
import { SERVICES, SERVICE_ICONS } from '@/lib/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <AnimatedSection>
          <SectionTitle
            eyebrow="I nostri servizi"
            title="Tutto quello che serve al tuo tetto"
            subtitle="Offriamo soluzioni complete per ogni esigenza, dalla diagnostica alla realizzazione, con materiali certificati e garanzia sul lavoro."
            center
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <Link
                href={`/servizi/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-lg"
              >
                <div className="mb-6 text-4xl">{SERVICE_ICONS[service.slug]}</div>
                <h3 className="mb-3 text-lg font-bold text-brand-black group-hover:text-brand-red transition-colors">
                  {service.name}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-brand-gray">
                  {service.shortDescription}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-red">
                  Scopri di più
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
  )
}
