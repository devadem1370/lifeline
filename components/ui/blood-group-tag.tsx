import { bloodGroupFamily } from "@/lib/blood";
import { cn } from "@/lib/cn";
import type { BloodGroup, BloodGroupFamily } from "@/lib/types";
import { CheckIcon } from "@/components/ui/icons";

export type BloodGroupTagSize = "sm" | "md" | "lg";

const sizes: Record<BloodGroupTagSize, string> = {
  sm: "h-6 min-w-10 pl-2.5 pr-2 text-caption",
  md: "h-8 min-w-13 pl-3.5 pr-2.5 text-body-sm",
  lg: "h-14 min-w-22 pl-5 pr-4 text-section",
};

const checkSizes: Record<BloodGroupTagSize, string> = {
  sm: "size-3",
  md: "size-4",
  lg: "size-6",
};

const families: Record<BloodGroupFamily, string> = {
  O: "bg-group-o text-white",
  A: "bg-group-a text-ink",
  B: "bg-group-b text-white",
  AB: "border-[1.5px] border-ink bg-white text-ink",
};

interface BloodGroupTagProps {
  group: BloodGroup;
  size?: BloodGroupTagSize;
  /**
   * Pass this to use the selectable variant. Selected adds a 2px ink ring and a
   * check. Leave it out for a plain tag.
   */
  selected?: boolean;
  className?: string;
}

/**
 * The blood group tag: a blood bag hang tag with the left edge notched out.
 * The notch is a mask, so it shows whatever is behind the tag. It looks the
 * same everywhere it appears.
 */
export function BloodGroupTag({ group, size = "md", selected, className }: BloodGroupTagProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1 rounded-r-tag notch-left font-heading font-bold",
        sizes[size],
        families[bloodGroupFamily(group)],
        selected && "border-2 border-ink",
        className,
      )}
    >
      {group}
      {selected ? <CheckIcon className={checkSizes[size]} /> : null}
    </span>
  );
}
