import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1e3a5f',
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'JAA TRANSPORT | RGV Step Deck Transportation & Freight Hauling',
  description: 'Professional step deck transportation & freight hauling services in the Rio Grande Valley. Heavy equipment transport, oversized loads, auction transport. 24/7 dispatch. Free quotes within 1 hour. Serving Brownsville, McAllen, Harlingen & all RGV.',
  keywords: 'JAA TRANSPORT, step deck transportation, freight hauling, Rio Grande Valley, RGV, Brownsville, McAllen, Harlingen, heavy equipment transport, oversized loads',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  openGraph: {
    title: 'JAA TRANSPORT | RGV Step Deck Transportation',
    description: 'Get a FREE quote within 1 hour! 24/7 step deck transportation across South Texas.',
    type: 'website',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'JAA TRANSPORT',
  },
  formatDetection: {
    telephone: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17671021510"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17671021510');
              gtag('config', 'GT-PZQZVF9L');
              gtag('config', 'AW-17671021510/InX0CNG1lrIbEMbHmepB', {
                'phone_conversion_number': '9563726956'
              });
            `,
          }}
        />
        {/* Google reCAPTCHA v2 - Checkbox bot protection */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
