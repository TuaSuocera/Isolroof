import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Inserisci nome e cognome'),
  phone: z.string().min(6, 'Telefono non valido').max(30),
  email: z.string().email('Email non valida'),
  service: z.enum(['impermeabilizzazione', 'resina', 'tegola_canadese', 'manutenzione', 'altro'] as const),
  notes: z.string().max(1000).optional(),
})

export type ContactFormValues = z.infer<typeof ContactFormSchema>
