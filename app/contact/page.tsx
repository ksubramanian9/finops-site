import LeadForm from '@/components/LeadForm'

export default function Contact() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        We typically respond within 1 business day.
      </p>
      <LeadForm />
    </div>
  )
}
