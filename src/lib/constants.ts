export const SITE_NAME = 'Isolroof'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://isolroof.it'

export const COMPANY = {
  name: 'Isolroof',
  tagline: 'Da 20 anni proteggiamo i tuoi tetti',
  description:
    'Specialisti in impermeabilizzazioni, lattoneria, applicazione di resine e tegola canadese con 20 anni di esperienza e capacità diagnostica avanzata.',
  founded: 2004,
  email: 'info@isolroof.it',
  phone: '+39 000 000 0000',
  address: {
    street: 'Via Example, 1',
    city: 'Città',
    province: 'XX',
    zip: '00000',
    country: 'Italia',
  },
  vatNumber: 'IT00000000000',
} as const

export const SERVICE_ICONS: Record<string, string> = {
  impermeabilizzazioni: '💧',
  'lattoneria-tetti': '🔧',
  'applicazione-resine': '🎨',
  'tegola-canadese': '🏠',
}

export const SERVICE_SLUGS = [
  'impermeabilizzazioni',
  'lattoneria-tetti',
  'applicazione-resine',
  'tegola-canadese',
  'altro',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

export const SERVICES = [
  {
    id: 'impermeabilizzazioni',
    slug: 'impermeabilizzazioni',
    name: 'Impermeabilizzazioni',
    shortDescription:
      "Proteggiamo tetti piani, terrazze e fondazioni dall'infiltrazione d'acqua con sistemi certificati e duraturi.",
    description:
      "L'impermeabilizzazione è il primo presidio contro i danni da acqua. Utilizziamo membrane bituminose, sistemi liquidi poliuretanici ed elastomerici per garantire una tenuta duratura su qualsiasi superficie.",
    longDescription: [
      "L'impermeabilizzazione è il primo e fondamentale presidio contro i danni da acqua. Una membrana deteriorata o assente può causare danni strutturali profondi: dalla comparsa di umidità e muffe nelle pareti, al degrado degli elementi portanti in calcestruzzo o acciaio.",
      "Da Isolroof iniziamo sempre con un'analisi diagnostica della superficie: individuiamo le cause delle infiltrazioni, valutiamo lo stato del manto esistente e scegliamo la soluzione più adatta — che sia una membrana bituminosa tradizionale o un sistema liquido monocomponente. Ogni intervento è documentato e certificato.",
    ],
    features: [
      'Tetti piani e a falde',
      'Terrazze e balconi',
      'Fondazioni e interrati',
      'Membrane bituminose certificate',
      'Sistemi liquidi poliuretanici',
      'Diagnosi infiltrazioni',
    ],
    image: 'https://picsum.photos/800/600?random=10',
    imageAlt: 'Lavori di impermeabilizzazione tetto piano',
  },
  {
    id: 'lattoneria-tetti',
    slug: 'lattoneria-tetti',
    name: 'Lattoneria Tetti',
    shortDescription:
      'Installazione e riparazione di grondaie, pluviali, scossaline e tutti gli elementi metallici del tetto.',
    description:
      "La lattoneria è fondamentale per il corretto deflusso delle acque meteoriche. Lavoriamo zinco, rame, acciaio inox e alluminio con precisione artigianale per garantire impermeabilità e durata nel tempo.",
    longDescription: [
      "La lattoneria è spesso sottovalutata, ma è essenziale per il corretto smaltimento delle acque meteoriche. Grondaie intasate, scossaline mal posate o pluviali danneggiati possono causare infiltrazioni e umidità anche in tetti perfettamente impermeabilizzati.",
      "Lavoriamo con zinco prepatinato, rame, acciaio inox e alluminio. La scelta del materiale dipende dall'estetica dell'edificio, dall'ambiente (costiero, montano, urbano) e dalle esigenze di manutenzione. Ogni elemento è realizzato su misura e installato con precisione artigianale.",
    ],
    features: [
      'Grondaie e pluviali',
      'Scossaline e bavette',
      'Lucernari e abbaini',
      'Canali di deflusso',
      'Zinco, rame e acciaio inox',
      'Riparazioni e manutenzione',
    ],
    image: 'https://picsum.photos/800/600?random=11',
    imageAlt: 'Installazione lattoneria tetto',
  },
  {
    id: 'applicazione-resine',
    slug: 'applicazione-resine',
    name: 'Applicazione Resine',
    shortDescription:
      'Resine poliuretaniche, epossidiche ed elastomeriche per superfici continue, impermeabili e resistenti.',
    description:
      'Le resine rappresentano la soluzione moderna per superfici che richiedono impermeabilità continua senza giunti. Ideali per terrazze, balconi, parcheggi e superfici industriali, garantiscono aderenza e flessibilità nel tempo.',
    longDescription: [
      "Le resine rappresentano la soluzione moderna per superfici che richiedono impermeabilità continua e senza giunti. A differenza delle membrane tradizionali, i sistemi resinosi si adattano perfettamente a qualsiasi geometria — gradini, davanzali, dettagli architettonici complessi — garantendo una tenuta ermetica.",
      "Utilizziamo sistemi certificati con elevata resistenza agli agenti atmosferici, ai raggi UV, all'abrasione e alle variazioni termiche. Disponibili in versioni pedonabili, carrabili e decorative, con una vasta gamma di colori e finiture.",
    ],
    features: [
      'Resine poliuretaniche',
      'Resine epossidiche',
      'Sistemi elastomerici',
      'Trattamenti antiscivolo',
      'Superfici pedonabili e carrabili',
      'Rivestimenti decorativi',
    ],
    image: 'https://picsum.photos/800/600?random=12',
    imageAlt: 'Applicazione resina su terrazza',
  },
  {
    id: 'tegola-canadese',
    slug: 'tegola-canadese',
    name: 'Tegola Canadese',
    shortDescription:
      'Installazione e sostituzione di shingles bituminosi per tetti a falde: estetica moderna e protezione garantita.',
    description:
      'La tegola canadese (o shingle bituminoso) offre un ottimo rapporto tra estetica, leggerezza e durata. Disponibile in diversi colori e finiture, è la scelta ideale per tetti a falde con pendenza moderata o elevata.',
    longDescription: [
      "La tegola canadese (shingle bituminoso) è la soluzione ideale per tetti a falde con pendenza moderata o elevata. Leggera, flessibile e disponibile in decine di colori e finiture — dall'ardesia al legno vissuto — si integra perfettamente in contesti sia moderni che tradizionali.",
      "Lavoriamo con i principali produttori europei e americani, garantendo shingles certificati per resistenza al vento e alla grandine (classi 4 UL 2218). L'installazione è rapida e pulita, con posa di manto traspirante e accessori certificati per una tenuta completa.",
    ],
    features: [
      'Shingles bituminosi certificati',
      'Ampia scelta di colori e finiture',
      'Installazione rapida',
      'Resistenza vento e grandine',
      'Manto traspirante sottostante',
      'Garanzia produttore',
    ],
    image: 'https://picsum.photos/800/600?random=13',
    imageAlt: 'Tetto con tegola canadese',
  },
] as const

export type Service = (typeof SERVICES)[number]

export const GALLERY_CATEGORIES = ['impermeabilizzazioni', 'lattoneria', 'resine', 'tegola'] as const
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number] | 'tutti'

