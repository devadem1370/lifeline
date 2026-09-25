import { config } from "@/lib/config";

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function startOfDay(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

/** "6 pm", "6:30 pm". Lower case, no leading zero, matching how people say it. */
export function formatTime(iso: string): string {
  const date = new Date(iso);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours < 12 ? "am" : "pm";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return minutes === 0
    ? `${hour12} ${period}`
    : `${hour12}:${String(minutes).padStart(2, "0")} ${period}`;
}

/** "6 pm today", "9 am tomorrow", "6 pm on 3 Oct". */
export function formatDeadline(iso: string, now: Date = new Date()): string {
  const date = new Date(iso);
  const days = Math.round((startOfDay(date) - startOfDay(now)) / DAY);
  const time = formatTime(iso);

  if (days === 0) return `${time} today`;
  if (days === 1) return `${time} tomorrow`;

  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });
  return `${time} on ${day} ${month}`;
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

/** "2.4 km", "800 m" for anything under a kilometre. */
export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
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
