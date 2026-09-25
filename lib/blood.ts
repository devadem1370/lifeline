import type { BloodGroup, BloodGroupFamily } from "@/lib/types";

/** Every group, in the order they are offered in the interface. */
export const BLOOD_GROUPS: readonly BloodGroup[] = [
  "O-",
  "O+",
  "A-",
  "A+",
  "B-",
  "B+",
  "AB-",
  "AB+",
];

/**
 * Red cell compatibility: for each donor group, the patient groups it can go to.
 * This table is the single definition of the rule. Everything else is derived
 * from it, so there is one place to check and one place to change.
 */
const RECIPIENTS_BY_DONOR: Record<BloodGroup, readonly BloodGroup[]> = {
  "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
  "O+": ["O+", "A+", "B+", "AB+"],
  "A-": ["A-", "A+", "AB-", "AB+"],
  "A+": ["A+", "AB+"],
  "B-": ["B-", "B+", "AB-", "AB+"],
  "B+": ["B+", "AB+"],
  "AB-": ["AB-", "AB+"],
  "AB+": ["AB+"],
};

/** Can red cells from `donor` be given to `patient`? */
export function canDonateTo(donor: BloodGroup, patient: BloodGroup): boolean {
  return RECIPIENTS_BY_DONOR[donor].includes(patient);
}

/** The groups a donor of this group can help, including their own. */
export function recipientsFor(donor: BloodGroup): readonly BloodGroup[] {
  return RECIPIENTS_BY_DONOR[donor];
}

/** The groups that can donate to a patient of this group. */
export function donorsFor(patient: BloodGroup): BloodGroup[] {
  return BLOOD_GROUPS.filter((donor) => canDonateTo(donor, patient));
}

/** The colour family a group's tag uses: O, A, B or AB. */
export function bloodGroupFamily(group: BloodGroup): BloodGroupFamily {
  return group.slice(0, -1) as BloodGroupFamily;
}
