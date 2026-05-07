interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight lg:text-4xl ${
          light ? 'text-white' : 'text-brand-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            light ? 'text-gray-300' : 'text-brand-gray'
          } ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
