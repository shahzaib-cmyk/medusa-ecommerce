import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: HttpTypes.StoreProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

type HitProps = {
  hit: ProductHit
}

const Hit = ({ hit }: HitProps) => {
  return (
    <LocalizedClientLink
      href={`/products/${hit.handle}`}
      data-testid="search-result"
      className="group"
    >
      <div
        key={hit.id}
        className="flex sm:flex-col gap-2 w-full p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors items-center sm:justify-center overflow-hidden"
      >
        <Thumbnail
          thumbnail={hit.thumbnail}
          size="square"
          className="h-12 w-12 sm:h-full sm:w-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col overflow-hidden">
            <span
              className="text-sm font-medium text-foreground truncate"
              data-testid="search-result-title"
            >
              {hit.title}
            </span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}

export default Hit
