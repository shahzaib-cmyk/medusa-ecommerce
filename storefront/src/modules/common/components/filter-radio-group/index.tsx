import { Label } from "@lib/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@lib/components/ui/radio-group"
import { cn } from "@lib/util/cn"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex gap-x-3 flex-col gap-y-3">
      <span className="text-sm font-semibold text-muted-foreground">{title}</span>
      <RadioGroup 
        data-testid={dataTestId} 
        value={value}
        onValueChange={handleChange}
        className="flex flex-col gap-y-3"
      >
        {items?.map((i) => (
          <div key={i.value} className="flex items-center space-x-2">
            <RadioGroupItem
              value={i.value}
              id={i.value}
            />
            <Label
              htmlFor={i.value}
              className={cn(
                "text-sm cursor-pointer",
                i.value === value ? "text-foreground font-medium" : "text-muted-foreground"
              )}
              data-testid="radio-label"
              data-active={i.value === value}
            >
              {i.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
