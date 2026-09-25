import type { BloodGroup } from "@/lib/types";

/**
 * Demo figures for the impact page. They are invented, like every other number
 * in this app while it runs on mock data, and the demo notice on each page says
 * so. No claim is attached to any of them.
 *
 * Months are stored as offsets so the chart always ends on the current month.
 */
export interface ImpactSeed {
  donors: number;
  hospitals: number;
  perMonth: { monthsAgo: number; requests: number }[];
  byGroup: { bloodGroup: BloodGroup; requests: number }[];
}

export const impactSeed: ImpactSeed = {
  donors: 1284,
  hospitals: 12,
  perMonth: [
    { monthsAgo: 5, requests: 54 },
    { monthsAgo: 4, requests: 61 },
    { monthsAgo: 3, requests: 68 },
    { monthsAgo: 2, requests: 72 },
    { monthsAgo: 1, requests: 79 },
    { monthsAgo: 0, requests: 78 },
  ],
  // Weighted the way blood groups fall in Pakistan: B+ and O+ carry most of the
  // demand, the negative groups are rare.
  byGroup: [
    { bloodGroup: "B+", requests: 138 },
    { bloodGroup: "O+", requests: 121 },
    { bloodGroup: "A+", requests: 86 },
    { bloodGroup: "AB+", requests: 31 },
    { bloodGroup: "B-", requests: 14 },
    { bloodGroup: "O-", requests: 12 },
    { bloodGroup: "A-", requests: 8 },
    { bloodGroup: "AB-", requests: 2 },
  ],
};
