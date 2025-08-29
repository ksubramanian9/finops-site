export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div className="text-sm text-slate-700 dark:text-slate-300">{children}</div>
    </div>
  )
}
