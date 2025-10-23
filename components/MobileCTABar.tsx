'use client'

import { Phone, MessageSquare } from 'lucide-react'

export default function MobileCTABar() {
  const scrollToQuote = () => {
    const element = document.getElementById('quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] border-t-2 border-primary">
      <div className="grid grid-cols-3 gap-2 p-3">
        {/* Call Button */}
        <a
          href="tel:+19563726956"
          className="flex flex-col items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 px-2 transition-all duration-300 shadow-lg active:scale-95"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-bold">CALL NOW</span>
        </a>

        {/* Text/SMS Button */}
        <a
          href="sms:+19563726956"
          className="flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 px-2 transition-all duration-300 shadow-lg active:scale-95"
        >
          <MessageSquare className="w-5 h-5 mb-1" />
          <span className="text-xs font-bold">TEXT US</span>
        </a>

        {/* Get Quote Button */}
        <button
          onClick={scrollToQuote}
          className="flex flex-col items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-xl py-3 px-2 transition-all duration-300 shadow-lg active:scale-95"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs font-bold">QUOTE</span>
        </button>
      </div>

      {/* Pulsing indicator for attention */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse"></div>
    </div>
  )
}
