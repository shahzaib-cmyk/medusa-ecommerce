"use client"

import { Button } from "@lib/components/ui/button"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"

const CartContent = ({
  cart,
  onClose,
}: {
  cart: HttpTypes.StoreCart
  onClose?: () => void
}) => {
  const subtotal = cart?.subtotal ?? 0

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex items-center justify-center border-b">
        <h3 className="text-lg font-semibold">Cart</h3>
      </div>
      {cart.items?.length ? (
        <>
          <div className="overflow-y-auto max-h-[402px] px-4 py-4 grid grid-cols-1 gap-y-8 no-scrollbar flex-1">
            {cart.items
              .sort((a, b) => {
                return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
              })
              .map((item) => (
                <div
                  className="grid grid-cols-[122px_1fr] gap-x-4"
                  key={item.id}
                  data-testid="cart-item"
                >
                  <LocalizedClientLink
                    href={`/products/${item.variant?.product?.handle}`}
                    className="w-24"
                    onClick={onClose}
                  >
                    <Thumbnail
                      thumbnail={item.variant?.product?.thumbnail}
                      images={item.variant?.product?.images}
                      size="square"
                    />
                  </LocalizedClientLink>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex flex-col flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-full max-w-[180px]">
                          <h3 className="text-sm font-medium overflow-hidden text-ellipsis text-foreground">
                            <LocalizedClientLink
                              href={`/products/${item.variant?.product?.handle}`}
                              data-testid="product-link"
                              onClick={onClose}
                            >
                              {item.title}
                            </LocalizedClientLink>
                          </h3>
                          <LineItemOptions
                            variant={item.variant}
                            data-testid="cart-item-variant"
                          />
                          <span
                            className="text-xs text-muted-foreground mt-1"
                            data-testid="cart-item-quantity"
                          >
                            Quantity: {item.quantity}
                          </span>
                        </div>
                        <div className="flex justify-end">
                          <LineItemPrice item={item} style="tight" />
                        </div>
                      </div>
                    </div>
                    <DeleteButton
                      id={item.id}
                      className="mt-1 text-xs text-muted-foreground hover:text-foreground"
                      data-testid="cart-item-remove-button"
                    >
                      Remove
                    </DeleteButton>
                  </div>
                </div>
              ))}
          </div>
          <div className="p-4 flex flex-col gap-y-4 text-sm mt-auto border-t">
            <div className="flex items-center justify-between">
              <span className="text-foreground font-semibold">
                Subtotal <span className="font-normal text-muted-foreground">(excl. taxes)</span>
              </span>
              <span
                className="text-lg font-semibold"
                data-testid="cart-subtotal"
              >
                {convertToLocale({
                  amount: subtotal,
                  currency_code: cart.currency_code,
                })}
              </span>
            </div>
            <LocalizedClientLink href="/cart" passHref onClick={onClose}>
              <Button
                className="w-full"
                size="lg"
                data-testid="go-to-cart-button"
              >
                Go to cart
              </Button>
            </LocalizedClientLink>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 gap-y-4">
          <div className="bg-muted text-foreground text-sm flex items-center justify-center w-8 h-8 rounded-full">
            <span>0</span>
          </div>
          <span className="text-muted-foreground text-sm">Your shopping bag is empty.</span>
          <LocalizedClientLink href="/store" onClick={onClose}>
            <Button variant="default">Explore products</Button>
          </LocalizedClientLink>
        </div>
      )}
    </div>
  )
}

export default CartContent
