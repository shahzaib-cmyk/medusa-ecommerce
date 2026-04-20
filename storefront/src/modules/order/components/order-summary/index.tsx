import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OrderSummaryProps = {
  order: HttpTypes.StoreOrder
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const getAmount = (amount?: number | null) => {
    if (!amount) {
      return
    }

    return convertToLocale({
      amount,
      currency_code: order.currency_code,
    })
  }

  return (
    <div className="mt-8">
      <h2 className="text-base font-semibold text-foreground">Order Summary</h2>
      <div className="text-sm text-foreground my-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium text-foreground">{getAmount(order.subtotal)}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          {order.discount_total > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Discount</span>
              <span className="text-destructive font-medium">- {getAmount(order.discount_total)}</span>
            </div>
          )}
          {order.gift_card_total > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Gift Card</span>
              <span className="text-destructive font-medium">- {getAmount(order.gift_card_total)}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-foreground">{getAmount(order.shipping_total)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Taxes</span>
            <span className="text-foreground">{getAmount(order.tax_total)}</span>
          </div>
        </div>
        <div className="h-px w-full border-b border-border border-dashed my-4" />
        <div className="flex items-center justify-between text-base font-bold text-foreground mb-2">
          <span>Total</span>
          <span data-testid="order-total">{getAmount(order.total)}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
