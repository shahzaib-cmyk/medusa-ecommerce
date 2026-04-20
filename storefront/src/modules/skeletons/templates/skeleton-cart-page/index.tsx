import repeat from "@lib/util/repeat"
import SkeletonCartItem from "@modules/skeletons/components/skeleton-cart-item"
import SkeletonCodeForm from "@modules/skeletons/components/skeleton-code-form"
import SkeletonOrderSummary from "@modules/skeletons/components/skeleton-order-summary"

const SkeletonCartPage = () => {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="content-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-x-12 lg:gap-x-20">
          <div className="flex flex-col bg-background border border-border rounded-xl p-8 gap-y-8">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-y-3">
                <div className="w-64 h-10 bg-muted animate-pulse rounded-md" />
                <div className="w-48 h-6 bg-muted animate-pulse rounded-md" />
              </div>
              <div className="w-16 h-10 bg-muted animate-pulse rounded-md" />
            </div>
            <div>
              <div className="pb-6 border-b border-border mb-6">
                <div className="w-24 h-10 bg-muted animate-pulse rounded-md" />
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-y-4">
                  <div className="grid grid-cols-5 gap-x-4 border-b border-border pb-4 opacity-50">
                    <div className="col-span-2 w-16 h-4 bg-muted animate-pulse rounded-sm" />
                    <div className="w-16 h-4 bg-muted animate-pulse rounded-sm" />
                    <div className="w-12 h-4 bg-muted animate-pulse rounded-sm" />
                    <div className="flex justify-end pr-4">
                      <div className="w-12 h-4 bg-muted animate-pulse rounded-sm" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    {repeat(3).map((index) => (
                      <SkeletonCartItem key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 mt-12 lg:mt-0">
            <SkeletonOrderSummary />
            <SkeletonCodeForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage
