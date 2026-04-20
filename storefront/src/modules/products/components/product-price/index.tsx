import { cn } from "@lib/util/cn"

import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-muted animate-pulse rounded-md" />
  }

  return (
    <div className="flex flex-col gap-y-1">
      <span
        className={cn("text-2xl font-bold text-foreground", {
          "text-primary": selectedPrice.price_type === "sale",
        })}
      >
        {!variant && <span className="text-sm font-normal text-muted-foreground mr-1">From</span>}
        <span
          data-testid="product-price"
          data-value={selectedPrice.calculated_price_number}
        >
          {selectedPrice.calculated_price}
        </span>
      </span>
      {selectedPrice.price_type === "sale" && (
        <div className="flex items-center gap-x-2">
          <p className="text-sm text-muted-foreground">
            <span>Original: </span>
            <span
              className="line-through"
              data-testid="original-product-price"
              data-value={selectedPrice.original_price_number}
            >
              {selectedPrice.original_price}
            </span>
          </p>
          <span className="text-primary text-xs font-bold bg-primary/10 px-1.5 py-0.5 rounded">
            -{selectedPrice.percentage_diff}%
          </span>
        </div>
      )}
    </div>
  )
}
