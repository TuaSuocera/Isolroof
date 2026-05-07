import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export default function ServiceCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="rounded-2xl bg-brand-black p-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-flame">
            Contattaci
          </p>
          <h2 className="text-2xl font-extrabold text-white lg:text-3xl">
            Pronto per un sopralluogo gratuito?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-gray-400">
            Valutiamo la situazione senza impegno e ti proponiamo la soluzione più adatta.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contatti" className="btn-primary px-8 py-4">
              Richiedi ora
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-outline-white px-8 py-4">
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
