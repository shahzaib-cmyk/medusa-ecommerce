import { useActionState } from "react"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { login } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="flex flex-col items-center w-full max-w-sm"
      data-testid="login-page"
    >
      <h1 className="mb-6 text-2xl font-semibold uppercase text-foreground">
        Welcome back
      </h1>
      <p className="mb-8 text-base text-center text-muted-foreground">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col gap-y-2 w-full">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="mt-6 w-full">
          Sign in
        </SubmitButton>
      </form>
      <div className="mt-6 text-sm text-center text-muted-foreground">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline transition-colors text-foreground hover:text-foreground/80"
          data-testid="register-button"
        >
          Join us
        </button>
        .
      </div>
    </div>
  )
}

export default Login
