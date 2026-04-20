"use client"

import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@lib/components/ui/sheet"
import { ChevronRight, Menu } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"
import useToggleState from "@lib/hooks/use-toggle-state"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState(false)
  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Sheet>
          <SheetTrigger asChild>
            <button
              data-testid="nav-menu-button"
              className="flex relative justify-center items-center rounded-md transition-all duration-200 ease-out size-9 text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="flex flex-col justify-between w-full sm:w-[400px] bg-background/90 backdrop-blur-xl border-l p-8"
          >
            <SheetHeader className="hidden">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <ul className="flex flex-col gap-6 justify-start items-start mt-8">
              {Object.entries(SideMenuItems).map(([name, href]) => (
                <li key={name}>
                  <SheetClose asChild>
                    <LocalizedClientLink
                      href={href}
                      className="text-3xl font-medium leading-10 transition-colors hover:text-muted-foreground"
                      data-testid={`${name.toLowerCase()}-link`}
                    >
                      {name}
                    </LocalizedClientLink>
                  </SheetClose>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-y-6 mt-auto">
              <div
                className="flex justify-between items-center cursor-pointer"
                onMouseEnter={toggleState.open}
                onMouseLeave={toggleState.close}
              >
                {regions && (
                  <CountrySelect toggleState={toggleState} regions={regions} />
                )}
                <ChevronRight
                  size={20}
                  className={`transition-transform duration-200 text-muted-foreground ${
                    toggleState.state ? "rotate-90" : ""
                  }`}
                />
              </div>
              <p className="flex justify-between text-xs text-muted-foreground">
                © {new Date().getFullYear()} YourBrand Store. All rights
                reserved.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default SideMenu
