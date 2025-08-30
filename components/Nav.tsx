'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '#principles', label: 'Principles' },
  { href: '#metrics', label: 'Metrics' },
  { href: '#dashboard', label: 'Dashboard' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-slate-800 text-slate-100 p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#overview" className="text-2xl font-bold text-sky-400">
          FinOps Guide
        </Link>
        <nav id="top-nav" className="hidden md:flex space-x-6">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-lg p-3 rounded-md hover:text-sky-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          id="mobile-menu-btn"
          className="md:hidden text-sky-400 text-2xl"
          onClick={() => setOpen(o => !o)}
        >
          ☰
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-800 shadow-md flex flex-col items-center py-4 space-y-2 ${
          open ? '' : 'hidden'
        }`}
      >
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link text-lg p-3 rounded-md hover:text-sky-300"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
