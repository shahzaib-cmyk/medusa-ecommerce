import { Marquee } from "@lib/components/ui/marquee"
import { Star } from "lucide-react"
import { cn } from "@lib/util/cn"

const REVIEWS = [
  {
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    quote: "Absolutely stunning quality. The fabric is soft and the cut is perfect. Will definitely be ordering again.",
  },
  {
    name: "James K.",
    initials: "JK",
    rating: 5,
    quote: "Fast shipping, beautiful packaging, and the product exceeded my expectations. 10/10.",
  },
  {
    name: "Priya L.",
    initials: "PL",
    rating: 5,
    quote: "I love the minimalist aesthetic. Every piece feels intentional and well-made.",
  },
  {
    name: "Tom R.",
    initials: "TR",
    rating: 4,
    quote: "Great quality and fits true to size. The customer support team was super helpful too.",
  },
  {
    name: "Nina W.",
    initials: "NW",
    rating: 5,
    quote: "Finally a brand that gets it right. Simple, clean, and high quality.",
  },
  {
    name: "Alex C.",
    initials: "AC",
    rating: 5,
    quote: "Bought as a gift and the recipient loved it. Premium feel at a fair price.",
  },
]

function ReviewCard({
  name,
  initials,
  rating,
  quote,
}: (typeof REVIEWS)[number]) {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-default overflow-hidden rounded-xl border border-border p-5",
        "bg-background hover:bg-secondary/50 transition-colors duration-200"
      )}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-3" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < rating ? "fill-foreground text-foreground" : "fill-muted text-muted"}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-xs leading-relaxed text-muted-foreground mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <figcaption className="flex items-center gap-2">
        <div
          className="size-7 rounded-full bg-foreground text-background
            flex items-center justify-center text-[10px] font-semibold shrink-0"
          aria-hidden="true"
        >
          {initials}
        </div>
        <span className="text-xs font-medium text-foreground">{name}</span>
      </figcaption>
    </figure>
  )
}

const ReviewsMarquee = () => {
  const firstRow = REVIEWS.slice(0, Math.ceil(REVIEWS.length / 2))
  const secondRow = REVIEWS.slice(Math.ceil(REVIEWS.length / 2))

  return (
    <section
      className="w-full py-20 small:py-28 border-t border-border overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="content-container mb-10">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Reviews
          </span>
          <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight text-foreground">
            What our customers say
          </h2>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative flex flex-col gap-4">
        {/* Fade masks on edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10
            bg-gradient-to-r from-background to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10
            bg-gradient-to-l from-background to-transparent"
          aria-hidden="true"
        />

        <Marquee pauseOnHover className="[--duration:35s] [--gap:2.5rem]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          className="[--duration:35s] [--gap:2.5rem]"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Reduced motion: hide marquees entirely and show static grid */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-vertical {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ReviewsMarquee
