'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GALLERY_ITEMS } from '@/lib/constants'

const CATEGORIES = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'impermeabilizzazioni', label: 'Impermeabilizzazioni' },
  { id: 'lattoneria', label: 'Lattoneria' },
  { id: 'resine', label: 'Resine' },
  { id: 'tegola', label: 'Tegola Canadese' },
]

export default function GalleryGrid() {
  const [active, setActive] = useState('tutti')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const filtered =
    active === 'tutti' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active)

  return (
    <>
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              active === cat.id
                ? 'bg-brand-red text-white'
                : 'bg-gray-100 text-brand-gray hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
            onClick={() => setLightbox({ src: item.src, alt: item.alt })}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30 flex items-center justify-center">
              <svg
                className="h-10 w-10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Chiudi"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-h-[85vh] max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="rounded-xl object-contain max-h-[85vh] w-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
