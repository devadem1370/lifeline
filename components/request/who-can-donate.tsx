import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { donorsFor } from "@/lib/blood";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { gutter, measure } from "@/lib/layout";
import type { BloodGroup } from "@/lib/types";

/** The groups that can give to this patient, from the one compatibility rule. */
export function WhoCanDonate({ bloodGroup }: { bloodGroup: BloodGroup }) {
  return (
    <section className={cn(gutter, "border-t border-mist py-8")}>
      <h2 className="text-section text-ink">{copy.request.whoCanDonate}</h2>
      <p className={cn(measure, "pt-2 text-body text-slate")}>{copy.request.whoCanDonateHint}</p>
      <ul className="flex flex-wrap gap-2 pt-4">
        {donorsFor(bloodGroup).map((group) => (
          <li key={group}>
            <BloodGroupTag group={group} />
          </li>
        ))}
      </ul>
    </section>
  );
}
