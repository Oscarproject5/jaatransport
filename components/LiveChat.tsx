'use client'

import { MessageCircle, X, Send, User, Mail, Phone as PhoneIcon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

interface Message {
  type: 'bot' | 'user'
  text: string
  time: string
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: 'Hello! 👋 Welcome to JAA TRANSPORT.\n\nI\'m your AI assistant, ready to help with:\n• Transportation quotes\n• Service information\n• Equipment specifications\n• Scheduling questions\n\nHow can I assist you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Greet user after a few seconds if they haven't interacted
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        // Show a notification badge or animation
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const getIntelligentResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Greeting responses
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
      return 'Hi there! 👋 Welcome to JAA TRANSPORT - your trusted partner in step deck transportation across the Rio Grande Valley.\n\nI\'m here to help answer any questions about our services. What would you like to know?'
    }

    // Step Deck specific questions
    if (lowerMessage.includes('step deck') || lowerMessage.includes('stepdeck') || lowerMessage.includes('flatbed')) {
      return 'Step deck trailers are perfect for hauling tall or oversized cargo! Benefits include:\n\n✓ Lower deck height for taller loads\n✓ Can handle equipment up to 11\'6" tall\n✓ Ideal for construction & agricultural equipment\n✓ Easy loading/unloading access\n\nOur fleet is well-maintained and operated by experienced drivers. What type of equipment do you need transported?'
    }

    // Construction equipment
    if (lowerMessage.includes('construction') || lowerMessage.includes('excavator') || lowerMessage.includes('bulldozer') || lowerMessage.includes('crane') || lowerMessage.includes('loader')) {
      return 'We\'re experts in construction equipment transportation! 🚧\n\nWe regularly haul:\n• Excavators & Backhoes\n• Bulldozers & Graders\n• Cranes & Boom Lifts\n• Skid Steers & Loaders\n• Compactors & Pavers\n\nAll equipment is properly secured with professional tie-down methods. Need a quote for your specific equipment?'
    }

    // Agricultural equipment
    if (lowerMessage.includes('agricultural') || lowerMessage.includes('farm') || lowerMessage.includes('tractor') || lowerMessage.includes('harvester') || lowerMessage.includes('combine')) {
      return 'JAA TRANSPORT specializes in agricultural equipment hauling! 🚜\n\nWe transport:\n• Tractors & Combines\n• Harvesters & Planters\n• Irrigation Equipment\n• Cotton Modules\n• Farm Implements\n\nWe understand the importance of getting your equipment where it needs to be during planting and harvest seasons. How can we help?'
    }

    // Heavy machinery/industrial
    if (lowerMessage.includes('heavy') || lowerMessage.includes('industrial') || lowerMessage.includes('machinery') || lowerMessage.includes('equipment')) {
      return 'Heavy equipment transportation is our specialty! 💪\n\nWe handle:\n• Industrial machinery\n• Manufacturing equipment\n• Generators & compressors\n• Oil field equipment\n• Mining equipment\n\nOur step deck trailers can accommodate loads up to 48,000 lbs with dimensions up to 48\'L x 8.5\'W x 11.5\'H. What are you looking to transport?'
    }

    // Weight and dimension questions
    if (lowerMessage.includes('weight') || lowerMessage.includes('dimension') || lowerMessage.includes('size') || lowerMessage.includes('capacity') || lowerMessage.includes('how much') || lowerMessage.includes('how heavy')) {
      return 'Our step deck trailers specifications:\n\n📏 Dimensions:\n• Length: Up to 48 feet\n• Width: Up to 8.5 feet (wider with permits)\n• Height: Up to 11.5 feet\n\n⚖️ Weight Capacity:\n• Max payload: 48,000 lbs\n• Overweight permits available\n\nNeed help determining if your cargo fits? Share the specs and I\'ll help!'
    }

    // Insurance and safety
    if (lowerMessage.includes('insurance') || lowerMessage.includes('insured') || lowerMessage.includes('safe') || lowerMessage.includes('licensed') || lowerMessage.includes('certified')) {
      return 'Safety and protection are our top priorities! 🛡️\n\n✓ Fully licensed and insured\n✓ USDOT and MC numbers current\n✓ Comprehensive cargo insurance\n✓ Professional tie-down procedures\n✓ Experienced, certified drivers\n✓ GPS tracking available\n\nYour equipment is in safe hands with JAA TRANSPORT!'
    }

    // Quote/pricing inquiries
    if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('how much')) {
      return 'I\'d be happy to help you get a quote! 💰\n\nOur rates are based on:\n• Distance traveled\n• Equipment size and weight\n• Loading/unloading requirements\n• Timeline urgency\n\nFor an accurate quote, we\'ll need:\n1. Pick-up and delivery locations\n2. Equipment type and dimensions\n3. Preferred dates\n\nCall us at (956) 372-6956 or click "Quote" to fill out our form!'
    }

    // Services questions
    if (lowerMessage.includes('service') || lowerMessage.includes('haul') || lowerMessage.includes('transport') || lowerMessage.includes('what do you')) {
      return 'JAA TRANSPORT provides comprehensive step deck transportation services! 🚚\n\n🔧 Services:\n• Step Deck Hauling\n• Heavy Equipment Transport\n• Oversized Load Transport\n• Construction Equipment Hauling\n• Agricultural Equipment Transport\n• Industrial Machinery Moving\n• Local & Long-Distance Routes\n\n🌟 Why choose us:\n• Fast, reliable service\n• Competitive rates\n• Experienced drivers\n• Fully insured\n• 24/7 availability\n\nWhat specific service interests you?'
    }

    // Location/coverage questions
    if (lowerMessage.includes('area') || lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('coverage') || lowerMessage.includes('serve') || lowerMessage.includes('deliver')) {
      return 'We serve the Rio Grande Valley and beyond! 📍\n\n🏙️ Primary Service Area:\n• McAllen, TX\n• Brownsville, TX\n• Harlingen, TX\n• Edinburg, TX\n• Mission, TX\n• Entire RGV region\n\n🚛 Extended Coverage:\n• Throughout Texas\n• Interstate transport available\n• Mexico border region\n\nWhere do you need your equipment transported?'
    }

    // Timing/availability
    if (lowerMessage.includes('available') || lowerMessage.includes('when') || lowerMessage.includes('time') || lowerMessage.includes('schedule') || lowerMessage.includes('how long') || lowerMessage.includes('how fast')) {
      return 'We\'re ready when you are! ⏰\n\n📅 Availability:\n• Same-day service often available\n• Flexible scheduling\n• Weekend pickups/deliveries\n• Emergency transport options\n\n⚡ Typical Transit Times:\n• Local RGV: Same day to 24 hours\n• Across Texas: 1-3 days\n• Custom timelines available\n\nCall (956) 372-6956 to discuss your specific timeline!'
    }

    // Booking/reservation process
    if (lowerMessage.includes('book') || lowerMessage.includes('reserve') || lowerMessage.includes('schedule') || lowerMessage.includes('arrange') || lowerMessage.includes('how do i')) {
      return 'Booking with JAA TRANSPORT is easy! 📝\n\n1️⃣ Get a Quote:\n   • Call (956) 372-6956, or\n   • Fill out our quote form\n\n2️⃣ We\'ll confirm:\n   • Pricing and timeline\n   • Pick-up/delivery details\n   • Any special requirements\n\n3️⃣ Schedule your haul:\n   • Choose your date\n   • We handle the rest!\n\nReady to get started?'
    }

    // Payment and terms
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('accept') || lowerMessage.includes('credit') || lowerMessage.includes('cash')) {
      return 'We offer flexible payment options! 💳\n\n✓ Cash\n✓ Check\n✓ Credit/Debit cards\n✓ Wire transfer\n✓ Net 30 terms (approved accounts)\n\nPayment terms are discussed during booking. Have questions about payment? Call us at (956) 372-6956!'
    }

    // Contact info request
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach') || lowerMessage.includes('call')) {
      return 'Let\'s connect! 📞\n\n📞 Phone: (956) 372-6956\n📧 Email: jaatransport01@gmail.com\n🕐 Hours: Available 24/7 for quotes\n📍 Serving: Rio Grande Valley, TX\n\nWe typically respond within minutes during business hours. How else can I help you today?'
    }

    // Thank you / goodbye
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return 'You\'re welcome! 😊 Thank you for considering JAA TRANSPORT for your transportation needs. Don\'t hesitate to reach out if you have more questions. We\'re here to help 24/7!\n\nCall us anytime: (956) 372-6956'
    }

    // Default response
    return 'I\'m here to help answer questions about JAA TRANSPORT\'s services! 🚚\n\nI can help with:\n• Service descriptions\n• Pricing and quotes\n• Service areas\n• Equipment specifications\n• Booking process\n• Insurance and safety\n\nWhat would you like to know? Or call us directly at (956) 372-6956 for immediate assistance!'
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message
    const newMessage: Message = {
      type: 'user',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    const userMsg = message
    setMessage('')

    // Add typing indicator
    const typingMessage: Message = {
      type: 'bot',
      text: 'typing...',
      time: ''
    }
    setMessages([...updatedMessages, typingMessage])

    try {
      // Call AI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMsg,
          conversationHistory: updatedMessages.slice(-6).map(msg => ({
            role: msg.type === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        })
      })

      const data = await response.json()

      // Remove typing indicator and add AI response
      const botReply: Message = {
        type: 'bot',
        text: data.response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev.slice(0, -1), botReply])

    } catch (error) {
      console.error('Error getting AI response:', error)

      // Fallback to rule-based response on error
      const botReply: Message = {
        type: 'bot',
        text: getIntelligentResponse(userMsg),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev.slice(0, -1), botReply])
    }
  }

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newMessage: Message = {
      type: 'bot',
      text: `Thanks ${contactInfo.name}! We've received your contact information and will reach out to you shortly at ${contactInfo.email || contactInfo.phone}. For immediate assistance, call us at (956) 372-6956.`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages([...messages, newMessage])
    setShowContactForm(false)
    // Here you could send this info to your backend/email service
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 w-[90vw] max-w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border-2 border-primary/20 animate-slide-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-light text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">JAA TRANSPORT</h3>
                <p className="text-xs text-gray-200">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
                    msg.type === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                  <p className={`text-xs mt-1.5 ${msg.type === 'user' ? 'text-gray-200' : 'text-gray-500'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="grid grid-cols-3 gap-2 mb-2">
              <button
                onClick={() => window.location.href = 'tel:+19563726956'}
                className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 px-2 rounded-lg transition-colors flex items-center justify-center"
              >
                📞 Call
              </button>
              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-2 px-2 rounded-lg transition-colors flex items-center justify-center"
              >
                👤 Contact
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                  const element = document.getElementById('quote')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold py-2 px-2 rounded-lg transition-colors"
              >
                Quote
              </button>
            </div>

            {/* Contact Form */}
            {showContactForm && (
              <div className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200 animate-slide-in-up">
                <h4 className="text-sm font-bold text-gray-800 mb-2">Share Your Info</h4>
                <form onSubmit={handleContactFormSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-primary focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-primary focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-primary focus:outline-none"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2 rounded-lg transition-colors"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="px-4 bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-semibold py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-full focus:border-primary focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full transition-colors active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-4 md:bottom-6 md:left-6 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 z-50 group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 animate-bounce-subtle" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </>
        )}

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us!
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-4 border-transparent border-l-gray-800"></div>
          </div>
        )}
      </button>

      {/* Pulsing Ring Animation */}
      {!isOpen && (
        <div className="fixed bottom-20 left-4 md:bottom-6 md:left-6 w-16 h-16 rounded-full bg-primary/30 animate-ping z-40 pointer-events-none"></div>
      )}
    </>
  )
}
