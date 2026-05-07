import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { localBusinessJsonLd } from '@/lib/seo'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Isolroof — Impermeabilizzazioni, resine e tegola canadese',
  description:
    'Isolroof è specializzata in impermeabilizzazioni di coperture, applicazione di resine continue e posa di tegola canadese. Sopralluogo gratuito, garanzia decennale sulla posa.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://isolroof.it'),
  openGraph: {
    siteName: 'Isolroof',
    locale: 'it_IT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={archivo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
