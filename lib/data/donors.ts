import { donorRecords } from "@/lib/mock/donors";
import { currentUser } from "@/lib/mock/user";
import { shortName } from "@/lib/format";
import type { CurrentUser, Donor } from "@/lib/types";

/** The signed in person. There is no auth yet, so this is always the same donor. */
export async function getCurrentUser(): Promise<CurrentUser> {
  return { ...currentUser };
}

/**
 * A donor, without their contact details. Those are only handed out through
 * listDonorsForRequest, and only to the person whose request they pledged to.
 */
export async function getDonor(id: string): Promise<Donor | null> {
  const record = donorRecords.find((donor) => donor.id === id);
  if (!record) return null;

  return {
    id: record.id,
    name: shortName(record.name),
    bloodGroup: record.bloodGroup,
    sex: record.sex,
    area: record.area,
    distanceKm: record.distanceKm,
    lastDonationAt: record.lastDonationAt,
    availableForRequests: record.availableForRequests,
    contact: null,
  };
}
