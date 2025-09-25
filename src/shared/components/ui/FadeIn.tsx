'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function FadeIn({ children, delay = 0.1, y = 16, className = '', as = 'div' }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag: any = motion[as as keyof typeof motion] ?? motion.div

  const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }
  const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }

  return (
    <MotionTag
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}


