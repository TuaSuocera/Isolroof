'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [started, target, duration])

  return { count, ref }
}

export default function NumberBand() {
  const { count, ref } = useCountUp(17)

  return (
    <section
      ref={ref}
      style={{
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        padding: '80px 0',
      }}
    >
      <div className="wrap number-band-grid">
        <div
          style={{
            fontWeight: 300,
            fontSize: 'clamp(140px, 22vw, 320px)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            color: 'var(--ink)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
          }}
        >
          {count}
          <sup
            style={{
              fontSize: '0.18em',
              color: 'var(--red)',
              fontWeight: 800,
              marginTop: '0.2em',
            }}
          >
            +
          </sup>
        </div>

        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            lineHeight: 1.4,
            maxWidth: '24ch',
          }}
        >
          ANNI DI ATTIVITÀ
          <span
            style={{
              display: 'block',
              color: 'var(--muted)',
              fontWeight: 400,
              letterSpacing: '0.22em',
              marginTop: 8,
              fontSize: 14,
            }}
          >
            340+ tetti consegnati · 0 subappalti · garanzia decennale sulla posa
          </span>
        </div>
      </div>

      <style>{`
        .number-band-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 780px) {
          .number-band-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </section>
  )
}
