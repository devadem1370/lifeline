import type { PledgeStatus } from "@/lib/types";

export interface PledgeSeed {
  id: string;
  requestId: string;
  donorId: string;
  /** Minutes since the donor pledged. */
  pledgedMinutesAgo: number;
  status: PledgeStatus;
}

export const pledgeSeeds: PledgeSeed[] = [
  {
    id: "pledge-ayesha-b-plus",
    requestId: "req-b-plus-mayo",
    donorId: "donor-ayesha",
    pledgedMinutesAgo: 25,
    status: "pledged",
  },
  {
    id: "pledge-bilal-o-plus",
    requestId: "req-o-plus-jinnah",
    donorId: "user-bilal",
    pledgedMinutesAgo: 60,
    status: "pledged",
  },
  {
    id: "pledge-sana-o-plus",
    requestId: "req-o-plus-jinnah",
    donorId: "donor-sana",
    pledgedMinutesAgo: 80,
    status: "pledged",
  },
  {
    id: "pledge-hamza-services",
    requestId: "req-o-plus-services",
    donorId: "donor-hamza",
    pledgedMinutesAgo: 150,
    status: "pledged",
  },
  {
    id: "pledge-hamza-o-minus",
    requestId: "req-o-minus-mayo",
    donorId: "donor-hamza",
    pledgedMinutesAgo: 2700,
    status: "donated",
  },
];
