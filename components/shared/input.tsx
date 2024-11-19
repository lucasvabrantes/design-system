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
      <div>
        <Label htmlFor={props.id}>
          {label && <span>{label}</span>}
          <div
            className={cn(
              "has-[:disabled]:border-gray-600 has-[:disabled]:hover:outline-transparent relative w-80 h-6 border-1 flex items-center rounded bg-background focus-within:outline outline-gray-200 outline-1",
              "hover:border-orange-500 hover:outline hover:outline-1 hover:outline-orange-500",
              "group-disabled:border-transparent",
              hint ? "border-red-500" : "",
              hint
                ? "focus-within:outline outline-red-500 outline-1 focus-within:border-red-500 "
                : "",
              className
            )}
          >
            {Icon && (
              <Icon className="text-gray-400 w-2 h-2 absolute left-2 pointer-events-none" />
            )}
            <input
              type={type}
              className={cn(
                "bg-background px-[44px] text-base transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                className
              )}
              ref={ref}
              {...props}
            />
            {Icon && (
              <Icon className="text-gray-400 w-2 h-2 absolute right-2 pointer-events-none" />
            )}
          </div>
        </Label>
        {hint && <p className="text-xs text-red-500 mt-[2px]">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
