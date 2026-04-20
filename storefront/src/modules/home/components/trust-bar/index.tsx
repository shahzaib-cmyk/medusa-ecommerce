import { Separator } from "@lib/components/ui/separator"
import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react"

const TRUST_ITEMS = [
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "On orders over $50",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "30-day return policy",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    subtitle: "256-bit SSL encryption",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "We're always here",
  },
]

const TrustBar = () => {
  return (
    <section
      className="w-full border-b border-border bg-secondary/30"
      aria-label="Trust signals"
    >
      <div className="content-container py-4">
        <div className="flex flex-col xsmall:flex-row items-center justify-center divide-y xsmall:divide-y-0 xsmall:divide-x divide-border/50 w-full">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-center gap-3 py-3 xsmall:py-2 xsmall:px-8 xl:px-12 w-full xsmall:w-auto justify-center"
              >
                <Icon
                  size={18}
                  className="text-foreground shrink-0"
                  aria-hidden="true"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
