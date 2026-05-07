import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-brand-black overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-brand-red" />

      <div className="container-site relative z-10 py-32 lg:py-0">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-flame" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-flame">
              Dal {COMPANY.founded} — 20 anni di esperienza
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Proteggiamo i tuoi{' '}
            <span className="text-brand-red">tetti</span>
            <br />
            da 20 anni.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            Impermeabilizzazioni, lattoneria, resine e tegola canadese. Diagnostica avanzata e soluzioni su misura per ogni problema.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contatti" className="btn-primary text-base px-8 py-4">
              Richiedi un preventivo gratuito
            </Link>
            <Link href="/servizi" className="btn-outline-white text-base px-8 py-4">
              Scopri i servizi
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8">
            {[
              { value: '20+', label: 'anni' },
              { value: '500+', label: 'progetti' },
              { value: '100%', label: 'soddisfazione' },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-brand-red">{item.value}</span>
                <span className="text-sm text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  )
}
