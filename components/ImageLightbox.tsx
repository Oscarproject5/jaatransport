'use client'

import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

interface ImageLightboxProps {
  isOpen: boolean
  imageUrl: string
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  title?: string
}

export default function ImageLightbox({ isOpen, imageUrl, onClose, onNext, onPrev, title }: ImageLightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8 md:w-10 md:h-10" />
      </button>

      {/* Previous Button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-3 rounded-full"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      )}

      {/* Next Button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-3 rounded-full"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title || 'Full size image'}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
            <p className="font-semibold">{title}</p>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center">
        <p className="hidden md:block">Use arrow keys to navigate • ESC to close</p>
        <p className="md:hidden">Tap to close</p>
      </div>
    </div>
  )
}
