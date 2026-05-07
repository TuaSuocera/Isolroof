# CLAUDE.md — Isolroof Website

Questo file descrive il progetto a Claude Code. Leggilo prima di qualsiasi operazione.

## Descrizione del Progetto

Sito web istituzionale per **Isolroof**, azienda italiana specializzata in:

- **Impermeabilizzazioni** — tetti piani, terrazze, balconi, fondazioni
- **Lattoneria dei tetti** — grondaie, pluviali, scossaline, lucernari
- **Applicazione di resine** — resine poliuretaniche, epossidiche, elastomeriche
- **Tegola canadese** — installazione e sostituzione di shingles bituminosi

20 anni di esperienza. Punti di forza: diagnostica avanzata, problem-solving tecnico, ricerca di soluzioni innovative, competenza tecnica elevata. Sito esclusivamente in **italiano**. Non usare mai traduzioni o testi in inglese nel contenuto visibile all'utente.

## Materiale Aziendale

- `materialeAzienda/logo.png` — logo ufficiale (sfondo bianco)
- `public/logo.png` — copia del logo per l'app Next.js

## Tech Stack

| Layer           | Tecnologia                              |
|-----------------|-----------------------------------------|
| Framework       | Next.js 14 (App Router)                 |
| Linguaggio      | TypeScript (strict mode)                |
| Styling         | Tailwind CSS v3                         |
| Componenti UI   | shadcn/ui                               |
| Animazioni      | Framer Motion                           |
| Email API       | Resend (free tier) o Nodemailer + SMTP  |
| Validazione     | Zod (client + server)                   |
| Package manager | pnpm                                    |
| Linting         | ESLint + Prettier                       |

## Variabili d'Ambiente

Copia `.env.example` in `.env.local` e compila i valori:

```env
# Email — scegli Resend oppure Nodemailer
RESEND_API_KEY=re_xxxxx

# oppure Nodemailer + Gmail SMTP:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@isolroof.it
SMTP_PASS=app-password-here

# Destinatario email contatti
CONTACT_EMAIL=info@isolroof.it

# URL del sito (usato per sitemap e OG tags)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Non committare mai `.env.local`. Il file `.env.example` va committato senza valori segreti.

## Comandi di Sviluppo

```bash
# Installazione dipendenze (prima volta)
pnpm install

# Server di sviluppo locale → http://localhost:3000
pnpm dev

# Build di produzione
pnpm build

# Avvio server di produzione (dopo build)
pnpm start

# Type checking
pnpm type-check

# Linting
pnpm lint

# Formatting
pnpm format

# Aggiungere componente shadcn/ui
pnpm dlx shadcn-ui@latest add <component-name>
```

## Struttura Directory

```
c:\progettiClaude\Isolroof\
├── CLAUDE.md
├── .claude/
│   └── settings.local.json
├── package.json
├── pnpm-lock.yaml
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── .env.local                          ← non committare
├── .env.example                        ← committare (senza segreti)
├── .gitignore
├── materialeAzienda/
│   └── logo.png                        ← sorgente logo originale
├── public/
│   ├── logo.png                        ← copia del logo per l'app
│   ├── og-image.jpg                    ← immagine Open Graph default
│   └── gallery/                        ← foto progetti reali
│       ├── impermeabilizzazione-01.jpg
│       ├── lattoneria-01.jpg
│       ├── resine-01.jpg
│       └── tegola-canadese-01.jpg
└── src/
    ├── app/
    │   ├── layout.tsx                  ← Header, Footer, JSON-LD LocalBusiness
    │   ├── page.tsx                    ← Home (/)
    │   ├── globals.css
    │   ├── chi-siamo/
    │   │   └── page.tsx
    │   ├── servizi/
    │   │   ├── page.tsx                ← overview griglia 4 servizi
    │   │   ├── impermeabilizzazioni/page.tsx
    │   │   ├── lattoneria-tetti/page.tsx
    │   │   ├── applicazione-resine/page.tsx
    │   │   └── tegola-canadese/page.tsx
    │   ├── galleria/
    │   │   └── page.tsx
    │   ├── contatti/
    │   │   └── page.tsx
    │   ├── sitemap.ts
    │   ├── robots.ts
    │   └── api/
    │       └── contatti/
    │           └── route.ts            ← POST: validazione Zod + invio email
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx              ← sticky nav con logo e hamburger mobile
    │   │   ├── Footer.tsx              ← dati aziendali, P.IVA, link
    │   │   └── MobileMenu.tsx          ← slide-in mobile (client component)
    │   ├── home/
    │   │   ├── Hero.tsx               ← hero full-width con CTA
    │   │   ├── ServicesPreview.tsx     ← griglia 4 carte servizi
    │   │   ├── StatsBar.tsx           ← "20 anni | 500+ progetti | ..."
    │   │   ├── WhyUs.tsx              ← differentiatori (diagnostica, ricerca)
    │   │   └── Testimonials.tsx       ← citazioni clienti statiche
    │   ├── servizi/
    │   │   ├── ServiceHero.tsx        ← hero riutilizzabile per ogni servizio
    │   │   ├── ServiceFeatures.tsx    ← lista feature del servizio
    │   │   └── ServiceCTA.tsx         ← blocco CTA "Richiedi un preventivo"
    │   ├── galleria/
    │   │   ├── GalleryGrid.tsx        ← griglia masonry con next/image
    │   │   └── GalleryLightbox.tsx    ← lightbox click-to-expand (client)
    │   ├── contatti/
    │   │   ├── ContactForm.tsx        ← form con RHF + Zod (client component)
    │   │   └── ContactInfo.tsx        ← card telefono, email, indirizzo
    │   └── ui/
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── Badge.tsx
    │       └── SectionTitle.tsx
    ├── lib/
    │   ├── email.ts                   ← funzione invio email (Resend/Nodemailer)
    │   ├── validations.ts             ← schema Zod ContactFormSchema
    │   ├── seo.ts                     ← generateMetadata helpers + JSON-LD builders
    │   └── constants.ts               ← dati aziendali, palette colori, servizi
    └── types/
        └── index.ts                   ← interfacce TypeScript condivise
