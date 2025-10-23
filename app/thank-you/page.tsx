'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

export default function ThankYou() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Track conversion for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'YOUR_CONVERSION_ID', // You'll replace this with your actual Google Ads conversion ID
        'value': 1.0,
        'currency': 'USD'
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-blue-50 flex items-center justify-center px-4 py-20">
      <div className={`max-w-2xl w-full transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header with Animation */}
          <div className="bg-gradient-to-r from-primary to-blue-700 p-8 text-center">
            <div className={`transform transition-all delay-300 duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              <CheckCircle className="w-20 h-20 text-white mx-auto mb-4" strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Thank You!
            </h1>
            <p className="text-xl text-white/90">
              Your Quote Request Has Been Received
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">

            {/* Confirmation Message */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-bold text-gray-800 mb-1">We've Got Your Request!</h2>
                  <p className="text-gray-600">
                    Our team has received your equipment transport quote request and will get back to you within 1-2 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Quick Review</h4>
                    <p className="text-gray-600 text-sm">Our team will review your equipment transport needs and job site details</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Custom Quote</h4>
                    <p className="text-gray-600 text-sm">We'll prepare a competitive quote based on your specific hauling requirements</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fast Response</h4>
                    <p className="text-gray-600 text-sm">You'll receive your quote via phone or email within 1-2 business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-gray-800 mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-3">
                <a
                  href="tel:9565004050"
                  className="flex items-center gap-3 text-primary hover:text-blue-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(956) 500-4050</span>
                </a>
                <a
                  href="mailto:jaatransportllc@outlook.com"
                  className="flex items-center gap-3 text-primary hover:text-blue-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">jaatransportllc@outlook.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>Mon-Fri: 8:00 AM - 6:00 PM | Sat: 8:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href="/"
                className="flex-1 bg-gradient-to-r from-primary to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Return to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#services"
                className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded-xl font-semibold text-center hover:bg-gray-200 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>

          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Trusted by contractors and businesses across the RGV</p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Local Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Fast Response</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}