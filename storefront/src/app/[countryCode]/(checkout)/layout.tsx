import LocalizedClientLink from "@modules/common/components/localized-client-link"
import StorefrontCTA from "@modules/layout/components/medusa-cta"
import { ChevronLeft } from "lucide-react"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative w-full bg-background small:min-h-screen">
      <div className="h-16 border-b bg-background border-border">
        <nav className="flex justify-between items-center h-full content-container">
          <LocalizedClientLink
            href="/cart"
            className="flex flex-1 gap-x-2 items-center text-sm font-semibold uppercase transition-colors text-foreground basis-0 hover:text-primary"
            data-testid="back-to-cart-link"
          >
            <ChevronLeft size={16} />
            <span className="hidden small:block">
              Back to shopping cart
            </span>
            <span className="block small:hidden">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="text-xl font-bold tracking-tight uppercase transition-colors text-foreground hover:text-primary"
            data-testid="store-link"
          >
            YourBrand Store
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
      <div className="flex justify-center items-center py-4 w-full">
        <StorefrontCTA />
      </div>
    </div>
  )
}
