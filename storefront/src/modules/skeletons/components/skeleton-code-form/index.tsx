const SkeletonCodeForm = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-4 w-24 h-7 rounded-sm bg-muted"></div>
      <div className="grid grid-cols-[1fr_80px] gap-x-2">
        <div className="h-12 rounded-sm bg-muted"></div>
        <div className="h-12 rounded-sm bg-muted"></div>
      </div>
    </div>
  )
}

export default SkeletonCodeForm
