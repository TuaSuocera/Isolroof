import Link from 'next/link'
import Image from 'next/image'
import { COMPANY, NAV_LINKS, SERVICES } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Isolroof"
              width={140}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              {COMPANY.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p>
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </p>
              <p>{COMPANY.address.street}, {COMPANY.address.city} ({COMPANY.address.province})</p>
            </div>
          </div>

          {/* Navigazione */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Navigazione
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servizi */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Servizi
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servizi/${s.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>© {year} {COMPANY.name} — P.IVA {COMPANY.vatNumber}</p>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
