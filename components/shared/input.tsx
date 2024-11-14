import * as React from "react";
import { cn } from "@/lib/utils";
import "remixicon/fonts/remixicon.css";
import { Label } from "../ui/label";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  hint?: string;
  icon?: string;
}

const SrInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, hint, icon, ...props }, ref) => {
    return (
      <div>
        {label && (
          <Label htmlFor={props.id} className="text-sm">
            {label}
          </Label>
        )}
        <div className="flex justify-between relative">
          <i
            className={`${icon} absolute left-2 top-[0.875rem] text-gray-400 h-2 w-2`}
          ></i>
          <input
            type={type}
            className={cn(
              "flex h-13 w-80 border-2 rounded bg-background px-5 py-2 text-base transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:border-gray-500 md:text-sm",
              hint ? "border-red-500" : "",
              hint ? "focus:border-red-500" : "",
              className
            )}
            ref={ref}
            {...props}
          />

          <i
            className={`${icon} absolute right-2 top-[0.875rem] text-gray-400 h-2 w-2`}
          ></i>
        </div>
        {hint && <p className="text-xs mt-[2px]">{hint}</p>}
      </div>
    );
  }
);
SrInput.displayName = "Input";

export { SrInput };
