'use client'

export default function ImageShowcase() {
  return (
    <section className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
      {/* Background Image - Hidden on Mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <img
          src="/image.png"
          alt="JAA TRANSPORT - Step Deck Transportation"
          className="hidden md:block w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image doesn't load
            e.currentTarget.style.display = 'none'
            const parent = e.currentTarget.parentElement
            if (parent) {
              parent.style.background = 'linear-gradient(135deg, #1e3a5f 0%, #2d5780 100%)'
            }
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container-custom px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block bg-accent text-primary-dark px-6 py-2 rounded-full text-sm md:text-base font-bold mb-4 md:mb-6 animate-bounce-subtle">
              ⚡ TRUSTED RGV FREIGHT PARTNER
            </div>

            {/* Main Text */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Professional Step Deck Transportation<br />
              <span className="text-accent">Across South Texas</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
              15+ years of reliable service • 24/7 dispatch • Same-day delivery available
            </p>

            {/* CTA Button */}
            <button
              onClick={() => {
                const element = document.getElementById('quote')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-accent hover:bg-yellow-400 text-primary-dark font-bold px-8 md:px-12 py-4 md:py-5 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              📋 Schedule Your Freight Today
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  )
}
