import { cn } from "@lib/util/cn"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import React from "react"
import { Plus, Minus } from "lucide-react"

type AccordionItemProps = AccordionPrimitive.AccordionItemProps & {
  title: string
  subtitle?: string
  description?: string
  required?: boolean
  tooltip?: string
  forceMountContent?: true
  headingSize?: "small" | "medium" | "large"
  customTrigger?: React.ReactNode
  complete?: boolean
  active?: boolean
  triggerable?: boolean
  children: React.ReactNode
}

type AccordionProps =
  | (AccordionPrimitive.AccordionSingleProps &
      React.RefAttributes<HTMLDivElement>)
  | (AccordionPrimitive.AccordionMultipleProps &
      React.RefAttributes<HTMLDivElement>)

const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>
} = ({ children, ...props }) => {
  return (
    <AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>
  )
}

const Item: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  description,
  children,
  className,
  headingSize = "large",
  customTrigger = undefined,
  forceMountContent = undefined,
  triggerable,
  ...props
}) => {
  return (
    <AccordionPrimitive.Item
      {...props}
      className={cn(
        "border-border group border-t last:mb-0 last:border-b",
        "py-4",
        className
      )}
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 font-medium transition-all hover:underline [&[data-state=open]>div>svg]:rotate-180">
          <div className="flex flex-col items-start text-left">
            <span className="text-sm font-semibold text-foreground">{title}</span>
            {subtitle && (
              <span className="text-xs text-muted-foreground mt-1">
                {subtitle}
              </span>
            )}
          </div>
          {customTrigger || (
            <div className="h-5 w-5 shrink-0 transition-transform duration-200">
               <Plus className="h-4 w-4 text-muted-foreground group-data-[state=open]:hidden" />
               <Minus className="h-4 w-4 text-muted-foreground hidden group-data-[state=open]:block" />
            </div>
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        forceMount={forceMountContent}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div className="pb-4 pt-2">
          {description && <p className="text-muted-foreground mb-4">{description}</p>}
          <div className="w-full text-foreground">{children}</div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

Accordion.Item = Item

export default Accordion
