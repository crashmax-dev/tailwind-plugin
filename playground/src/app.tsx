import { Button } from './buttont.tsx'

export function App() {
  return (
    <div class="flex flex-col gap-4 p-4">
      <Button size="small" variant="secondary" class="underline">Small</Button>
      <Button>Destructive</Button>
      <Button variant="secondary">Destructive</Button>
      <Button variant="success">Destructive</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}
