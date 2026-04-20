const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-[9/16] w-full bg-muted rounded-xl ring-1 ring-border" />
      <div className="flex justify-between mt-4 gap-x-4">
        <div className="w-3/5 h-6 bg-muted rounded-md shrink-0" />
        <div className="w-1/5 h-6 bg-muted rounded-md" />
      </div>
    </div>
  )
}

export default SkeletonProductPreview
