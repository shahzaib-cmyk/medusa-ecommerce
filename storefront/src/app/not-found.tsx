import { ArrowUpRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)] bg-background">
      <h1 className="text-3xl font-bold text-foreground">Page not found</h1>
      <p className="text-muted-foreground text-center max-w-[280px]">
        The page you tried to access does not exist.
      </p>
      <Link
        className="flex gap-x-2 items-center group mt-4 text-primary font-medium hover:text-foreground transition-colors"
        href="/"
      >
        <span>Go to frontpage</span>
        <ArrowUpRight
          className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
        />
      </Link>
    </div>
  )
}
