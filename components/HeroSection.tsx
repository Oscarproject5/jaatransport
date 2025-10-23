'use client'

import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const scrollToQuote = () => {
    const element = document.getElementById('quote')
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light lg:bg-none">
      {/* Background Image - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <img
          src="/images/Oversized Loads/3619948323582472618.jpeg"
          alt="JAA Transport Equipment Hauling"
          className="w-full h-full object-cover"
          style={{ objectPosition: '70% center' }}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Background Pattern - Mobile Only */}
      <div className="lg:hidden absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
        }}></div>
      </div>

      {/* Mobile Urgency Banner */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-20 bg-accent text-primary-dark px-4 py-2 text-center font-bold text-sm animate-pulse">
        📞 Same-Day Pickup • Job-Site to Job-Site • Free Quotes
      </div>

      <div className="container-custom px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 md:space-y-6">
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                Local Equipment Transport for Contractors & Businesses
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              STEP DECK & HEAVY EQUIPMENT HAULING <span className="text-accent">IN THE RGV</span>
            </h1>

            <p className="text-base md:text-xl text-gray-200 leading-relaxed">
              We haul your backhoes, skid-steers, mini-excavators between jobsites, from dealers, auctions, or anywhere you need — fast turnaround, fully insured, same-day pickup available.
            </p>

            {/* Hero Image - Between text and buttons on mobile */}
            <div className="lg:hidden my-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <div className="relative h-64">
                  <img
                    src="/images/Oversized Loads/3619948323582472618.jpeg"
                    alt="JAA TRANSPORT - Equipment Hauling"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Trust Badges Overlay - Compact */}
                  <div className="absolute top-2 right-2 flex gap-1.5">
                    <div className="bg-primary/90 backdrop-blur-sm border border-white/20 text-white px-2 py-1 rounded-md shadow-lg text-center">
                      <div className="text-xs font-bold">100%</div>
                      <div className="text-[8px] font-semibold">Insured</div>
                    </div>
                    <div className="bg-accent/95 backdrop-blur-sm border border-white/20 text-primary-dark px-2 py-1 rounded-md shadow-lg text-center">
                      <div className="text-xs font-bold">15+</div>
                      <div className="text-[8px] font-semibold">Years</div>
                    </div>
                    <div className="bg-accent/95 backdrop-blur-sm border border-white/20 text-primary-dark px-2 py-1 rounded-md shadow-lg text-center">
                      <div className="text-xs font-bold">RGV</div>
                      <div className="text-[8px] font-semibold">Local</div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">Your Local RGV Freight Partner</h3>
                    <p className="text-sm text-gray-200">Professional step deck transportation you can trust</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Larger, more prominent CTAs */}
            <div className="flex flex-col gap-3 md:gap-4 pt-4">
              <button
                onClick={scrollToQuote}
                className="bg-accent text-primary-dark hover:bg-yellow-400 font-bold px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 text-base md:text-lg group"
              >
                <span>GET FREE QUOTE NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+19563726956"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-lg transition-all duration-300 shadow-xl text-center text-base md:text-lg flex items-center justify-center space-x-2 active:scale-95"
              >
                <span className="text-2xl">📞</span>
                <span>CALL OR TEXT: (956) 372-6956</span>
              </a>
            </div>

            {/* Service Highlights - Desktop Only */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-6 md:pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">24/7</div>
                <div className="text-xs md:text-sm text-gray-200 font-semibold">Dispatch</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
                <div className="text-xs md:text-sm text-gray-200 font-semibold">Insured</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
                <div className="text-xs md:text-sm text-gray-200 font-semibold">Years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent">RGV</div>
                <div className="text-xs md:text-sm text-gray-200 font-semibold">Local</div>
              </div>
            </div>
          </div>

          {/* Right Content - Empty for spacing */}
          <div className="hidden lg:block">
            {/* This div intentionally left empty to maintain grid layout */}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
