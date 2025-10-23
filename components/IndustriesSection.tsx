import { Building2, Tractor, Factory, Droplet, Warehouse, Briefcase } from 'lucide-react'

export default function IndustriesSection() {
  const industries = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Construction & Contractors',
      description: 'Heavy equipment, materials, and machinery for building projects',
      features: ['Equipment transport', 'Building materials', 'Job site deliveries']
    },
    {
      icon: <Tractor className="w-12 h-12" />,
      title: 'Agriculture & Farming',
      description: 'Farm equipment, implements, and agricultural machinery',
      features: ['Tractors & combines', 'Irrigation equipment', 'Farm implements']
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Manufacturing & Fabrication',
      description: 'Industrial equipment and fabricated materials',
      features: ['Production equipment', 'Steel & metal products', 'Industrial machinery']
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: 'Oilfield Supply',
      description: 'Oilfield equipment and energy sector materials',
      features: ['Drilling equipment', 'Pipeline materials', 'Support equipment']
    },
    {
      icon: <Warehouse className="w-12 h-12" />,
      title: 'Distributors & Warehouses',
      description: 'Local and regional freight distribution',
      features: ['Warehouse transfers', 'Cross-dock services', 'Regional distribution']
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Auctions & Commercial',
      description: 'Equipment auction pickups and commercial deliveries',
      features: ['Auction site pickups', 'Commercial equipment', 'Time-sensitive deliveries']
    }
  ]

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-primary mb-4">INDUSTRIES WE SERVE</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Specialized transportation solutions for diverse industries across the Rio Grande Valley
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="bg-primary/10 group-hover:bg-primary w-20 h-20 rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {industry.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-primary mb-3">{industry.title}</h3>
              <p className="text-secondary mb-4">{industry.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-secondary">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Accent */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <span className="text-sm text-primary font-semibold group-hover:underline">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-200">Loads Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-gray-200">On-Time Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-200">Dispatch Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
