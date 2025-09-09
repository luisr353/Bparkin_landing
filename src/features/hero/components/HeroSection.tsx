"use client"

import Image from 'next/image'
import Button from '@/shared/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/img/pantalla.png"
        alt="Pantalla del sistema de parqueadero"
        fill
        priority
        sizes="100vw"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-blue-600/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md">
            ¿Quieres que <span className="bg-primary-200 px-2 rounded">+34,000 clientes</span> potenciales vean tu marca en nuestra pantalla LED de 11.1 m²?
          </h1>
          <div className="mt-8 flex justify-center">
            <a href="#contacto">
              <Button size="lg" className="px-8">
                Quiero anunciar mi marca
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}