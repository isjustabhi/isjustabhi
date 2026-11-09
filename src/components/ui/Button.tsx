import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const variants = {
  primary:
    "rounded-full bg-mist px-6 py-2.5 text-sm font-bold text-ink shadow-lg transition hover:bg-white active:scale-95 dark:hover:bg-zinc-100",
  secondary:
    "rounded-full border border-ink-line bg-ink-elevated/40 px-6 py-2.5 text-sm font-medium text-mist backdrop-blur-xl transition hover:border-mist/40",
  ghost:
    "rounded-full px-5 py-2.5 text-sm font-medium text-mist-muted underline-offset-[6px] transition hover:text-mist hover:underline",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
}) {
  const classes = cn("inline-flex items-center justify-center focus-ring", variants[variant], className);

  if (external) {
    const isFile = /\.(pdf|png|jpg|jpeg|svg|zip)$/i.test(href);
    return (
      <a
        href={href}
        className={classes}
        target={isFile ? undefined : "_blank"}
        rel={isFile ? undefined : "noreferrer"}
        download={isFile || undefined}
      >
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
