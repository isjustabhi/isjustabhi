import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center text-current", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 6L58 58H46.8L41.2 43H22.8L17.2 58H6L32 6ZM26.2 37H37.8L32 22.2 26.2 37Z"
          fill="currentColor"
        />
        <path d="M12 31.5H52" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
