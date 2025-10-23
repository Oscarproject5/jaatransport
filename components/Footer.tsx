import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">JAA TRANSPORT</span>
                <span className="text-sm text-gray-300 leading-tight font-semibold">RGV</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional step deck transportation services across the Rio Grande Valley.
            </p>
            <div className="space-y-2">
              <a
                href="https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=MC_MX&query_string=1026083"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-yellow-400 transition-colors inline-flex items-center gap-1"
              >
                <span>MC-1026083</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-xs text-gray-400">FMCSA Verified Carrier</p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Brownsville, TX</li>
              <li>McAllen, TX</li>
              <li>Harlingen, TX</li>
              <li>Edinburg, TX</li>
              <li>Pharr, TX</li>
              <li>Mission, TX</li>
              <li>Across the RGV</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-300 hover:text-white transition-colors">
                  Industries Served
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#quote" className="text-gray-300 hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+19563726956" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>(956) 372-6956</span>
              </a>
              <a href="mailto:jaatransport01@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>jaatransport01@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="w-5 h-5 mt-1" />
                <span>Serving all Rio Grande Valley cities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 JAA TRANSPORT. All rights reserved. | Licensed, Insured & DOT Compliant |
            <a
              href="https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=MC_MX&query_string=1026083"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-yellow-400 transition-colors ml-1"
            >
              Verify MC-1026083
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
