const SkeletonLineItem = () => {
  return (
    <div className="flex items-center gap-x-4 py-4 border-b border-border last:border-0 w-full">
      <div className="w-24 h-32 bg-muted rounded-lg animate-pulse shrink-0" />
      <div className="flex flex-col gap-y-2 flex-grow">
        <div className="w-48 h-5 bg-muted animate-pulse rounded-md" />
        <div className="w-32 h-4 bg-muted animate-pulse rounded-md" />
      </div>
      <div className="flex flex-col items-end gap-y-2 shrink-0 pr-4">
        <div className="w-16 h-5 bg-muted animate-pulse rounded-md" />
        <div className="w-24 h-6 bg-muted animate-pulse rounded-md" />
      </div>
    </div>
  )
}

export default SkeletonLineItem
