import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = "md", children, asChild, className }: TextProps) {
  const Component = asChild ? Slot : "span";
  return (
    <Component
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
