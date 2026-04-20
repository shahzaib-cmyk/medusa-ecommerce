import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-background flex items-center justify-between p-4 border border-border rounded-lg">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Already have an account?
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          Sign in for a better experience.
        </p>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="outline" className="h-10" data-testid="sign-in-button">
            Sign in
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
