'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="chi-siamo" style={{ padding: '140px 0' }}>
      <div className="wrap about-grid">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--red)',
              marginBottom: 28,
            }}
          >
            chi siamo
          </div>
          <h2
            style={{
              fontWeight: 300,
              fontSize: 'clamp(36px, 5.4vw, 76px)',
              lineHeight: 1.0,
              letterSpacing: '-0.015em',
              textTransform: 'uppercase',
              margin: '0 0 28px',
              maxWidth: '14ch',
            }}
          >
            Isolroof, <b style={{ fontWeight: 800 }}>più che un&apos;impresa di copertura</b>
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#222', margin: '0 0 22px', maxWidth: '54ch' }}>
            <strong style={{ fontWeight: 700 }}>
              ISOLROOF è da anni un riferimento in Italia per chi cerca una copertura sicura, durevole e ben posata.
            </strong>
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#222', margin: '0 0 22px', maxWidth: '54ch' }}>
            Il nostro lavoro è iniziato nel <strong style={{ fontWeight: 700 }}>2008</strong> come piccola squadra
            specializzata nella posa di tegola canadese. Da allora abbiamo
            ampliato i sistemi — impermeabilizzazioni bituminose, guaine ardesiate,
            resine poliuretaniche e poliuree — senza mai cedere il cantiere
            a terzi. Una sola firma sul tetto: la nostra.
          </p>
          <a
            href="#servizi"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 14,
              textDecoration: 'none',
              color: 'var(--ink)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 8,
              transition: 'color 0.2s, border-color 0.2s',
            }}
            className="about-more-link"
          >
            SCOPRI DI PIÙ →
          </a>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: start;
        }
        @media (max-width: 1000px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        .about-more-link:hover {
          color: var(--red) !important;
          border-color: var(--red) !important;
        }
      `}</style>
    </section>
  )
}
