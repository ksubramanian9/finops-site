export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <table className="w-full border-collapse text-sm">{children}</table>
  )
}
