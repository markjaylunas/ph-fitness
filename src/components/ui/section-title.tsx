import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

export function SectionTitle({
  children,
  className,
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b-2 border-secondary-400 w-fit pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
