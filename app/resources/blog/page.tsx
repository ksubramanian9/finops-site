import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function BlogIndex() {
  const dir = path.join(process.cwd(), 'content', 'blog')
  const posts = fs.readdirSync(dir).map(f => f.replace(/\.mdx?$/, ''))
  return (
    <div>
      <h1 className="text-2xl font-semibold">Blog</h1>
      <ul className="mt-4 list-disc pl-6 text-sm">
        {posts.map(slug => (
          <li key={slug}>
            <Link href={`/resources/blog/${slug}/`}>{slug.replace(/-/g, ' ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
