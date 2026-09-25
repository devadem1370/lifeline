import { canDonateTo } from "@/lib/blood";
import { hospitals } from "@/lib/mock/hospitals";
import { pledgeSeeds } from "@/lib/mock/pledges";
import { requestSeeds, type BloodRequestSeed } from "@/lib/mock/requests";
import { currentUser } from "@/lib/mock/user";
import { shortName } from "@/lib/format";
import type { BloodGroup, BloodRequest, BloodRequestRecord } from "@/lib/types";

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;

function toRecord(seed: BloodRequestSeed, now: Date): BloodRequestRecord {
  const hospital = hospitals[seed.hospitalId];
  if (!hospital) throw new Error(`Unknown hospital: ${seed.hospitalId}`);

  return {
    id: seed.id,
    bloodGroup: seed.bloodGroup,
    unitsNeeded: seed.unitsNeeded,
    unitsPledged: seed.unitsPledged,
    hospital,
    ward: seed.ward,
    deadline: new Date(now.getTime() + seed.deadlineInHours * HOUR).toISOString(),
    postedAt: new Date(now.getTime() - seed.postedMinutesAgo * MINUTE).toISOString(),
    note: seed.note,
    patientName: seed.patientName,
    requesterId: seed.requesterId,
    requesterName: shortName(seed.requesterName),
    status: seed.status,
    distanceKm: seed.distanceKm,
    contact: seed.contact,
  };
}

/**
 * The privacy rule of the product: the requester's contact details are only
 * handed out to the person who posted the request and to donors who have
 * pledged to it. Everyone else gets null.
 */
function canSeeContact(record: BloodRequestRecord, viewerId: string): boolean {
  if (record.requesterId === viewerId) return true;
  return pledgeSeeds.some(
    (pledge) =>
      pledge.requestId === record.id &&
      pledge.donorId === viewerId &&
      pledge.status !== "withdrawn",
  );
}

function toView(record: BloodRequestRecord, viewerId: string): BloodRequest {
  const { contact, ...rest } = record;
  return { ...rest, contact: canSeeContact(record, viewerId) ? contact : null };
}

function records(now: Date = new Date()): BloodRequestRecord[] {
  return requestSeeds.map((seed) => toRecord(seed, now));
}

function byDeadline(a: BloodRequest, b: BloodRequest): number {
  return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
}

/** Every request that is still open, soonest deadline first. */
export async function listOpenRequests(viewerId: string = currentUser.id): Promise<BloodRequest[]> {
  return records()
    .filter((record) => record.status === "open")
    .map((record) => toView(record, viewerId))
    .sort(byDeadline);
}

/**
 * Open requests a donor of this blood group can actually help with, within
 * their chosen distance.
 */
export async function listRequestsForDonor(
  bloodGroup: BloodGroup = currentUser.bloodGroup,
  radiusKm: number = currentUser.radiusKm,
  viewerId: string = currentUser.id,
): Promise<BloodRequest[]> {
  return records()
    .filter(
      (record) =>
        record.status === "open" &&
        record.distanceKm <= radiusKm &&
        canDonateTo(bloodGroup, record.bloodGroup),
    )
    .map((record) => toView(record, viewerId))
    .sort(byDeadline);
}

/** Requests this person posted, most recent first. */
export async function listRequestsByRequester(
  requesterId: string = currentUser.id,
  viewerId: string = currentUser.id,
): Promise<BloodRequest[]> {
  return records()
    .filter((record) => record.requesterId === requesterId)
    .map((record) => toView(record, viewerId))
    .sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
}

export async function getRequest(
  id: string,
  viewerId: string = currentUser.id,
): Promise<BloodRequest | null> {
  const record = records().find((candidate) => candidate.id === id);
  return record ? toView(record, viewerId) : null;
}
