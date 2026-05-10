'use client'

import { motion, type Variants } from 'framer-motion'

const values = [
  {
    title: ['Esperienza', '& ', 'visione'],
    accentIndex: 2,
    body: 'Quasi vent\'anni sul cantiere ci hanno insegnato a leggere ogni tetto. Aggiorniamo costantemente tecniche e materiali per offrire al cliente un servizio completo e durevole.',
  },
  {
    title: ['Tempi', '& ', 'budget'],
    accentIndex: 2,
    body: 'Un metodo rigoroso e preventivi dettagliati ci permettono di rispettare costi e scadenze. Niente sorprese: conosci spesa e tempi prima ancora che saliamo sul tetto.',
  },
  {
    title: ['Posa', '', 'diretta'],
    accentIndex: 2,
    body: 'Nessun subappalto. I tecnici che progettano sono gli stessi che salgono sulla copertura. Una sola squadra, una sola responsabilità: la nostra firma sul lavoro.',
  },
  {
    title: ['Garanzia', '& ', 'assistenza'],
    accentIndex: 2,
    body: 'Garanzia decennale sulla posa, certificazioni dei materiali e manutenzione programmata. Seguiamo il cliente anche nella fase successiva alla consegna del lavoro.',
  },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] } },
}

export default function Values() {
  return (
    <section id="valori" style={{ borderTop: '1px solid var(--rule)', padding: '140px 0' }}>
      <div className="wrap">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: 80, maxWidth: '30ch' }}
        >
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 28 }}>
            i nostri valori
          </div>
          <h2 style={{ fontWeight: 300, fontSize: 'clamp(36px, 5.4vw, 76px)', lineHeight: 1.0, letterSpacing: '-0.015em', textTransform: 'uppercase', margin: 0 }}>
            Scegli noi: <b style={{ fontWeight: 800 }}>valori</b> &amp;{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--red)', fontWeight: 800 }}>competenze</em>
          </h2>
        </motion.div>

        {/* Values grid */}
        <motion.div
          className="values-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {values.map((v, i) => (
            <motion.div key={i} variants={item} className="value-card">
              <h3>
                {v.title[0]}
                <br />
                {v.title[1]}
                <em style={{ fontStyle: 'normal', color: 'var(--red)' }}>{v.title[2]}</em>
              </h3>
              <p>{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
        }
        @media (max-width: 1000px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr; }
        }
        .value-card h3 {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1.2;
          margin: 0 0 18px;
          padding-bottom: 18px;
          border-bottom: 2px solid var(--ink);
        }
        .value-card p {
          font-size: 15px;
          line-height: 1.55;
          color: #333;
          margin: 0 0 14px;
        }
      `}</style>
    </section>
  )
}
