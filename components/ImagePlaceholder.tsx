interface ImagePlaceholderProps {
  title: string
  color: string
  index: number
}

export default function ImagePlaceholder({ title, color, index }: ImagePlaceholderProps) {
  return (
    <svg
      width="800"
      height="600"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id={`grad-${title}-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.4 }} />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#grad-${title}-${index})`} />
      <rect x="50" y="50" width="700" height="500" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
      <rect x="60" y="60" width="680" height="480" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />

      {/* Truck Icon */}
      <g transform="translate(300, 200)" fill="white" opacity="0.4">
        <rect x="0" y="40" width="200" height="80" rx="5" />
        <rect x="180" y="20" width="60" height="100" rx="5" />
        <circle cx="50" cy="130" r="20" />
        <circle cx="170" cy="130" r="20" />
        <rect x="10" y="50" width="160" height="50" fill={color} opacity="0.5" />
      </g>

      <text
        x="400"
        y="400"
        fontSize="36"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        {title}
      </text>
      <text
        x="400"
        y="440"
        fontSize="24"
        fill="white"
        opacity="0.8"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        Image {index + 1}
      </text>
      <text
        x="400"
        y="470"
        fontSize="16"
        fill="white"
        opacity="0.6"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        Replace with your actual photo
      </text>
    </svg>
  )
}
