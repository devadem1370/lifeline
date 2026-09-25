import type { BloodGroup, Contact, RequestStatus } from "@/lib/types";

/**
 * Requests are seeded with times relative to now, so deadlines still read
 * sensibly whenever the app is opened. The data layer turns these into the ISO
 * timestamps a real backend would return.
 *
 * Every request here is invented. The hospitals are real and are not involved.
 */
export interface BloodRequestSeed {
  id: string;
  bloodGroup: BloodGroup;
  unitsNeeded: number;
  unitsPledged: number;
  hospitalId: string;
  ward: string | null;
  /** Hours from now until the deadline. Negative once it has passed. */
  deadlineInHours: number;
  /** Minutes since the request was posted. */
  postedMinutesAgo: number;
  note: string | null;
  patientName: string | null;
  requesterId: string;
  /** Their full name. Components only ever see the short form. */
  requesterName: string;
  status: RequestStatus;
  distanceKm: number;
  contact: Contact;
}

export const requestSeeds: BloodRequestSeed[] = [
  {
    id: "req-b-plus-mayo",
    bloodGroup: "B+",
    unitsNeeded: 2,
    unitsPledged: 1,
    hospitalId: "mayo",
    ward: "Ward 4B, cardiac recovery",
    deadlineInHours: 2,
    postedMinutesAgo: 40,
    note: "My father has surgery this evening. Any help means a lot to us.",
    patientName: "Rashid Malik",
    requesterId: "user-fatima",
    requesterName: "Fatima Malik",
    status: "open",
    distanceKm: 2.4,
    contact: { name: "Fatima Malik", phone: "+92 304 0000105" },
  },
  {
    id: "req-o-plus-jinnah",
    bloodGroup: "O+",
    unitsNeeded: 3,
    unitsPledged: 2,
    hospitalId: "jinnah-lahore",
    ward: "Emergency intake",
    deadlineInHours: 7,
    postedMinutesAgo: 95,
    note: "Road accident. Please ask for the blood bank on the ground floor.",
    patientName: null,
    requesterId: "user-usman",
    requesterName: "Usman Tariq",
    status: "open",
    distanceKm: 4.1,
    contact: { name: "Usman Tariq", phone: "+92 305 0000106" },
  },
  {
    id: "req-b-plus-ganga-ram",
    bloodGroup: "B+",
    unitsNeeded: 1,
    unitsPledged: 0,
    hospitalId: "ganga-ram",
    ward: null,
    deadlineInHours: 9,
    postedMinutesAgo: 20,
    note: null,
    patientName: null,
    requesterId: "user-zainab",
    requesterName: "Zainab Hussain",
    status: "open",
    distanceKm: 5.8,
    contact: { name: "Zainab Hussain", phone: "+92 306 0000107" },
  },
  {
    id: "req-o-plus-services",
    bloodGroup: "O+",
    unitsNeeded: 2,
    unitsPledged: 1,
    hospitalId: "services",
    ward: "Theatre 2",
    deadlineInHours: 12,
    postedMinutesAgo: 240,
    note: "Reception will point you to the donor room.",
    patientName: "Hira Baig",
    requesterId: "user-bilal",
    requesterName: "Bilal Ahmed",
    status: "open",
    distanceKm: 7.6,
    contact: { name: "Bilal Ahmed", phone: "+92 300 0000101" },
  },
  {
    id: "req-o-minus-mayo",
    bloodGroup: "O-",
    unitsNeeded: 1,
    unitsPledged: 1,
    hospitalId: "mayo",
    ward: "Ward 2, maternity",
    deadlineInHours: -18,
    postedMinutesAgo: 2880,
    note: null,
    patientName: null,
    requesterId: "user-bilal",
    requesterName: "Bilal Ahmed",
    status: "fulfilled",
    distanceKm: 2.4,
    contact: { name: "Bilal Ahmed", phone: "+92 300 0000101" },
  },
  {
    id: "req-ab-minus-services",
    bloodGroup: "AB-",
    unitsNeeded: 1,
    unitsPledged: 0,
    hospitalId: "services",
    ward: null,
    deadlineInHours: -30,
    postedMinutesAgo: 4320,
    note: null,
    patientName: null,
    requesterId: "user-usman",
    requesterName: "Usman Tariq",
    status: "expired",
    distanceKm: 7.6,
    contact: { name: "Usman Tariq", phone: "+92 305 0000106" },
  },
];
