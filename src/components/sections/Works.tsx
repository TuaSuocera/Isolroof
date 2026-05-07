'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const works = [
  {
    img: '/works/work-01.jpg',
    title: 'Tegola canadese su falda',
    sub: 'Posa shingles · Residenziale',
    year: '2025',
    tall: false,
  },
  {
    img: '/works/work-02.jpg',
    title: 'Capannone industriale',
    sub: 'Impermeabilizzazione · 2.400 m²',
    year: '2024',
    tall: true,
  },
  {
    img: '/works/work-03.jpg',
    title: 'Risanamento copertura',
    sub: 'Resina poliuretanica',
    year: '2024',
    tall: true,
  },
  {
    img: '/works/work-01.jpg',
    title: 'Villa unifamiliare',
    sub: 'Tegola canadese · Falde inclinate',
    year: '2023',
    tall: false,
  },
]

export default function Works() {
  return (
    <section id="lavori" style={{ padding: 0, background: '#000', color: '#fff' }}>
      {/* Heading */}
      <div
        className="wrap works-head"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 28 }}>
            lavori recenti
          </div>
          <h2 style={{ fontWeight: 300, fontSize: 'clamp(36px, 5.4vw, 76px)', lineHeight: 1.0, letterSpacing: '-0.015em', textTransform: 'uppercase', margin: 0, color: '#fff' }}>
            <b style={{ fontWeight: 800 }}>Coperture su misura,</b> una per una
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          style={{ color: '#cfcac0', fontSize: 18, lineHeight: 1.55, margin: 0, maxWidth: '46ch' }}
        >
          Ogni edificio ha la sua geometria. Una selezione dei lavori recenti su residenziale e industriale.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="works-grid">
        {works.map((w, i) => (
          <a
            key={i}
            href="#lavori"
            className="work-card"
            style={{ aspectRatio: w.tall ? '4/5' : '4/3' }}
          >
            <div className="work-img">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}${w.img}`}
                alt={w.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7))',
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 32,
                right: 32,
                bottom: 28,
                zIndex: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: 18,
              }}
            >
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'uppercase', lineHeight: 1.05 }}>
                  {w.title}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cfcac0', marginTop: 6 }}>
                  {w.sub}
                </div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', flexShrink: 0 }}>
                {w.year}
              </div>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .works-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          padding-top: 120px;
          padding-bottom: 60px;
        }
        @media (max-width: 1000px) {
          .works-head { grid-template-columns: 1fr; gap: 24px; padding-top: 80px; padding-bottom: 40px; }
        }
        .works-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
        }
        @media (max-width: 900px) {
          .works-grid { grid-template-columns: 1fr; }
        }
        .work-card {
          position: relative;
          overflow: hidden;
          text-decoration: none;
          color: #fff;
          display: block;
        }
        .work-img {
          position: absolute;
          inset: 0;
          transition: transform 0.6s ease;
        }
        .work-card:hover .work-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}
