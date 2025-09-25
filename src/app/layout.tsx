import type { Metadata } from 'next'
import './globals.css'
import PageTransition from '@/shared/components/layout/PageTransition'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'BParking - Alquiler de Parqueaderos en Barranquilla',
  description: 'Servicios de parqueadero por horas y publicidad en pantallas LED en Barranquilla. Carros desde $5.000 COP, motos desde $3.000 COP.',
  keywords: 'parqueadero, Barranquilla, alquiler, carros, motos, publicidad, pantalla LED',
  openGraph: {
    title: 'BParking - Alquiler de Parqueaderos en Barranquilla',
    description: 'Servicios de parqueadero por horas y publicidad en pantallas LED',
    type: 'website',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/brand/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/brand/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/brand/favicon.ico'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}