import { COMPANY } from '@/lib/constants'

const INFO_ITEMS = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telefono',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Indirizzo',
    value: `${COMPANY.address.street}, ${COMPANY.address.city} (${COMPANY.address.province})`,
    href: undefined,
  },
]

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-red">
          Siamo qui per te
        </p>
        <h2 className="text-2xl font-extrabold text-brand-black lg:text-3xl">
          Contattaci
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-brand-gray">
          Offriamo un sopralluogo diagnostico gratuito. Raccontaci il problema e troveremo insieme la soluzione migliore.
        </p>
      </div>

      <div className="space-y-4">
        {INFO_ITEMS.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="mt-0.5 text-sm font-medium text-brand-black hover:text-brand-red transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="mt-0.5 text-sm font-medium text-brand-black">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Orari */}
      <div className="rounded-2xl bg-brand-light p-6">
        <h3 className="mb-4 text-sm font-bold text-brand-black">Orari di lavoro</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-brand-gray">Lunedì – Venerdì</span>
            <span className="font-medium text-brand-black">08:00 – 18:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-gray">Sabato</span>
            <span className="font-medium text-brand-black">08:00 – 13:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-gray">Domenica</span>
            <span className="font-medium text-brand-gray">Chiuso</span>
          </div>
        </div>
      </div>
    </div>
  )
}
