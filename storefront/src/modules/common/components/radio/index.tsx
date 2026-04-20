"use client"

import { cn } from "@lib/util/cn"

const Radio = ({ 
  checked, 
  "data-testid": dataTestId,
  className
}: { 
  checked: boolean, 
  "data-testid"?: string,
  className?: string
}) => {
  return (
    <div
      role="radio"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      className={cn(
        "flex h-5 w-5 items-center justify-center rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-primary border-primary" : "bg-transparent border-input",
        className
      )}
      data-testid={dataTestId || "radio-button"}
    >
      {checked && (
        <div className="h-2 w-2 rounded-full bg-white shadow-sm" />
      )}
    </div>
  )
}

export default Radio
