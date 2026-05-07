import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'

interface ServiceFeaturesProps {
  features: readonly string[]
  title?: string
}

export default function ServiceFeatures({ features, title = 'Cosa includiamo' }: ServiceFeaturesProps) {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container-site">
        <AnimatedSection>
          <SectionTitle eyebrow="Dettagli" title={title} />
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature} delay={i * 0.08}>
              <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-brand-black">{feature}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
