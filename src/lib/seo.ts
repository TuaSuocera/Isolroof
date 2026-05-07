import type { Metadata } from 'next'
import { COMPANY, SITE_NAME, SITE_URL } from './constants'

interface PageMeta {
  title: string
  description: string
  path?: string
}

export function buildMetadata({ title, description, path = '' }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'it_IT',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
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
