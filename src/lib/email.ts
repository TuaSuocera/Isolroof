import type { ContactFormValues } from './validations'

const SERVIZIO_LABEL: Record<string, string> = {
  impermeabilizzazione: 'Impermeabilizzazione tetto',
  resina: 'Resina poliuretanica / poliurea',
  tegola_canadese: 'Posa tegola canadese',
  manutenzione: 'Manutenzione / riparazione',
  altro: 'Altro',
}

export async function sendContactEmail(data: ContactFormValues): Promise<void> {
  const subject = `Nuova richiesta da ${data.name} — ${SERVIZIO_LABEL[data.service] ?? data.service}`
  const html = `
    <h2>Nuova richiesta di sopralluogo</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td><strong>Nome</strong></td><td>${data.name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>Telefono</strong></td><td>${data.phone}</td></tr>
      <tr><td><strong>Servizio</strong></td><td>${SERVIZIO_LABEL[data.service] ?? data.service}</td></tr>
      <tr><td><strong>Note</strong></td><td style="white-space:pre-wrap">${data.notes ?? '—'}</td></tr>
    </table>
  `

  const to = process.env.CONTACT_EMAIL ?? 'info@isolroof.it'

  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Isolroof Sito <noreply@isolroof.it>',
      to,
      subject,
      html,
      replyTo: data.email,
    })
    if (error) throw new Error(error.message)
    return
  }

  console.log('[EMAIL] To:', to)
  console.log('[EMAIL] Subject:', subject)
  console.log('[EMAIL] Data:', data)
}
