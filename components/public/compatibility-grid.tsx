import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { BLOOD_GROUPS, recipientsFor } from "@/lib/blood";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { gutter } from "@/lib/layout";

/**
 * Who can give to whom, read straight out of `recipientsFor`, so what a visitor
 * is told here is the same rule the matching uses. One column on a phone, two
 * once there is room, still hairlines rather than cards.
 */
export function CompatibilityGrid() {
  return (
    <ul className="border-t border-mist bg-white md:grid md:grid-cols-2">
      {BLOOD_GROUPS.map((group) => (
        <li
          key={group}
          className={cn(gutter, "flex flex-col gap-2 border-b border-mist py-3 md:odd:border-r")}
        >
          <span className="flex items-center gap-2">
            <BloodGroupTag group={group} size="sm" />
            <span className="text-body-sm text-slate">{copy.landing.canDonateTo(group)}</span>
          </span>
          <span className="flex flex-wrap gap-1.5">
            {recipientsFor(group).map((recipient) => (
              <BloodGroupTag key={recipient} group={recipient} size="sm" />
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
