import './globals.css'
import type { Metadata } from 'next'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Basic SEO handled via Next.js metadata */}
        <Nav />
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
