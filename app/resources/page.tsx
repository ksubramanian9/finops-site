import Link from 'next/link'
import Prose from '@/components/Prose'

export default function ResourcesPage() {
  return (
    <Prose>
      <h1>Resources</h1>
      <ul>
        <li><Link href="/resources/blog/">Blog</Link></li>
        <li><Link href="/resources/templates/">Templates</Link></li>
        <li><Link href="/resources/books-courses/">Books & Courses</Link></li>
      </ul>
    </Prose>
  )
}
