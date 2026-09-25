import type { BloodGroup, Contact, RequestStatus } from "@/lib/types";

/**
 * Requests are seeded with times relative to now, so deadlines still read
 * sensibly whenever the app is opened. The data layer turns these into the ISO
 * timestamps a real backend would return.
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
  requesterName: string;
  status: RequestStatus;
  distanceKm: number;
  contact: Contact;
}

export const requestSeeds: BloodRequestSeed[] = [
  {
    id: "req-a-plus-city-general",
    bloodGroup: "A+",
    unitsNeeded: 2,
    unitsPledged: 1,
    hospitalId: "city-general",
    ward: "Ward 4B, cardiac recovery",
    deadlineInHours: 2,
    postedMinutesAgo: 40,
    note: "My father has surgery this evening. Any help means a lot to us.",
    patientName: "Marcus Vance",
    requesterId: "user-ayesha",
    requesterName: "Ayesha Karim",
    status: "open",
    distanceKm: 2.4,
    contact: { name: "Ayesha Karim", phone: "+880 1712 998877" },
  },
  {
    id: "req-o-plus-st-jude",
    bloodGroup: "O+",
    unitsNeeded: 3,
    unitsPledged: 2,
    hospitalId: "st-jude",
    ward: "Emergency intake",
    deadlineInHours: 7,
    postedMinutesAgo: 95,
    note: "Road accident. Please ask for the blood bank on the ground floor.",
    patientName: null,
    requesterId: "user-farah",
    requesterName: "Farah Noor",
    status: "open",
    distanceKm: 4.1,
    contact: { name: "Farah Noor", phone: "+880 1819 445566" },
  },
  {
    id: "req-b-plus-memorial",
    bloodGroup: "B+",
    unitsNeeded: 1,
    unitsPledged: 0,
    hospitalId: "memorial-childrens",
    ward: null,
    deadlineInHours: 9,
    postedMinutesAgo: 20,
    note: null,
    patientName: null,
    requesterId: "user-imran",
    requesterName: "Imran Chowdhury",
    status: "open",
    distanceKm: 5.8,
    contact: { name: "Imran Chowdhury", phone: "+880 1913 220044" },
  },
  {
    id: "req-ab-plus-northwest",
    bloodGroup: "AB+",
    unitsNeeded: 2,
    unitsPledged: 1,
    hospitalId: "northwest-surgical",
    ward: "Theatre 2",
    deadlineInHours: 12,
    postedMinutesAgo: 240,
    note: "Reception will point you to the donor room.",
    patientName: "Rina Das",
    requesterId: "user-bilal",
    requesterName: "Bilal Rahman",
    status: "open",
    distanceKm: 7.6,
    contact: { name: "Bilal Rahman", phone: "+880 1711 234567" },
  },
  {
    id: "req-o-minus-city-general",
    bloodGroup: "O-",
    unitsNeeded: 2,
    unitsPledged: 2,
    hospitalId: "city-general",
    ward: "Ward 2, maternity",
    deadlineInHours: -18,
    postedMinutesAgo: 2880,
    note: null,
    patientName: null,
    requesterId: "user-bilal",
    requesterName: "Bilal Rahman",
    status: "fulfilled",
    distanceKm: 2.4,
    contact: { name: "Bilal Rahman", phone: "+880 1711 234567" },
  },
  {
    id: "req-b-minus-st-jude",
    bloodGroup: "B-",
    unitsNeeded: 1,
    unitsPledged: 0,
    hospitalId: "st-jude",
    ward: null,
    deadlineInHours: -30,
    postedMinutesAgo: 4320,
    note: null,
    patientName: null,
    requesterId: "user-farah",
    requesterName: "Farah Noor",
    status: "expired",
    distanceKm: 4.1,
    contact: { name: "Farah Noor", phone: "+880 1819 445566" },
  },
];
