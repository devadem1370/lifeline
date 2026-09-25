import type { NotificationKind } from "@/lib/types";

export interface NotificationSeed {
  id: string;
  kind: NotificationKind;
  title: string;
  body: string;
  /** Minutes since the notification arrived. */
  createdMinutesAgo: number;
  read: boolean;
  requestId: string | null;
}

export const notificationSeeds: NotificationSeed[] = [
  {
    id: "notif-a-plus-nearby",
    kind: "request-near-you",
    title: "A+ needed 2.4 km away",
    body: "City General Hospital needs 2 units this evening.",
    createdMinutesAgo: 38,
    read: false,
    requestId: "req-a-plus-city-general",
  },
  {
    id: "notif-ab-plus-pledge",
    kind: "pledge-received",
    title: "Tanvir Alam pledged to your request",
    body: "You can both see each other's contact details now.",
    createdMinutesAgo: 148,
    read: false,
    requestId: "req-ab-plus-northwest",
  },
  {
    id: "notif-o-plus-deadline",
    kind: "deadline-near",
    title: "O+ still needed at St Jude Hospital",
    body: "1 of 3 units is still open.",
    createdMinutesAgo: 320,
    read: true,
    requestId: "req-o-plus-st-jude",
  },
  {
    id: "notif-o-minus-fulfilled",
    kind: "request-fulfilled",
    title: "Your O- request was fulfilled",
    body: "Both units were pledged and donated.",
    createdMinutesAgo: 2600,
    read: true,
    requestId: "req-o-minus-city-general",
  },
];
