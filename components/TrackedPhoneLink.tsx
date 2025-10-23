'use client'

import { trackPhoneClick } from '@/utils/googleAnalytics'

interface TrackedPhoneLinkProps {
  phoneNumber: string
  displayText?: string
  location: string
  className?: string
  children?: React.ReactNode
}

export default function TrackedPhoneLink({
  phoneNumber,
  displayText,
  location,
  className,
  children
}: TrackedPhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(displayText || phoneNumber, location)
  }

  // Format phone number for tel: link (remove all non-digits and add +1)
  const telNumber = phoneNumber.replace(/\D/g, '')
  const telLink = telNumber.startsWith('1') ? `tel:+${telNumber}` : `tel:+1${telNumber}`

  return (
    <a
      href={telLink}
      onClick={handleClick}
      className={className}
    >
      {children || displayText || phoneNumber}
    </a>
  )
}