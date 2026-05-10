'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const schema = z.object({
  ragioneSociale: z.string().min(2, 'Campo obbligatorio'),
  partitaIva: z.string().min(11, 'P.IVA non valida').max(11, 'P.IVA non valida'),
  settore: z.string().min(2, 'Campo obbligatorio'),
  referente: z.string().min(2, 'Campo obbligatorio'),
  email: z.string().email('Email non valida'),
  telefono: z.string().optional(),
  tipoCollaborazione: z.enum(['subappalto', 'fornitura', 'consulenza', 'altro']),
  descrizione: z.string().min(20, 'Descrivi la proposta (min. 20 caratteri)').max(1000),
  privacy: z.literal(true, { message: 'Accetta la privacy policy per continuare' }),
})

type FormValues = z.infer<typeof schema>

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 0,
  borderBottom: '1px solid var(--rule)',
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
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'var(--red)',
  marginTop: 4,
}

export default function CollaboraPage() {
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { tipoCollaborazione: 'subappalto' },
  })

  const onSubmit = async (data: FormValues) => {
    try {
      await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, tipo: 'collaborazione' }),
      })
    } catch { /* fire-and-forget */ }
    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: 140, paddingBottom: 120, minHeight: '100vh' }}>
      <div className="wrap" style={{ maxWidth: 860 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ marginBottom: 64 }}
        >
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 20 }}>
            Lavora con noi
          </div>
          <h1 style={{ fontWeight: 300, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.015em', textTransform: 'uppercase', margin: '0 0 24px' }}>
            <b style={{ fontWeight: 800 }}>Collabora</b> con Isolroof
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--muted)', maxWidth: '54ch', margin: 0 }}>
            Sei un&apos;azienda del settore? Raccontaci la tua realtà e come possiamo lavorare insieme — subappalto, fornitura materiali o consulenza specialistica.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ padding: '48px 40px', background: 'var(--paper-2)', borderLeft: '4px solid var(--red)' }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 12 }}>Richiesta inviata</div>
            <p style={{ fontSize: 18, margin: 0, color: 'var(--ink)' }}>Grazie per averci contattato. Ti risponderemo entro 3 giorni lavorativi.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'grid', gap: 24 }}
          >
            {/* Row 1 */}
            <div className="form-row-2">
              <div>
                <label style={labelStyle}>Ragione sociale *</label>
                <input {...register('ragioneSociale')} type="text" placeholder="Impresa Rossi S.r.l." style={inputStyle} className="form-input" />
                {errors.ragioneSociale && <p style={errorStyle}>{errors.ragioneSociale.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>Partita IVA *</label>
                <input {...register('partitaIva')} type="text" placeholder="12345678901" maxLength={11} style={inputStyle} className="form-input" />
                {errors.partitaIva && <p style={errorStyle}>{errors.partitaIva.message}</p>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-row-2">
              <div>
                <label style={labelStyle}>Settore di attività *</label>
                <input {...register('settore')} type="text" placeholder="Edilizia, impermeabilizzazioni…" style={inputStyle} className="form-input" />
                {errors.settore && <p style={errorStyle}>{errors.settore.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>Nome referente *</label>
                <input {...register('referente')} type="text" placeholder="Mario Rossi" style={inputStyle} className="form-input" />
                {errors.referente && <p style={errorStyle}>{errors.referente.message}</p>}
              </div>
            </div>

            {/* Row 3 */}
            <div className="form-row-2">
              <div>
                <label style={labelStyle}>Email aziendale *</label>
                <input {...register('email')} type="email" placeholder="info@azienda.it" style={inputStyle} className="form-input" />
                {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>Telefono</label>
                <input {...register('telefono')} type="tel" placeholder="+39 030 000 0000" style={inputStyle} className="form-input" />
              </div>
            </div>

            {/* Tipo collaborazione */}
            <div>
              <label style={labelStyle}>Tipo di collaborazione *</label>
              <select {...register('tipoCollaborazione')} style={inputStyle} className="form-input">
                <option value="subappalto">Subappalto lavori</option>
                <option value="fornitura">Fornitura materiali</option>
                <option value="consulenza">Consulenza specialistica</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            {/* Descrizione */}
            <div>
              <label style={labelStyle}>Descrizione della proposta *</label>
              <textarea
                {...register('descrizione')}
                placeholder="Descrivi la tua azienda, le tue competenze e come vorresti collaborare con Isolroof…"
                style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
                className="form-input"
              />
              {errors.descrizione && <p style={errorStyle}>{errors.descrizione.message}</p>}
            </div>

            {/* Privacy */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 8 }}>
              <input {...register('privacy')} type="checkbox" id="privacy-collabora" style={{ marginTop: 3, flexShrink: 0, accentColor: 'var(--red)', width: 16, height: 16 }} />
              <label htmlFor="privacy-collabora" style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, cursor: 'pointer' }}>
                Ho letto e accetto la <a href="/privacy-policy" style={{ color: 'var(--ink)', fontWeight: 600 }}>Privacy Policy</a>. Autorizzo il trattamento dei dati aziendali ai sensi del GDPR.
              </label>
            </div>
            {errors.privacy && <p style={{ ...errorStyle, marginTop: -16 }}>{errors.privacy.message}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{ marginTop: 8, padding: '18px 24px', background: 'var(--red)', color: '#fff', border: 0, fontFamily: 'inherit', fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', cursor: isSubmitting ? 'wait' : 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, opacity: isSubmitting ? 0.7 : 1, maxWidth: 420 }}
              className="form-submit"
            >
              <span>Invia proposta di collaborazione</span>
              <span style={{ fontWeight: 300 }}>→</span>
            </button>
          </motion.form>
        )}
      </div>

      <style>{`
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 640px) { .form-row-2 { grid-template-columns: 1fr; } }
        .form-input:focus { border-bottom-color: var(--red) !important; }
        .form-submit:hover:not(:disabled) { background: var(--red-deep) !important; }
      `}</style>
    </main>
  )
}
