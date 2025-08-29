export function getSeo({ title, description }: { title: string; description?: string }) {
  return {
    title,
    description: description || '',
  }
}
