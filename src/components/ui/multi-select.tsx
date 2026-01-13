import { useState } from "react";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";

export default function MultiSelect({
  options,
  maxCount,
  placeholder,
  defaultValue = [],
}: {
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  maxCount?: number;
  defaultValue?: string[];
}) {
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValues((prev) => {
      return prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
    });
  };

  const selectedLabels = options
    .filter((opt) => selectedValues.includes(opt.value))
    .map((opt) => opt.label);

  return (
    <div className="w-full">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={cn(
            "border-none bg-transparent"
          )}
        >
          <div className="flex flex-wrap gap-1">
            {selectedValues.length === 0 ? (
              <span className="text-muted-foreground">{placeholder}</span>
            ) : (
              <>
                {selectedLabels.slice(0, maxCount).join(', ')}
                {maxCount && selectedValues.length > maxCount && (
                  <span className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                    +{selectedValues.length - maxCount}
                  </span>
                )}
              </>
            )}
          </div>
        </button>

        {open && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border border-input bg-popover text-popover-foreground shadow-md w-[fit-content] max-h-[116px] overflow-y-auto [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#48494D] [&::-webkit-scrollbar-thumb]:border-[4px solid rgba(0, 0, 0, 0,)] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-clip-padding">
            <div className="p-1 w-[fit-content] min-w-[320px] py-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "relative flex w-full cursor-pointer items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground",
                    selectedValues.includes(option.value)
                      ? "bg-card text-accent-foreground"
                      : ""
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center rounded-sm",
                      selectedValues.includes(option.value)
                        ? "bg-transparent text-primary-foreground"
                        : "opacity-50 [&_svg]:invisible"
                    )}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-left">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
