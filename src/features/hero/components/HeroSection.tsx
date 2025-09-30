"use client"

import Button from '@/shared/components/ui/Button'
import FadeIn from '@/shared/components/ui/FadeIn'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen isolate">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video/video-b-parking.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-blue-600/30 mix-blend-multiply z-0"></div>
      <div className="absolute inset-0 z-10 flex items-end justify-center pb-32 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl md:max-w-2xl lg:max-w-4xl">
        <FadeIn className="text-center max-w-4xl" y={24}>
          <h1 className="text-white text-3xl sm:text-2xl lg:text-4xl font-extrabold leading-tight drop-shadow-md">
            ¿Quieres que <span className="bg-primary-500 px-2 rounded text-secondary-700">+139.346 clientes</span> potenciales vean tu marca en nuestra pantalla LED de 11.1 m²?
          </h1>
          <div className="mt-8 flex justify-center">
            <a href="#contacto">
              <Button size="lg" className="px-8 transition-base hover-raise">
                Quiero anunciar mi marca
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}