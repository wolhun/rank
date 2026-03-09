import type { Metadata } from 'next'
import { DM_Sans, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});
const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: 'AI Visibility | Bądź widoczny w odpowiedziach AI',
  description: 'Pomagamy firmom być widocznymi w odpowiedziach ChatGPT i innych systemów AI. Płacisz dopiero po wyniku.',
  generator: 'v0.app',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${dmSans.variable} ${sourceSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
