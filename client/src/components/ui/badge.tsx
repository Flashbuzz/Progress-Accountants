import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // NextMonth Gold UI design system gradient variants
        "teal-blue": 
          "border-0 bg-gradient-to-r from-[#36d1dc] to-[#5b86e5] text-white hover:opacity-90",
        "pink-coral": 
          "border-0 bg-gradient-to-r from-[#f953c6] to-[#ff6b6b] text-white hover:opacity-90",
        // NextMonth Gold UI specialized variants
        "teal-tag": 
          "border-0 bg-[#008080]/10 text-[#008080] hover:bg-[#008080]/20",
        
        // Legacy badge variants mapped to gradients (for backward compatibility)
        "new": 
          "border-0 bg-gradient-to-r from-[#f953c6] to-[#ff6b6b] text-white hover:opacity-90",
        "updated": 
          "border-0 bg-gradient-to-r from-[#36d1dc] to-[#5b86e5] text-white hover:opacity-90",
        "beta": 
          "border-0 bg-gradient-to-r from-[#f953c6] to-[#ff6b6b] text-white hover:opacity-90",
        "pro": 
          "border-0 bg-gradient-to-r from-[#f953c6] to-[#ff6b6b] text-white hover:opacity-90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
