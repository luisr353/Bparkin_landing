import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BParking - Alquiler de Parqueaderos en Barranquilla',
  description: 'Servicios de parqueadero por horas y publicidad en pantallas LED en Barranquilla. Carros desde $5.000 COP, motos desde $3.000 COP.',
  keywords: 'parqueadero, Barranquilla, alquiler, carros, motos, publicidad, pantalla LED',
  openGraph: {
    title: 'BParking - Alquiler de Parqueaderos en Barranquilla',
    description: 'Servicios de parqueadero por horas y publicidad en pantallas LED',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}