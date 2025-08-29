'use client'

export default function LeadForm() {
  return (
    <form className="mt-6 space-y-4" action="https://formspree.io/f/your-id" method="POST">
      <input required name="name" placeholder="Your name" className="w-full rounded border px-3 py-2" />
      <input required type="email" name="email" placeholder="you@example.com" className="w-full rounded border px-3 py-2" />
      <textarea required name="message" placeholder="How can we help?" className="h-32 w-full rounded border px-3 py-2"></textarea>
      <button className="rounded-lg bg-brand px-4 py-2 text-white">Send</button>
    </form>
  )
}
