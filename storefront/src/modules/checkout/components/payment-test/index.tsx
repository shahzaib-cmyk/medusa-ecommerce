import { Badge } from "@lib/components/ui/badge"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge variant="outline" className="border-orange-500 text-orange-500 bg-orange-50 dark:bg-orange-950/20">
      <span className="font-semibold mr-1">Attention:</span> For testing purposes
      only.
    </Badge>
  )
}

export default PaymentTest
