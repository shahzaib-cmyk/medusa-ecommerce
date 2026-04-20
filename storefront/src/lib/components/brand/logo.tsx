import { cn } from "@lib/util/cn"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: { icon: 20, height: 20, fontSize: 14, letterSpacing: "0.08em" },
  md: { icon: 24, height: 24, fontSize: 17, letterSpacing: "0.1em" },
  lg: { icon: 32, height: 32, fontSize: 22, letterSpacing: "0.12em" },
}

export function Logo({ className, size = "md" }: LogoProps) {
  const { icon, height, fontSize, letterSpacing } = sizes[size]

  return (
    <span
      className={cn("inline-flex items-center gap-2 font-semibold tracking-tight select-none", className)}
      aria-label="YourBrand — Home"
    >
      {/* Geometric icon mark */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer rounded square */}
        <rect x="1" y="1" width="30" height="30" rx="8" stroke="currentColor" strokeWidth="2" />
        {/* Inner accent — a subtle diamond */}
        <path
          d="M16 8 L24 16 L16 24 L8 16 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Center dot */}
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>

      {/* Wordmark */}
      <span
        style={{ fontSize, letterSpacing, lineHeight: `${height}px` }}
        className="uppercase font-semibold"
      >
        YourBrand
      </span>
    </span>
  )
}
