'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Button from '../ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="p-1">
              <Image
                src="/brand/IconBparking.svg"
                alt="BParking logo"
                width={50}
                height={50}
                priority
              />
            </div>
            
            <span className="text-2xl font-bold text-secondary-700">B-Parking</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-primary-600 transition-colors">
              Servicios
            </a>
            <a href="#publicidadv" className="text-gray-700 hover:text-primary-600 transition-colors">
              Publicidad
            </a>
            <Button size="sm">
              <a href="#contacto">
                Contáctanos
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
            <a href="#publicidadv" className="text-gray-700 hover:text-primary-600 transition-colors">
                Publicidad
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-primary-600 transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contacto
              </a>
              <Button className="w-full">
                Reservar Ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}