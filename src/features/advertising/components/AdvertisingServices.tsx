import { Monitor } from 'lucide-react'
import Button from '@/shared/components/ui/Button'
import { plans, benefits } from '@/features/advertising/data/advertisingData'

export default function AdvertisingServices() {
  return (
    <section id="publicidad" className="relative z-10 py-20 bg-white">
      {/* Banner destacado de la pantalla LED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary-100 p-4 rounded-full">
              <Monitor className="h-12 w-12 text-secondary-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Publicidad en Pantalla LED de 11.1 m²
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Potencia tu marca con nuestra pantalla publicitaria LED de <strong>11.1 metros cuadrados</strong> ubicada estratégicamente 
            en Barranquilla. Alcanza a miles de personas cada día con el mayor impacto visual de la ciudad.
          </p>
          <div className="bg-secondary-50 rounded-xl p-4 inline-block">
            <p className="text-lg font-semibold text-secondary-700">
              🎯 Pantalla LED de 11.1 m² • Ubicación Premium • Máxima Visibilidad
            </p>
          </div>
        </div>
        
        {/* Anchor para el nav "Precios" */}
        <div id="precios" className="sr-only" />

        {/* Plans estilo brochure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <div className={`rounded-[28px] shadow-2xl p-8 pt-10 ${plan.styles.card}`}>                
                {/* Etiqueta superior con los días */}
                <div className="flex justify-center mb-8">
                  <div className={`px-8 py-3 rounded-full font-extrabold text-xl ${plan.styles.badge}`}>
                    {plan.label}
                  </div>
                </div>
                {/* Lista de detalles */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <span className="mt-1 inline-block w-5 h-5 rounded-full border-2 border-white bg-transparent"></span>
                    <div>
                      <p className="font-bold">Frecuencia</p>
                      <p className="text-sm opacity-90">{plan.frequency}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="mt-1 inline-block w-5 h-5 rounded-full border-2 border-white bg-transparent"></span>
                    <div>
                      <p className="font-bold">Numero de spots día</p>
                      <p className="text-sm opacity-90">{plan.spotsPerDay}</p>
                    </div>
                  </div>
                </div>

                {/* Totales */}
                <div className="text-center">
                  <p className="font-extrabold uppercase tracking-wide opacity-95">Numero de spots totales</p>
                  <div className={`mt-4 px-6 py-3 rounded-full text-2xl font-extrabold ${plan.styles.accent}`}>
                    {plan.totalSpots}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
{/* Benefits */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-secondary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-secondary-600" />
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

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 border border-secondary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Quieres que <span className="bg-primary-200 px-2 rounded">+34,000 clientes</span> potenciales vean tu marca en nuestra pantalla LED de 11.1 m²?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestra pantalla LED de 11.1 metros cuadrados ofrece el costo por impacto más competitivo del mercado. 
            Ocupa tu espacio antes que tu competencia y comienza a captar clientes desde el primer día con la máxima visibilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=573108545652&text=Hola%2C%20estoy%20interesado%20en%20la%20pantalla%20publicitaria%20LED%20de%2011.1%20m²."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                Reservar Mi Espacio en la Pantalla LED
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}