import { donorRecords } from "@/lib/mock/donors";
import { pledgeSeeds } from "@/lib/mock/pledges";
import { requestSeeds } from "@/lib/mock/requests";
import { currentUser } from "@/lib/mock/user";
import { shortName } from "@/lib/format";
import type { Donor, Pledge } from "@/lib/types";

const MINUTE = 60 * 1000;

function toPledge(seed: (typeof pledgeSeeds)[number], now: Date = new Date()): Pledge {
  return {
    id: seed.id,
    requestId: seed.requestId,
    donorId: seed.donorId,
    pledgedAt: new Date(now.getTime() - seed.pledgedMinutesAgo * MINUTE).toISOString(),
    status: seed.status,
  };
}

export async function listPledgesForRequest(requestId: string): Promise<Pledge[]> {
  return pledgeSeeds
    .filter((seed) => seed.requestId === requestId && seed.status !== "withdrawn")
    .map((seed) => toPledge(seed))
    .sort((a, b) => new Date(a.pledgedAt).getTime() - new Date(b.pledgedAt).getTime());
}

/** Has this donor already pledged to this request? */
export async function hasPledged(
  requestId: string,
  donorId: string = currentUser.id,
): Promise<boolean> {
  return pledgeSeeds.some(
    (seed) =>
      seed.requestId === requestId && seed.donorId === donorId && seed.status !== "withdrawn",
  );
}

/**
 * The donors who pledged to a request. Their contact details are only included
 * for the person who posted the request, which is the other half of the rule
 * that hides the requester's number until a pledge exists.
 */
export async function listDonorsForRequest(
  requestId: string,
  viewerId: string = currentUser.id,
): Promise<Donor[]> {
  const request = requestSeeds.find((seed) => seed.id === requestId);
  const viewerPostedIt = request?.requesterId === viewerId;

  const pledges = pledgeSeeds.filter(
    (seed) => seed.requestId === requestId && seed.status !== "withdrawn",
  );

  return pledges.flatMap((pledge) => {
    const record = donorRecords.find((donor) => donor.id === pledge.donorId);
    if (!record) return [];
    const { contact, ...rest } = record;
    return [
      {
        ...rest,
        name: shortName(record.name),
        contact: viewerPostedIt ? contact : null,
      },
    ];
  });
}
