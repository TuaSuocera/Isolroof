'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoEnded, setVideoEnded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting
        setIsVisible(visible)
        const video = videoRef.current
        if (!video) return
        if (visible && !videoEnded) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [videoEnded])

  const showVideo = isVisible && !videoEnded

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        color: '#fff',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Background video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          filter: 'brightness(0.55) saturate(0.9)',
          opacity: showVideo ? 1 : 0,
          transition: 'opacity 0.8s ease',
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        >
          <source src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hero-video.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* Static image (chiesa3) — shown when video ended or scrolled away */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          filter: 'brightness(0.55) saturate(0.9)',
          opacity: showVideo ? 0 : 1,
          transition: 'opacity 0.8s ease',
          zIndex: 1,
        }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/chiesa3.jpg`}
          alt="Isolroof — coperture"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="wrap"
        style={{
          position: 'relative',
          zIndex: 3,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingTop: 140,
          paddingBottom: 90,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            marginBottom: 36,
            opacity: 0.85,
          }}
        >
          Impermeabilizzazioni · Isolamenti · Lattonerie · Resine · Tegola canadese
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          style={{
            fontWeight: 300,
            fontSize: 'clamp(48px, 8.6vw, 132px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            margin: '0 0 28px',
            maxWidth: '18ch',
          }}
        >
          Tetto su tetto,
          <br />
          <b style={{ fontWeight: 800 }}>dal 2008.</b>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          style={{
            fontSize: 18,
            fontWeight: 400,
            maxWidth: '62ch',
            lineHeight: 1.45,
            color: '#eae6df',
            margin: 0,
          }}
        >
          Siamo specializzati in impermeabilizzazioni di coperture piane e inclinate,
          applicazione di resine continue e posa di tegola canadese.
          Lavoriamo su residenziale, agricolo e industriale come un&apos;unica squadra:
          progetto, materiali, posa.
        </motion.p>
      </div>

      {/* Decorative arrows */}
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: 'var(--pad)',
          zIndex: 3,
          display: 'flex',
          gap: 14,
          color: '#fff',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.22em',
        }}
      >
        <span style={{ opacity: 0.7, cursor: 'pointer' }}>← PREV</span>
        <span style={{ opacity: 0.7, cursor: 'pointer' }}>NEXT →</span>
      </div>

      {/* Scroll indicator */}
      <a
        href="#chi-siamo"
        style={{
          position: 'absolute',
          bottom: 30,
          right: 'var(--pad)',
          zIndex: 3,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        SCROLL ↓
      </a>
    </section>
  )
}
