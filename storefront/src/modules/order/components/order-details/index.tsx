import { HttpTypes } from "@medusajs/types"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <p className="text-foreground">
        We have sent the order confirmation details to{" "}
        <span
          className="text-foreground font-semibold"
          data-testid="order-email"
        >
          {order.email}
        </span>
        .
      </p>
      <p className="mt-2 text-muted-foreground text-sm">
        Order date:{" "}
        <span data-testid="order-date" className="text-foreground font-medium">
          {new Date(order.created_at).toDateString()}
        </span>
      </p>
      <p className="mt-2 text-primary font-medium">
        Order number: <span data-testid="order-id">{order.display_id}</span>
      </p>

      <div className="flex items-center text-sm gap-x-4 mt-4">
        {showStatus && (
          <>
            <p className="text-muted-foreground">
              Order status:{" "}
              <span className="text-foreground font-medium" data-testid="order-status">
                {/* TODO: Check where the statuses should come from */}
                {/* {formatStatus(order.fulfillment_status)} */}
              </span>
            </p>
            <p className="text-muted-foreground">
              Payment status:{" "}
              <span
                className="text-foreground font-medium"
                data-testid="order-payment-status"
              >
                {/* {formatStatus(order.payment_status)} */}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
