import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "blue" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
        variant === "blue" &&
          "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
        variant === "outline" &&
          "border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400",
        className
      )}
    >
      {children}
    </span>
  );
}
