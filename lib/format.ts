import { config } from "@/lib/config";

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/** Everything is written the way it reads in Pakistan, in Pakistan Standard Time. */
const timeFormatter = new Intl.DateTimeFormat(config.locale, {
  timeZone: config.timeZone,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const dateFormatter = new Intl.DateTimeFormat(config.locale, {
  timeZone: config.timeZone,
  day: "numeric",
  month: "long",
  year: "numeric",
});

const numberFormatter = new Intl.NumberFormat(config.locale);

const monthFormatter = new Intl.DateTimeFormat(config.locale, {
  timeZone: config.timeZone,
  month: "short",
});

const dayPartsFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: config.timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/**
 * Which calendar day this instant falls on in Karachi, counted in whole days.
 * Comparing these is what makes "today" and "tomorrow" mean what a person in
 * Lahore expects, whatever time zone the server runs in.
 */
function karachiDay(date: Date): number {
  const parts = dayPartsFormatter.formatToParts(date);
  const value = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  return Date.UTC(value("year"), value("month") - 1, value("day")) / DAY;
}

/** "6:00 pm". */
export function formatTime(iso: string): string {
  return timeFormatter.format(new Date(iso));
}

/** "1,284". */
export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

/** "Apr". */
export function formatMonth(date: Date): string {
  return monthFormatter.format(date);
}

/** "25 September 2026". */
export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

/** "6:00 pm today", "9:30 am tomorrow", "6:00 pm on 25 September 2026". */
export function formatDeadline(iso: string, now: Date = new Date()): string {
  const time = formatTime(iso);
  const days = karachiDay(new Date(iso)) - karachiDay(now);

  if (days === 0) return `${time} today`;
  if (days === 1) return `${time} tomorrow`;
  return `${time} on ${formatDate(iso)}`;
}

/** Hours left until a deadline. Negative once it has passed. */
export function hoursUntil(iso: string, now: Date = new Date()): number {
  return (new Date(iso).getTime() - now.getTime()) / HOUR;
}

/** True when a deadline is close enough to be written in garnet. */
export function isDeadlineSoon(iso: string, now: Date = new Date()): boolean {
  const hours = hoursUntil(iso, now);
  return hours >= 0 && hours < config.deadlineSoonHours;
}

/** "2.4 km". Distances are always in kilometres. */
export function formatDistance(km: number): string {
  return `${km.toFixed(1).replace(/\.0$/, "")} km`;
}

/** "just now", "40 minutes ago", "3 hours ago", "2 days ago". */
export function formatTimeAgo(iso: string, now: Date = new Date()): string {
  const elapsed = now.getTime() - new Date(iso).getTime();

  if (elapsed < MINUTE) return "just now";
  if (elapsed < HOUR) {
    const minutes = Math.floor(elapsed / MINUTE);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
  if (elapsed < DAY) {
    const hours = Math.floor(elapsed / HOUR);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
  const days = Math.floor(elapsed / DAY);
  return `${days} ${days === 1 ? "day" : "days"} ago`;
}

/**
 * "Bilal Ahmed" becomes "Bilal A.". Donors and requesters are shown this way
 * until a pledge gives both sides each other's full contact details.
 */
export function shortName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  const first = parts[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1] : undefined;
  return last ? `${first} ${last[0]}.` : first;
}
