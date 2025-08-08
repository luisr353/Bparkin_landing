import { Monitor, TrendingUp, Users, Zap, Calendar, Target } from 'lucide-react'
import Card from '@/shared/components/ui/Card'
import Button from '@/shared/components/ui/Button'

export default function AdvertisingServices() {
  const plans = [
    {
      name: 'Plan Semanal',
      duration: '7 días',
      price: 'Consultar',
      description: 'Perfect para promociones cortas y eventos especiales',
      features: [
        'Exposición durante 7 días consecutivos',
        'Horarios de alta visibilidad',
        'Diseño básico incluido',
        'Reportes de exposición',
        'Soporte técnico incluido'
      ],
      popular: false
    },
    {
      name: 'Plan Quincenal',
      duration: '15 días',
      price: 'Consultar',
      description: 'Ideal para campañas de marketing de mediano plazo',
      features: [
        'Exposición durante 15 días',
        'Horarios premium disponibles',
        'Diseño personalizado',
        'Análisis de audiencia',
        'Soporte prioritario',
        'Modificaciones incluidas'
      ],
      popular: true
    },
    {
      name: 'Plan Mensual',
      duration: '30 días',
      price: 'Consultar',
      description: 'La mejor opción para campañas publicitarias extensas',
      features: [
        'Exposición durante 30 días completos',
        'Horarios premium garantizados',
        'Diseño profesional incluido',
        'Reportes detallados semanales',
        'Soporte 24/7',
        'Cambios ilimitados',
        'Descuento por volumen'
      ],
      popular: false
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

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'ring-2 ring-secondary-600 transform scale-105' : ''}`}
              hover
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-secondary-600 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-3xl font-bold text-secondary-600">{plan.price}</span>
                  <span className="text-gray-500">/ {plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="secondary" 
                className="w-full"
              >
                Solicitar Cotización
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-secondary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para hacer crecer tu negocio?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos te ayudará a crear la campaña publicitaria perfecta 
            para tu marca. Contactanos para una consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Consulta Gratuita
            </Button>
            <Button variant="outline" size="lg">
              Ver Ejemplos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}