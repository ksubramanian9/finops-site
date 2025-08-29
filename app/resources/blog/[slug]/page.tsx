import { getMdxContent } from '@/lib/mdx'
import Prose from '@/components/Prose'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const content = await getMdxContent('blog', params.slug)
  return <Prose>{content}</Prose>
}
