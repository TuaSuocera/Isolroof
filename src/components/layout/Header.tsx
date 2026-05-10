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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        style={{
          position: scrolled ? 'fixed' : 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
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

          {/* Desktop nav links */}
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
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            onClick={() => setMenuOpen((v) => !v)}
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
            <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 5, position: 'relative', width: 24, height: 16 }}>
              <span style={{
                position: 'absolute', top: 0, left: 0,
                width: 24, height: 2, background: 'currentColor',
                transformOrigin: 'center',
                transition: 'transform 0.3s, opacity 0.3s, top 0.3s',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                position: 'absolute', top: 7, left: 0,
                width: 24, height: 2, background: 'currentColor',
                transition: 'opacity 0.3s',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                position: 'absolute', top: 14, left: 0,
                width: 24, height: 2, background: 'currentColor',
                transformOrigin: 'center',
                transition: 'transform 0.3s, opacity 0.3s, top 0.3s',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }} />
            </span>
            {menuOpen ? 'CHIUDI' : 'MENU'}
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

      {/* Mobile drawer */}
      <div
        onClick={close}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 38,
          background: 'rgba(0,0,0,0.5)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      />
      <nav
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 39,
          width: 'min(360px, 90vw)',
          background: 'var(--paper)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px var(--pad)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            style={{
              display: 'block',
              textDecoration: 'none',
              color: 'var(--ink)',
              fontSize: 'clamp(28px, 6vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              lineHeight: 1.15,
              padding: '14px 0',
              borderBottom: i < navLinks.length - 1 ? '1px solid var(--rule)' : 'none',
              transition: 'color 0.2s',
            }}
            className="drawer-link"
          >
            {link.label}
          </a>
        ))}
        <style>{`
          .drawer-link:hover { color: var(--red) !important; }
        `}</style>
      </nav>
    </>
  )
}
