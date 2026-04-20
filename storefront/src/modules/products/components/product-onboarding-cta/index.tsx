import { Button } from "@lib/components/ui/button"
import { cookies } from "next/headers"

const ProductOnboardingCta = async () => {
  const cookieStore = await cookies()
  const isOnboarding = cookieStore.get("_medusa_onboarding")?.value === "true"

  if (!isOnboarding) {
    return null
  }

  return (
    <div className="max-w-4xl h-full bg-muted/30 border border-border rounded-xl w-full mx-auto">
      <div className="flex flex-col gap-y-4 items-center p-8 text-center">
        <h3 className="text-foreground text-xl font-semibold">
          Your demo product was successfully created! 🎉
        </h3>
        <p className="text-muted-foreground text-sm">
          You can now continue setting up your store in the admin.
        </p>
        <a 
          href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs"
          className="w-full sm:w-fit"
        >
          <Button className="w-full px-8" variant="default">
            Continue setup in admin
          </Button>
        </a>
      </div>
    </div>
  )
}

export default ProductOnboardingCta
