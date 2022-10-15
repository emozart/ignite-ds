import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot(priops: TextInputRootProps) {
  return (
    <div className="flex item-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {priops.children}
    </div>
  );
}

export interface TextInputIconsProps {
  children: React.ReactNode;
}

function TextInputIcon(props: TextInputIconsProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
