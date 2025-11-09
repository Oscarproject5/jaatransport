'use client'

import { useState } from 'react'
import { Truck, Package, Wrench, Tractor, Zap, Building } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'
import ImageLightbox from './ImageLightbox'

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  images: string[]
  color: string
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      id: 'local-freight',
      title: 'Job-Site to Job-Site Hauling',
      description: 'Move equipment between your RGV job sites - fast turnaround for builders & contractors',
      icon: <Truck className="w-8 h-8" />,
      color: '#1e3a5f',
      images: [
        '/images/Heavy%20Equipment%20Transport/WhatsApp%20Image%202025-10-20%20at%2019.04.47_4389c5e1.jpg',
        '/images/Heavy%20Equipment%20Transport/WhatsApp%20Image%202025-10-20%20at%2019.00.13_8ec07192.jpg',
        '/images/Local%20Freight%20Hauling/WhatsApp%20Image%202025-10-20%20at%2019.02.16_474d1f24.jpg'
      ]
    },
    {
      id: 'heavy-equipment',
      title: 'Heavy Equipment Transport',
      description: 'Backhoes, skid-steers, mini-excavators for rental yards & contractors',
      icon: <Wrench className="w-8 h-8" />,
      color: '#2d5780',
      images: [
        '/images/Heavy%20Equipment%20Transport/WhatsApp%20Image%202025-10-20%20at%2018.04.29_9c97a187.jpg',
        '/images/Heavy%20Equipment%20Transport/WhatsApp%20Image%202025-10-20%20at%2018.04.36_4af1d08c.jpg',
        '/images/Heavy%20Equipment%20Transport/WhatsApp%20Image%202025-10-20%20at%2018.04.57_69ce9ea9.jpg'
      ]
    },
    {
      id: 'material-steel',
      title: 'Building Materials & Steel',
      description: 'Pipes, beams, and materials for construction crews & contractors',
      icon: <Building className="w-8 h-8" />,
      color: '#4a5568',
      images: [
        '/images/Material%20%26%20Steel%20Hauling/WhatsApp%20Image%202025-10-20%20at%2018.04.52_1d60a0f8.jpg',
        '/images/Material%20%26%20Steel%20Hauling/WhatsApp%20Image%202025-10-20%20at%2018.05.01_042021e5.jpg',
        '/images/Material%20%26%20Steel%20Hauling/WhatsApp%20Image%202025-10-20%20at%2018.05.01_411f6b02.jpg'
      ]
    },
    {
      id: 'agricultural',
      title: 'Agricultural Equipment',
      description: 'Farm machinery and large implements',
      icon: <Tractor className="w-8 h-8" />,
      color: '#059669',
      images: [
        '/images/agriculture/WhatsApp%20Image%202025-10-20%20at%2019.06.08_874cf9da.jpg',
        '/images/Heavy%20Equipment%20Transport/WhatsApp%20Image%202025-10-20%20at%2018.04.58_94c979f4.jpg',
        '/images/Local%20Freight%20Hauling/WhatsApp%20Image%202025-10-20%20at%2018.04.52_680a4ec0.jpg'
      ]
    },
    {
      id: 'expedited',
      title: 'Auction Equipment Pickup',
      description: 'Bought equipment at auction? We haul from auction lot to your site - pickup deadlines met',
      icon: <Zap className="w-8 h-8" />,
      color: '#dc2626',
      images: [
        '/images/Local%20Freight%20Hauling/WhatsApp%20Image%202025-10-20%20at%2018.04.57_3b0771e0.jpg',
        '/images/Local%20Freight%20Hauling/WhatsApp%20Image%202025-10-20%20at%2019.02.16_474d1f24.jpg',
        '/images/Local%20Freight%20Hauling/WhatsApp%20Image%202025-10-20%20at%2019.07.55_167d03e4.jpg'
      ]
    },
    {
      id: 'oversized',
      title: 'Oversized Loads',
      description: 'Specialized handling for wide and tall cargo',
      icon: <Package className="w-8 h-8" />,
      color: '#7c3aed',
      images: [
        '/images/Oversized%20Loads/WhatsApp%20Image%202025-10-20%20at%2018.04.58_a5164d1c.jpg',
        '/images/Oversized%20Loads/WhatsApp%20Image%202025-10-20%20at%2018.04.58_ffa6719b.jpg',
        '/images/Oversized%20Loads/WhatsApp%20Image%202025-10-20%20at%2018.06.13_141c474c.jpg'
      ]
    }
  ]

  const [selectedService, setSelectedService] = useState<Service>(services[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  const handleServiceClick = (service: Service) => {
    setSelectedService(service)
    setCurrentImageIndex(0)
  }

  const handleImageError = (imageUrl: string) => {
    setImageErrors(prev => ({ ...prev, [imageUrl]: true }))
  }

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index)
    setLightboxOpen(true)
  }

  const handleNextImage = () => {
    setLightboxImageIndex((prev) =>
      prev === selectedService.images.length - 1 ? 0 : prev + 1
    )
  }

  const handlePrevImage = () => {
    setLightboxImageIndex((prev) =>
      prev === 0 ? selectedService.images.length - 1 : prev - 1
    )
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">OUR SERVICES</h2>
          <p className="text-base md:text-xl text-secondary max-w-3xl mx-auto px-4">
            Equipment transport for contractors, rental yards, and auction buyers across McAllen, Harlingen, Brownsville & the RGV
          </p>
        </div>

        {/* Mobile App-Like Layout */}
        <div className="lg:hidden">
          {/* Tab Navigation */}
          <div className="bg-white rounded-t-3xl shadow-sm p-2 mb-1">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  className={`flex-1 min-w-[100px] py-3 px-4 rounded-2xl transition-all duration-300 ${
                    selectedService.id === service.id
                      ? 'bg-gradient-to-r from-primary to-blue-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className={`${selectedService.id === service.id ? 'text-white' : 'text-primary'}`}>
                      {service.icon}
                    </div>
                    <span className="text-xs font-semibold line-clamp-1">{service.title.split(' ').slice(0, 2).join(' ')}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Card Stack */}
          <div className="relative">
            {/* Main Service Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500">
              {/* Image Carousel */}
              <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer" onClick={() => openLightbox(currentImageIndex)}>
                {imageErrors[selectedService.images[currentImageIndex]] ? (
                  <div className="w-full h-full">
                    <ImagePlaceholder
                      title={selectedService.title}
                      color={selectedService.color}
                      index={currentImageIndex}
                    />
                  </div>
                ) : (
                  <img
                    src={selectedService.images[currentImageIndex]}
                    alt={selectedService.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={() => handleImageError(selectedService.images[currentImageIndex])}
                  />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Service Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-white text-xl font-bold flex-1">{selectedService.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm">{selectedService.description}</p>
                </div>

                {/* Swipe Indicators */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                  <button
                    onClick={() => setCurrentImageIndex(currentImageIndex > 0 ? currentImageIndex - 1 : selectedService.images.length - 1)}
                    className="pointer-events-auto bg-white/10 backdrop-blur-md text-white rounded-full p-3 shadow-lg active:scale-90 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((currentImageIndex + 1) % selectedService.images.length)}
                    className="pointer-events-auto bg-white/10 backdrop-blur-md text-white rounded-full p-3 shadow-lg active:scale-90 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-primary/10 text-primary py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn More
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('quote')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="bg-gradient-to-r from-primary to-blue-700 text-white py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Expandable Features */}
              <div className="px-4 pb-4">
                <details className="group">
                  <summary className="list-none cursor-pointer">
                    <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between active:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-xl">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-800">Why Choose This Service</span>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="mt-3 space-y-3 px-2">
                    {[
                      'Same-day pickup available',
                      'Fully insured for heavy loads',
                      'Expert loading/unloading',
                      'Local RGV specialists',
                      'Auction pickup experts'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100">
                        <div className="bg-green-500/10 p-1.5 rounded-lg mt-0.5">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm flex-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </details>
              </div>

              {/* Gallery Preview */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {selectedService.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        if (e.detail === 2) {
                          // Double click - open lightbox
                          openLightbox(index)
                        } else {
                          // Single click - change current image
                          setCurrentImageIndex(index)
                        }
                      }}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                        currentImageIndex === index
                          ? 'ring-2 ring-primary ring-offset-2 scale-95'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      {imageErrors[image] ? (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                      ) : (
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(image)}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Cards Effect */}
            <div className="absolute -bottom-2 left-4 right-4 h-full bg-white/50 rounded-3xl -z-10 transform scale-95"></div>
            <div className="absolute -bottom-4 left-8 right-8 h-full bg-white/30 rounded-3xl -z-20 transform scale-90"></div>
          </div>
        </div>

        {/* Desktop Layout - Keep existing */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Desktop: Service Cards */}
          <div className="lg:col-span-1 space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedService.id === service.id
                    ? 'bg-primary text-white shadow-xl'
                    : 'bg-white text-primary hover:shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    selectedService.id === service.id ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className={`text-sm ${
                      selectedService.id === service.id ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop Image Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Main Image */}
              <div className="relative h-96 bg-gray-200 overflow-hidden cursor-pointer" onClick={() => openLightbox(currentImageIndex)}>
                {imageErrors[selectedService.images[currentImageIndex]] ? (
                  <div className="w-full h-full">
                    <ImagePlaceholder
                      title={selectedService.title}
                      color={selectedService.color}
                      index={currentImageIndex}
                    />
                  </div>
                ) : (
                  <img
                    src={selectedService.images[currentImageIndex]}
                    alt={selectedService.title}
                    className="w-full h-full object-cover object-[center_40%] transition-all duration-500 hover:scale-105"
                    onError={() => handleImageError(selectedService.images[currentImageIndex])}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Desktop Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{selectedService.title}</h3>
                  <p className="text-lg text-gray-200">{selectedService.description}</p>
                </div>
              </div>

              {/* Thumbnails and Details */}
              <div className="p-6">
                {/* Thumbnail Images */}
                <div className="flex gap-4 mb-6">
                  {selectedService.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        if (e.detail === 2) {
                          // Double click - open lightbox
                          openLightbox(index)
                        } else {
                          // Single click - change current image
                          setCurrentImageIndex(index)
                        }
                      }}
                      className={`flex-1 h-24 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                        currentImageIndex === index
                          ? 'ring-4 ring-primary scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      {imageErrors[image] ? (
                        <div className="w-full h-full">
                          <ImagePlaceholder
                            title={selectedService.title}
                            color={selectedService.color}
                            index={index}
                          />
                        </div>
                      ) : (
                        <img
                          src={image}
                          alt={`${selectedService.title} ${index + 1}`}
                          className="w-full h-full object-cover object-[center_40%]"
                          onError={() => handleImageError(image)}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Service Details */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Why Contractors & Rental Yards Choose Us:</h4>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Same-day pickup available - fast response</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Fully insured for heavy loads</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>We handle loading/unloading or work with your crew</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Local drivers familiar with RGV job-site access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Auction pickup specialists - meet tight deadlines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Bottom CTA */}
        <div className="hidden lg:block text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('quote')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Request Service Quote
          </button>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        imageUrl={selectedService.images[lightboxImageIndex]}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        title={selectedService.title}
      />
    </section>
  )
}
