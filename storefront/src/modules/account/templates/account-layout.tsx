import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"
import { cn } from "@lib/util/cn"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12" data-testid="account-page">
      <div className="flex flex-col flex-1 mx-auto max-w-5xl h-full content-container bg-background">
        <div
          className={cn("grid grid-cols-1 small:grid-cols-[240px_1fr] py-12", {
            "grid-cols-1 small:grid-cols-1": customer === null,
          })}
        >
          {customer && (
            <div>
              <AccountNav customer={customer} />
            </div>
          )}
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col gap-8 justify-between items-end py-12 small:flex-row small:border-t border-border">
          <div>
            <h3 className="mb-4 text-xl-semi">Got questions?</h3>
            <span className="txt-medium">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
