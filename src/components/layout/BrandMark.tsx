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
      className={cn(
        "brand-mark inline-flex items-center justify-center rounded-xl font-bold text-white",
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      aria-hidden="true"
    >
      A
    </span>
  );
}
