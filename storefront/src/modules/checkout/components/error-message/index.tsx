const ErrorMessage = ({ 
  error, 
  "data-testid": dataTestid 
}: { 
  error?: string | null, 
  "data-testid"?: string 
}) => {
  if (!error) {
    return null
  }

  return (
    <div 
      className="pt-2 text-destructive text-sm" 
      data-testid={dataTestid}
    >
      <span>{error}</span>
    </div>
  )
}

export default ErrorMessage
