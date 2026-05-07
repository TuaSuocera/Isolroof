import { STATS } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function StatsBar() {
  return (
    <section className="bg-brand-red py-16">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-4xl font-extrabold text-white lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-red-200">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
