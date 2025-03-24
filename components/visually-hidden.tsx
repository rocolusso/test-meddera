import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {}

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(({ className, ...props }, ref) => {
    return (
        <span
            ref={ref}
            className={cn(
                "absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0",
                "clip-[rect(0,0,0,0)]",
                className,
            )}
            {...props}
        />
    )
})
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }