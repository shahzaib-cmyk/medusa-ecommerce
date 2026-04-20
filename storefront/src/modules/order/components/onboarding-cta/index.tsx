"use client"

import { resetOnboardingState } from "@lib/data/onboarding"
import { Button } from "@lib/components/ui/button"

const OnboardingCta = ({ orderId }: { orderId: string }) => {
  return (
    <div className="max-w-4xl h-full bg-muted/30 border border-border rounded-xl w-full mx-auto">
      <div className="flex flex-col gap-y-4 items-center p-6 text-center">
        <h3 className="text-foreground text-xl font-semibold">
          Your test order was successfully created! 🎉
        </h3>
        <p className="text-muted-foreground text-sm">
          You can now complete setting up your store in the admin.
        </p>
        <Button
          className="w-fit px-8"
          variant="default"
          onClick={() => resetOnboardingState(orderId)}
        >
          Complete setup in admin
        </Button>
      </div>
    </div>
  )
}

export default OnboardingCta
