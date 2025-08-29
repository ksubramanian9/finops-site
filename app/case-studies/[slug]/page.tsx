import { getMdxContent } from '@/lib/mdx'
import Prose from '@/components/Prose'

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const content = await getMdxContent('case-studies', params.slug)
  return <Prose>{content}</Prose>
}
