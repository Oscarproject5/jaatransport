'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react'

export default function QuoteSection() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    pickupCity: '',
    deliveryCity: '',
    loadType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Execute invisible reCAPTCHA v3 (zero friction for users)
      let recaptchaToken = ''
      if (typeof window !== 'undefined' && (window as any).grecaptcha) {
        try {
          recaptchaToken = await (window as any).grecaptcha.execute('6LeuvPQrAAAAAIMzO13CYkOpGUjlyC8J_PJTEFMr', { action: 'submit' })
        } catch (error) {
          console.warn('reCAPTCHA failed, submitting without token:', error)
        }
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '177766dc-536a-45b4-9e6d-da06f8559729',
          name: formData.name,
          email: formData.email || 'noreply@jaatransport.com',
          phone: formData.phone,
          subject: `New Freight Quote Request from ${formData.name}`,
          recaptcha_token: recaptchaToken, // Bot protection
          message: `
Contact Information:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Company: ${formData.company || 'Not provided'}

Shipment Details:
Pickup City: ${formData.pickupCity}
Delivery City: ${formData.deliveryCity}
Load Type: ${formData.loadType}

Additional Details:
${formData.message || 'No additional details provided'}
          `
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')

        // Track conversion for Google Ads - Submit lead form
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17671021510/8GapCLG5lrlbEMbHmepB',
            'value': 1.0,
            'currency': 'USD'
          })
        }

        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          pickupCity: '',
          deliveryCity: '',
          loadType: '',
          message: ''
        })
        // Redirect to thank you page after conversion tracking
        setTimeout(() => {
          router.push('/thank-you')
        }, 500)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const rgvCities = [
    'Brownsville',
    'McAllen',
    'Harlingen',
    'Edinburg',
    'Pharr',
    'Mission',
    'San Benito',
    'Weslaco',
    'Donna',
    'Mercedes',
    'La Feria',
    'Rio Grande City',
    'Other'
  ]

  const loadTypes = [
    'Backhoe',
    'Skid-Steer',
    'Mini Excavator',
    'Forklift',
    'Tractor',
    'Construction Equipment',
    'Auction Equipment Pickup',
    'Building Materials',
    'Other'
  ]

  return (
    <section id="quote" className="py-6 md:section-padding md:pb-24 lg:pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom px-4 md:px-0">
        {/* Mobile Attention-Grabbing Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <div className="inline-block bg-green-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4 animate-bounce">
            ⚡ INSTANT RESPONSE GUARANTEED
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-2 md:mb-3 lg:mb-4">GET A FREE QUOTE</h2>
          <p className="text-sm md:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-2 md:px-4">
            📞 Response in <span className="font-bold text-primary">under 1 hour</span> • 100% FREE • No Obligations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Info & Map - Hidden on Mobile */}
          <div className="hidden lg:block lg:col-span-1 space-y-4 md:space-y-6 order-2 lg:order-1">
            {/* Contact Cards - Desktop Only */}
            <div className="bg-primary text-white rounded-lg md:rounded-2xl p-3 md:p-5 lg:p-6 shadow-xl">
              <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 lg:mb-6">PREFER TO CALL OR TEXT?</h3>

              <div className="space-y-2.5 md:space-y-3 lg:space-y-4">
                <a
                  href="tel:+19563726956"
                  className="flex items-center space-x-3 md:space-x-4 p-4 md:p-5 bg-green-500 hover:bg-green-600 rounded-xl transition-all duration-300 group shadow-lg active:scale-95"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs md:text-sm text-green-100 font-semibold">📞 Call Dispatch Now</div>
                    <div className="font-bold text-lg md:text-xl">(956) 372-6956</div>
                  </div>
                </a>

                <a
                  href="sms:+19563726956"
                  className="flex items-center space-x-3 md:space-x-4 p-4 md:p-5 bg-blue-500 hover:bg-blue-600 rounded-xl transition-all duration-300 group shadow-lg active:scale-95"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs md:text-sm text-blue-100 font-semibold">💬 Text for Quick Quote</div>
                    <div className="font-bold text-base md:text-lg">Send SMS Now</div>
                  </div>
                </a>

                <a
                  href="mailto:jaatransport01@gmail.com"
                  className="flex items-center space-x-3 md:space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group active:scale-95"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-300">Or Email Us</div>
                    <div className="font-bold text-sm md:text-base break-all">jaatransport01@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20 text-center">
                <div className="text-xs md:text-sm text-gray-300 mb-1">Business Hours</div>
                <div className="font-bold text-accent text-base md:text-lg">⏰ 24/7 Dispatch Available</div>
              </div>
            </div>

            {/* Service Area Map - Hidden on mobile */}
            <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Service Area</h3>
              </div>

              <div className="bg-gray-100 rounded-lg p-4" style={{ height: '300px' }}>
                {/* Map Placeholder */}
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <MapPin className="w-16 h-16 text-primary mb-4" />
                  <div className="font-bold text-primary text-lg mb-2">
                    Rio Grande Valley
                  </div>
                  <div className="text-sm text-secondary space-y-1">
                    <div>Brownsville • McAllen • Harlingen</div>
                    <div>Edinburg • Pharr • Mission</div>
                    <div>and all surrounding areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form - Priority on mobile */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg md:rounded-2xl p-3 md:p-5 lg:p-8 shadow-xl border-2 border-primary/20">
              {/* Mobile Form Header */}
              <div className="mb-3 md:mb-6 text-center md:text-left">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-primary mb-1 md:mb-2">Get Quote Within 1 Hour</h3>
                <p className="text-xs md:text-sm text-secondary">Equipment specs, pickup & drop location — we'll call you back fast</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6">
                {/* Row 1 - Mobile optimized with larger inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm lg:text-base font-semibold text-primary mb-1 md:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-5 md:py-4 lg:py-3 border-2 border-gray-300 rounded-xl md:rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-base"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm lg:text-base font-semibold text-primary mb-1 md:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-5 md:py-4 lg:py-3 border-2 border-gray-300 rounded-xl md:rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-base"
                      placeholder="(956) 123-4567"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm lg:text-base font-semibold text-primary mb-1 md:mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-5 md:py-4 lg:py-3 border-2 border-gray-300 rounded-xl md:rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-base"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm lg:text-base font-semibold text-primary mb-1 md:mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-5 md:py-4 lg:py-3 border-2 border-gray-300 rounded-xl md:rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-base"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm lg:text-base font-semibold text-primary mb-1 md:mb-2">
                      Pickup City *
                    </label>
                    <select
                      name="pickupCity"
                      value={formData.pickupCity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-5 md:py-4 lg:py-3 border-2 border-gray-300 rounded-xl md:rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-base appearance-none bg-white"
                      style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center'}}
                    >
                      <option value="">Select City</option>
                      {rgvCities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm lg:text-base font-semibold text-primary mb-1 md:mb-2">
                      Delivery City *
                    </label>
                    <select
                      name="deliveryCity"
                      value={formData.deliveryCity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-5 md:py-4 lg:py-3 border-2 border-gray-300 rounded-xl md:rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-base appearance-none bg-white"
                      style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center'}}
                    >
                      <option value="">Select City</option>
                      {rgvCities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <label className="block text-xs md:text-sm lg:text-base font-semibold text-primary mb-1 md:mb-2">
                    Equipment Type *
                  </label>
                  <select
                    name="loadType"
                    value={formData.loadType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-5 md:py-4 lg:py-3 border-2 border-gray-300 rounded-xl md:rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-base appearance-none bg-white"
                    style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center'}}
                  >
                    <option value="">Select Load Type</option>
                    {loadTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs md:text-sm lg:text-base font-semibold text-primary mb-1 md:mb-2">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-5 md:py-4 lg:py-3 border-2 border-gray-300 rounded-xl md:rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none text-base"
                    placeholder="Equipment dimensions, weight, date needed, auction deadline, or any other details..."
                  ></textarea>
                </div>

                {/* Submit Button - Mobile Optimized */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold px-6 md:px-8 py-5 md:py-5 lg:py-4 rounded-xl md:rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 text-base md:text-base ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white transform hover:scale-105 active:scale-95'
                  }`}
                >
                  <span>{isSubmitting ? 'SENDING YOUR REQUEST...' : '🚚 GET MY FREE QUOTE NOW'}</span>
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl md:rounded-lg p-5 text-center animate-pulse">
                    <p className="text-green-800 font-bold text-lg">✅ Quote Request Sent!</p>
                    <p className="text-green-700 text-base mt-2">We'll call you within the hour!</p>
                    <p className="text-green-600 text-sm mt-1">Check your phone: {formData.phone}</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-xl md:rounded-lg p-5 text-center">
                    <p className="text-red-800 font-bold text-lg">❌ Oops! Something went wrong</p>
                    <p className="text-red-700 text-base mt-2">No worries! Call us directly:</p>
                    <a href="tel:+19563726956" className="inline-block mt-3 bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 active:scale-95">
                      📞 (956) 372-6956
                    </a>
                  </div>
                )}

                <p className="text-xs md:text-sm text-gray-500 text-center leading-relaxed">
                  🔒 Your information is secure. By submitting, you agree to be contacted regarding your freight quote.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
