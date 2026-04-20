import { deleteLineItem } from "@lib/data/cart"
import { cn } from "@lib/util/cn"
import { Loader2, Trash2 } from "lucide-react"
import { useState } from "react"

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string
  children?: React.ReactNode
  className?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }

  return (
    <div className={cn("flex justify-between items-center text-sm", className)}>
      <button
        className="flex gap-x-2 items-center transition-colors cursor-pointer text-muted-foreground hover:text-destructive"
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Trash2 className="w-4 h-4" />
        )}
        <span>{children}</span>
      </button>
    </div>
  )
}

export default DeleteButton
