import type { Metadata } from 'next'
import { COMPANY, SERVICES, SITE_NAME, SITE_URL } from './constants'

interface PageMeta {
  title: string
  description: string
  path?: string
  rawTitle?: boolean
}

export function buildMetadata({ title, description, path = '', rawTitle = false }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = rawTitle ? title : `${title} | ${SITE_NAME}`
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'it_IT',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  }
}

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: COMPANY.name,
  description: COMPANY.description,
  url: SITE_URL,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.province,
    postalCode: COMPANY.address.zip,
    addressCountry: 'IT',
  },
  foundingDate: String(COMPANY.founded),
  areaServed: {
    '@type': 'Country',
    name: 'Italy',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi Isolroof',
    itemListElement: [
      'Impermeabilizzazioni',
      'Lattoneria Tetti',
      'Applicazione Resine',
      'Tegola Canadese',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

export function serviceJsonLd(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'RoofingContractor',
      name: COMPANY.name,
      url: SITE_URL,
      telephone: COMPANY.phone,
    },
    url: `${SITE_URL}/servizi/${service.slug}`,
    areaServed: {
      '@type': 'Country',
      name: 'Italy',
    },
    image: service.image,
  }
}
