'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const MAX_FILE_MB = 5

const schema = z.object({
  nome: z.string().min(2, 'Campo obbligatorio'),
  cognome: z.string().min(2, 'Campo obbligatorio'),
  dataNascita: z.string().optional(),
  email: z.string().email('Email non valida'),
  telefono: z.string().min(6, 'Telefono non valido'),
  citta: z.string().optional(),
  posizione: z.enum(['operaio', 'capo_cantiere', 'commerciale', 'amministrativo', 'altro']),
  esperienza: z.enum(['0', '1-3', '3-5', '5+']),
  presentazione: z.string().max(1000).optional(),
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

export default function AssunzionePage() {
  const [submitted, setSubmitted] = useState(false)
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [cvError, setCvError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { posizione: 'operaio', esperienza: '0' },
  })

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setCvError('')
    if (!file) { setCvFile(null); return }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setCvError(`File troppo grande — max ${MAX_FILE_MB} MB`)
      setCvFile(null)
      return
    }
    const ext = file.name.split('.').pop()?.toLowerCase()
    if (!['pdf', 'doc', 'docx'].includes(ext ?? '')) {
      setCvError('Formato non supportato — usa PDF, DOC o DOCX')
      setCvFile(null)
      return
    }
    setCvFile(file)
  }

  const onSubmit = async (data: FormValues) => {
    if (!cvFile) { setCvError('Il curriculum è obbligatorio'); return }
    try {
      await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, tipo: 'assunzione', cvFilename: cvFile.name }),
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
            <b style={{ fontWeight: 800 }}>Entra</b> nel team Isolroof
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--muted)', maxWidth: '54ch', margin: 0 }}>
            Cerchiamo persone motivate, precise e appassionate del lavoro in quota. Invia la tua candidatura spontanea — valutiamo sempre i profili giusti.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ padding: '48px 40px', background: 'var(--paper-2)', borderLeft: '4px solid var(--red)' }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 12 }}>Candidatura inviata</div>
            <p style={{ fontSize: 18, margin: 0, color: 'var(--ink)' }}>Grazie per il tuo interesse. Esamineremo il tuo curriculum e ti contatteremo se il profilo corrisponde alle nostre esigenze.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'grid', gap: 24 }}
          >
            {/* Nome + Cognome */}
            <div className="form-row-2">
              <div>
                <label style={labelStyle}>Nome *</label>
                <input {...register('nome')} type="text" placeholder="Mario" style={inputStyle} className="form-input" />
                {errors.nome && <p style={errorStyle}>{errors.nome.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>Cognome *</label>
                <input {...register('cognome')} type="text" placeholder="Rossi" style={inputStyle} className="form-input" />
                {errors.cognome && <p style={errorStyle}>{errors.cognome.message}</p>}
              </div>
            </div>

            {/* Data nascita + Città */}
            <div className="form-row-2">
              <div>
                <label style={labelStyle}>Data di nascita</label>
                <input {...register('dataNascita')} type="date" style={inputStyle} className="form-input" />
              </div>
              <div>
                <label style={labelStyle}>Città di residenza</label>
                <input {...register('citta')} type="text" placeholder="Brescia" style={inputStyle} className="form-input" />
              </div>
            </div>

            {/* Email + Telefono */}
            <div className="form-row-2">
              <div>
                <label style={labelStyle}>Email *</label>
                <input {...register('email')} type="email" placeholder="mario@example.it" style={inputStyle} className="form-input" />
                {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>Telefono *</label>
                <input {...register('telefono')} type="tel" placeholder="+39 030 000 0000" style={inputStyle} className="form-input" />
                {errors.telefono && <p style={errorStyle}>{errors.telefono.message}</p>}
              </div>
            </div>

            {/* Posizione + Esperienza */}
            <div className="form-row-2">
              <div>
                <label style={labelStyle}>Posizione di interesse *</label>
                <select {...register('posizione')} style={inputStyle} className="form-input">
                  <option value="operaio">Operaio coperture</option>
                  <option value="capo_cantiere">Capo cantiere</option>
                  <option value="commerciale">Commerciale</option>
                  <option value="amministrativo">Amministrativo</option>
                  <option value="altro">Altro</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Anni di esperienza nel settore *</label>
                <select {...register('esperienza')} style={inputStyle} className="form-input">
                  <option value="0">Nessuna esperienza</option>
                  <option value="1-3">1 – 3 anni</option>
                  <option value="3-5">3 – 5 anni</option>
                  <option value="5+">Oltre 5 anni</option>
                </select>
              </div>
            </div>

            {/* Lettera di presentazione */}
            <div>
              <label style={labelStyle}>Lettera di presentazione</label>
              <textarea
                {...register('presentazione')}
                placeholder="Raccontaci di te, della tua esperienza e perché vorresti lavorare con Isolroof…"
                style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
                className="form-input"
              />
            </div>

            {/* CV Upload */}
            <div>
              <label style={labelStyle}>Curriculum vitae * (PDF, DOC, DOCX — max 5 MB)</label>
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                style={{ display: 'none' }}
                id="cv-upload"
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 4 }}>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  style={{ padding: '10px 20px', background: 'transparent', border: '1px solid var(--ink)', color: 'var(--ink)', fontFamily: 'inherit', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', flexShrink: 0, transition: 'background 0.2s, color 0.2s' }}
                  className="cv-btn"
                >
                  Scegli file
                </button>
                <span style={{ fontSize: 14, color: cvFile ? 'var(--ink)' : 'var(--muted)', fontWeight: cvFile ? 600 : 400 }}>
                  {cvFile ? `✓ ${cvFile.name}` : 'Nessun file selezionato'}
                </span>
              </div>
              {cvError && <p style={errorStyle}>{cvError}</p>}
            </div>

            {/* Privacy */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 8 }}>
              <input {...register('privacy')} type="checkbox" id="privacy-assunzione" style={{ marginTop: 3, flexShrink: 0, accentColor: 'var(--red)', width: 16, height: 16 }} />
              <label htmlFor="privacy-assunzione" style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, cursor: 'pointer' }}>
                Ho letto e accetto la <a href="/privacy-policy" style={{ color: 'var(--ink)', fontWeight: 600 }}>Privacy Policy</a>. Autorizzo il trattamento dei dati personali ai sensi del GDPR.
              </label>
            </div>
            {errors.privacy && <p style={{ ...errorStyle, marginTop: -16 }}>{errors.privacy.message}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{ marginTop: 8, padding: '18px 24px', background: 'var(--red)', color: '#fff', border: 0, fontFamily: 'inherit', fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', cursor: isSubmitting ? 'wait' : 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, opacity: isSubmitting ? 0.7 : 1, maxWidth: 380 }}
              className="form-submit"
            >
              <span>Invia candidatura</span>
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
        .cv-btn:hover { background: var(--ink) !important; color: #fff !important; }
      `}</style>
    </main>
  )
}
