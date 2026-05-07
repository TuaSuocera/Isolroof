import type { ContactFormValues } from './validations'

const SERVIZIMAP: Record<string, string> = {
  'impermeabilizzazioni': 'Impermeabilizzazioni',
  'lattoneria-tetti': 'Lattoneria Tetti',
  'applicazione-resine': 'Applicazione Resine',
  'tegola-canadese': 'Tegola Canadese',
  'altro': 'Altro',
}

export async function sendContactEmail(data: ContactFormValues): Promise<void> {
  const subject = `Nuova richiesta da ${data.nome} ${data.cognome} — ${SERVIZIMAP[data.servizio] ?? data.servizio}`
  const html = `
    <h2>Nuova richiesta di contatto</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td><strong>Nome</strong></td><td>${data.nome} ${data.cognome}</td></tr>
      <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
      <tr><td><strong>Telefono</strong></td><td>${data.telefono ?? '—'}</td></tr>
      <tr><td><strong>Servizio</strong></td><td>${SERVIZIMAP[data.servizio] ?? data.servizio}</td></tr>
      <tr><td><strong>Messaggio</strong></td><td style="white-space:pre-wrap">${data.messaggio}</td></tr>
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

  // Dev fallback: log to console
  console.log('[EMAIL] To:', to)
  console.log('[EMAIL] Subject:', subject)
  console.log('[EMAIL] Data:', data)
}
