import { notificationSeeds } from "@/lib/mock/notifications";
import type { AppNotification } from "@/lib/types";

const MINUTE = 60 * 1000;

function toNotification(
  seed: (typeof notificationSeeds)[number],
  now: Date = new Date(),
): AppNotification {
  const createdAt = new Date(now.getTime() - seed.createdMinutesAgo * MINUTE);
  return {
    id: seed.id,
    kind: seed.kind,
    title: seed.title,
    body: seed.body,
    createdAt: createdAt.toISOString(),
    readAt: seed.read ? createdAt.toISOString() : null,
    requestId: seed.requestId,
  };
}

/** Notifications for the signed in person, newest first. */
export async function listNotifications(): Promise<AppNotification[]> {
  const now = new Date();
  return notificationSeeds
    .map((seed) => toNotification(seed, now))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function countUnreadNotifications(): Promise<number> {
  return notificationSeeds.filter((seed) => !seed.read).length;
}
