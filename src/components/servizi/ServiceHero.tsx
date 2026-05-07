import Link from 'next/link'
import Image from 'next/image'

interface ServiceHeroProps {
  name: string
  description: string
  image: string
  imageAlt: string
}

export default function ServiceHero({ name, description, image, imageAlt }: ServiceHeroProps) {
  return (
    <section className="relative bg-brand-black pt-28 pb-20">
      <div className="absolute inset-0 opacity-20">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black" />
      <div className="container-site relative z-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-flame">
          <Link href="/servizi" className="hover:text-white transition-colors">
            Servizi
          </Link>
          {' '}/ {name}
        </p>
        <h1 className="text-4xl font-extrabold text-white lg:text-6xl">{name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">{description}</p>
        <Link href="/contatti" className="btn-primary mt-8 inline-flex">
          Richiedi un preventivo
        </Link>
      </div>
    </section>
  )
}
