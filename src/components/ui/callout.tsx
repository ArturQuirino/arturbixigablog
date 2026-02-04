import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "info" | "warning" | "success" | "error"
}

export function Callout({ type = "info", className, children, ...props }: CalloutProps) {
  const icons = {
    info: Info,
    warning: AlertCircle,
    success: CheckCircle,
    error: XCircle,
  }

  const Icon = icons[type]

  return (
    <div
      className={cn(
        "my-6 flex items-start gap-4 rounded-lg border p-4",
        {
          "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100":
            type === "info",
          "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100":
            type === "warning",
          "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100":
            type === "success",
          "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100":
            type === "error",
        },
        className
      )}
      {...props}
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="text-sm [&>p]:leading-relaxed">{children}</div>
    </div>
  )
}
