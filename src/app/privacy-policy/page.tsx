import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-28 pb-20">
      <div className="container-site max-w-3xl">
        <h1 className="mb-8 text-3xl font-extrabold text-brand-black">Privacy Policy</h1>
        <div className="prose prose-sm text-brand-gray space-y-4">
          <p>
            Ai sensi del Regolamento (UE) 2016/679 (GDPR), {COMPANY.name} (P.IVA {COMPANY.vatNumber}) in qualità di Titolare del trattamento informa che i dati personali raccolti attraverso il modulo di contatto sono trattati esclusivamente per rispondere alle richieste degli utenti e per attività di preventivazione.
          </p>
          <h2 className="text-lg font-bold text-brand-black mt-6">Dati raccolti</h2>
          <p>Nome, cognome, indirizzo email, numero di telefono (facoltativo) e messaggio.</p>
          <h2 className="text-lg font-bold text-brand-black mt-6">Finalità e base giuridica</h2>
          <p>Risposta a richieste di contatto e preventivazione (art. 6 par. 1 lett. b GDPR — esecuzione di un contratto o misure precontrattuali).</p>
          <h2 className="text-lg font-bold text-brand-black mt-6">Conservazione</h2>
          <p>I dati sono conservati per il tempo strettamente necessario a evadere la richiesta e comunque non oltre 12 mesi.</p>
          <h2 className="text-lg font-bold text-brand-black mt-6">Diritti</h2>
          <p>L&apos;interessato può esercitare i diritti di accesso, rettifica, cancellazione, limitazione e portabilità scrivendo a{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-brand-red hover:underline">{COMPANY.email}</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
