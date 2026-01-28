import { cn } from "@/lib/utils"

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string
}

export function CodeBlock({ language, className, children, ...props }: CodeBlockProps) {
  return (
    <div className="relative my-6 rounded-lg border bg-muted px-4 py-3 font-mono text-sm">
      {language && (
        <div className="absolute right-4 top-3 text-xs text-muted-foreground">
          {language}
        </div>
      )}
      <pre
        className={cn("overflow-x-auto", className)}
        {...props}
      >
        <code>{children}</code>
      </pre>
    </div>
  )
}
