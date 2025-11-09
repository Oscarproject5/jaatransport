'use client'

import { Truck } from 'lucide-react'
import TrackedPhoneLink from './TrackedPhoneLink'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
      <div className="container-custom max-w-full">
        <div className="flex items-center justify-between h-16 md:h-20 px-3 sm:px-4 gap-3">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 active:scale-95 transition-transform flex-shrink-0"
          >
            <div className="bg-primary p-2 rounded-lg">
              <Truck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-base sm:text-lg md:text-xl leading-tight">JAA TRANSPORT</span>
              <span className="text-secondary text-[10px] sm:text-xs md:text-sm leading-tight font-semibold">RGV Step Deck</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-secondary hover:text-primary font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-secondary hover:text-primary font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-secondary hover:text-primary font-medium transition-colors">
              Testimonials
            </button>
          </nav>

          {/* CTA Section - Right side, vertically centered */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            <TrackedPhoneLink
              phoneNumber="9563726956"
              displayText="(956) 372-6956"
              location="header"
              className="text-primary hover:text-primary-dark font-bold text-lg sm:text-xl md:text-xl transition-colors select-text cursor-pointer whitespace-nowrap"
            />
            <button
              onClick={() => scrollToSection('quote')}
              className="hidden md:block bg-accent hover:bg-yellow-400 text-primary-dark font-bold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
