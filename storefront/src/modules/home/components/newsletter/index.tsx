import { Button } from "@lib/components/ui/button"
import { Sparkles } from "lucide-react"

const Newsletter = () => {
  return (
    <section className="w-full bg-secondary/30 border-t border-border py-20 small:py-32">
      <div className="content-container flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center p-3 bg-background border border-border rounded-full mb-6">
          <Sparkles size={24} className="text-foreground" />
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Join the Community
        </h2>
        
        <p className="text-base text-muted-foreground mb-10 max-w-md mx-auto">
          Sign up to receive early access to new collections, exclusive events, and mindful musings.
        </p>

        <form className="w-full max-w-md flex flex-col xsmall:flex-row gap-3 items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-12 px-4 rounded-full border border-border bg-background
              text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-shadow"
            required
            aria-label="Email address"
          />
          <Button 
            type="submit" 
            className="w-full xsmall:w-auto rounded-full h-12 px-8 font-semibold shrink-0"
          >
            Subscribe
          </Button>
        </form>

        <p className="text-[10px] leading-4 text-muted-foreground mt-6">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
