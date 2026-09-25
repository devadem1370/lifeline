/**
 * Page layout, mobile first, following the breakpoints in the design reference:
 * one column with 16px gutters on a phone, 24px on a tablet, and a centred
 * 1120px canvas with 32px gutters on a desktop.
 */

/** Widest the page canvas gets. Everything sits inside this. */
export const canvas = "mx-auto w-full max-w-[1120px]";

/** Side gutters. Full-bleed rows leave this off and put it on the row instead. */
export const gutter = "px-4 md:px-6 lg:px-8";

/** A comfortable line length for body text, so wide screens do not stretch it. */
export const measure = "max-w-[640px]";
