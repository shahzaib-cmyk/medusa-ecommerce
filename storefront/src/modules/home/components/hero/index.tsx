import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Badge } from "@lib/components/ui/badge"
import { ShimmerButton } from "@lib/components/ui/shimmer-button"
import { Button } from "@lib/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"

const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] w-full flex items-center overflow-clip
        bg-background border-b border-border"
      aria-label="Hero section"
    >
      {/* Animated background — pure CSS, no runtime JS */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Soft gradient blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        {/* Large faded typography watermark */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2
            text-[clamp(8rem,20vw,18rem)] font-black tracking-tighter
            text-foreground/[0.03] select-none pointer-events-none leading-none"
          aria-hidden="true"
        >
          CRAFT
        </span>
      </div>

      {/* Content grid */}
      <div className="content-container relative z-10 w-full py-20 small:py-32">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-12 small:gap-20 items-center">

          {/* LEFT — Text content */}
          <div className="flex flex-col gap-6">
            {/* Overline badge */}
            <div className="hero-anim" style={{ "--delay": "0ms" } as React.CSSProperties}>
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full w-fit"
              >
                <Sparkles size={11} />
                New Collection · Spring 2026
              </Badge>
            </div>

            {/* Main headline */}
            <div className="hero-anim" style={{ "--delay": "100ms" } as React.CSSProperties}>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
                Crafted for
                <br />
                <span className="text-muted-foreground font-normal italic">
                  the Curious
                </span>
                <br />
                Mind.
              </h1>
            </div>

            {/* Body copy */}
            <div className="hero-anim" style={{ "--delay": "200ms" } as React.CSSProperties}>
              <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                Discover pieces designed with intention — where quality meets
                simplicity and every detail is considered.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className="hero-anim flex flex-col xsmall:flex-row gap-3"
              style={{ "--delay": "300ms" } as React.CSSProperties}
            >
              <LocalizedClientLink href="/store">
                <ShimmerButton
                  className="px-7 py-3 text-sm font-semibold rounded-full h-11"
                  shimmerDuration="2.5s"
                  background="hsl(var(--foreground))"
                  shimmerColor="rgba(255,255,255,0.4)"
                  aria-label="Shop now"
                >
                  Shop Now
                </ShimmerButton>
              </LocalizedClientLink>

              <LocalizedClientLink href="/store">
                <Button
                  variant="outline"
                  className="rounded-full h-11 px-7 text-sm font-medium border-border hover:bg-accent"
                  aria-label="Explore collections"
                >
                  Explore Collections
                </Button>
              </LocalizedClientLink>
            </div>

            {/* Trust micro-copy */}
            <div
              className="hero-anim flex items-center gap-4 text-xs text-muted-foreground"
              style={{ "--delay": "400ms" } as React.CSSProperties}
            >
              <span>Free returns</span>
              <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
              <span>Worldwide shipping</span>
              <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
              <span>Secure checkout</span>
            </div>
          </div>

          {/* RIGHT — Visual block */}
          <div
            className="hero-anim relative hidden small:flex items-center justify-center"
            style={{ "--delay": "150ms" } as React.CSSProperties}
          >
            {/* Main image placeholder card */}
            <div
              className="relative w-full aspect-[3/4] max-w-sm bg-secondary rounded-2xl overflow-hidden
                shadow-lg border border-border group"
            >
              {/* Placeholder product visual */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-muted-foreground/40">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <rect x="8" y="8" width="48" height="48" rx="12" stroke="currentColor" strokeWidth="2" />
                    <path d="M24 32 L32 20 L40 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="32" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span className="text-sm">Product Image</span>
                </div>
              </div>

              {/* Hover shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating badge — top left */}
            <div className="absolute -top-4 -left-4 bg-background border border-border rounded-xl
              px-4 py-3 shadow-md flex flex-col gap-0.5">
              <span className="text-xs text-muted-foreground">Collection</span>
              <span className="text-sm font-semibold text-foreground">Spring Edit</span>
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute -bottom-4 -right-4 bg-foreground text-background rounded-xl
              px-4 py-3 shadow-md">
              <span className="text-xs font-medium">New Arrivals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        text-muted-foreground/50 hero-scroll-indicator">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>

      {/* CSS for hero-specific animations — injected via style tag */}
      <style>{`
        .hero-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          pointer-events: none;
          will-change: transform;
        }
        .hero-blob-1 {
          width: 40vw;
          height: 40vw;
          top: -10%;
          right: 10%;
          background: hsl(var(--secondary));
          opacity: 0.6;
          animation: blob-drift 12s ease-in-out infinite alternate;
        }
        .hero-blob-2 {
          width: 30vw;
          height: 30vw;
          bottom: -5%;
          left: 5%;
          background: hsl(var(--accent));
          opacity: 0.4;
          animation: blob-drift 16s ease-in-out infinite alternate-reverse;
        }
        @keyframes blob-drift {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(3%, 5%) scale(1.05); }
        }
        .hero-anim {
          opacity: 0;
          transform: translateY(20px);
          animation: hero-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: var(--delay, 0ms);
        }
        @keyframes hero-fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-scroll-indicator {
          animation: hero-fade-up 0.7s 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-anim,
          .hero-scroll-indicator,
          .hero-blob-1,
          .hero-blob-2 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