```

## Pagine del Sito

| URL                                 | Pagina               | Componenti principali                      |
|-------------------------------------|----------------------|--------------------------------------------|
| `/`                                 | Home                 | Hero, ServicesPreview, StatsBar, WhyUs     |
| `/chi-siamo`                        | Chi Siamo            | Storia, valori, esperienza, certificazioni |
| `/servizi`                          | Servizi (overview)   | Griglia 4 carte con link                   |
| `/servizi/impermeabilizzazioni`     | Impermeabilizzazioni | ServiceHero, features, CTA                 |
| `/servizi/lattoneria-tetti`         | Lattoneria Tetti     | ServiceHero, features, CTA                 |
| `/servizi/applicazione-resine`      | Applicazione Resine  | ServiceHero, features, CTA                 |
| `/servizi/tegola-canadese`          | Tegola Canadese      | ServiceHero, features, CTA                 |
| `/galleria`                         | Galleria             | GalleryGrid masonry, GalleryLightbox        |
| `/contatti`                         | Contatti             | ContactForm, ContactInfo, mappa            |

## Palette Colori (estratta dal logo)

Il logo usa: **nero** per "Isol" e sagoma tetto, **rosso** per "roof.", **arancione/giallo** per la fiamma.

| Token CSS custom      | HEX       | Uso nel sito                                        |
|-----------------------|-----------|-----------------------------------------------------|
| `--brand-black`       | `#111111` | Testo principale, header, navbar, footer            |
| `--brand-red`         | `#CC0000` | CTA primarie, hover, link attivi, accenti           |
| `--brand-flame`       | `#F57C00` | Icone, badge, highlight sezioni, accenti caldi      |
| `--brand-gray`        | `#4A5568` | Testo secondario, sottotitoli, placeholder          |
| `--brand-light`       | `#F7F8FA` | Sfondi sezione alternati                            |
| `--white`             | `#FFFFFF` | Card, form, sfondi puliti                           |

Definire questi token in `src/app/globals.css` e configurare in `tailwind.config.ts`:

```ts
// tailwind.config.ts — extend colors
colors: {
  brand: {
    black:  '#111111',
    red:    '#CC0000',
    flame:  '#F57C00',
    gray:   '#4A5568',
    light:  '#F7F8FA',
  }
}
```

## Tipografia

- **Font:** `Inter` (Google Fonts) — unico font, pesi 400/500/700/800
- **H1 hero:** `text-5xl md:text-7xl font-extrabold text-brand-black`
- **H2 sezione:** `text-3xl md:text-4xl font-bold text-brand-black`
- **Body:** `text-base font-normal leading-relaxed text-brand-gray`
- **CTA button:** `bg-brand-red text-white font-semibold`
- Nessun font decorativo — registro serio e professionale

## Tono di Voce

- Professionale, diretto, competente. Mai commerciale o aggressivo.
- Linguaggio tecnico dove appropriato con breve spiegazione per i non addetti.
- Prima persona plurale: "Offriamo", "Garantiamo", "Da 20 anni proteggiamo..."
- Valorizzare la diagnostica: Isolroof non vende soluzioni preconfezionate, analizza il problema specifico e propone la soluzione tecnica ottimale.

