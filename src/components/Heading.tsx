import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function Heading({ size = "md", children, asChild }: HeadingProps) {
  const Component = asChild ? Slot : "span";
  return (
    <Component
      className={clsx("font-bold text-gray-100 font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}
