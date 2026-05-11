# Aggiungi nuova sezione alla homepage

Crea e integra una nuova sezione nella homepage di Isolroof.

## Come usare
Specifica il tipo di sezione come argomento, es: `/add-section testimonianze`

## Passi da seguire

1. Chiedi all'utente (se non già specificato):
   - Nome/ID della sezione (es. `testimonianze`, `numeri`, `faq`)
   - Contenuto testuale da inserire
   - Posizione nella pagina (dopo quale sezione esistente)

2. Crea il file `src/components/sections/NomeSezione.tsx` seguendo queste convenzioni:
   - `'use client'` in cima se usa useState/useEffect/framer-motion
   - Palette: `var(--red)` per accenti, `var(--ink)` per testo, `var(--paper)` / `var(--paper-2)` per sfondi
   - Animazioni con `framer-motion`: `whileInView`, `viewport={{ once: false, amount: 0.2 }}`
   - Layout responsive con CSS grid + media queries inline o `<style>` tag
   - Testi solo in italiano

3. Importa e aggiungi la sezione in `src/app/page.tsx` nella posizione corretta.

4. Aggiungi il link di navigazione in `src/components/layout/Header.tsx` nell'array `navLinks` se la sezione merita una voce di menu.

## Struttura base sezione
```tsx
'use client'
import { motion } from 'framer-motion'

export default function NomeSezione() {
  return (
    <section id="id-sezione" style={{ background: 'var(--paper)', padding: '140px 0' }}>
      <div className="wrap">
        {/* label rossa */}
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 28 }}>
          etichetta
        </div>
        {/* titolo */}
        <h2 style={{ fontWeight: 300, fontSize: 'clamp(36px, 5.4vw, 76px)', lineHeight: 1.0, letterSpacing: '-0.015em', textTransform: 'uppercase', margin: '0 0 60px' }}>
          <b style={{ fontWeight: 800 }}>Titolo bold,</b> parte light
        </h2>
        {/* contenuto */}
      </div>
    </section>
  )
}
```

## Note
- Rispetta il design system esistente: niente Tailwind inline se già usi style={{ }}, scegli uno stile coerente con le sezioni vicine.
- Testa sempre su mobile (max-width: 800px) con media query nel `<style>` tag.
