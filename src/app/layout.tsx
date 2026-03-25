import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'

import { fontPrimary, fontSecondary } from '@/config'
import { Providers } from '@/providers'
import { cn } from '@/utils/cn'

export const metadata: Metadata = {
  metadataBase: new URL('https://dexpress.ao'),
  title: 'D-Express - Conexão Profissional',
  description:
    'D-Express: Conectando empregadores e profissionais domésticas com segurança e eficiência.',
  applicationName: 'D-Express',
  keywords: ['emprego doméstico', 'empregadas domésticas', 'serviços domésticos', 'Angola'],

  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D-Express - Conexão Profissional',
    description: 'Conectando empregadores e profissionais domésticas com segurança e eficiência.',
    images: ['/logo.png'],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: 'https://dexpress.ao',
    title: 'D-Express - Conexão Profissional',
    description: 'Conectando empregadores e profissionais domésticas com segurança e eficiência.',
    siteName: 'D-Express',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'D-Express',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://dexpress.ao',
  },
  category: 'Serviços domésticos',
  referrer: 'origin-when-cross-origin',
}
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="pt">
      <head />
      <body
        suppressHydrationWarning
        className={cn('font-primary antialiased s', fontPrimary.variable, fontSecondary.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
