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

const workLinks = [
  { label: 'Collabora con noi', href: '/lavora-con-noi/collabora' },
  { label: 'Richiedi assunzione', href: '/lavora-con-noi/assunzione' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

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

  const close = () => { setMenuOpen(false); setWorkOpen(false) }

  return (
    <>
      <header
        style={{
          position: scrolled ? 'fixed' : 'absolute',
          top: 0, left: 0, right: 0,
          zIndex: 40,
          color: scrolled ? 'var(--ink)' : '#fff',
          background: scrolled ? 'var(--paper)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--rule)' : 'none',
          transition: 'background 0.3s, color 0.3s, border-color 0.3s',
        }}
      >
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 30, paddingBottom: 30, gap: 24 }}>
          {/* Logo */}
          <Link href="/" aria-label="Isolroof" style={{ display: 'block', flexShrink: 0 }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
              alt="Isolroof"
              width={200}
              height={90}
              style={{ height: 90, width: 'auto', display: 'block', filter: scrolled ? 'none' : 'brightness(0) invert(1)', transition: 'filter 0.3s' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header-nav-link"
                style={{ textDecoration: 'none', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'inherit', transition: 'color 0.2s' }}>
                {link.label}
              </a>
            ))}
            {/* Lavora con noi — dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="header-nav-link" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'default', display: 'flex', alignItems: 'center', gap: 6 }}>
                Lavora con noi
                <span style={{ fontSize: 10, transition: 'transform 0.2s', display: 'inline-block', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
              </span>
              <div style={{
                position: 'absolute', top: 'calc(100% + 12px)', right: 0,
                background: 'var(--paper)',
                border: '1px solid var(--rule)',
                minWidth: 220,
                opacity: dropdownOpen ? 1 : 0,
                pointerEvents: dropdownOpen ? 'auto' : 'none',
                transform: dropdownOpen ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 0.2s, transform 0.2s',
              }}>
                {workLinks.map((link) => (
                  <Link key={link.href} href={link.href}
                    style={{ display: 'block', padding: '14px 20px', textDecoration: 'none', fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--rule)', transition: 'color 0.2s, background 0.2s' }}
                    className="dropdown-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Menu button */}
          <button
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            onClick={() => setMenuOpen((v) => !v)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: 'transparent', border: 0, color: 'inherit', fontFamily: 'inherit', fontSize: 13, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer' }}
          >
            <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 5, position: 'relative', width: 24, height: 16 }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 24, height: 2, background: 'currentColor', transformOrigin: 'center', transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ position: 'absolute', top: 7, left: 0, width: 24, height: 2, background: 'currentColor', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ position: 'absolute', top: 14, left: 0, width: 24, height: 2, background: 'currentColor', transformOrigin: 'center', transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </span>
            {menuOpen ? 'CHIUDI' : 'MENU'}
          </button>
        </div>

        <style>{`
          .header-nav-links { display: none !important; }
          @media (min-width: 1081px) { .header-nav-links { display: flex !important; } }
          .header-nav-link:hover { color: var(--red) !important; }
          .dropdown-link:hover { color: var(--red) !important; background: var(--paper-2) !important; }
        `}</style>
      </header>

      {/* Backdrop */}
      <div onClick={close} style={{ position: 'fixed', inset: 0, zIndex: 38, background: 'rgba(0,0,0,0.5)', opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none', transition: 'opacity 0.3s' }} />

      {/* Mobile drawer */}
      <nav style={{ position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 39, width: 'min(360px, 90vw)', background: 'var(--paper)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px var(--pad)', transform: menuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', overflowY: 'auto' }}>
        {/* Background logo — decorative watermark */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) translateX(-90px) rotate(90deg)',
              width: '300vh',
              height: 'min(480px, 128vw)',
              opacity: 0.18,
              display: 'block',
            }}
          />
        </div>

        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close} className="drawer-link"
            style={{ display: 'block', textDecoration: 'none', color: 'var(--ink)', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', textTransform: 'uppercase', lineHeight: 1.15, padding: '12px 0', borderBottom: '1px solid var(--rule)', transition: 'color 0.2s' }}>
            {link.label}
          </a>
        ))}

        {/* Lavora con noi — accordion */}
        <div style={{ borderBottom: '1px solid var(--rule)' }}>
          <button
            onClick={() => setWorkOpen((v) => !v)}
            style={{ width: '100%', background: 'transparent', border: 0, textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', fontFamily: 'inherit', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'var(--ink)', cursor: 'pointer' }}
          >
            Lavora con noi
            <span style={{ fontSize: 20, transform: workOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s', display: 'inline-block' }}>+</span>
          </button>
          <div style={{ overflow: 'hidden', maxHeight: workOpen ? 200 : 0, transition: 'max-height 0.3s ease' }}>
            {workLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={close} className="drawer-sublink"
                style={{ display: 'block', textDecoration: 'none', color: 'var(--muted)', fontSize: 14, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '10px 0 10px 16px', transition: 'color 0.2s' }}>
                → {link.label}
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .drawer-link:hover { color: var(--red) !important; }
          .drawer-sublink:hover { color: var(--red) !important; }
        `}</style>
      </nav>
    </>
  )
}
