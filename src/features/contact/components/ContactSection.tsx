import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react'
import Card from '@/shared/components/ui/Card'
import Button from '@/shared/components/ui/Button'

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+57 3108545652',
      description: 'Llámanos para reservas inmediatas'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'comercial@bparkingsas.com',
      description: 'Escríbenos para cotizaciones'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'Parqueadero Clinica Porto Azul Auna Sobre la carrera 51B, sobre el corredor universitario.',
      description: 'Fácil acceso'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: '24/7 Disponible',
      description: 'Servicio continuo todos los días'
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios? Estamos aquí para ayudarte. 
            Contactanos por cualquiera de nuestros canales de comunicación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-600 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <Card className="bg-primary-50 border-primary-200">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Necesitas ayuda inmediata?
                </h4>
                <p className="text-gray-600 mb-4">
                  Nuestro equipo comercial está disponible para atender tus consultas
                </p>
                <a
                  className="w-full inline-block text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  href="https://api.whatsapp.com/send?phone=573108545652&text=Hola%2C%20estoy%20interesado%20en%20la%20pantalla%20publicitaria%20LED%20de%2011.1%20m²."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos Ahora
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+57 300 123 4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="parking-cars">Parqueadero para Carros</option>
                  <option value="advertising-weekly">Publicidad - Plan Semanal</option>
                  <option value="advertising-biweekly">Publicidad - Plan Quincenal</option>
                  <option value="advertising-monthly">Publicidad - Plan Mensual</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Cuéntanos más sobre lo que necesitas..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>

        {/* Location Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Nuestra Ubicación</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Estamos estratégicamente ubicados Parqueadero Clinica Porto Azul Auna Sobre la carrera 51B, sobre el corredor universitario. 
                con fácil acceso desde las principales vías de la ciudad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:!text-secondary-700">
                Ver en Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}