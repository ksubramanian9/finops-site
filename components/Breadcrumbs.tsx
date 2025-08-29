import Link from 'next/link'

export interface Crumb {
  href: string
  label: string
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      {crumbs.map((c, i) => (
        <span key={c.href}>
          {i > 0 && ' / '}
          <Link href={c.href}>{c.label}</Link>
        </span>
      ))}
    </nav>
  )
}