## Competenze Backend

### API Route — Form Contatti (`src/app/api/contatti/route.ts`)

```typescript
export async function POST(request: Request) {
  const body = await request.json()
  const result = ContactFormSchema.safeParse(body)
  if (!result.success) {
    return Response.json({ error: result.error.flatten() }, { status: 400 })
  }
  await sendEmail(result.data)
  return Response.json({ success: true }, { status: 200 })
}
```

- Validare **sempre** con Zod lato server, anche se il client valida già
- Usare `Response.json()` nativo Next.js 14 (non `NextResponse`)
- Non esporre mai chiavi segrete al client (no `NEXT_PUBLIC_` per API keys)

### SEO e Metadati (`src/lib/seo.ts`)

- Ogni pagina esporta `generateMetadata()` con title, description, canonical, OG tags
- Root `layout.tsx`: JSON-LD `LocalBusiness` con `@type: "RoofingContractor"`, nome, indirizzo, telefono, servizi
- `sitemap.ts`: restituisce array di tutte le URL statiche
- `robots.ts`: blocca `/api/`, permette tutto il resto

### Ottimizzazione Immagini

- Usare sempre `next/image` con `width`, `height`, `alt` in italiano
- Galleria: `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`
- Hero: `priority={true}` per LCP ottimale
- Durante sviluppo: placeholder da `https://picsum.photos/`

## Competenze Frontend

### Server vs Client Components

Default: **Server Component**. Aggiungere `"use client"` solo dove necessario:
- `ContactForm.tsx` — usa React Hook Form + useState
- `GalleryLightbox.tsx` — stato aperto/chiuso
- `MobileMenu.tsx` — toggle hamburger
- Wrapper `AnimatedSection.tsx` — per Framer Motion (evita di "inquinare" i parent)

### Responsive Mobile-First

```
flex-col md:flex-row
text-2xl md:text-4xl
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
min-h-[600px] md:min-h-screen
```

### Animazioni Framer Motion

```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
// <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
```

- `once: true` su tutti i `whileInView` — animazione si attiva una sola volta
- Stagger griglie: `staggerChildren: 0.1` nel parent
- Nessuna animazione eccessiva: solo fade + translate verticale

### Form Contatti

Campi richiesti:
- Nome (min 2 caratteri)
- Cognome (min 2 caratteri)
- Email (formato valido)
- Telefono (opzionale, regex: `^\+?39?[\s-]?[\d\s-]{9,13}$`)
- Servizio di interesse (select: impermeabilizzazioni, lattoneria, resine, tegola canadese, altro)
- Messaggio (min 20 caratteri, max 1000)
- Consenso privacy GDPR (checkbox obbligatorio)

Comportamento:
- Validazione real-time **su blur** (non on-change)
- Messaggio successo inline con Framer Motion fade-in
- Errori API con messaggio user-friendly in italiano
- Loading state sul bottone durante submit (`formState.isSubmitting`)

## Convenzioni di Codice

- TypeScript strict: no `any`, no `as unknown`
- Componenti: PascalCase, un file per componente
- Funzioni helper: camelCase in `src/lib/`
- Costanti: `UPPER_SNAKE_CASE` in `src/lib/constants.ts`
- Solo classi Tailwind — no CSS Modules, no inline styles (eccetto variabili custom in `globals.css`)
- Prettier: `semi: false`, `singleQuote: true`, `printWidth: 100`
- Import order: React → Next → libs esterne → componenti interni → tipi

## Setup Locale — Prima Volta

```powershell
# 1. Creare il progetto Next.js
pnpm create next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Installare dipendenze aggiuntive
pnpm add framer-motion zod resend @hookform/resolvers react-hook-form
pnpm add -D prettier

# 3. Inizializzare shadcn/ui
pnpm dlx shadcn-ui@latest init

# 4. Copiare .env.example in .env.local e compilare le variabili

# 5. Avviare il server di sviluppo
pnpm dev
# → http://localhost:3000
```

## Note Operative

- **Priorità build:** pagine statiche (Home, Chi Siamo, Servizi) → Galleria → Form Contatti + API
- **Niente database:** sito completamente statico lato dati. Contatti arrivano via email.
- **Immagini placeholder:** usare `https://picsum.photos/` durante sviluppo; sostituire con foto reali prima del deploy.
- **Deploy target:** Vercel (zero config per Next.js). In alternativa: VPS con `pnpm build && pnpm start` dietro Nginx.
- **GDPR:** il form deve includere link a `/privacy-policy` (pagina semplice documento legale).
- **P.IVA:** obbligatoria nel footer per i siti aziendali italiani.
- **Non usare `create-react-app`** — deprecato. Solo `pnpm create next-app`.
