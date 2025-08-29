import LeadForm from '@/components/LeadForm'
import Prose from '@/components/Prose'

export default function Contact() {
  return (
    <div className="mx-auto max-w-xl">
      <Prose>
        <h1>Contact</h1>
        <p>We typically respond within 1 business day.</p>
      </Prose>
      <LeadForm />
    </div>
  )
}
