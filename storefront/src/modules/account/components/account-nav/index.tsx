"use client"

import { LogOut, User, MapPin, Package, ChevronRight, ChevronLeft } from "lucide-react"
import { useParams, usePathname } from "next/navigation"
import { cn } from "@lib/util/cn"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { signout } from "@lib/data/customer"

const AccountNav = ({
  customer,
}: {
  customer: HttpTypes.StoreCustomer | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }

  const handleLogout = async () => {
    await signout(countryCode)
  }

  return (
    <div>
      <div className="small:hidden" data-testid="mobile-account-nav">
        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="flex items-center gap-x-2 text-sm py-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="account-main-link"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Account</span>
          </LocalizedClientLink>
        ) : (
          <>
            <div className="text-2xl font-semibold mb-4 px-8 text-foreground">
              Hello {customer?.first_name}
            </div>
            <div className="text-base">
              <ul>
                <li>
                  <LocalizedClientLink
                    href="/account/profile"
                    className="flex items-center justify-between py-4 border-b border-border px-8 hover:bg-accent transition-all"
                    data-testid="profile-link"
                  >
                    <div className="flex items-center gap-x-2 text-foreground">
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/addresses"
                    className="flex items-center justify-between py-4 border-b border-border px-8 hover:bg-accent transition-all"
                    data-testid="addresses-link"
                  >
                    <div className="flex items-center gap-x-2 text-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>Addresses</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account/orders"
                    className="flex items-center justify-between py-4 border-b border-border px-8 hover:bg-accent transition-all"
                    data-testid="orders-link"
                  >
                    <div className="flex items-center gap-x-2 text-foreground">
                      <Package className="h-5 w-5" />
                      <span>Orders</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center justify-between py-4 border-b border-border px-8 w-full hover:bg-accent transition-all"
                    onClick={handleLogout}
                    data-testid="logout-button"
                  >
                    <div className="flex items-center gap-x-2 text-foreground">
                      <LogOut className="h-5 w-5" />
                      <span>Log out</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="hidden small:block" data-testid="account-nav">
        <div>
          <div className="pb-4">
            <h3 className="text-base font-semibold text-foreground">Account</h3>
          </div>
          <div className="text-base">
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
              <li>
                <AccountNavLink
                  href="/account"
                  route={route!}
                  data-testid="overview-link"
                >
                  Overview
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/profile"
                  route={route!}
                  data-testid="profile-link"
                >
                  Profile
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/addresses"
                  route={route!}
                  data-testid="addresses-link"
                >
                  Addresses
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/orders"
                  route={route!}
                  data-testid="orders-link"
                >
                  Orders
                </AccountNavLink>
              </li>
              <li className="text-muted-foreground hover:text-foreground">
                <button
                  type="button"
                  onClick={handleLogout}
                  data-testid="logout-button"
                  className="flex items-center gap-x-2 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  "data-testid"?: string
}

const AccountNavLink = ({
  href,
  route,
  children,
  "data-testid": dataTestId,
}: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()

  const active = route.split(countryCode)[1] === href
  return (
    <LocalizedClientLink
      href={href}
      className={cn("text-muted-foreground hover:text-foreground transition-colors", {
        "text-foreground font-semibold": active,
      })}
      data-testid={dataTestId}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav
