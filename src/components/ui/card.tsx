import { cn } from "@/lib/utils"

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-surface text-text-primary shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
