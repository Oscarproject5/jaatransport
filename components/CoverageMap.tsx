'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'

export default function CoverageMap() {
  const [imageError, setImageError] = useState(false)

  // City locations with their coordinates on the map (matched to your RGV overview map)
  const cities = [
    { name: 'Brownsville', x: '72%', y: '88%', population: '180K+' },
    { name: 'Harlingen', x: '68%', y: '62%', population: '70K+' },
    { name: 'McAllen', x: '52%', y: '55%', population: '140K+' },
    { name: 'Mission', x: '47%', y: '52%', population: '85K+' },
    { name: 'Edinburg', x: '57%', y: '45%', population: '100K+' },
    { name: 'Pharr', x: '52%', y: '60%', population: '80K+' },
  ]

  // SVG Map of RGV (simplified representation)
  const RGVMapSVG = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background with gradient */}
      <defs>
        <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#bae6fd', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#1e3a5f', stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: '#1e3a5f', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#1e3a5f', stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="url(#mapBg)" />

      {/* Rio Grande (river) - curved line at bottom */}
      <path d="M 0 280 Q 100 270, 200 275 T 400 280" stroke="#60a5fa" strokeWidth="8" fill="none" opacity="0.5" />
      <path d="M 0 282 Q 100 272, 200 277 T 400 282" stroke="#3b82f6" strokeWidth="4" fill="none" opacity="0.7" />

      {/* Major highways - US 83 and US 77 */}
      <line x1="0" y1="150" x2="400" y2="150" stroke="url(#roadGrad)" strokeWidth="6" />
      <line x1="200" y1="0" x2="200" y2="300" stroke="url(#roadGrad)" strokeWidth="6" />

      {/* Highway 281 */}
      <line x1="320" y1="0" x2="320" y2="250" stroke="url(#roadGrad)" strokeWidth="4" opacity="0.7" />

      {/* City markers */}
      {cities.map((city, index) => {
        const x = (parseFloat(city.x) / 100) * 400
        const y = (parseFloat(city.y) / 100) * 300
        return (
          <g key={index}>
            {/* City dot */}
            <circle cx={x} cy={y} r="8" fill="#1e3a5f" />
            <circle cx={x} cy={y} r="12" fill="none" stroke="#1e3a5f" strokeWidth="2" opacity="0.3" />
            <circle cx={x} cy={y} r="16" fill="none" stroke="#1e3a5f" strokeWidth="1" opacity="0.2" />
          </g>
        )
      })}

      {/* Grid pattern overlay */}
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.1" />
      </pattern>
      <rect width="400" height="300" fill="url(#grid)" />
    </svg>
  )

  return (
    <div className="relative w-full h-full bg-white rounded-lg overflow-hidden">
      {/* Option 1: If you have a real map image */}
      {!imageError ? (
        <div className="relative w-full h-full">
          <img
            src="/images/Rio_grande_valley_overview%20(1).jpg"
            alt="Rio Grande Valley Coverage Map"
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
          {/* Overlay with city markers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
            {cities.map((city, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: city.x, top: city.y }}
              >
                <div className="relative">
                  <MapPin className="w-8 h-8 text-white drop-shadow-lg animate-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <div className="bg-white text-primary px-3 py-2 rounded-lg shadow-lg text-sm font-semibold">
                      {city.name}
                      <div className="text-xs text-gray-600">{city.population}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Option 2: SVG Fallback Map
        <div className="relative w-full h-full p-6">
          <div className="text-center mb-4">
            <h3 className="text-primary font-bold text-2xl">Rio Grande Valley</h3>
            <p className="text-sm text-gray-600">Our Service Coverage Area</p>
          </div>

          <div className="relative">
            <RGVMapSVG />

            {/* City labels */}
            <div className="absolute inset-0">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2"
                  style={{ left: city.x, top: `calc(${city.y} + 25px)` }}
                >
                  <div className="bg-white/95 backdrop-blur-sm border-2 border-primary/30 rounded-lg px-3 py-1.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="font-bold text-primary text-sm text-center whitespace-nowrap">
                      {city.name}
                    </div>
                    <div className="text-xs text-gray-600 text-center">
                      {city.population}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-4 text-xs text-gray-600">
            Serving all major cities and routes across South Texas
          </div>
        </div>
      )}
    </div>
  )
}
