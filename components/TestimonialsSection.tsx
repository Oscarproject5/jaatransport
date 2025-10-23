'use client'

import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Carlos M.',
      company: 'Martinez Excavation',
      location: 'McAllen, TX',
      rating: 5,
      text: 'Perfect for moving our backhoes and mini-excavators between job sites. They know the Valley routes and always show up on time. Same-day pickup when we need it. These guys get it done.',
      service: 'Job-Site Equipment Transport'
    },
    {
      name: 'Mike R.',
      company: 'Valley Equipment Rentals',
      location: 'Brownsville, TX',
      rating: 5,
      text: 'We don\'t have our own transport fleet, so we rely on JAA for deliveries and pickups. They handle our skid-steers and equipment carefully, and our customers love the fast turnaround.',
      service: 'Rental Yard Partner'
    },
    {
      name: 'Jennifer L.',
      company: 'L&S Construction',
      location: 'Harlingen, TX',
      rating: 5,
      text: 'Bought a mini excavator at auction in Houston — JAA picked it up the next day and delivered to our Harlingen site. No hassle, fair price, met the deadline. Will use them again for sure.',
      service: 'Auction Equipment Pickup'
    },
    {
      name: 'David G.',
      company: 'RGV Contractors Supply',
      location: 'Edinburg, TX',
      rating: 5,
      text: 'Local guys who know the area and understand construction schedules. They work with our crew on loading, fully insured, and the quote they give is the price you pay. Reliable.',
      service: 'Contractor Equipment Transport'
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-primary mb-4">WHAT CONTRACTORS & RENTAL YARDS SAY</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Hear from RGV builders, rental yards, and auction buyers who trust us with their equipment
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Service Badge */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {testimonial.service}
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-primary">{testimonial.name}</div>
                <div className="text-sm text-secondary">{testimonial.company}</div>
                <div className="text-sm text-gray-400">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges - Hidden on Mobile */}
        <div className="hidden md:block bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-gray-200">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-200">Successful Deliveries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-200">Years in Business</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Experience the Difference?
          </h3>
          <button
            onClick={() => {
              const element = document.getElementById('quote')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  )
}
