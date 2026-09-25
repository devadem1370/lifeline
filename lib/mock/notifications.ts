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
    id: "notif-b-plus-nearby",
    kind: "request-near-you",
    title: "B+ needed 2.4 km away",
    body: "Mayo Hospital needs 2 units this evening.",
    createdMinutesAgo: 38,
    read: false,
    requestId: "req-b-plus-mayo",
  },
  {
    id: "notif-services-pledge",
    kind: "pledge-received",
    title: "Hamza R. pledged to your request",
    body: "You can both see each other's contact details now.",
    createdMinutesAgo: 148,
    read: false,
    requestId: "req-o-plus-services",
  },
  {
    id: "notif-o-plus-deadline",
    kind: "deadline-near",
    title: "O+ still needed at Jinnah Hospital",
    body: "1 of 3 units is still open.",
    createdMinutesAgo: 320,
    read: true,
    requestId: "req-o-plus-jinnah",
  },
  {
    id: "notif-o-minus-fulfilled",
    kind: "request-fulfilled",
    title: "Your O- request was fulfilled",
    body: "The unit was pledged and donated.",
    createdMinutesAgo: 2600,
    read: true,
    requestId: "req-o-minus-mayo",
  },
];
