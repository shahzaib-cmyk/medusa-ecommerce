"use client"

import { Popover, Transition } from "@headlessui/react"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"
import { ShoppingBag } from "lucide-react"

import { HttpTypes } from "@medusajs/types"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@lib/components/ui/sheet"
import CartContent from "./cart-content"

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: HttpTypes.StoreCart | null
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timeout | undefined>(
    undefined
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const itemRef = useRef<number>(totalItems || 0)

  const timedOpen = () => {
    open()
    const timer = setTimeout(close, 5000)
    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }
    open()
  }

  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()

  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen()
    }
  }, [totalItems, itemRef.current])

  return (
    <div className="h-full z-50">
      {/* Mobile Cart — Sheet */}
      <div className="block small:hidden h-full">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="size-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150 relative focus:outline-none"
              aria-label={`Cart, ${totalItems} items`}
              data-testid="nav-cart-link-mobile"
            >
              <ShoppingBag size={16} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 size-4 flex items-center justify-center rounded-full bg-foreground text-background text-[10px] font-semibold leading-none">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 border-l w-full sm:w-[400px]">
            <SheetHeader className="sr-only">
              <SheetTitle>Shopping Cart</SheetTitle>
            </SheetHeader>
            <CartContent cart={cartState || { items: [] } as any} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Cart — Popover */}
      <div 
        className="hidden small:block h-full"
        onMouseEnter={openAndCancel}
        onMouseLeave={close}
      >
        <Popover className="relative h-full">
          <Popover.Button
            className="size-9 flex items-center justify-center rounded-md
              text-muted-foreground hover:text-foreground hover:bg-accent
              transition-colors duration-150 relative focus:outline-none"
            aria-label={`Cart, ${totalItems} item${totalItems !== 1 ? 's' : ''}`}
            data-testid="nav-cart-link"
          >
            <ShoppingBag size={16} />
            {totalItems > 0 && (
              <span
                aria-live="polite"
                className="absolute -top-0.5 -right-0.5 size-4 flex items-center justify-center
                  rounded-full bg-foreground text-background text-[10px] font-semibold leading-none"
              >
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Popover.Button>
          <Transition
            show={cartDropdownOpen}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute top-[calc(100%+1px)] right-0
                bg-background border border-border shadow-md w-[420px] text-foreground rounded-b-lg overflow-hidden"
              data-testid="nav-cart-dropdown"
            >
                <CartContent cart={cartState || { items: [] } as any} onClose={close} />
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  )
}

export default CartDropdown
