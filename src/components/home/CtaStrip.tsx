import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export default function CtaStrip() {
  return (
    <section className="bg-brand-black py-20">
      <div className="container-site text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-flame">
          Contattaci
        </p>
        <h2 className="text-3xl font-extrabold text-white lg:text-4xl">
          Hai un problema con il tuo tetto?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
          Chiamaci o scrivi: offriamo un sopralluogo diagnostico gratuito per valutare la situazione e proporre la soluzione migliore.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contatti" className="btn-primary px-8 py-4 text-base">
            Richiedi il sopralluogo gratuito
          </Link>
          <a href={`tel:${COMPANY.phone}`} className="btn-outline-white px-8 py-4 text-base">
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
