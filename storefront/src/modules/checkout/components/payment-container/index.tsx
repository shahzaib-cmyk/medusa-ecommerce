import { cn } from "@lib/util/cn"
import React from "react"

import Radio from "@modules/common/components/radio"

import PaymentTest from "../payment-test"
import { isManual } from "@lib/constants"

type PaymentContainerProps = {
  paymentProviderId: string
  selectedPaymentOptionId: string | null
  disabled?: boolean
  paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>
  onSelect: (id: string) => void
}

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentProviderId,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false,
  onSelect,
}) => {
  const isDevelopment = process.env.NODE_ENV === "development"
  const checked = selectedPaymentOptionId === paymentProviderId

  return (
    <div
      onClick={() => !disabled && onSelect(paymentProviderId)}
      data-testid="payment-option-radio"
      className={cn(
        "flex flex-col gap-y-2 text-sm cursor-pointer py-4 border rounded-lg px-8 mb-2 transition-all hover:bg-black/5 dark:hover:bg-white/5",
        {
          "border-primary bg-primary/5 shadow-sm": checked,
          "border-border bg-background": !checked,
          "opacity-50 pointer-events-none": disabled,
        }
      )}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-x-4">
          <Radio checked={checked} />
          <span className="text-base font-medium text-foreground">
            {paymentInfoMap[paymentProviderId]?.title || paymentProviderId}
          </span>
          {isManual(paymentProviderId) && isDevelopment && (
            <PaymentTest className="hidden small:block" />
          )}
        </div>
        <span className="justify-self-end text-foreground">
          {paymentInfoMap[paymentProviderId]?.icon}
        </span>
      </div>
      {isManual(paymentProviderId) && isDevelopment && (
        <PaymentTest className="small:hidden text-[10px]" />
      )}
    </div>
  )
}

export default PaymentContainer
