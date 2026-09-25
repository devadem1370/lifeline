import type { DonorRecord } from "@/lib/types";

export const donorRecords: DonorRecord[] = [
  {
    id: "donor-sana",
    name: "Sana Habib",
    bloodGroup: "A+",
    area: "Gulshan",
    distanceKm: 1.2,
    lastDonationAt: "2026-04-18T09:00:00",
    availableForRequests: true,
    contact: { name: "Sana Habib", phone: "+880 1755 110022" },
  },
  {
    id: "donor-tanvir",
    name: "Tanvir Alam",
    bloodGroup: "O-",
    area: "Banani",
    distanceKm: 3.5,
    lastDonationAt: "2026-02-27T16:15:00",
    availableForRequests: true,
    contact: { name: "Tanvir Alam", phone: "+880 1677 553311" },
  },
  {
    id: "donor-nadia",
    name: "Nadia Islam",
    bloodGroup: "O+",
    area: "Mohakhali",
    distanceKm: 6.1,
    lastDonationAt: null,
    availableForRequests: true,
    contact: { name: "Nadia Islam", phone: "+880 1988 664422" },
  },
  {
    id: "user-bilal",
    name: "Bilal Rahman",
    bloodGroup: "O+",
    area: "Banani",
    distanceKm: 0,
    lastDonationAt: "2026-05-02T10:30:00",
    availableForRequests: true,
    contact: { name: "Bilal Rahman", phone: "+880 1711 234567" },
  },
];
