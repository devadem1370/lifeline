import { config } from "@/lib/config";
import { formatNumber } from "@/lib/format";
import type { Sex } from "@/lib/types";

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
    goHome: "Go to the home page",
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
    linkCopied: "Link copied",
  },

  donor: {
    availableLabel: "Available for requests",
    availableOn: "You will be notified about nearby requests",
    availableOff: "You will not be notified about nearby requests",
    radiusLabel: "Distance from you",
    withinKm: (km: number = config.defaultRadiusKm) => `Within ${km} km`,
    radiusRange: `${config.minRadiusKm} to ${config.maxRadiusKm} km`,
    restPeriod: (sex: Sex) =>
      `You can donate whole blood every ${config.donationIntervalDays[sex]} days.`,
    sexLabel: "Sex",
    sex: {
      male: "Male",
      female: "Female",
    },
  },

  demo: {
    banner: "Demo data: these are not real requests",
    bannerDetail: "Hospital names are real. These hospitals are not involved with Lifeline.",
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

  landing: {
    headline: "When someone needs blood, reach the donors who can actually give it.",
    subline:
      "Lifeline matches an urgent request with nearby donors by blood group. No group chats, no phone numbers posted in public.",
    becomeDonor: "Become a donor",
    requestBlood: "Request blood",
    openNow: "Open right now",
    howItWorksTitle: "How it works",
    howItWorks: [
      {
        title: "Post a request",
        body: "The blood group, how many units, which hospital, and the time you need them by.",
      },
      {
        title: "Compatible donors nearby are notified",
        body: `Only people whose blood group can help, within ${config.defaultRadiusKm} km.`,
      },
      {
        title: "When a donor pledges, you both get each other's number",
        body: "Until that moment, neither side can see the other's contact details.",
      },
    ],
    compatibilityTitle: "Compatible by design",
    compatibilityBody: "Every group is needed. O- can help anyone in an emergency.",
    canDonateTo: (group: string) => `${group} can donate to`,
    privacyTitle: "Your number stays private",
    privacyBody:
      "Phone numbers are never listed on a request. They are shared once, with the person you pledged to.",
  },

  requestPage: {
    unitsOfGroup: (units: number, group: string) =>
      `${units} ${units === 1 ? "unit" : "units"} of ${group} needed`,
    by: (when: string) => `By ${when}`,
    postedAgo: (ago: string, name: string) => `Posted ${ago} by ${name}`,
    pledgeStatus: "Pledge status",
    stillNeeded: (units: number) => `${units} ${units === 1 ? "unit" : "units"} still needed`,
    notFoundTitle: "That request is not here",
    notFoundBody: "The link may be wrong, or the request may have been taken down.",
    expiredTitle: "This request has expired",
    expiredBody: "Its deadline has passed, so donors are no longer being notified.",
    fulfilledTitle: "This request was fulfilled",
    fulfilledBody: "Every unit was pledged.",
    cancelledTitle: "This request was taken down",
    cancelledBody: "The person who posted it closed it, so donors are no longer being notified.",
    metaDescription: (units: number, group: string, hospital: string, when: string) =>
      `${units} ${units === 1 ? "unit" : "units"} of ${group} needed at ${hospital} by ${when}.`,
  },

  impact: {
    title: "What donors have done so far",
    subtitle: "Every figure on this page comes from demo data.",
    fulfilled: (requests: number) => `${formatNumber(requests)} requests fulfilled`,
    fulfilledBy: (donors: number, hospitals: number) =>
      `by ${formatNumber(donors)} donors across ${formatNumber(hospitals)} hospitals.`,
    perMonthTitle: "Requests fulfilled per month",
    byGroupTitle: "Requests by blood group",
    requestCount: (requests: number) => `${requests} ${requests === 1 ? "request" : "requests"}`,
    ctaTitle: "Be ready when someone near you needs blood.",
    ctaBody: "Add your blood group and we will only get in touch when it matches a request.",
  },

  signIn: {
    title: "Sign in or create your account",
    emailLabel: "Email address",
    emailHint: "We will send you a 6-digit code. There is no password.",
    sendCode: "Send code",
    checkEmailTitle: "Check your email",
    sentTo: (email: string) => `We sent a code to ${email}.`,
    codeLegend: "6-digit code",
    digitLabel: (position: number) => `Digit ${position} of 6`,
    verify: "Verify and continue",
    resend: "Send a new code",
    useDifferentEmail: "Use a different email",
    demoHint: `This is a demo. Enter ${config.demoSignInCode} to continue.`,
    signedInTitle: "You are signed in",
    signedInBody: "The signed-in app is built in the next phase, so this is as far as it goes.",
  },

  footer: {
    impact: "Impact",
    tagline: "Lifeline connects urgent blood requests with nearby donors who can help.",
  },

  errors: {
    deadlineInPast: "Choose a time later than now.",
    unitsOutOfRange: `Enter a number between 1 and ${config.maxUnitsPerRequest}.`,
    phoneMissing: "Enter a phone number donors can reach you on.",
    noteTooLong: `Shorten the note to ${config.maxNoteLength} characters or fewer.`,
    offline: "We could not reach the server. Check your connection and try again.",
    emailMissing: "Enter an email address, such as name@example.com.",
    codeIncomplete: "Enter all six digits.",
    codeWrong: "That code did not match. Check the email and enter it again.",
  },
} as const;
