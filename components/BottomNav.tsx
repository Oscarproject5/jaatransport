'use client'

import { Home, Package, Building, MessageSquare } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id: string) => {
    setActiveSection(id)

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'quote']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }

      if (scrollPosition < 100) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Package },
    { id: 'about', label: 'About', icon: Building },
    { id: 'quote', label: 'Quote', icon: MessageSquare, highlight: true },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white border-t-2 border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 relative ${
                item.highlight
                  ? isActive
                    ? 'bg-primary text-white'
                    : 'bg-accent text-primary-dark'
                  : isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-500'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className={`text-[10px] font-semibold ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
              {isActive && !item.highlight && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full"></div>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
