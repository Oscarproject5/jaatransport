import { Check, Clock, MapPin, Shield, Users, TrendingUp } from 'lucide-react'

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Same-Day Pickup Available',
      description: 'Fast turnaround for builders and contractors — we move equipment when you need it'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Local RGV Expertise',
      description: 'Familiar with job-site access, bridges, and permits across McAllen, Brownsville, Harlingen & Edinburg'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Loading/Unloading Help',
      description: 'We handle loading or work with your crew — experienced with heavy equipment'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fully Insured for Heavy Loads',
      description: 'Complete cargo insurance protects your expensive equipment during transport'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Auction Pickup Specialists',
      description: 'Meet tight auction deadlines — we work with auction houses and handle logistics'
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: 'No Surprise Costs',
      description: 'Transparent pricing — get your quote ahead of time and know exactly what you\'ll pay'
    }
  ]

  const testimonialHighlights = [
    {
      quote: 'Perfect for moving equipment between our jobsites — always on time',
      stat: 'Contractor Trusted'
    },
    {
      quote: 'They handled our auction pickup deadline with no issues. Will use again',
      stat: 'Auction Buyers'
    },
    {
      quote: 'Local drivers who know the Valley — best equipment transport in the RGV',
      stat: 'Rental Yards'
    }
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-primary mb-4">WHY CONTRACTORS & RENTAL YARDS CHOOSE US</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Speed, reliability, and local RGV knowledge — we understand your deadlines and job-site challenges
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-primary rounded-lg p-6 shadow-md"
            >
              <div className="text-primary font-bold text-2xl mb-2">{item.stat}</div>
              <p className="text-secondary italic">"{item.quote}"</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Licensed & Certified</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-6">
            <div className="text-center">
              <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <div className="font-semibold text-secondary">DOT Certified</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Check className="w-12 h-12 text-primary" />
              </div>
              <div className="font-semibold text-secondary">Fully Insured</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <div className="font-semibold text-secondary">Licensed Drivers</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mb-3 mx-auto">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
              <div className="font-semibold text-secondary">BBB Rated</div>
            </div>
          </div>

          {/* FMCSA Verification Link */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-secondary mb-2">Verify Our Credentials:</p>
            <a
              href="https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=MC_MX&query_string=1026083"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              <Shield className="w-5 h-5" />
              <span>MC-1026083 - FMCSA Safety Record</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
