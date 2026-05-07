import type { MetadataRoute } from 'next'
import { SITE_URL, SERVICES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/chi-siamo', '/servizi', '/galleria', '/contatti'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE_URL}/servizi/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
