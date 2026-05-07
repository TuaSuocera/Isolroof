'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema, type ContactFormValues } from '@/lib/validations'

const inputClass = (hasError: boolean) =>
  `w-full border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-red focus:ring-2 focus:ring-red/20 ${
    hasError ? 'border-red' : 'border-rule'
  }`

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { service: 'impermeabilizzazione' },
  })

  async function onSubmit(data: ContactFormValues) {
    try {
      await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch {
      // fire-and-forget
    }
    setStatus('success')
    setTimeout(() => { setStatus('idle'); reset() }, 3000)
  }

  if (status === 'success') {
    return (
      <div className="p-12 text-center">
        <h3 className="text-xl font-bold">Richiesta inviata!</h3>
        <p className="mt-2 text-sm text-muted">Grazie. Ti risponderemo entro 24 ore.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'grid', gap: 14 }}>
      <div className="form-row-2col">
        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Nome e cognome</label>
          <input {...register('name')} placeholder="Mario Rossi" className={inputClass(!!errors.name)} />
          {errors.name && <p style={{ color: 'var(--red)', fontSize: 11 }}>{errors.name.message}</p>}
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Telefono</label>
          <input {...register('phone')} type="tel" placeholder="+39 ..." className={inputClass(!!errors.phone)} />
          {errors.phone && <p style={{ color: 'var(--red)', fontSize: 11 }}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Email</label>
        <input {...register('email')} type="email" placeholder="mario@example.it" className={inputClass(!!errors.email)} />
        {errors.email && <p style={{ color: 'var(--red)', fontSize: 11 }}>{errors.email.message}</p>}
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Tipo di intervento</label>
        <select {...register('service')} className={inputClass(!!errors.service)}>
          <option value="impermeabilizzazione">Impermeabilizzazione tetto</option>
          <option value="resina">Resina poliuretanica / poliurea</option>
          <option value="tegola_canadese">Posa tegola canadese</option>
          <option value="manutenzione">Manutenzione / riparazione</option>
          <option value="altro">Altro</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Note</label>
        <textarea {...register('notes')} rows={4} placeholder="Superficie, città, urgenza..." className={inputClass(!!errors.notes)} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
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
          width: '100%',
        }}
      >
        {isSubmitting ? 'Invio...' : 'RICHIEDI SOPRALLUOGO GRATUITO →'}
      </button>

      <style>{`
        .form-row-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 540px) { .form-row-2col { grid-template-columns: 1fr; } }
      `}</style>
    </form>
  )
}
