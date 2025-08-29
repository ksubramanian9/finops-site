import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Resources</h1>
      <ul className="list-disc pl-6 text-sm">
        <li><Link href="/resources/blog/">Blog</Link></li>
        <li><Link href="/resources/templates/">Templates</Link></li>
        <li><Link href="/resources/books-courses/">Books & Courses</Link></li>
      </ul>
    </div>
  )
}
