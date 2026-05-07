'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Isolroof — Home">
            <Image
              src="/logo.png"
              alt="Isolroof"
              width={140}
              height={48}
              className="h-10 w-auto lg:h-12"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-brand-red'
                    : 'text-brand-black hover:text-brand-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contatti" className="btn-primary ml-4">
              Preventivo gratuito
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center rounded-lg p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Apri menu"
          >
            <svg className="h-6 w-6 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
