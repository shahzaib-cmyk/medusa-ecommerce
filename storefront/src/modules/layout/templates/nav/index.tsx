import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Logo } from "@lib/components/brand/logo"
import { ThemeToggle } from "@lib/components/brand/theme-toggle"
import { ShoppingBag, Search, User, Menu } from "lucide-react"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header
        className="relative h-16 mx-auto border-b border-border/60
          bg-background/80 backdrop-blur-md
          transition-all duration-200"
      >
        <nav className="content-container flex items-center w-full h-full">

          {/* LEFT COLUMN */}
          <div className="flex-1 basis-0 flex items-center h-full gap-4">
            {/* Mobile: Hamburger Menu Button */}
            <div className="flex items-center small:hidden">
              <SideMenu regions={regions} />
            </div>

            {/* Desktop: Brand Logo */}
            <div className="hidden small:flex items-center h-full">
              <LocalizedClientLink
                href="/"
                className="hover:opacity-80 transition-opacity flex items-center h-full"
                data-testid="nav-store-link"
              >
                <Logo size="md" />
              </LocalizedClientLink>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex-none small:flex-1 basis-0 flex items-center justify-center h-full">
            {/* Mobile: Brand Logo (Shifts to center) */}
            <div className="flex items-center h-full small:hidden">
              <LocalizedClientLink
                href="/"
                className="hover:opacity-80 transition-opacity flex items-center h-full"
                data-testid="nav-store-link-mobile"
              >
                <Logo size="md" />
              </LocalizedClientLink>
            </div>
          </div>

          {/* RIGHT COLUMN — Action Buttons */}
          <div className="flex-1 basis-0 flex items-center gap-1 justify-end">
            {/* Desktop Group: Search + Links */}
            <div className="hidden small:flex items-center gap-6 mr-4">
              {/* Search Bar Input (Mock) */}
              <div className="w-[240px]">
                <LocalizedClientLink
                  href="/search"
                  scroll={false}
                  className="h-9 w-full flex items-center gap-2 px-3 rounded-md border border-input bg-muted/50 text-muted-foreground hover:bg-muted transition-colors cursor-text text-sm overflow-hidden whitespace-nowrap"
                >
                  <Search size={16} className="shrink-0" />
                  <span>Search products...</span>
                </LocalizedClientLink>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center gap-6 shrink-0">
                <LocalizedClientLink
                  href="/store"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium whitespace-nowrap"
                >
                  Shop
                </LocalizedClientLink>
                <LocalizedClientLink
                  href="/store"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium whitespace-nowrap"
                >
                  Collections
                </LocalizedClientLink>
                <LocalizedClientLink
                  href="/store"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium whitespace-nowrap"
                >
                  New Arrivals
                </LocalizedClientLink>
              </div>
            </div>

            {/* Search — mobile only (icon toggle) */}
            {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
              <LocalizedClientLink
                href="/search"
                scroll={false}
                data-testid="nav-search-link"
                className="size-9 flex items-center justify-center rounded-md
                  text-muted-foreground hover:text-foreground hover:bg-accent
                  transition-colors duration-150 small:hidden"
                aria-label="Search"
              >
                <Search size={16} />
              </LocalizedClientLink>
            )}

            {/* Account — desktop only */}
            <LocalizedClientLink
              href="/account"
              data-testid="nav-account-link"
              className="size-9 items-center justify-center rounded-md
                text-muted-foreground hover:text-foreground hover:bg-accent
                transition-colors duration-150 hidden small:flex"
              aria-label="Account"
            >
              <User size={16} />
            </LocalizedClientLink>

            {/* Dark mode toggle */}
            <ThemeToggle />

            {/* Cart */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  data-testid="nav-cart-link"
                  className="size-9 flex items-center justify-center rounded-md
                    text-muted-foreground hover:text-foreground hover:bg-accent
                    transition-colors duration-150 relative"
                  aria-label="Cart"
                >
                  <ShoppingBag size={16} />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
