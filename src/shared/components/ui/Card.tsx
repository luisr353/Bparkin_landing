import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-base ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}