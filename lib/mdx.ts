import fs from 'fs'
import path from 'path'

export async function getMdxContent(section: string, slug: string) {
  const file = path.join(process.cwd(), 'content', section, `${slug}.mdx`)
  try {
    return await fs.promises.readFile(file, 'utf8')
  } catch {
    return `Content not found: ${section}/${slug}`
  }
}

export async function getGlossaryEntries() {
  const dir = path.join(process.cwd(), 'content', 'glossary')
  const files = await fs.promises.readdir(dir)
  return Promise.all(
    files.map(async f => {
      const source = await fs.promises.readFile(path.join(dir, f), 'utf8')
      const [titleLine, ...rest] = source.split('\n')
      const term = titleLine.replace(/^#\s*/, '')
      const def = rest.join('\n').trim()
      return { term, def }
    })
  )
}
