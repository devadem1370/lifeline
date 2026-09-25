import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { BLOOD_GROUPS, recipientsFor } from "@/lib/blood";
import { copy } from "@/lib/copy";

/**
 * Who can give to whom, read straight out of `recipientsFor`, so what a visitor
 * is told here is the same rule the matching uses.
 */
export function CompatibilityGrid() {
  return (
    <ul className="divide-y divide-mist border-y border-mist bg-white">
      {BLOOD_GROUPS.map((group) => (
        <li key={group} className="flex flex-col gap-2 px-4 py-3">
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
