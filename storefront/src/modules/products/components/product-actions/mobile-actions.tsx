import { Dialog, Transition } from "@headlessui/react"
import { cn } from "@lib/util/cn"
import { Button } from "@lib/components/ui/button"
import React, { Fragment, useMemo } from "react"
import { Loader2, ChevronDown, X } from "lucide-react"

import useToggleState from "@lib/hooks/use-toggle-state"
import { getProductPrice } from "@lib/util/get-product-price"
import OptionSelect from "./option-select"
import { HttpTypes } from "@medusajs/types"

type MobileActionsProps = {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
  options: Record<string, string | undefined>
  updateOptions: (title: string, value: string) => void
  inStock?: boolean
  handleAddToCart: () => void
  isAdding?: boolean
  show: boolean
  optionsDisabled: boolean
}

const MobileActions: React.FC<MobileActionsProps> = ({
  product,
  variant,
  options,
  updateOptions,
  inStock,
  handleAddToCart,
  isAdding,
  show,
  optionsDisabled,
}) => {
  const { state, open, close } = useToggleState()

  const price = getProductPrice({
    product: product,
    variantId: variant?.id,
  })

  const selectedPrice = useMemo(() => {
    if (!price) {
      return null
    }
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <>
      <div
        className={cn("lg:hidden inset-x-0 bottom-0 fixed z-50 transition-all duration-300 transform", {
          "translate-y-full opacity-0 pointer-events-none": !show,
          "translate-y-0 opacity-100": show,
        })}
      >
        <div
          className="bg-background/95 backdrop-blur-md flex flex-col gap-y-4 justify-center items-center p-6 w-full border-t border-border shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]"
          data-testid="mobile-actions"
        >
          <div className="flex items-center gap-x-2 text-foreground font-semibold">
            <span data-testid="mobile-title" className="text-base">{product.title}</span>
            <span className="text-muted-foreground/50">—</span>
            {selectedPrice ? (
              <div className="flex items-center gap-x-2">
                {selectedPrice.price_type === "sale" && (
                  <span className="line-through text-xs text-muted-foreground font-normal">
                    {selectedPrice.original_price}
                  </span>
                )}
                <span
                  className={cn("text-base", {
                    "text-primary font-bold":
                      selectedPrice.price_type === "sale",
                  })}
                >
                  {selectedPrice.calculated_price}
                </span>
              </div>
            ) : (
              <div className="w-12 h-4 bg-muted animate-pulse rounded" />
            )}
          </div>
          <div className="grid grid-cols-2 w-full gap-x-4">
            <Button
              onClick={open}
              variant="outline"
              className="w-full text-sm font-medium h-12 rounded-xl border-border bg-background hover:bg-muted"
              data-testid="mobile-actions-button"
            >
              <div className="flex items-center justify-between w-full px-1">
                <span className="truncate mr-2 text-foreground">
                  {variant
                    ? Object.values(options).join(" / ")
                    : "Select Options"}
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
              </div>
            </Button>
            <Button
              onClick={handleAddToCart}
              disabled={!inStock || !variant || isAdding}
              variant="default"
              className="w-full text-sm font-bold h-12 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
              data-testid="mobile-cart-button"
            >
              {isAdding ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : !variant ? (
                "Select variant"
              ) : !inStock ? (
                "Out of stock"
              ) : (
                "Add to cart"
              )}
            </Button>
          </div>
        </div>
      </div>

      <Transition appear show={state} as={Fragment}>
        <Dialog as="div" className="relative z-[75]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed bottom-0 inset-x-0">
            <div className="flex min-h-full h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full"
              >
                <Dialog.Panel
                  className="w-full h-full transform overflow-hidden text-left flex flex-col gap-y-4"
                  data-testid="mobile-actions-modal"
                >
                  <div className="w-full flex justify-center px-6">
                    <button
                      onClick={close}
                      className="bg-background border border-border w-12 h-12 rounded-full text-foreground flex justify-center items-center shadow-xl mb-4 hover:bg-muted transition-colors"
                      data-testid="close-modal-button"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="bg-background px-8 py-10 rounded-t-[2.5rem] border-t border-border shadow-2xl space-y-8">
                    {(product.variants?.length ?? 0) > 1 && (
                      <div className="flex flex-col gap-y-8">
                        {(product.options || []).map((option) => {
                          return (
                            <div key={option.id}>
                              <OptionSelect
                                option={option}
                                current={options[option.title ?? ""]}
                                updateOption={updateOptions}
                                title={option.title ?? ""}
                                disabled={optionsDisabled}
                              />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileActions
