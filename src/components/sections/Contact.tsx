'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const schema = z.object({
  name: z.string().min(2, 'Inserisci nome e cognome'),
  phone: z.string().min(6, 'Telefono non valido'),
  email: z.string().email('Email non valida'),
  service: z.enum(['impermeabilizzazione', 'resina', 'tegola_canadese', 'manutenzione', 'altro'] as const),
  notes: z.string().max(1000).optional(),
})

type FormValues = z.infer<typeof schema>

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 0,
  borderBottom: '1px solid var(--ink)',
  color: 'var(--ink)',
  fontFamily: 'inherit',
  fontSize: 16,
  padding: '12px 0',
  outline: 'none',
  borderRadius: 0,
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: 6,
}

const errorStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--red)',
  marginTop: 4,
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: 'impermeabilizzazione' },
  })

  const onSubmit = async (data: FormValues) => {
    try {
      await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch {
      // fire-and-forget — show success regardless
    }
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      reset()
    }, 3000)
  }

  return (
    <section id="contatti" style={{ padding: '140px 0 0', background: 'var(--paper)' }}>
      <div className="wrap">
        {/* Heading */}
        <motion.div
          className="contact-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: 64 }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 28 }}>
              contattaci
            </div>
            <h2 style={{ fontWeight: 300, fontSize: 'clamp(36px, 5.4vw, 76px)', lineHeight: 1.0, letterSpacing: '-0.015em', textTransform: 'uppercase', margin: 0 }}>
              <b style={{ fontWeight: 800 }}>Saliamo sul tuo tetto.</b> Senza impegno.
            </h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: '#333', margin: 0, maxWidth: '46ch' }}>
            Sopralluogo gratuito, preventivo dettagliato entro 5 giorni lavorativi.
            Compila il modulo o chiamaci direttamente.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div
          className="contact-grid"
          style={{ borderTop: '1px solid var(--rule)', paddingTop: 60 }}
        >
          {/* Info */}
          <div>
            <dl style={{ margin: 0, display: 'grid', gap: 32 }}>
              {[
                { label: 'Sede', value: 'Via dei Tetti, 12\n25100 Brescia (BS) IT', href: undefined },
                { label: 'Telefono', value: '(+39) 030 000 0000', href: 'tel:+390000000000' },
                { label: 'Email', value: 'info@isolroof.it', href: 'mailto:info@isolroof.it' },
                { label: 'Orari', value: 'Lun – Ven · 8:00 – 18:00', href: undefined },
              ].map((item) => (
                <div key={item.label}>
                  <dt style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
                    {item.label}
                  </dt>
                  <dd style={{ margin: 0, fontSize: 20, fontWeight: 500, color: 'var(--ink)', whiteSpace: 'pre-line' }}>
                    {item.href ? (
                      <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' }} className="contact-info-link">
                        {item.value}
                      </a>
                    ) : item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: 14 }}>
            {/* Name + Phone row */}
            <div className="form-row">
              <div>
                <label style={labelStyle}>Nome e cognome</label>
                <input {...register('name')} type="text" placeholder="Mario Rossi" style={inputStyle} className="form-input" />
                {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>Telefono</label>
                <input {...register('phone')} type="tel" placeholder="+39 ..." style={inputStyle} className="form-input" />
                {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <input {...register('email')} type="email" placeholder="mario@example.it" style={inputStyle} className="form-input" />
              {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
            </div>

            {/* Service */}
            <div>
              <label style={labelStyle}>Tipo di intervento</label>
              <select {...register('service')} style={inputStyle} className="form-input">
                <option value="impermeabilizzazione">Impermeabilizzazione tetto</option>
                <option value="resina">Resina poliuretanica / poliurea</option>
                <option value="tegola_canadese">Posa tegola canadese</option>
                <option value="manutenzione">Manutenzione / riparazione</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label style={labelStyle}>Note</label>
              <textarea
                {...register('notes')}
                placeholder="Superficie, città, urgenza..."
                style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
                className="form-input"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit"
              style={{
                marginTop: 14,
                padding: '18px 24px',
                background: 'var(--red)',
                color: '#fff',
                border: 0,
                fontFamily: 'inherit',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                cursor: isSubmitting ? 'wait' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 14,
                width: '100%',
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              <span>{submitted ? 'RICHIESTA INVIATA' : 'RICHIEDI SOPRALLUOGO GRATUITO'}</span>
              <span style={{ fontWeight: 300 }}>→</span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
        }
        @media (max-width: 1000px) {
          .contact-head { grid-template-columns: 1fr; gap: 24px; }
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
        }
        @media (max-width: 1000px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr; }
        }
        .form-input:focus {
          border-bottom-color: var(--red) !important;
        }
        .form-submit:hover:not(:disabled) {
          background: var(--red-deep) !important;
        }
        .contact-info-link:hover {
          color: var(--red) !important;
        }
      `}</style>
    </section>
  )
}
