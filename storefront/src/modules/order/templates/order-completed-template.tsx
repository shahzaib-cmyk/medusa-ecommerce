import { cookies } from "next/headers"

import CartTotals from "@modules/common/components/cart-totals"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import PaymentDetails from "@modules/order/components/payment-details"
import { HttpTypes } from "@medusajs/types"

type OrderCompletedTemplateProps = {
  order: HttpTypes.StoreOrder
}

export default async function OrderCompletedTemplate({
  order,
}: OrderCompletedTemplateProps) {
  const cookieStore = await cookies()
  const isOnboarding = cookieStore.get("_medusa_onboarding")?.value === "true"

  return (
    <div className="py-6 min-h-[calc(100vh-64px)] bg-muted/20">
      <div className="flex flex-col gap-y-10 justify-center items-center w-full max-w-4xl h-full content-container mx-auto">
        {isOnboarding && <OnboardingCta orderId={order.id} />}
        <div
          className="flex flex-col gap-4 py-10 w-full max-w-4xl h-full bg-background border border-border rounded-xl px-8"
          data-testid="order-complete-container"
        >
          <div className="flex flex-col gap-y-2 mb-8">
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Success</span>
            <h1 className="text-3xl font-bold text-foreground">
              Thank you! Your order was placed successfully.
            </h1>
          </div>
          
          <OrderDetails order={order} />
          
          <div className="mt-10 mb-4 border-b border-border pb-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Summary
            </h2>
          </div>
          
          <Items items={order.items} />
          <CartTotals totals={order} />
          <ShippingDetails order={order} />
          <PaymentDetails order={order} />
          <Help />
        </div>
      </div>
    </div>
  )
}
