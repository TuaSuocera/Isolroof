'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <nav className="absolute right-0 top-0 h-full w-72 bg-white px-6 py-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-brand-gray hover:text-brand-black"
          aria-label="Chiudi menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="mt-8 space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-base font-medium text-brand-black transition-colors hover:bg-brand-light hover:text-brand-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-gray-100 pt-8">
          <Link href="/contatti" onClick={onClose} className="btn-primary w-full">
            Richiedi un preventivo
          </Link>
        </div>
      </nav>
    </div>
  )
}
