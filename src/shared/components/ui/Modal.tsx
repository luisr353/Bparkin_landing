'use client'

import { ReactNode, useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export default function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  if (!open) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl'
  }

  return (
    <div
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative h-full w-full flex items-center justify-center p-4">
        <div className={`w-full ${sizeClasses[size]} bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden`}>
          <div className="flex items-center justify-between px-6 py-4 border-b">
            {title ? (
              <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
            ) : <div />}
            <button
              aria-label="Cerrar"
              onClick={onClose}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


