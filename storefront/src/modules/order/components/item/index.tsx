import { HttpTypes } from "@medusajs/types"

import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import Thumbnail from "@modules/products/components/thumbnail"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
}

const Item = ({ item }: ItemProps) => {
  return (
    <div className="flex items-center gap-x-4 py-4 border-b border-border last:border-0" data-testid="product-row">
      <div className="w-24 shrink-0">
        <div className="w-16">
          <Thumbnail thumbnail={item.thumbnail} size="square" />
        </div>
      </div>

      <div className="flex flex-col flex-grow text-left">
        <span
          className="text-base font-semibold text-foreground mb-1"
          data-testid="product-name"
        >
          {item.title}
        </span>
        {item.variant && (
          <LineItemOptions variant={item.variant} data-testid="product-variant" />
        )}
      </div>

      <div className="flex flex-col items-end shrink-0">
        <div className="flex gap-x-1 text-sm text-muted-foreground items-baseline">
          <span data-testid="product-quantity">{item.quantity}</span>
          <span>x</span>
          <LineItemUnitPrice item={item} style="tight" />
        </div>

        <LineItemPrice item={item} style="tight" />
      </div>
    </div>
  )
}

export default Item
