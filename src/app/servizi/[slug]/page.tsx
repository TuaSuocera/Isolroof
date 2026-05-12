import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata, serviceJsonLd } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import ServiceHero from '@/components/servizi/ServiceHero'
import ServiceFeatures from '@/components/servizi/ServiceFeatures'
import ServiceCTA from '@/components/servizi/ServiceCTA'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}
  return buildMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/servizi/${service.slug}`,
  })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const jsonLd = serviceJsonLd(service.slug)

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ServiceHero
        name={service.name}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
      />
      <section className="section-padding bg-white">
        <div className="container-site space-y-4 text-sm leading-relaxed text-brand-gray max-w-3xl">
          {service.longDescription.map((para, i) => (
            <p key={i} className="text-base leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>
      <ServiceFeatures features={service.features} />
      <ServiceCTA />
    </>
  )
}
