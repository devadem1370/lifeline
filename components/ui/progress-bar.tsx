import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ProgressBarProps {
  /** Units pledged so far. */
  value: number;
  /** Units the request needs. */
  max: number;
  /** Written out under the bar, because status is never colour alone. */
  label: string;
  /** Optional second line of status text, aligned right. */
  status?: ReactNode;
  className?: string;
}

/**
 * The pledge progress bar. Its fill is the one thing in the app that animates
 * without being triggered by the person using it, and it holds still when they
 * have asked for reduced motion.
 */
export function ProgressBar({ value, max, label, status, className }: ProgressBarProps) {
  const safeMax = Math.max(max, 1);
  const clamped = Math.min(Math.max(value, 0), safeMax);
  const percent = Math.round((clamped / safeMax) * 100);

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={clamped}
        aria-label={label}
        className="h-1.5 w-full overflow-hidden rounded-full bg-mist"
      >
        <div
          className="h-full animate-progress-fill rounded-full bg-vein motion-reduce:animate-none"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex items-baseline justify-between gap-3 text-body-sm">
        <span className="text-slate">{label}</span>
        {status ? <span className="text-right">{status}</span> : null}
      </div>
    </div>
  );
}
