import { cn } from "@lib/util/cn"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="flex items-center gap-x-2">
      {price.price_type === "sale" && (
        <span
          className="line-through text-muted-foreground text-xs"
          data-testid="original-price"
        >
          {price.original_price}
        </span>
      )}
      <span
        className={cn("text-sm font-semibold", {
          "text-primary": price.price_type === "sale",
          "text-foreground": price.price_type !== "sale"
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </span>
    </div>
  )
}
