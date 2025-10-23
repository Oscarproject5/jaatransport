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
}

export const metadata: Metadata = {
  title: 'JAA TRANSPORT | RGV Step Deck Transportation & Freight Hauling',
  description: 'JAA TRANSPORT - Reliable step deck transportation and freight hauling services across the Rio Grande Valley. Serving Brownsville, McAllen, Harlingen, Edinburg, and all RGV cities. 24/7 dispatch, free quotes, fast response.',
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17671021510"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17671021510');
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
