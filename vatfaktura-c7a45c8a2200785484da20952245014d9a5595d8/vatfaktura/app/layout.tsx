import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from './auth-context'
import { InvoiceProvider } from './invoice-context'
import { LanguageProvider } from '@/contexts/language-context'
import { InitDemo } from './init-demo'
import CookieConsent from './cookie-consent'
import { CursorTrail } from '@/components/cursor-trail'
import { FuturisticLoader } from '@/components/futuristic-loader'
import { JsonLd } from '@/components/json-ld'
import { PerformanceOptimizations } from '@/components/performance-optimizations'
import { Footer } from '@/components/footer'
import { StickyHeaderCTA } from '@/components/sticky-header-cta'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'VAT Faktura - Faktury, PIT, ZUS, Załóż firmę online 100% Za Darmo | KSEF',
  description: 'Bezpłatny program do fakturowania, rozliczania PIT, ZUS, założenia firmy online oraz znajdowania urzędów i porad prawnych. Faktury w 30 sekund, wszystkie PIT-y, formularze ZUS, wyszukiwarka urzędów w 40 miastach, darmowe porady. E-podpis i wysyłka do urzędu. KSEF. 100% za darmo.',
  keywords: 'program do fakturowania, faktury za darmo, fakturowanie online, KSEF, generator faktur, faktury VAT, rozliczenie PIT, PIT-37 online, PIT-36 online, PIT-28 ryczałt, PIT-38 giełda, PIT-36L podatek liniowy, rozlicz PIT za darmo, e-deklaracje, urząd skarbowy online, podpis elektroniczny PIT, e-faktura, kSEF integracja, darmowe fakturowanie, załóż firmę online, formularze ZUS, Z-3, generator ZUS, rejestracja CEIDG, urzędy w Polsce, porady prawne darmowe, poradnia obywatelska, darmowe konsultacje, OPP, terminarz urzędowy, terminy PIT, terminy ZUS, kSEF',
  metadataBase: new URL('https://www.vatfaktura.pl'),
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.vatfaktura.pl',
    languages: {
      'pl': 'https://www.vatfaktura.pl',
      'uk': 'https://www.vatfaktura.pl/uk',
      'x-default': 'https://www.vatfaktura.pl',
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'VAT Faktura - Faktury, PIT, ZUS, Urzędy i Porady Online Za Darmo | KSEF',
    description: 'Bezpłatny kompleksowy program: faktury online, rozliczenie PIT-37/36/28/38, formularze ZUS, załóż firmę, wyszukiwarka urzędów i darmowe porady prawne w 40 miastach. E-podpis, wysyłka do US i ZUS. KSEF. 100% bezpłatnie.',
    url: 'https://www.vatfaktura.pl',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'VAT Faktura',
    images: [
      {
        url: 'https://www.vatfaktura.pl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VAT Faktura - Faktury, PIT, ZUS i Załóż Firmę Online Za Darmo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAT Faktura - Faktury, PIT, ZUS, Urzędy i Porady Za Darmo',
    description: 'Program all-in-one: faktury + PIT + ZUS + rejestracja firmy + wyszukiwarka urzędów + darmowe porady + terminarz. E-podpis, wysyłka do urzędu. 100% bezpłatnie.',
    creator: '@vatfaktura',
  },
  // verification: { google: 'ADD_YOUR_SEARCH_CONSOLE_TOKEN_HERE' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // NOTE: Do NOT set maximumScale or userScalable:false — Google penalises it
  // and it blocks accessibility tools. Required for AdSense / Core Web Vitals.
  themeColor: '#0066cc',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="bg-gradient-to-br from-slate-50 to-blue-50" suppressHydrationWarning>
      <head>
        <PerformanceOptimizations />
        <JsonLd />
        
        {/*
          Google AdSense — active for site review and monetisation.
          Publisher ID: ca-pub-9110227480064306
          ads.txt is at /public/ads.txt and served at https://www.vatfaktura.pl/ads.txt
        */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9110227480064306"
          crossOrigin="anonymous"
        />

        {/*
          Google Analytics 4 — add your real GA4 Measurement ID below.
          1. Create a GA4 property at https://analytics.google.com
          2. Copy the Measurement ID (format: G-XXXXXXXXXX)
          3. Uncomment and replace GA_MEASUREMENT_ID
        */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" /> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');` }} /> */}

        {/*
          Google Search Console verification — add your token below.
          Get it at: https://search.google.com/search-console
          Uncomment and replace YOUR_TOKEN
        */}
        {/* <meta name="google-site-verification" content="YOUR_TOKEN" /> */}
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <CursorTrail />
        <FuturisticLoader />
        <LanguageProvider>
          <AuthProvider>
            <InvoiceProvider>
              <InitDemo />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <StickyHeaderCTA />
              <CookieConsent />
              <Analytics />
            </InvoiceProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
