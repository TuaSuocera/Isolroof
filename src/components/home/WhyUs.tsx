import Link from 'next/link'
import { WHY_US } from '@/lib/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function WhyUs() {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: title + CTA */}
          <AnimatedSection>
            <SectionTitle
              eyebrow="Perché sceglierci"
              title="Diagnosi precisa, soluzione giusta"
              subtitle="Non vendiamo soluzioni preconfezionate. Analizziamo ogni situazione con metodo e competenza, poi proponiamo l'intervento più efficace — anche nei casi più complessi."
            />
            <Link href="/chi-siamo" className="btn-secondary mt-8">
              Scopri la nostra storia
            </Link>
          </AnimatedSection>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY_US.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 text-base font-bold text-brand-black">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-gray">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
