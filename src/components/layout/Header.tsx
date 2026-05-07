'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Lavori', href: '#lavori' },
  { label: 'Valori', href: '#valori' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: scrolled ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        color: scrolled ? 'var(--ink)' : '#fff',
        background: scrolled ? 'var(--paper)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--rule)' : 'none',
        transition: 'background 0.3s, color 0.3s, border-color 0.3s',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 30,
          paddingBottom: 30,
          gap: 24,
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Isolroof" style={{ display: 'block', flexShrink: 0 }}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
            alt="Isolroof"
            width={120}
            height={54}
            style={{
              height: 54,
              width: 'auto',
              display: 'block',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 0.3s',
            }}
            priority
          />
        </Link>

        {/* Desktop nav links — hidden below 1081px via inline style block */}
        <nav className="header-nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header-nav-link"
              style={{
                textDecoration: 'none',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'inherit',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Menu button */}
        <button
          aria-label="Menu"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            background: 'transparent',
            border: 0,
            color: 'inherit',
            fontFamily: 'inherit',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor' }} />
          </span>
          MENU
        </button>
      </div>

      <style>{`
        .header-nav-links { display: none !important; }
        @media (min-width: 1081px) {
          .header-nav-links { display: flex !important; }
        }
        .header-nav-link:hover { color: var(--red) !important; }
      `}</style>
    </header>
  )
}
