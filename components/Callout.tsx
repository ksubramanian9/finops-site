export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border-l-4 border-blue-500 bg-blue-50 p-4 text-blue-800">
      {children}
    </div>
  );
}
