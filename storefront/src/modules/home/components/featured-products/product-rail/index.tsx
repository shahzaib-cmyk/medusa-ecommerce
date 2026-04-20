import { HttpTypes } from "@medusajs/types"
import { ArrowRight } from "lucide-react"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductCard from "@modules/products/components/product-card"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <section className="content-container py-16 small:py-24" aria-label={collection.title}>
      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Featured
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{collection.title}</h2>
        </div>
        <InteractiveLink
          href={`/collections/${collection.handle}`}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground
            hover:text-foreground transition-colors group"
        >
          View all
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </InteractiveLink>
      </div>

      {/* Product grid */}
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-5 gap-y-10">
        {products.map((product) => (
          <li key={product.id}>
            {/* @ts-ignore */}
            <ProductCard product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </section>
  )
}
