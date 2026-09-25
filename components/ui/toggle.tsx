"use client";

import { cn } from "@/lib/cn";

interface ToggleProps {
  id: string;
  label: string;
  /** What is true right now, written out. Status is never colour alone. */
  onText: string;
  offText: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function Toggle({ id, label, onText, offText, checked, onChange, className }: ToggleProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span id={`${id}-label`} className="text-body font-bold text-ink">
          {label}
        </span>
        <span className="text-body-sm text-slate">{checked ? onText : offText}</span>
      </span>
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        onClick={() => onChange(!checked)}
        className="inline-flex h-12 shrink-0 items-center rounded-full px-1"
      >
        <span
          className={cn(
            "relative block h-7 w-12 rounded-full border-[1.5px] transition-colors",
            checked ? "border-vein bg-vein" : "border-mist bg-mist",
          )}
        >
          <span
            className={cn(
              "absolute top-1/2 left-0.5 block size-5 -translate-y-1/2 rounded-full bg-white transition-transform motion-reduce:transition-none",
              checked && "translate-x-6",
            )}
          />
        </span>
      </button>
    </div>
  );
}
