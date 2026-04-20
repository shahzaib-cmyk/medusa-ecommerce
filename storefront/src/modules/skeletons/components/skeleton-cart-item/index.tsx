const SkeletonCartItem = () => {
  return (
    <div className="grid grid-cols-5 gap-x-4 items-center py-6 border-b border-border last:border-0">
      <div className="col-span-2 flex items-center gap-x-4">
        <div className="w-24 h-32 bg-muted rounded-lg animate-pulse shrink-0" />
        <div className="flex flex-col gap-y-2">
          <div className="w-40 h-5 bg-muted animate-pulse rounded-md" />
          <div className="w-24 h-4 bg-muted animate-pulse rounded-md" />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-y-2">
          <div className="w-20 h-4 bg-muted animate-pulse rounded-md" />
          <div className="w-12 h-4 bg-muted animate-pulse rounded-md" />
        </div>
      </div>
      <div>
        <div className="w-16 h-8 bg-muted animate-pulse rounded-md" />
      </div>
      <div className="flex justify-end pr-4">
        <div className="w-20 h-6 bg-muted animate-pulse rounded-md" />
      </div>
    </div>
  )
}

export default SkeletonCartItem
