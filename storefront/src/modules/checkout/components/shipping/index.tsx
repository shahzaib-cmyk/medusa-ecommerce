"use client"

import { CheckCircle2 } from "lucide-react"
import { Button } from "@lib/components/ui/button"
import { cn } from "@lib/util/cn"

import Divider from "@modules/common/components/divider"
import Radio from "@modules/common/components/radio"
import ErrorMessage from "@modules/checkout/components/error-message"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { setShippingMethod } from "@lib/data/cart"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type ShippingProps = {
  cart: HttpTypes.StoreCart
  availableShippingMethods: HttpTypes.StoreCartShippingOption[] | null
}

const Shipping: React.FC<ShippingProps> = ({
  cart,
  availableShippingMethods,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "delivery"

  const selectedShippingMethod = availableShippingMethods?.find(
    (method) => method.id === cart.shipping_methods?.at(-1)?.shipping_option_id
  )

  const handleEdit = () => {
    router.push(pathname + "?step=delivery", { scroll: false })
  }

  const handleSubmit = () => {
    router.push(pathname + "?step=payment", { scroll: false })
  }

  const set = async (id: string) => {
    setIsLoading(true)
    await setShippingMethod({ cartId: cart.id, shippingMethodId: id })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  return (
    <div className="bg-background">
      <div className="flex flex-row items-center justify-between mb-6">
        <h2
          className={cn(
            "flex flex-row text-3xl font-semibold gap-x-2 items-center text-foreground",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && cart.shipping_methods?.length === 0,
            }
          )}
        >
          Delivery
          {!isOpen && (cart.shipping_methods?.length ?? 0) > 0 && (
            <CheckCircle2 className="text-primary h-6 w-6" />
          )}
        </h2>
        {!isOpen &&
          cart?.shipping_address &&
          cart?.billing_address &&
          cart?.email && (
            <button
              onClick={handleEdit}
              className="text-primary hover:text-primary/80 font-medium transition-colors"
              data-testid="edit-delivery-button"
            >
              Edit
            </button>
          )}
      </div>
      {isOpen ? (
        <div data-testid="delivery-options-container">
          <div className="pb-8 flex flex-col gap-y-2">
            {availableShippingMethods?.map((option) => {
              const checked = option.id === selectedShippingMethod?.id
              return (
                <div
                  key={option.id}
                  onClick={() => set(option.id)}
                  data-testid="delivery-option-radio"
                  className={cn(
                    "flex items-center justify-between text-sm cursor-pointer py-4 border rounded-lg px-8 transition-all hover:bg-black/5 dark:hover:bg-white/5",
                    {
                      "border-primary bg-primary/5 shadow-sm": checked,
                      "border-border bg-background": !checked,
                    }
                  )}
                >
                  <div className="flex items-center gap-x-4">
                    <Radio checked={checked} />
                    <span className="font-medium text-foreground">{option.name}</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {convertToLocale({
                      amount: option.amount!,
                      currency_code: cart?.currency_code,
                    })}
                  </span>
                </div>
              )
            })}
          </div>

          <ErrorMessage
            error={error}
            data-testid="delivery-option-error-message"
          />

          <Button
            className="mt-6 h-12 w-full max-w-[240px] text-base"
            onClick={handleSubmit}
            disabled={!cart.shipping_methods?.[0] || isLoading}
            data-testid="submit-delivery-option-button"
          >
            {isLoading ? "Updating..." : "Continue to payment"}
          </Button>
        </div>
      ) : (
        <div className="text-sm text-muted-foreground">
          {cart && (cart.shipping_methods?.length ?? 0) > 0 && (
            <div className="flex flex-col w-full">
              <span className="font-semibold text-foreground mb-1">
                Method
              </span>
              <p className="text-muted-foreground">
                {selectedShippingMethod?.name}{" "}
                ({convertToLocale({
                  amount: selectedShippingMethod?.amount!,
                  currency_code: cart?.currency_code,
                })})
              </p>
            </div>
          )}
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Shipping
