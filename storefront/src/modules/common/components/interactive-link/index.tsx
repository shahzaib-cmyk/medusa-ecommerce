import { ArrowUpRight } from "lucide-react"
import LocalizedClientLink from "../localized-client-link"
import { cn } from "@lib/util/cn"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  className,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className={cn(
        "flex gap-x-1 items-center font-medium transition-colors group hover:text-foreground text-primary",
        className
      )}
      href={href}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
