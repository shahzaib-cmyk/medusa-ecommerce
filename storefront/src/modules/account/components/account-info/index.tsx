"use client"

import { useEffect } from "react"
import { useFormStatus } from "react-dom"
import { cn } from "@lib/util/cn"
import { Button } from "@lib/components/ui/button"
import { Badge } from "@lib/components/ui/badge"
import useToggleState from "@lib/hooks/use-toggle-state"
import { Loader2 } from "lucide-react"

type AccountInfoProps = {
  label: string
  currentInfo: string | React.ReactNode
  isSuccess?: boolean
  isError?: boolean
  errorMessage?: string
  clearState: () => void
  children?: React.ReactNode
  "data-testid"?: string
}

const AccountInfo = ({
  label,
  currentInfo,
  isSuccess,
  isError,
  clearState,
  errorMessage = "An error occurred, please try again",
  children,
  "data-testid": dataTestid,
}: AccountInfoProps) => {
  const { state, close, toggle } = useToggleState()
  const { pending } = useFormStatus()

  const handleToggle = () => {
    clearState()
    setTimeout(() => toggle(), 100)
  }

  useEffect(() => {
    if (isSuccess) {
      close()
    }
  }, [isSuccess, close])

  return (
    <div
      className="pb-8 mb-8 text-sm border-b border-border last:border-0"
      data-testid={dataTestid}
    >
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-y-1">
          <span className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">
            {label}
          </span>
          <div className="flex flex-1 gap-x-4 justify-start items-center basis-0">
            {typeof currentInfo === "string" ? (
              <span
                className="text-base font-semibold text-foreground"
                data-testid="current-info"
              >
                {currentInfo}
              </span>
            ) : (
              <div className="text-foreground">{currentInfo}</div>
            )}
          </div>
        </div>
        <div>
          <Button
            variant="outline"
            size="sm"
            className="w-[80px]"
            onClick={handleToggle}
            type={state ? "reset" : "button"}
            data-testid="edit-button"
            data-active={state}
          >
            {state ? "Cancel" : "Edit"}
          </Button>
        </div>
      </div>

      {/* Success state */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isSuccess ? "opacity-100 max-h-[100px]" : "max-h-0 opacity-0"
        )}
        data-testid="success-message"
      >
        <div className="pt-4">
          <Badge variant="default" className="px-3 py-1 rounded-md">
            {label} updated successfully
          </Badge>
        </div>
      </div>

      {/* Error state  */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isError ? "opacity-100 max-h-[100px]" : "max-h-0 opacity-0"
        )}
        data-testid="error-message"
      >
        <div className="pt-4">
          <Badge variant="destructive" className="px-3 py-1 rounded-md">
            {errorMessage}
          </Badge>
        </div>
      </div>

      <div
        className={cn(
          "overflow-visible transition-all duration-300 ease-in-out",
          state ? "mt-4 opacity-100 max-h-[1000px]" : "max-h-0 opacity-0"
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-y-4 py-4",
            state ? "block" : "hidden"
          )}
        >
          <div className="p-4 rounded-lg border bg-muted/30 border-border">
            {children}
          </div>
          <div className="flex justify-end items-center mt-2">
            <Button
              disabled={pending}
              className="w-full small:max-w-[140px]"
              type="submit"
              data-testid="save-button"
            >
              {pending && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
