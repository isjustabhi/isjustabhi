import { BuildIn } from "@/components/ui/BuildIn";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  panel,
}: {
  children: React.ReactNode;
  className?: string;
  panel?: boolean;
}) {
  if (panel) {
    return (
      <div className="mx-auto w-full max-w-site px-4 sm:px-6">
        <BuildIn className={cn("panel p-5 sm:p-7 md:p-8", className)}>{children}</BuildIn>
      </div>
    );
  }

  return <div className={cn("mx-auto w-full max-w-site px-5 sm:px-8", className)}>{children}</div>;
}
