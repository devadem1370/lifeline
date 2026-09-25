import type { DonorRecord } from "@/lib/types";

/** Invented people with obviously fake numbers. B+ and O+ are the common groups. */
export const donorRecords: DonorRecord[] = [
  {
    id: "donor-ayesha",
    name: "Ayesha Khan",
    bloodGroup: "B+",
    sex: "female",
    area: "Gulberg",
    distanceKm: 1.2,
    lastDonationAt: "2026-04-18T09:00:00+05:00",
    availableForRequests: true,
    contact: { name: "Ayesha Khan", phone: "+92 301 0000102" },
  },
  {
    id: "donor-hamza",
    name: "Hamza Raza",
    bloodGroup: "O-",
    sex: "male",
    area: "DHA",
    distanceKm: 3.5,
    lastDonationAt: "2026-02-27T16:15:00+05:00",
    availableForRequests: true,
    contact: { name: "Hamza Raza", phone: "+92 302 0000103" },
  },
  {
    id: "donor-sana",
    name: "Sana Iqbal",
    bloodGroup: "O+",
    sex: "female",
    area: "Johar Town",
    distanceKm: 6.1,
    lastDonationAt: null,
    availableForRequests: true,
    contact: { name: "Sana Iqbal", phone: "+92 303 0000104" },
  },
  {
    id: "user-bilal",
    name: "Bilal Ahmed",
    bloodGroup: "O+",
    sex: "male",
    area: "Model Town",
    distanceKm: 0,
    lastDonationAt: "2026-05-02T10:30:00+05:00",
    availableForRequests: true,
    contact: { name: "Bilal Ahmed", phone: "+92 300 0000101" },
  },
];
