import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://sporting2impact.org'),
  title: {
    default: 'Sporting2Impact | Stay Active, Stay Healthy and Make an Impact',
    template: '%s | Sporting2Impact',
  },
  description:
    'Sporting2Impact - At Sporting2Impact, we bring people together through the power of movement by organizing inclusive, community-driven exercise events. From weekend hikes to Pilates, Yoga sessions, we design activities that welcome participants of all ages, abilities, and backgrounds. Our programs aim to attract people that want to become more active and energetic while being an active member of their community.',
  keywords: [
    'nonprofit',
    'charity',
    'volunteer',
    'donate',
    'free fitness',
    'free health talks',
    'sports tournaments',
    'domains',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://sporting2impact.org/',
    siteName: 'Sporting2Impact',
    title: 'Sporting2Impact | Stay Active, Stay Healthy and Make an Impact',
    description:
      'At Sporting2Impact, we bring people together through the power of movement by organizing inclusive, community-driven exercise events. From weekend hikes to Pilates, Yoga sessions, we design activities that welcome participants of all ages, abilities, and backgrounds. Our programs aim to attract people that want to become more active and energetic while being an active member of their community.',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Sporting2Impact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sporting2impact',
    title: 'Sporting2Impact | Stay Active, Stay Healthy and Make an Impact',
    description:
      'At Sporting2Impact, we bring people together through the power of movement by organizing inclusive, community-driven exercise events. From weekend hikes to Pilates, Yoga sessions, we design activities that welcome participants of all ages, abilities, and backgrounds. Our programs aim to attract people that want to become more active and energetic while being an active member of their community.',
    images: ['/web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.zeffy.com" />
        <link rel="preconnect" href="https://widgets.guidestar.org" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.zeffy.com" />
        <link rel="dns-prefetch" href="https://www.idealist.org" />

        {/* Preload critical LCP image */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/Images/figma-hero-img.webp`}
          fetchPriority="high"
        />

        <GoogleTagManager />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        {/* <PopupProvider> */}
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* <PopupsRootClient /> */}
        {/* </PopupProvider> */}
      </body>
    </html>
  )
}
