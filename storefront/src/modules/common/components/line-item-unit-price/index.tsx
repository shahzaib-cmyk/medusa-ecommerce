import { getPricesForVariant } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import { cn } from "@lib/util/cn"

type LineItemUnitPriceProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  style?: "default" | "tight"
}

const LineItemUnitPrice = ({
  item,
  style = "default",
}: LineItemUnitPriceProps) => {
  const {
    original_price,
    calculated_price,
    original_price_number,
    calculated_price_number,
    percentage_diff,
  } = getPricesForVariant(item.variant) ?? {}
  const hasReducedPrice = calculated_price_number < original_price_number

  return (
    <div className="flex flex-col justify-center h-full text-right">
      {hasReducedPrice && (
        <div className="flex flex-col items-end gap-y-0.5 mb-0.5">
          <p className="text-xs text-muted-foreground">
            {style === "default" && (
              <span>Original: </span>
            )}
            <span
              className="line-through"
              data-testid="product-unit-original-price"
            >
              {original_price}
            </span>
          </p>
          {style === "default" && (
            <span className="text-primary text-[10px] font-bold">-{percentage_diff}%</span>
          )}
        </div>
      )}
      <span
        className={cn("text-sm font-medium text-foreground", {
          "text-primary": hasReducedPrice,
        })}
        data-testid="product-unit-price"
      >
        {calculated_price}
      </span>
    </div>
  )
}

export default LineItemUnitPrice
