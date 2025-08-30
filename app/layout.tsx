import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FinOps Hub',
  description: 'Education and consulting for Cloud Financial Operations',
  openGraph: {
    type: 'website',
    siteName: 'FinOps Hub',
  },
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-800`}>
        <Nav />
        <main className="container mx-auto p-4 sm:p-6 md:p-10 mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
