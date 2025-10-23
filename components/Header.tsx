'use client'

import { Truck } from 'lucide-react'

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
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 md:py-4 px-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 active:scale-95 transition-transform"
          >
            <div className="bg-primary p-2 rounded-lg">
              <Truck className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-lg md:text-xl leading-tight">JAA TRANSPORT</span>
              <span className="text-secondary text-xs md:text-sm leading-tight font-semibold">RGV Step Deck</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-secondary hover:text-primary font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-secondary hover:text-primary font-medium transition-colors">
              Industries
            </button>
            <button onClick={() => scrollToSection('about')} className="text-secondary hover:text-primary font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-secondary hover:text-primary font-medium transition-colors">
              Testimonials
            </button>
          </nav>

          {/* Phone Number */}
          <a
            href="tel:+19563726956"
            className="text-primary hover:text-primary-dark font-bold text-lg md:text-xl transition-colors"
          >
            (956) 372-6956
          </a>
        </div>
      </div>
    </header>
  )
}
