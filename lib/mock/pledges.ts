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
    id: "pledge-sana-a-plus",
    requestId: "req-a-plus-city-general",
    donorId: "donor-sana",
    pledgedMinutesAgo: 25,
    status: "pledged",
  },
  {
    id: "pledge-bilal-o-plus",
    requestId: "req-o-plus-st-jude",
    donorId: "user-bilal",
    pledgedMinutesAgo: 60,
    status: "pledged",
  },
  {
    id: "pledge-nadia-o-plus",
    requestId: "req-o-plus-st-jude",
    donorId: "donor-nadia",
    pledgedMinutesAgo: 80,
    status: "pledged",
  },
  {
    id: "pledge-tanvir-ab-plus",
    requestId: "req-ab-plus-northwest",
    donorId: "donor-tanvir",
    pledgedMinutesAgo: 150,
    status: "pledged",
  },
  {
    id: "pledge-tanvir-o-minus",
    requestId: "req-o-minus-city-general",
    donorId: "donor-tanvir",
    pledgedMinutesAgo: 2700,
    status: "donated",
  },
  {
    id: "pledge-nadia-o-minus",
    requestId: "req-o-minus-city-general",
    donorId: "donor-nadia",
    pledgedMinutesAgo: 2750,
    status: "donated",
  },
];
