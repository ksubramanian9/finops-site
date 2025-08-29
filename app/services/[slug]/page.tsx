import { getMdxContent } from '@/lib/mdx'
import Prose from '@/components/Prose'

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const content = await getMdxContent('services', params.slug)
  return <Prose>{content}</Prose>
}
