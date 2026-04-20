"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@lib/components/ui/accordion"
import { Truck, RotateCcw, ArrowLeft } from "lucide-react"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple" className="w-full">
        {tabs.map((tab, i) => (
          <AccordionItem key={i} value={tab.label}>
            <AccordionTrigger className="text-sm font-medium hover:no-underline hover:text-muted-foreground">{tab.label}</AccordionTrigger>
            <AccordionContent>
              {tab.component}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-sm py-4">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold text-foreground">Material</span>
            <p className="text-muted-foreground">{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Country of origin</span>
            <p className="text-muted-foreground">{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Type</span>
            <p className="text-muted-foreground">{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold text-foreground">Weight</span>
            <p className="text-muted-foreground">{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold text-foreground">Dimensions</span>
            <p className="text-muted-foreground">
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-sm py-4">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-3">
          <Truck className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <span className="font-semibold text-foreground">Fast delivery</span>
            <p className="max-w-sm text-muted-foreground mt-1 text-xs">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <RotateCcw className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <span className="font-semibold text-foreground">Simple exchanges</span>
            <p className="max-w-sm text-muted-foreground mt-1 text-xs">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <ArrowLeft className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div>
            <span className="font-semibold text-foreground">Easy returns</span>
            <p className="max-w-sm text-muted-foreground mt-1 text-xs">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
