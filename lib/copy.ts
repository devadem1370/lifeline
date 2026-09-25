import { config } from "@/lib/config";

/**
 * Every string the interface shows, in one place, so one action keeps one name.
 * Sentence case throughout. Numbers that are product rules come from config.
 */
export const copy = {
  app: {
    name: "Lifeline",
    description: "Lifeline connects urgent blood requests with nearby donors who can help.",
  },

  nav: {
    home: "Home",
    myRequests: "My requests",
    notifications: "Notifications",
    profile: "Profile",
  },

  actions: {
    pledge: "Pledge to donate",
    withdrawPledge: "Withdraw pledge",
    viewRequest: "View request",
    postRequest: "Post request",
    shareRequest: "Share request",
    changeDistance: "Change distance",
    signIn: "Sign in",
    save: "Save",
    cancel: "Cancel",
    close: "Close",
    tryAgain: "Try again",
    call: "Call",
  },

  status: {
    open: "Open",
    pledged: "Pledged",
    fulfilled: "Fulfilled",
    expired: "Expired",
    cancelled: "Cancelled",
    donated: "Donated",
    withdrawn: "Withdrawn",
    verified: "Verified hospital",
    eligible: "Eligible to donate",
    notEligible: "Not eligible yet",
  },

  request: {
    unitsNeeded: (units: number) => `${units} ${units === 1 ? "unit" : "units"} needed`,
    unitsPledged: (pledged: number, needed: number) => `${pledged} of ${needed} pledged`,
    deadline: (when: string) => `Needed by ${when}`,
    postedBy: (name: string) => `Posted by ${name}`,
    distance: (km: number) => `${km} km away`,
    whoCanDonate: "Who can donate",
    whoCanDonateHint: "If your blood group is one of these, you can help.",
    noteFromRequester: "Note from the family",
  },

  donor: {
    availableLabel: "Available for requests",
    availableOn: "You will be notified about nearby requests",
    availableOff: "You will not be notified about nearby requests",
    radiusLabel: "Distance from you",
    withinKm: (km: number = config.defaultRadiusKm) => `Within ${km} km`,
    radiusRange: `${config.minRadiusKm} to ${config.maxRadiusKm} km`,
    restPeriod: `You can donate whole blood every ${config.donationIntervalDays} days.`,
  },

  privacy: {
    beforePledge: "Contact details are shared only after you pledge.",
    afterPledge: "You can both see each other's contact details now.",
  },

  empty: {
    noRequests: {
      title: "No requests near you right now",
      body: `We will notify you when someone within ${config.defaultRadiusKm} km needs your blood group.`,
      action: "Change distance",
    },
    noMyRequests: {
      title: "You have not posted a request",
      body: "Post a request and compatible donors near you will be notified.",
      action: "Post request",
    },
    noNotifications: {
      title: "No notifications yet",
      body: "Requests that match your blood group will show up here.",
    },
  },

  form: {
    required: "Required",
    optional: "Optional",
    bloodGroupLabel: "Blood group needed",
    unitsLabel: "Units needed",
    hospitalLabel: "Hospital",
    deadlineLabel: "Needed by",
    phoneLabel: "Your phone number",
    phoneHint: "Shared only with donors who pledge.",
    noteLabel: "Note for donors",
    noteHint: "Anything that helps them find you, such as the ward or reception.",
    patientNameLabel: "Patient's name",
    patientNameHint: "Shown only to donors who pledge.",
  },

  errors: {
    deadlineInPast: "Choose a time later than now.",
    unitsOutOfRange: `Enter a number between 1 and ${config.maxUnitsPerRequest}.`,
    phoneMissing: "Enter a phone number donors can reach you on.",
    noteTooLong: `Shorten the note to ${config.maxNoteLength} characters or fewer.`,
    offline: "We could not reach the server. Check your connection and try again.",
  },
} as const;
