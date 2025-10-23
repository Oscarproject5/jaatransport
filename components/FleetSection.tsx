import { Truck, Weight, Ruler, Shield, CheckCircle2 } from 'lucide-react'

export default function FleetSection() {
  const fleet = [
    {
      name: '53\' Step Deck with Ramps',
      images: [
        '/fleet/WhatsApp Image 2025-10-21 at 11.34.17_b93dea3d.jpg',
        '/fleet/WhatsApp Image 2025-10-21 at 11.32.01_7b1486b6.jpg'
      ],
      capacity: '45,000 lbs',
      dimensions: '53\' x 8.5\'',
      description: 'Heavy-duty step deck trailer with ramps for easy loading and unloading of equipment',
      features: [
        'Built-in ramps for convenient loading',
        'Tall equipment and machinery',
        'Construction equipment',
        'Heavy machinery and equipment',
        'Industrial equipment',
        'Agricultural equipment'
      ]
    }
  ]

  const stats = [
    { icon: <Weight className="w-8 h-8" />, value: '45K', label: 'Max Capacity (lbs)' },
    { icon: <Shield className="w-8 h-8" />, value: '100%', label: 'Fully Insured' },
    { icon: <CheckCircle2 className="w-8 h-8" />, value: '24/7', label: 'Available' }
  ]

  return (
    <section id="fleet" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-lg text-primary mb-4">OUR EQUIPMENT</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Reliable, well-maintained equipment ready to handle your freight needs in the Rio Grande Valley
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 text-center border-2 border-gray-200 hover:border-primary transition-all duration-300"
            >
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm md:text-base text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Fleet Card */}
        <div className="max-w-4xl mx-auto mb-12">
          {fleet.map((vehicle, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {vehicle.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={image}
                      alt={`${vehicle.name} - View ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {imgIndex === 0 && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        Available Now
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">{vehicle.name}</h3>
                <p className="text-secondary mb-4">{vehicle.description}</p>

                {/* Specs */}
                <div className="flex gap-4 md:gap-6 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Weight className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-secondary">Capacity</div>
                      <div className="font-semibold text-primary">{vehicle.capacity}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-secondary">Dimensions</div>
                      <div className="font-semibold text-primary">{vehicle.dimensions}</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Ideal For:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-secondary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="w-full btn-primary text-center">
                  Request This Equipment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Ship Your Freight?</h3>
          <p className="text-xl mb-6 text-gray-100">
            Get in touch today for fast, reliable local freight transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </a>
            <a href="tel:+19564124044" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Call (956) 412-4044
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
