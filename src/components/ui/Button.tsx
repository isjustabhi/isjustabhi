import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-signal text-[#06202a] hover:brightness-110 dark:text-[#06202a]",
  secondary:
    "border border-ink-line bg-transparent text-mist hover:border-signal hover:text-signal",
  ghost: "text-mist-muted hover:text-signal",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-ring",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
