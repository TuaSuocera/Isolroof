import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { COMPANY, STATS, WHY_US } from '@/lib/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CtaStrip from '@/components/home/CtaStrip'

export const metadata: Metadata = buildMetadata({
  title: 'Chi Siamo',
  description: `${COMPANY.name} ha 20 anni di esperienza in impermeabilizzazioni, lattoneria, resine e tegola canadese. Scopri la nostra storia e il nostro approccio.`,
  path: '/chi-siamo',
})

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black pt-28 pb-20">
        <div className="container-site">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-flame">
              La nostra storia
            </p>
            <h1 className="text-4xl font-extrabold text-white lg:text-6xl">
              Chi siamo
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Dal {COMPANY.founded} proteggiamo tetti, terrazze e strutture con competenza tecnica, materiali certificati e un approccio diagnostico che fa la differenza.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Storia */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <SectionTitle
                eyebrow="La nostra storia"
                title="Vent&apos;anni sul campo"
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-gray">
                <p>
                  Isolroof nasce nel {COMPANY.founded} dalla passione per il lavoro ben fatto e dalla consapevolezza che un tetto protetto è la base di ogni struttura duratura. In vent&apos;anni abbiamo affrontato centinaia di situazioni diverse, dalle semplici manutenzioni agli interventi complessi su edifici storici e industriali.
                </p>
                <p>
                  Il nostro punto di forza non è solo la tecnica, ma la diagnostica: prima di ogni intervento analizziamo la situazione con cura, identifichiamo la causa reale del problema e proponiamo la soluzione più efficace — non necessariamente la più costosa.
                </p>
                <p>
                  Lavoriamo con materiali certificati dei migliori produttori europei e aggiorniamo continuamente le nostre competenze per offrire soluzioni all&apos;avanguardia.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-brand-light p-6 text-center"
                  >
                    <p className="text-4xl font-extrabold text-brand-red">{stat.value}</p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-brand-gray">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section-padding bg-brand-light">
        <div className="container-site">
          <AnimatedSection>
            <SectionTitle
              eyebrow="Il nostro approccio"
              title="Come lavoriamo"
              center
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-base font-bold text-brand-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaStrip />
    </>
  )
}
