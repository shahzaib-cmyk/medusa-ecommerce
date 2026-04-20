import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full text-foreground py-24">
      <Loader2 className="animate-spin h-10 w-10 text-primary" />
    </div>
  )
}
