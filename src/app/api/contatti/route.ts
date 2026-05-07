import { ContactFormSchema } from '@/lib/validations'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: Request) {
  const body = await request.json()
  const result = ContactFormSchema.safeParse(body)

  if (!result.success) {
    return Response.json({ error: result.error.flatten() }, { status: 400 })
  }

  try {
    await sendContactEmail(result.data)
    return Response.json({ success: true }, { status: 200 })
  } catch {
    return Response.json({ error: 'Errore interno. Riprova più tardi.' }, { status: 500 })
  }
}
