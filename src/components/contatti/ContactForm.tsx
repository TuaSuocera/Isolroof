'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema, type ContactFormValues } from '@/lib/validations'
import { SERVICES } from '@/lib/constants'

const SERVIZI_OPTIONS = [
  ...SERVICES.map((s) => ({ value: s.slug, label: s.name })),
  { value: 'altro', label: 'Altro' },
]

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 outline-none transition-all focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 ${
    hasError ? 'border-brand-red' : 'border-gray-200'
  }`

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-brand-black">
        {label}
        {required && <span className="ml-1 text-brand-red">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-brand-red">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  })

  async function onSubmit(data: ContactFormValues) {
    try {
      const res = await fetch('/api/contatti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 p-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-black">Messaggio inviato!</h3>
        <p className="mt-2 text-sm text-brand-gray">
          Grazie per averci contattato. Ti risponderemo entro 24 ore.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-brand-red hover:underline"
        >
          Invia un altro messaggio
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nome" required error={errors.nome?.message}>
          <input {...register('nome')} placeholder="Mario" className={inputClass(!!errors.nome)} />
        </Field>
        <Field label="Cognome" required error={errors.cognome?.message}>
          <input {...register('cognome')} placeholder="Rossi" className={inputClass(!!errors.cognome)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email" required error={errors.email?.message}>
          <input {...register('email')} type="email" placeholder="mario@email.it" className={inputClass(!!errors.email)} />
        </Field>
        <Field label="Telefono" error={errors.telefono?.message}>
          <input {...register('telefono')} type="tel" placeholder="+39 000 000 0000" className={inputClass(!!errors.telefono)} />
        </Field>
      </div>

      <Field label="Servizio di interesse" required error={errors.servizio?.message}>
        <select {...register('servizio')} className={inputClass(!!errors.servizio)} defaultValue="">
          <option value="" disabled>Seleziona un servizio...</option>
          {SERVIZI_OPTIONS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </Field>

      <Field label="Messaggio" required error={errors.messaggio?.message}>
        <textarea {...register('messaggio')} rows={5} placeholder="Descrivi brevemente il problema o la tua richiesta..." className={inputClass(!!errors.messaggio)} />
      </Field>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('privacy')}
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-brand-red focus:ring-brand-red"
          />
          <span className="text-sm text-brand-gray">
            Accetto il trattamento dei dati personali ai sensi del{' '}
            <a href="/privacy-policy" className="text-brand-red hover:underline" target="_blank">
              Regolamento GDPR (UE) 2016/679
            </a>
            . <span className="text-brand-red">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1.5 text-xs text-brand-red">{errors.privacy.message}</p>
        )}
      </div>

      {status === 'error' && (
        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-brand-red">
          Si è verificato un errore. Riprova o contattaci direttamente per email.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Invio in corso...
          </span>
        ) : (
          'Invia messaggio'
        )}
      </button>
    </form>
  )
}
