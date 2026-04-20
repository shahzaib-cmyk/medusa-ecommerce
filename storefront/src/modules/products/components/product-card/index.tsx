import { HttpTypes } from "@medusajs/types"
import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { getProductsById } from "@lib/data/products"
import { Badge } from "@lib/components/ui/badge"

interface ProductCardProps {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}

export default async function ProductCard({
  product,
  isFeatured,
  region,
}: ProductCardProps) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({ product: pricedProduct })

  // Determine badges
  const isNew =
    product.created_at &&
    Date.now() - new Date(product.created_at).getTime() < 30 * 24 * 60 * 60 * 1000 // 30 days

  const isOnSale =
    cheapestPrice?.price_type === "sale" ||
    cheapestPrice?.calculated_price !== cheapestPrice?.original_price

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group block"
      data-testid="product-wrapper"
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-xl bg-secondary aspect-[3/4] mb-4">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {isNew && (
            <Badge
              variant="secondary"
              className="text-[10px] font-semibold px-2 py-0.5 bg-background/90 backdrop-blur-sm border border-border"
            >
              New
            </Badge>
          )}
          {isOnSale && (
            <Badge
              variant="destructive"
              className="text-[10px] font-semibold px-2 py-0.5"
            >
              Sale
            </Badge>
          )}
        </div>

        {/* Product thumbnail */}
        <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10
            transition-colors duration-300 flex items-end justify-center pb-4"
        >
          <span
            className="text-xs font-semibold tracking-wide uppercase
              bg-background/90 backdrop-blur-sm text-foreground
              px-4 py-2 rounded-full border border-border
              translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-300"
          >
            Quick View
          </span>
        </div>
      </div>

      {/* Product info */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium text-foreground leading-snug truncate flex-1">
          {product.title}
        </h3>
        <div className="shrink-0 text-right">
          {cheapestPrice && (
            <div className="flex flex-col items-end">
              {isOnSale && cheapestPrice.original_price && (
                <span className="text-xs text-muted-foreground line-through">
                  {cheapestPrice.original_price}
                </span>
              )}
              <span
                className={`text-sm font-semibold ${
                  isOnSale ? "text-destructive" : "text-foreground"
                }`}
              >
                {cheapestPrice.calculated_price}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Subtitle / collection */}
      {product.subtitle && (
        <p className="text-xs text-muted-foreground mt-0.5 truncate">
          {product.subtitle}
        </p>
      )}
    </LocalizedClientLink>
  )
}
