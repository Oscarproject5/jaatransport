'use client'

import { CheckCircle2, Clock, Shield, MapPin, Phone } from 'lucide-react'

export default function AuctionTransportSection() {
  return (
    <section id="auction-transport" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Equipment Transport Solutions
          </div>
          <h2 className="heading-lg text-primary mb-4">
            NEED TO MOVE YOUR EQUIPMENT?
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Bought a machine, sold equipment, or need to relocate it? We'll haul it wherever you need it in the RGV — fast, reliable, fully insured
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left: How It Works */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Contact Us with Details</h4>
                  <p className="text-secondary text-sm">
                    Equipment type, pickup location, and where it needs to go
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Get Your Quote</h4>
                  <p className="text-secondary text-sm">
                    Firm price ahead of time - no surprise transport costs
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">We Schedule Pickup</h4>
                  <p className="text-secondary text-sm">
                    Pickup and drop-off times confirmed - we work around your schedule
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">We Handle Everything</h4>
                  <p className="text-secondary text-sm">
                    Loading, transport, safe delivery - you focus on your business
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: What We Offer */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Us for Equipment Moves</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Fast & Flexible Scheduling</h4>
                  <p className="text-secondary text-sm">
                    Same-day pickup available - we work around your timeline and deadlines
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Licensed & Insured</h4>
                  <p className="text-secondary text-sm">
                    Fully insured for heavy equipment - your machinery is protected
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">RGV Local Experts</h4>
                  <p className="text-secondary text-sm">
                    We know the area - dealers, auction yards, job sites across the Valley
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Transparent Pricing</h4>
                  <p className="text-secondary text-sm">
                    Get quote ahead of time - know exactly what transport will cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Haul */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary-dark" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Recent Examples:</h3>
              <p className="text-secondary">
                <strong>Kubota Mini Excavator</strong> — Picked up from Houston auction, delivered to Edinburg next day.<br/>
                <strong>Skid-Steer Sale</strong> — Customer sold equipment, we transported from their yard to buyer in Brownsville.<br/>
                <strong>Dealer Pickup</strong> — New backhoe from dealer in San Antonio to contractor in McAllen.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Move Your Equipment?</h3>
          <p className="text-xl mb-6 text-gray-100 max-w-2xl mx-auto">
            Buying, selling, or relocating machinery? Get your transport quote now — we'll make it easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Get Quote Within 1 Hour</span>
            </a>
            <a
              href="tel:+19563726956"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (956) 372-6956</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
