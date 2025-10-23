'use client'

import { Check, MapPin, Truck, Users } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    'Same-day pickup available for urgent equipment moves',
    'Serving McAllen, Harlingen, Brownsville, Edinburg, Mission, Pharr',
    'Experienced with auction pickups - we meet deadlines',
    'Familiar with RGV job-site access, bridges & permits',
    'We handle loading or work with your crew',
    'Fully insured for heavy equipment transport',
    'Get quote within 1 hour - transparent pricing'
  ]

  return (
    <section id="about" className="section-padding bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Our Company
            </div>

            <h2 className="heading-lg text-white mb-6">
              YOUR RGV EQUIPMENT TRANSPORT PARTNER
            </h2>

            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Serving contractors, rental yards, and auction buyers across McAllen, Brownsville, Harlingen, Edinburg & the entire Rio Grande Valley
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              For over 15 years, we've specialized in moving heavy equipment for local builders and businesses. We know RGV job-site access, bridges, permits, and auction yard procedures. Whether you're moving equipment between job sites or picking up from an auction, we deliver fast, reliable service with no surprise costs.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-200">{highlight}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('quote')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Request a Free Quote
            </button>
          </div>

          {/* Right Content - Visual Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Truck className="w-12 h-12 text-accent mb-4" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8">
              <Users className="w-12 h-12 text-accent mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <MapPin className="w-12 h-12 text-accent mb-4" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300">RGV Coverage</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8">
              <Check className="w-12 h-12 text-accent mb-4" />
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Dispatch Support</div>
            </div>
          </div>
        </div>

        {/* Professional Solutions Banner */}
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">PROFESSIONAL TRANSPORTATION SOLUTIONS YOU CAN DEPEND ON</h3>
            <p className="text-xl text-gray-200 mb-6 max-w-4xl mx-auto">
              When your freight needs to move fast, safely, and reliably across the Valley, our local team is ready to deliver the service you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-accent" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-accent" />
                <span>GPS Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-accent" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-accent" />
                <span>Competitive Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
