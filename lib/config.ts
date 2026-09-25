/**
 * Product rules. Interface copy reads these instead of spelling the numbers out,
 * so changing a rule here changes every screen that mentions it.
 */
export const config = {
  /** Lifeline launches in Pakistan. Everything is formatted for it. */
  locale: "en-PK",
  timeZone: "Asia/Karachi",

  /**
   * Days a donor waits between whole blood donations, by sex.
   *
   * NEEDS CONFIRMATION: these are working defaults, not a verified medical
   * rule. Confirm both figures with a local blood bank before launch.
   */
  donationIntervalDays: {
    male: 90,
    female: 120,
  },

  /** How far away a donor hears about requests by default, in kilometres. */
  defaultRadiusKm: 10,
  /** The narrowest radius a donor can choose, in kilometres. */
  minRadiusKm: 5,
  /** The widest radius a donor can choose, in kilometres. */
  maxRadiusKm: 25,
  /** Steps the radius control moves in, in kilometres. */
  radiusStepKm: 5,

  /** A deadline closer than this is shown in garnet. */
  deadlineSoonHours: 3,
  /** Most units one request can ask for. */
  maxUnitsPerRequest: 6,
  /** Longest a note to donors can be. */
  maxNoteLength: 200,

  /**
   * Stands in for a real one-time code until auth exists. It only unlocks a
   * confirmation screen, and it goes when sign in becomes real.
   */
  demoSignInCode: "123456",

  /**
   * Every screen carries a demo notice while this is true. Real hospital names
   * appear in invented requests, so nobody should mistake them for real ones.
   * Turn this off only when the app is reading live data.
   */
  usingMockData: true,
} as const;
