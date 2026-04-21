const SkeletonCartTotals = ({ header = true }) => {
  return (
    <div className="flex flex-col">
      {header && <div className="mb-4 w-32 h-4 rounded-sm bg-muted"></div>}
      <div className="flex justify-between items-center">
        <div className="w-32 h-3 rounded-sm bg-muted"></div>
        <div className="w-32 h-3 rounded-sm bg-muted"></div>
      </div>

      <div className="flex justify-between items-center my-4">
        <div className="w-24 h-3 rounded-sm bg-muted"></div>
        <div className="w-24 h-3 rounded-sm bg-muted"></div>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-28 h-3 rounded-sm bg-muted"></div>
        <div className="w-20 h-3 rounded-sm bg-muted"></div>
      </div>

      <div className="my-4 w-full rounded-sm border-b border-dashed border-muted-foreground"></div>

      <div className="flex justify-between items-center">
        <div className="mb-4 w-32 h-6 rounded-sm bg-muted"></div>
        <div className="mb-4 w-24 h-6 rounded-sm bg-muted"></div>
      </div>
    </div>
  )
}

export default SkeletonCartTotals
