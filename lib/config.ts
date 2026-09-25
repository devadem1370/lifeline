/**
 * Product rules. Interface copy reads these instead of spelling the numbers out,
 * so changing a rule here changes every screen that mentions it.
 */
export const config = {
  /** Days a donor waits between whole blood donations. */
  donationIntervalDays: 90,
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
} as const;
