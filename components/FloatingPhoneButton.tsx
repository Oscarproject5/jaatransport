'use client'

import { Phone } from 'lucide-react'
import { trackPhoneClick } from '@/utils/googleAnalytics'

export default function FloatingPhoneButton() {
  const handlePhoneClick = () => {
    trackPhoneClick('(956) 372-6956', 'floating_button')
  }

  return (
    <a
      href="tel:+19563726956"
      onClick={handlePhoneClick}
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 group"
      aria-label="Call JAA Transport"
    >
      {/* Pulsing ring effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

      {/* Outer glow ring */}
      <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-50 scale-110"></div>

      {/* Main circular button */}
      <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-active:scale-95">
        <Phone className="w-7 h-7 md:w-8 md:h-8 animate-bounce-subtle" />
      </div>

      {/* Tooltip on hover (desktop) */}
      <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <div className="font-bold">Call Now</div>
        <div className="text-sm">(956) 372-6956</div>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-primary"></div>
        </div>
      </div>
    </a>
  )
}
