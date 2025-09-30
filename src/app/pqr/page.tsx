'use client'

import { useRef, useState } from 'react'
import Card from '@/shared/components/ui/Card'
import Button from '@/shared/components/ui/Button'
import FadeIn from '@/shared/components/ui/FadeIn'
import ReCAPTCHA from 'react-google-recaptcha'
import Header from '@/shared/components/layout/Header'
import Footer from '@/shared/components/layout/Footer'

interface FormDataState {
  name: string
  documentType: string
  document: number
  phone: string
  email: string
  plateOrTicket: string
  date: string
  place: string
  description: string
  files: File[]
}

interface FormErrorsState {
  name?: string
  documentType?: string
  document?: string
  phone?: string
  email?: string
  plateOrTicket?: string
  date?: string
  place?: string
  description?: string
  recaptcha?: string
}

export default function PqrPage() {
  const [data, setData] = useState<FormDataState>({
    name: '',
    documentType: '',
    document: NaN,
    phone: '',
    email: '',
    plateOrTicket: '',
    date: '',
    place: '',
    description: '',
    files: []
  })

  const [errors, setErrors] = useState<FormErrorsState>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

  const validate = (): boolean => {
    const newErrors: FormErrorsState = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[0-9+\-()\s]{7,20}$/

    if (!data.name.trim()) newErrors.name = 'Nombre es requerido'
    if (!data.documentType.trim()) newErrors.documentType = 'Tipo de documento es requerido'
    if (!Number.isFinite(data.document) || data.document <= 0) newErrors.document = 'Documento es requerido'
    if (!data.phone.trim() || !phoneRegex.test(data.phone)) newErrors.phone = 'Teléfono inválido'
    if (!data.email.trim() || !emailRegex.test(data.email)) newErrors.email = 'Email inválido'
    if (!data.plateOrTicket.trim()) newErrors.plateOrTicket = 'Placa o tiquete es requerido'
    if (!data.date.trim()) newErrors.date = 'Fecha del siniestro es requerida'
    if (!data.place.trim()) newErrors.place = 'Lugar del siniestro es requerido'
    if (!data.description.trim() || data.description.length < 10) newErrors.description = 'Agrega una descripción más detallada'
    if (!recaptchaToken) newErrors.recaptcha = 'Confirma el reCAPTCHA'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const [ticketId, setTicketId] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      // Validar reCAPTCHA en el servidor antes de proceder
      const verify = await fetch('/api/recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: recaptchaToken }),
      }).then((r) => r.json()).catch(() => ({ success: false }))

      if (!verify?.success) {
        setErrors((prev) => ({ ...prev, recaptcha: 'No pudimos validar el reCAPTCHA. Inténtalo nuevamente.' }))
        return
      }
      // Enviar PQR a API interna que integra con Power Automate
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('documentType', data.documentType)
      formData.append('document', String(data.document))
      formData.append('phone', data.phone)
      formData.append('email', data.email)
      formData.append('plateOrTicket', data.plateOrTicket)
      formData.append('date', data.date)
      formData.append('place', data.place)
      formData.append('description', data.description)
      formData.append('recaptchaToken', recaptchaToken || '')
      data.files.forEach((f) => formData.append('files', f))

      const res = await fetch('/api/pqr', { method: 'POST', body: formData })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json?.success) {
        setErrors((prev) => ({ ...prev, recaptcha: undefined }))
        alert('No pudimos registrar tu PQR. Intenta nuevamente en unos minutos.')
        return
      }

      setTicketId(json?.consecutivo ?? null)
      setSubmitted(true)
      // Limpieza opcional
      setData({
        name: '',
        documentType: '',
        document: NaN,
        phone: '',
        email: '',
        plateOrTicket: '',
        date: '',
        place: '',
        description: '',
        files: []
      })
      setRecaptchaToken(null)
      recaptchaRef.current?.reset()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeIn y={16}>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Peticiones, Quejas y Reclamos (PQR)</h1>
              <p className="text-gray-600 mt-3">Diligencia el siguiente formulario y nuestro equipo te contactará.</p>
            </FadeIn>
          </div>

          <Card>
            {submitted ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-primary-600">¡Hemos recibido tu solicitud!</h2>
                <p className="text-gray-600 mt-2">Te contactaremos pronto con la respuesta.</p>
                {ticketId && (
                  <p className="text-gray-800 font-semibold mt-4">Consecutivo: {ticketId}</p>
                )}
                <div className="mt-6">
                  <Button onClick={() => setSubmitted(false)}>Enviar otro PQR</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de documento</label>
                    <select
                      value={data.documentType}
                      onChange={(e) => setData({ ...data, documentType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="CC">Cédula de Ciudadanía (CC)</option>
                      <option value="CE">Cédula de Extranjería (CE)</option>
                      <option value="NIT">NIT</option>
                      <option value="TI">Tarjeta de Identidad (TI)</option>
                      <option value="PAS">Pasaporte</option>
                    </select>
                    {errors.documentType && <p className="text-sm text-red-600 mt-1">{errors.documentType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del cliente</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Documento</label>
                    <input
                      type="number"
                      value={data.document}
                      onChange={(e) => setData({ ...data, document: Number(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="1111111111"
                    />
                    {errors.document && <p className="text-sm text-red-600 mt-1">{errors.document}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Ej: +57 300 123 4567"
                    />
                    {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Placa / Tiquete</label>
                    <input
                      type="text"
                      value={data.plateOrTicket}
                      onChange={(e) => setData({ ...data, plateOrTicket: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Placa del vehículo o número de tiquete"
                    />
                    {errors.plateOrTicket && <p className="text-sm text-red-600 mt-1">{errors.plateOrTicket}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fecha del siniestro</label>
                    <input
                      type="date"
                      value={data.date}
                      onChange={(e) => setData({ ...data, date: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                    {errors.date && <p className="text-sm text-red-600 mt-1">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lugar del siniestro</label>
                  <input
                    type="text"
                    value={data.place}
                    onChange={(e) => setData({ ...data, place: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Ej: Parqueadero Clínica Porto Azul Auna, Barranquilla"
                  />
                  {errors.place && <p className="text-sm text-red-600 mt-1">{errors.place}</p>}
                </div>

                <div>
                  <label className="block text sm font-medium text-gray-700 mb-2">Descripción</label>
                  <textarea
                    rows={5}
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Cuéntanos qué sucedió con la mayor cantidad de detalles posible"
                  />
                  {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adjuntos (fotos/PDF)</label>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    multiple
                    onChange={(e) => {
                      const files = e.target.files ? Array.from(e.target.files) : []
                      setData({ ...data, files })
                    }}
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Formatos permitidos: JPG, PNG, PDF. Máximo 10 archivos.</p>
                </div>

                <div className="space-y-2">
                  {siteKey ? (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={siteKey}
                      onChange={(token) => setRecaptchaToken(token)}
                    />
                  ) : (
                    <p className="text-sm text-amber-600">Configura <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> para habilitar reCAPTCHA.</p>
                  )}
                  {errors.recaptcha && <p className="text-sm text-red-600">{errors.recaptcha}</p>}
                </div>

                <div>
                  <Button type="submit" size="lg" disabled={submitting} className="w-full transition-base hover-raise">
                    {submitting ? 'Enviando...' : 'Enviar PQR'}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}


