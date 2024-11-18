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
      <div className="">
        <Label htmlFor={props.id}>
          {label && <span>{label}</span>}
          <div
            className={cn(
              "relative w-80 h-6 border-2 flex items-center rounded bg-background focus-within:border-gray-200",
              "hover:border-orange-500",
              hint ? "outline-[1px] border-red-500" : "",
              hint ? "focus-within:outline-2 focus-within:border-red-500 " : "",
              className
            )}
          >
            {Icon && <Icon className="text-gray-400 w-2 h-2 absolute left-2" />}
            <input
              type={type}
              className={cn(
                "bg-background px-[44px] text-base transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:border-gray-500 md:text-sm",
                className
              )}
              ref={ref}
              {...props}
            />
            {Icon && (
              <Icon className="text-gray-400 w-2 h-2 absolute right-2" />
            )}
          </div>
        </Label>
        {hint && <p className="text-xs mt-[2px]">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
