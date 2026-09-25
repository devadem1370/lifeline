import { config } from "@/lib/config";
import type { CurrentUser } from "@/lib/types";

/** The signed in donor the app is rendered for while there is no auth. */
export const currentUser: CurrentUser = {
  id: "user-bilal",
  name: "Bilal Ahmed",
  bloodGroup: "O+",
  sex: "male",
  phone: "+92 300 0000101",
  area: "Model Town, Lahore",
  lastDonationAt: "2026-05-02T10:30:00+05:00",
  availableForRequests: true,
  radiusKm: config.defaultRadiusKm,
  isAdmin: false,
};
