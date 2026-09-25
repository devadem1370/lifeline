import type { Hospital } from "@/lib/types";

export const hospitals: Record<string, Hospital> = {
  "city-general": {
    id: "city-general",
    name: "City General Hospital",
    area: "Gulshan",
    city: "Dhaka",
    verified: true,
  },
  "st-jude": {
    id: "st-jude",
    name: "St Jude Hospital",
    area: "Banani",
    city: "Dhaka",
    verified: true,
  },
  "memorial-childrens": {
    id: "memorial-childrens",
    name: "Memorial Children's Clinic",
    area: "Mohakhali",
    city: "Dhaka",
    verified: false,
  },
  "northwest-surgical": {
    id: "northwest-surgical",
    name: "Northwest Surgical Centre",
    area: "Uttara",
    city: "Dhaka",
    verified: true,
  },
};
