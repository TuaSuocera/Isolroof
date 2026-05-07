import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--ink)', color: '#bdb8af', padding: '64px 0 28px' }}>
      <div className="wrap">
        {/* Top grid */}
        <div className="footer-top">
          {/* Brand + claim */}
          <div>
            <Image
              src="/logo.png"
              alt="Isolroof"
              width={120}
              height={56}
              style={{ height: 56, width: 'auto', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ margin: '18px 0 0', fontSize: 14, maxWidth: 320, lineHeight: 1.5 }}>
              Isolroof — Impermeabilizzazioni, resine continue e tegola canadese. Dal 2008.
            </p>
          </div>

          {/* Servizi */}
          <div>
            <h5 className="footer-h5">Servizi</h5>
            <a href="#servizi" className="footer-link">Impermeabilizzazioni</a>
            <a href="#servizi" className="footer-link">Resine continue</a>
            <a href="#servizi" className="footer-link">Tegola canadese</a>
            <a href="#servizi" className="footer-link">Manutenzione</a>
          </div>

          {/* Azienda */}
          <div>
            <h5 className="footer-h5">Azienda</h5>
            <a href="#chi-siamo" className="footer-link">Chi siamo</a>
            <a href="#lavori" className="footer-link">Lavori</a>
            <a href="#valori" className="footer-link">Valori</a>
            <a href="#contatti" className="footer-link">Contatti</a>
          </div>

          {/* Contatti */}
          <div>
            <h5 className="footer-h5">Contatti</h5>
            <a href="tel:+390000000000" className="footer-link">(+39) 030 000 0000</a>
            <a href="mailto:info@isolroof.it" className="footer-link">info@isolroof.it</a>
            <a href="#contatti" className="footer-link">Via dei Tetti, 12 · BS</a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <span>© {year} ISOLROOF — P.IVA 0000000000</span>
          <span>
            <Link href="/privacy-policy" className="footer-link" style={{ display: 'inline' }}>PRIVACY</Link>
            {' · '}COOKIES · CREDITS
          </span>
        </div>
      </div>

      <style>{`
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 880px) {
          .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        .footer-h5 {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin: 0 0 18px;
          color: #fff;
        }
        .footer-link {
          display: block;
          color: #bdb8af;
          text-decoration: none;
          font-size: 14px;
          padding: 5px 0;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #fff; }
        .footer-bottom {
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
      `}</style>
    </footer>
  )
}
