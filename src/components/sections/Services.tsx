'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    name: 'Impermeabilizzazione tetti',
    body: 'Membrane bituminose APP/SBS, guaine ardesiate, sistemi a doppio strato con risvolti certificati. Interveniamo su tetti piani, terrazze, balconi, lastrici solari e coperture industriali.',
    specs: ['Doppio strato', 'Risvolti certificati', 'Garanzia 10 anni'],
    img: '/works/work-02.jpg',
  },
  {
    num: '02',
    name: 'Resine continue',
    body: 'Resine poliuretaniche e poliuree spruzzate ad alta densità. Superfici monolitiche senza giunti, calpestabili, con finitura personalizzabile per terrazzi, vasche e coperture tecniche.',
    specs: ['Senza giunti', 'Calpestabile', 'Finitura su misura'],
    img: '/works/work-03.jpg',
  },
  {
    num: '03',
    name: 'Tegola canadese',
    body: 'Shingles bituminosi in fibra di vetro: estetica residenziale calda, leggerezza strutturale, posa rapida e resa impeccabile su falde inclinate. Disponibili in più colori e profili.',
    specs: ['Fino a 30 anni', 'Multicolor', 'Falde inclinate'],
    img: '/works/work-01.jpg',
  },
  {
    num: '04',
    name: 'Manutenzione & ripristini',
    body: 'Diagnosi infiltrazioni, sigillatura giunti, sostituzione lattonerie, manutenzione programmata su contratto annuale. Interventi rapidi anche in urgenza.',
    specs: ['Diagnosi inclusa', 'Pronto intervento', 'Contratti annuali'],
    img: '/works/work-02.jpg',
  },
]

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section id="servizi" style={{ background: 'var(--paper-2)', padding: '140px 0' }}>
      <style>{`
        :root { --paper-2: #f5f3ef; }
        .svc-row-head:hover .svc-row-name { color: var(--red) !important; }
        .svc-row-head:hover .svc-toggle { background: var(--red) !important; }
        .svc-body {
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .svc-body-inner {
          display: grid;
          grid-template-columns: 80px 1fr 1fr;
          gap: 24px;
          padding: 8px 0 44px;
        }
        @media (max-width: 800px) {
          .svc-body-inner { grid-template-columns: 80px 1fr; }
          .svc-img-col { display: none !important; }
        }
        .services-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-bottom: 80px;
          align-items: end;
        }
        @media (max-width: 1000px) {
          .services-head { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; }
        }
      `}</style>

      <div className="wrap">
        {/* Heading */}
        <motion.div
          className="services-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 28 }}>
              servizi
            </div>
            <h2 style={{ fontWeight: 300, fontSize: 'clamp(36px, 5.4vw, 76px)', lineHeight: 1.0, letterSpacing: '-0.015em', textTransform: 'uppercase', margin: 0 }}>
              <b style={{ fontWeight: 800 }}>I nostri servizi,</b> testimonianza del nostro saper fare
            </h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#333', margin: 0, maxWidth: '48ch' }}>
            Ogni tetto ha bisogno della tecnica giusta. Scegliamo il sistema
            in base al supporto, al clima e all&apos;estetica dell&apos;edificio. Tre
            discipline, una sola squadra.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {services.map((svc, i) => {
            const isOpen = open === i
            return (
              <div key={svc.num} style={{ borderBottom: '1px solid var(--ink)' }}>
                {/* Row header */}
                <div
                  className="svc-row-head"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    gap: 24,
                    alignItems: 'center',
                    padding: '32px 0',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', color: 'var(--muted)' }}>
                    {svc.num} / SVC
                  </span>
                  <span
                    className="svc-row-name"
                    style={{
                      fontSize: 'clamp(22px, 2.6vw, 36px)',
                      fontWeight: 700,
                      letterSpacing: '-0.005em',
                      textTransform: 'uppercase',
                      lineHeight: 1.1,
                      color: isOpen ? 'var(--red)' : 'var(--ink)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {svc.name}
                  </span>
                  <span
                    className="svc-toggle"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: isOpen ? 'var(--red)' : 'var(--ink)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      fontWeight: 300,
                      transition: 'background 0.2s, transform 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </div>

                {/* Body */}
                <div
                  className="svc-body"
                  style={{ maxHeight: isOpen ? 600 : 0 }}
                >
                  <div className="svc-body-inner">
                    <span />
                    <div>
                      <p style={{ fontSize: 17, lineHeight: 1.55, color: '#222', margin: '0 0 18px', maxWidth: '46ch' }}>
                        {svc.body}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {svc.specs.map((spec) => (
                          <li
                            key={spec}
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              letterSpacing: '0.18em',
                              textTransform: 'uppercase',
                              padding: '8px 12px',
                              border: '1px solid var(--ink)',
                            }}
                          >
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="svc-img-col" style={{ aspectRatio: '4/3', position: 'relative', background: '#222' }}>
                      <Image
                        src={svc.img}
                        alt={svc.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
