import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { RemixiconComponentType } from "@remixicon/react";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  hint?: string;
  Icon?: RemixiconComponentType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, hint, Icon, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <Label htmlFor={props.id} className="text-sm">
            {label}
          </Label>
        )}
        <div
          className={cn(
            "flex w-80 items-center justify-between border-2 px-2 rounded bg-background focus-within:border-gray-200",
            "hover:border-orange-500",
            hint ? "border-[1px] border-red-500" : "",
            hint ? "focus-within:border-2 focus-within:border-red-500 " : "",
            className
          )}
        >
          {Icon && <Icon className="text-gray-400 w-2 h-2" />}
          <input
            type={type}
            className={cn(
              "flex h-13  px-2 py-2 bg-background text-base transition-colors self-center placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:border-gray-500 md:text-sm",
              className
            )}
            ref={ref}
            {...props}
          />
          {Icon && <Icon className="text-gray-400 w-2 h-2" />}
        </div>
        {hint && <p className="text-xs mt-[2px]">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
