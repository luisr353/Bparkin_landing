"use client"

import { Car, Bike, Clock, Shield, CreditCard, MapPin } from 'lucide-react'
import Card from '@/shared/components/ui/Card'
import Button from '@/shared/components/ui/Button'
import { useState } from 'react'
import PricingModal from './PricingModal'
import FadeIn from '@/shared/components/ui/FadeIn'

export default function ParkingServices() {
  const [openPricing, setOpenPricing] = useState(false)

  return (
    <section id="servicios" className="py-20 relative min-h-screen flex items-center">
      <div className="absolute inset-0 gradient-bg opacity-95"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

          {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
          <FadeIn y={16}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nuestros Servicios de Parqueadero
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Ofrecemos soluciones de estacionamiento seguro y confiable en Barranquilla, 
              con tarifas competitivas y servicios de calidad.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-blue-200" />
              <span className="text-blue-200 font-medium">Barranquilla, Colombia</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Parqueadero
              <span className="block text-blue-200">Seguro y Confiable</span>
            </h1>
            
            <FadeIn as="p" className="text-xl text-blue-100 mb-8 leading-relaxed" y={12}>
              Encuentra el espacio perfecto para tu vehículo en Barranquilla. 
              Tarifas competitivas, seguridad garantizada y disponibilidad 24/7.
            </FadeIn>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <FadeIn className="flex items-center space-x-3" delay={0.05}>
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Car className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Carros</p>
                  <p className="text-sm text-blue-200">$6.000 COP</p>
                </div>
              </FadeIn>
              
              <FadeIn className="flex items-center space-x-3" delay={0.1}>
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-sm text-blue-200">Disponible</p>
                </div>
              </FadeIn>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-blue-50 hover:text-primary-600 transition-base hover-raise"
                onClick={() => setOpenPricing(true)}
              >
                Ver Precios
              </Button>

              <a
                href="https://facturacionelectronicaparking.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-blue-50 hover:text-primary-600 transition-base hover-raise"
                >
                  Solicitar Factura Electrónica
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right content - Features card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">¿Por qué elegir B-Parking?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-white">
                  <h4 className="font-semibold mb-1">Seguridad Garantizada</h4>
                  <p className="text-blue-100 text-sm">
                    Vigilancia 24/7 y cámaras de seguridad para proteger tu vehículo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-white">
                  <h4 className="font-semibold mb-1">Horarios Flexibles</h4>
                  <p className="text-blue-100 text-sm">
                    Pago por horas, sin compromisos a largo plazo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="text-white">
                  <h4 className="font-semibold mb-1">Ubicación Estratégica</h4>
                  <p className="text-blue-100 text-sm">
                   Ingreso parqueadero Clinica Porto Azul Auna Sobre la carrera 51B, sobre el corredor universitario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricingModal open={openPricing} onClose={() => setOpenPricing(false)} />
      
    </section>
  )
}