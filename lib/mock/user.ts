import { config } from "@/lib/config";
import type { CurrentUser } from "@/lib/types";

/** The signed in donor the app is rendered for while there is no auth. */
export const currentUser: CurrentUser = {
  id: "user-bilal",
  name: "Bilal Rahman",
  bloodGroup: "O+",
  phone: "+880 1711 234567",
  area: "Banani, Dhaka",
  lastDonationAt: "2026-05-02T10:30:00",
  availableForRequests: true,
  radiusKm: config.defaultRadiusKm,
  isAdmin: false,
};
