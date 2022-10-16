import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={clsx(
        "bg-cyan-500 hover:bg-cyan-300 transition-colors font-semibold text-black text-sm w-full rounded focus:ring-2 ring-white py-3 px-4",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
