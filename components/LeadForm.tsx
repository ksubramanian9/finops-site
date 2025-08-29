'use client'

export default function LeadForm() {
  return (
    <form className="mt-6 space-y-4" action="https://formspree.io/f/your-id" method="POST">
      <input
        required
        name="name"
        placeholder="Your name"
        className="w-full rounded-md border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand dark:border-slate-700 dark:bg-slate-900"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="you@example.com"
        className="w-full rounded-md border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand dark:border-slate-700 dark:bg-slate-900"
      />
      <textarea
        required
        name="message"
        placeholder="How can we help?"
        className="h-32 w-full rounded-md border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand dark:border-slate-700 dark:bg-slate-900"
      />
      <button className="rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand">Send</button>
    </form>
  )
}
