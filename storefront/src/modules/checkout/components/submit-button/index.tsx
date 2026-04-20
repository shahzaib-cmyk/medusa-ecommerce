"use client"

import { Button } from "@lib/components/ui/button"
import React from "react"
import { useFormStatus } from "react-dom"
import { Loader2 } from "lucide-react"

export function SubmitButton({
  children,
  variant = "primary",
  className,
  "data-testid": dataTestId,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" | null
  className?: string
  "data-testid"?: string
}) {
  const { pending } = useFormStatus()

  const buttonVariant = variant === "primary" ? "default" : 
                        variant === "secondary" ? "outline" :
                        variant === "danger" ? "destructive" :
                        variant === "transparent" ? "ghost" : "default"

  return (
    <Button
      className={className}
      type="submit"
      disabled={pending}
      variant={buttonVariant}
      data-testid={dataTestId}
    >
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </Button>
  )
}