export const GALLERY_ITEMS = [
  { id: 1, category: 'impermeabilizzazioni', src: 'https://picsum.photos/600/400?random=20', alt: 'Impermeabilizzazione tetto piano' },
  { id: 2, category: 'lattoneria', src: 'https://picsum.photos/600/400?random=21', alt: 'Grondaie in rame installate' },
  { id: 3, category: 'resine', src: 'https://picsum.photos/600/400?random=22', alt: 'Pavimento in resina terrazza' },
  { id: 4, category: 'tegola', src: 'https://picsum.photos/600/400?random=23', alt: 'Rifacimento tetto tegola canadese' },
  { id: 5, category: 'impermeabilizzazioni', src: 'https://picsum.photos/600/400?random=24', alt: 'Membrana bituminosa su terrazza' },
  { id: 6, category: 'lattoneria', src: 'https://picsum.photos/600/400?random=25', alt: 'Scossaline e bavette in zinco' },
  { id: 7, category: 'resine', src: 'https://picsum.photos/600/400?random=26', alt: 'Resina poliuretanica garage' },
  { id: 8, category: 'tegola', src: 'https://picsum.photos/600/400?random=27', alt: 'Tegola canadese colore ardesia' },
  { id: 9, category: 'impermeabilizzazioni', src: 'https://picsum.photos/600/400?random=28', alt: 'Impermeabilizzazione balcone' },
] as const

export const STATS = [
  { value: '20+', label: 'Anni di esperienza' },
  { value: '500+', label: 'Progetti completati' },
  { value: '4', label: 'Servizi specializzati' },
  { value: '100%', label: 'Clienti soddisfatti' },
] as const

export const WHY_US = [
  {
    title: 'Diagnostica avanzata',
    description: 'Analizziamo ogni problema con strumenti professionali prima di proporre qualsiasi soluzione. Nessuna approssimazione.',
    icon: '🔍',
  },
  {
    title: 'Problem-solving tecnico',
    description: 'Ogni tetto ha la sua storia. Studiamo la situazione specifica e troviamo la soluzione più efficace, anche nelle casistiche complesse.',
    icon: '⚙️',
  },
  {
    title: '20 anni di esperienza',
    description: 'Dal 2004 lavoriamo su tetti di ogni tipo: dalle ville private agli edifici industriali, con competenza consolidata.',
    icon: '🏆',
  },
  {
    title: 'Materiali certificati',
    description: 'Utilizziamo solo prodotti di primaria qualità, certificati e garantiti dai produttori, per lavori che durano nel tempo.',
    icon: '✅',
  },
] as const

export const NAV_LINKS = [
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Galleria', href: '/galleria' },
  { label: 'Contatti', href: '/contatti' },
] as const
