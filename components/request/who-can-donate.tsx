import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { donorsFor } from "@/lib/blood";
import { copy } from "@/lib/copy";
import type { BloodGroup } from "@/lib/types";

/** The groups that can give to this patient, from the one compatibility rule. */
export function WhoCanDonate({ bloodGroup }: { bloodGroup: BloodGroup }) {
  return (
    <section className="border-t border-mist px-4 py-8">
      <h2 className="text-section text-ink">{copy.request.whoCanDonate}</h2>
      <p className="max-w-prose pt-2 text-body text-slate">{copy.request.whoCanDonateHint}</p>
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
