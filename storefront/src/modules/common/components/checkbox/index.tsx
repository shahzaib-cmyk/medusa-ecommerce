import React from "react"
import { Checkbox } from "@lib/components/ui/checkbox"
import { Label } from "@lib/components/ui/label"

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
  name?: string
  'data-testid'?: string
}

const CheckboxWithLabel: React.FC<CheckboxProps> = ({
  checked = true,
  onChange,
  label,
  name,
  'data-testid': dataTestId
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`checkbox-${name || label}`}
        checked={checked}
        onClick={onChange}
        name={name}
        data-testid={dataTestId}
      />
      <Label
        htmlFor={`checkbox-${name || label}`}
        className="text-sm font-medium leading-none cursor-pointer"
      >
        {label}
      </Label>
    </div>
  )
}

export default CheckboxWithLabel
