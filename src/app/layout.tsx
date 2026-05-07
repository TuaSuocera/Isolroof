import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { localBusinessJsonLd } from '@/lib/seo'
import { SITE_NAME, COMPANY } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Impermeabilizzazioni e Lattoneria Tetti`,
    template: `%s | ${SITE_NAME}`,
  },
  description: COMPANY.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://isolroof.it'),
  openGraph: {
    siteName: SITE_NAME,
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
    <html lang="it" className={inter.variable}>
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
