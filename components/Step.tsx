export default function Step({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-8 w-8 rounded-full bg-brand text-center text-white">{number}</div>
      <div className="flex-1 text-sm text-slate-700 dark:text-slate-300">{children}</div>
    </div>
  )
}
