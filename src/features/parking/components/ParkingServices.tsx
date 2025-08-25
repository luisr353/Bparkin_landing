"use client"

import { Car, Bike, Clock, Shield, CreditCard, MapPin } from 'lucide-react'
import Card from '@/shared/components/ui/Card'
import Button from '@/shared/components/ui/Button'
import { useState } from 'react'
import PricingModal from './PricingModal'

export default function ParkingServices() {
  const [openPricing, setOpenPricing] = useState(false)
  const services = [
    {
      icon: Car,
      title: 'Parqueadero para Carros',
      price: '$6.000 COP',
      period: 'por hora',
      features: [
        'Espacios amplios y seguros',
        'Vigilancia 24/7',
        'Cámaras de seguridad',
        'Fácil acceso vehicular',
        'Ubicación céntrica'
      ],
      color: 'primary'
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Disponible 24/7',
      description: 'Nuestro parqueadero está disponible las 24 horas del día, los 7 días de la semana.'
    },
    {
      icon: Shield,
      title: 'Seguridad Total',
      description: 'Vigilancia permanente y sistema de cámaras para la protección de tu vehículo.'
    },
    {
      icon: CreditCard,
      title: 'Pago Flexible',
      description: 'Acepta efectivo, tarjetas de crédito y débito. Pago por horas sin compromisos.'
    },
    {
      icon: MapPin,
      title: 'Ubicación Privilegiada',
      description: 'En el centro de Barranquilla, con fácil acceso desde las principales vías.'
    }
  ]

  return (
    <section id="servicios" className="py-20 relative min-h-screen flex items-center">
      <div className="absolute inset-0 gradient-bg opacity-95"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

          {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestros Servicios de Parqueadero
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ofrecemos soluciones de estacionamiento seguro y confiable en Barranquilla, 
            con tarifas competitivas y servicios de calidad.
          </p>
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
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Encuentra el espacio perfecto para tu vehículo en Barranquilla. 
              Tarifas competitivas, seguridad garantizada y disponibilidad 24/7.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Car className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Carros</p>
                  <p className="text-sm text-blue-200">$6.000 COP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-sm text-blue-200">Disponible</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-blue-50 hover:text-primary-600"
                onClick={() => setOpenPricing(true)}
              >
                Ver Precios
              </Button>
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

        {/* Services Cards 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colorClasses = service.color === 'primary' 
              ? 'bg-primary-600 text-white' 
              : 'bg-secondary-600 text-white'

            return (
              <Card key={index} className="relative overflow-hidden" hover>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${colorClasses}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-primary-600">
                        {service.price}
                      </span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary-600 text-white hover:bg-primary-700"
                  onClick={() => setOpenPricing(true)}
                >
                  Ver precios 
                </Button>
              </Card>
            )
          })}
        </div>
        */}
        {/* Benefits 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
        */}
      
    </section>
  )
}