/** The eight red cell groups, written exactly as they are shown in the interface. */
export type BloodGroup = "O-" | "O+" | "A-" | "A+" | "B-" | "B+" | "AB-" | "AB+";

/** The four colour families a blood group tag can take. */
export type BloodGroupFamily = "O" | "A" | "B" | "AB";

export type RequestStatus = "open" | "fulfilled" | "expired" | "cancelled";

export type PledgeStatus = "pledged" | "donated" | "withdrawn";

export type NotificationKind =
  "request-near-you" | "pledge-received" | "request-fulfilled" | "deadline-near";

/**
 * Phone number and name of a person on the other side of a request.
 * Contact details are only ever handed out once a pledge exists.
 */
export interface Contact {
  name: string;
  phone: string;
}

export interface Hospital {
  id: string;
  name: string;
  area: string;
  city: string;
  /** Hospitals the admins have checked. It earns a check mark, nothing more. */
  verified: boolean;
}

/**
 * A request as it is stored. It carries the requester's contact details, so it
 * must not be handed to a component. The data layer returns `BloodRequest`.
 */
export interface BloodRequestRecord {
  id: string;
  bloodGroup: BloodGroup;
  unitsNeeded: number;
  unitsPledged: number;
  hospital: Hospital;
  ward: string | null;
  /** ISO 8601. The time the units are needed by. */
  deadline: string;
  /** ISO 8601. */
  postedAt: string;
  note: string | null;
  patientName: string | null;
  requesterId: string;
  requesterName: string;
  status: RequestStatus;
  distanceKm: number;
  contact: Contact;
}

/**
 * A request as the interface sees it. `contact` is null until the viewer has
 * pledged to this request.
 */
export type BloodRequest = Omit<BloodRequestRecord, "contact"> & {
  contact: Contact | null;
};

/** A donor as stored, including the phone number that stays hidden until a pledge. */
export interface DonorRecord {
  id: string;
  name: string;
  bloodGroup: BloodGroup;
  area: string;
  distanceKm: number;
  /** ISO 8601, or null if they have not recorded a donation. */
  lastDonationAt: string | null;
  availableForRequests: boolean;
  contact: Contact;
}

/** A donor as the interface sees them. `contact` is null until they have pledged. */
export type Donor = Omit<DonorRecord, "contact"> & {
  contact: Contact | null;
};

export interface Pledge {
  id: string;
  requestId: string;
  donorId: string;
  /** ISO 8601. */
  pledgedAt: string;
  status: PledgeStatus;
}

export interface AppNotification {
  id: string;
  kind: NotificationKind;
  title: string;
  body: string;
  /** ISO 8601. */
  createdAt: string;
  /** ISO 8601, or null while unread. */
  readAt: string | null;
  requestId: string | null;
}

export interface CurrentUser {
  id: string;
  name: string;
  bloodGroup: BloodGroup;
  phone: string;
  area: string;
  /** ISO 8601, or null if they have not recorded a donation. */
  lastDonationAt: string | null;
  availableForRequests: boolean;
  /** How far away they want to hear about requests, in kilometres. */
  radiusKm: number;
  isAdmin: boolean;
}
