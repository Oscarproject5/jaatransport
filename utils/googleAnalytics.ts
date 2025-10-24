// Google Analytics Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

// Track form submission conversion
export const trackFormSubmission = (formType: string = 'quote_form') => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Send event to Google Analytics
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: formType,
      value: 1
    })

    // Track conversion for Google Ads - Submit lead form
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17671021510/8GapCLG5lrIbEMbHmepB',
      'value': 1.0,
      'currency': 'USD'
    })

    console.log('Form submission tracked:', formType)
  }
}

// Track phone number clicks
export const trackPhoneClick = (phoneNumber: string, location: string = 'floating_button') => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Send event to Google Analytics
    window.gtag('event', 'click_to_call', {
      event_category: 'engagement',
      event_label: location,
      value: phoneNumber
    })

    // Track as a conversion for Google Ads - Call (9563726956)
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17671021510/InX0CNG1lrlbEMbHmepB',
      'value': 1.0,
      'currency': 'USD'
    })

    console.log('Phone click tracked:', phoneNumber, location)
  }
}

// Track general conversions
export const trackConversion = (action: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'conversion',
      value: value || 1
    })
  }
}

// Track page views (useful for single-page app navigation)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-17671021510', {
      page_path: url
    })
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'custom',
      ...parameters
    })
  }
}