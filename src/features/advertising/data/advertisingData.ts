import { Users, Target, Zap, TrendingUp } from 'lucide-react'

export const plans = [
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

export const benefits = [
  {
    icon: Users,
    title: 'Alta Visibilidad',
    description: 'Miles de personas ven tu anuncio diariamente en nuestra ubicación estratégica en el corredor universitario.'
  },
  {
    icon: Target,
    title: 'Audiencia Local',
    description: 'Llega directamente a tu mercado objetivo en Barranquilla y sus alrededores con máxima exposición.'
  },
  {
    icon: Zap,
    title: 'Tecnología LED 11.1 m²',
    description: 'Pantalla LED de alta resolución de 11.1 metros cuadrados que garantiza la mejor calidad visual y máximo impacto.'
  },
  {
    icon: TrendingUp,
    title: 'ROI Comprobado',
    description: 'Nuestros clientes reportan un aumento significativo en sus ventas gracias a la alta visibilidad de la pantalla.'
  }
]


