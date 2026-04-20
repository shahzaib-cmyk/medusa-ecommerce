import React, { useEffect, useImperativeHandle, useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { Input as ShadcnInput } from "@lib/components/ui/input"
import { Label as ShadcnLabel } from "@lib/components/ui/label"

type InputProps = Omit<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  "placeholder"
> & {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
  topLabel?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, touched, required, topLabel, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text")
      }

      if (type === "password" && !showPassword) {
        setInputType("password")
      }
    }, [type, showPassword])

    useImperativeHandle(ref, () => inputRef.current!)

    return (
      <div className="flex flex-col w-full relative">
        {topLabel && (
          <ShadcnLabel className="mb-2 text-sm font-medium">{topLabel}</ShadcnLabel>
        )}
        <div className="relative">
          <ShadcnInput
            type={inputType}
            name={name}
            placeholder={label}
            required={required}
            className="w-full text-base bg-background h-11"
            ref={inputRef}
            {...props}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
