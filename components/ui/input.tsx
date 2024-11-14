import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  hint?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, hint, ...props }, ref) => {
    return (
      <div>
        {label && <label className="text-sm">{label}</label>}
        <div>
          <input
            type={type}
            className={cn(
              "flex h-14 w-80 border rounded bg-background px-3 p-2 text-base transition-colors placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:border-gray-500 md:text-sm",
              hint ? "border-red-500" : "",
              hint ? "focus:border-red-500" : "",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {hint && <p className="text-xs mt-[2px]">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
