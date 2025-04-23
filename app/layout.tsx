import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Programa Bienestar Bagó | Evento de Sostenibilidad en Bolivia',
  description: 'Programa Bienestar Bagó - Un compromiso con la sostenibilidad y biodiversidad de Bolivia. Descubre cómo nuestras acciones están logrando un impacto extraordinario en el medio ambiente boliviano.',
  keywords: 'Bienestar Bagó, sostenibilidad Bolivia, biodiversidad, evento Bagó, conservación, medio ambiente, laboratorios Bagó, responsabilidad social',
  authors: [{ name: 'Laboratorios Bagó' }],
  creator: 'Laboratorios Bagó Bolivia',
  publisher: 'Laboratorios Bagó',
  metadataBase: new URL('https://bienestarbago.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Programa Bienestar Bagó | Evento de Sostenibilidad en Bolivia',
    description: 'Programa Bienestar Bagó - Únete a nuestro compromiso con la sostenibilidad y biodiversidad de Bolivia. Descubre nuestro impacto positivo en el medio ambiente.',
    url: 'https://bienestarbago.com',
    siteName: 'Programa Bienestar Bagó',
    images: [
      {
        url: '/images/logo-bago.svg',
        width: 174,
        height: 57,
        alt: 'Logo Bagó',
      },
    ],
    locale: 'es_BO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programa Bienestar Bagó | Evento de Sostenibilidad en Bolivia',
    description: 'Programa Bienestar Bagó - Únete a nuestro compromiso con la sostenibilidad y biodiversidad de Bolivia.',
    images: ['/images/logo-bago.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'sostenibilidad, medio ambiente, biodiversidad'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
