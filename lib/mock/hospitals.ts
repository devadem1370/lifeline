import type { Hospital } from "@/lib/types";

/**
 * Real hospital names, so the interface looks like the real thing. None of
 * them have anything to do with Lifeline, so none of them are marked verified,
 * and every screen carries a demo notice while this data is in use.
 */
export const hospitals: Record<string, Hospital> = {
  mayo: {
    id: "mayo",
    name: "Mayo Hospital",
    area: "Anarkali",
    city: "Lahore",
    verified: false,
  },
  "jinnah-lahore": {
    id: "jinnah-lahore",
    name: "Jinnah Hospital",
    area: "Johar Town",
    city: "Lahore",
    verified: false,
  },
  "ganga-ram": {
    id: "ganga-ram",
    name: "Sir Ganga Ram Hospital",
    area: "Queens Road",
    city: "Lahore",
    verified: false,
  },
  services: {
    id: "services",
    name: "Services Hospital",
    area: "Jail Road",
    city: "Lahore",
    verified: false,
  },
};
