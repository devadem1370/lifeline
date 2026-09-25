import { formatMonth } from "@/lib/format";
import { impactSeed } from "@/lib/mock/impact";
import type { ImpactSummary } from "@/lib/types";

function monthsBack(monthsAgo: number, now: Date): Date {
  return new Date(now.getFullYear(), now.getMonth() - monthsAgo, 1);
}

/** The figures behind the impact page, oldest month first. */
export async function getImpactSummary(): Promise<ImpactSummary> {
  const now = new Date();

  const perMonth = impactSeed.perMonth
    .slice()
    .sort((a, b) => b.monthsAgo - a.monthsAgo)
    .map((entry) => ({
      month: formatMonth(monthsBack(entry.monthsAgo, now)),
      requests: entry.requests,
    }));

  const byGroup = impactSeed.byGroup
    .slice()
    .sort((a, b) => b.requests - a.requests)
    .map((entry) => ({ ...entry }));

  return {
    requestsFulfilled: perMonth.reduce((total, entry) => total + entry.requests, 0),
    donors: impactSeed.donors,
    hospitals: impactSeed.hospitals,
    perMonth,
    byGroup,
  };
}
