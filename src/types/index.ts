export interface ContactFormData {
  nome: string
  cognome: string
  email: string
  telefono?: string
  servizio: string
  messaggio: string
  privacy: boolean
}

export interface GalleryItem {
  id: number
  category: string
  src: string
  alt: string
}
