import { z } from 'zod'
import { SERVICE_SLUGS } from './constants'

export const ContactFormSchema = z.object({
  nome: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
  cognome: z.string().min(2, 'Il cognome deve avere almeno 2 caratteri'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  telefono: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\+?39?[\s-]?[\d\s\-]{8,14}$/.test(val),
      'Numero di telefono non valido'
    ),
  servizio: z.enum(SERVICE_SLUGS, { message: 'Seleziona un servizio' }),
  messaggio: z
    .string()
    .min(20, 'Il messaggio deve avere almeno 20 caratteri')
    .max(1000, 'Il messaggio non può superare 1000 caratteri'),
  privacy: z.literal(true, { message: 'Devi accettare la privacy policy' }),
})

export type ContactFormValues = z.infer<typeof ContactFormSchema>
