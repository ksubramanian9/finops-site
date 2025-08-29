import { getMdxContent } from '@/lib/mdx'
import Prose from '@/components/Prose'

export default async function LearnPage({ params }: { params: { slug: string } }) {
  const content = await getMdxContent('learn', params.slug)
  return <Prose>{content}</Prose>
}
