import { Monitor, TrendingUp, Users, Zap, Calendar, Target } from 'lucide-react'
import Card from '@/shared/components/ui/Card'
import Button from '@/shared/components/ui/Button'

export default function AdvertisingServices() {
  // Planes según brochure (30, 15, 7 días)
  const plans = [
    {
      label: '30 días',
      investment: '$ 6.000.000',
      iva: 'IVA incluido',
      frequency: '1 minuto',
      spotsPerDay: '1.140',
      totalSpots: '34.200',
      styles: {
        card: 'bg-secondary-900 text-white',
        badge: 'bg-white text-secondary-900',
        accent: 'bg-white text-secondary-900'
      }
    },
    {
      label: '15 días',
      investment: '$ 4.000.000',
      iva: 'IVA incluido',
      frequency: '1 minuto',
      spotsPerDay: '1.140',
      totalSpots: '17.100',
      styles: {
        card: 'bg-primary-400 text-white',
        badge: 'bg-white text-primary-700',
        accent: 'bg-white text-primary-700'
      }
    },
    {
      label: '7 días',
      investment: '$ 2.000.000',
      iva: 'IVA incluido',
      frequency: '1 minuto',
      spotsPerDay: '1.140',
      totalSpots: '7.980',
      styles: {
        card: 'bg-accent-400 text-white',
        badge: 'bg-white text-accent-700',
        accent: 'bg-white text-accent-700'
      }
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Alta Visibilidad',
      description: 'Miles de personas ven tu anuncio diariamente en nuestra ubicación estratégica.'
    },
    {
      icon: Target,
      title: 'Audiencia Local',
      description: 'Llega directamente a tu mercado objetivo en Barranquilla y sus alrededores.'
    },
    {
      icon: Zap,
      title: 'Tecnología LED',
      description: 'Pantallas LED de alta resolución que garantizan la mejor calidad visual.'
    },
    {
      icon: TrendingUp,
      title: 'ROI Comprobado',
      description: 'Nuestros clientes reportan un aumento significativo en sus ventas.'
    }
  ]

  return (
    <section id="publicidad" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary-100 p-4 rounded-full">
              <Monitor className="h-12 w-12 text-secondary-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Publicidad en Pantalla LED
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Potencia tu marca con nuestra pantalla publicitaria LED ubicada estratégicamente 
            en Barranquilla. Alcanza a miles de personas cada día.
          </p>
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

        {/* Anchor para el nav "Precios" */}
        <div id="precios" className="sr-only" />

        {/* Plans estilo brochure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <div className={`rounded-[28px] shadow-2xl p-8 pt-10 ${plan.styles.card}`}>                
                {/* Etiqueta superior con los días */}
                <div className="flex justify-center mb-8">
                  <div className={`px-8 py-3 rounded-full font-extrabold text-xl ${plan.styles.badge}`}>
                    {plan.label}
                  </div>
                </div>

                {/* Inversión */}
                <div className="mb-8 text-center">
                  <p className="opacity-90 font-semibold">Inversión</p>
                  <p className="text-3xl font-extrabold tracking-tight">{plan.investment}</p>
                  <p className="opacity-90 text-sm">{plan.iva}</p>
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

        {/* CTA Section */}
        <div className="mt-16 text-center bg-secondary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Quieres que +34,000 clientes potenciales vean tu marca este mes?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Nuestras pantallas ofrecen el costo por impacto más competitivo del mercado. Ocupa tu espacio antes que tu competencia y comienza a captar clientes desde el primer día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
                <a href="https://api.whatsapp.com/send?phone=573108545652&text=Hola%2C%20estoy%20interesado%20en%20la%20pantalla%20publicitaria.">
            Reservar Mi Espacio
            </a>
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  )
}