import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/request/share-button";
import { WhoCanDonate } from "@/components/request/who-can-donate";
import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { ButtonLink } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { getRequest } from "@/lib/data/requests";
import { formatDeadline, formatDistance, formatTimeAgo, isDeadlineSoon } from "@/lib/format";
import { canvas, gutter, measure } from "@/lib/layout";

/** Deadlines are relative to now, so this page is never cached at build time. */
export const dynamic = "force-dynamic";

/** What to say once a request is no longer taking pledges. */
const CLOSED_STATES = {
  fulfilled: { title: copy.requestPage.fulfilledTitle, body: copy.requestPage.fulfilledBody },
  expired: { title: copy.requestPage.expiredTitle, body: copy.requestPage.expiredBody },
  cancelled: { title: copy.requestPage.cancelledTitle, body: copy.requestPage.cancelledBody },
} as const;

interface RequestPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: RequestPageProps): Promise<Metadata> {
  const { id } = await params;
  const request = await getRequest(id);

  if (!request) {
    return { title: `${copy.requestPage.notFoundTitle} · ${copy.app.name}` };
  }

  // Nothing private goes in here: no patient name, no requester, no number.
  const headline = copy.requestPage.unitsOfGroup(request.unitsNeeded, request.bloodGroup);

  return {
    title: `${headline} · ${request.hospital.name}`,
    description: copy.requestPage.metaDescription(
      request.unitsNeeded,
      request.bloodGroup,
      request.hospital.name,
      formatDeadline(request.deadline),
    ),
  };
}

export default async function PublicRequestPage({ params }: RequestPageProps) {
  const { id } = await params;
  const request = await getRequest(id);

  if (!request) notFound();

  const soon = isDeadlineSoon(request.deadline);
  const stillNeeded = Math.max(request.unitsNeeded - request.unitsPledged, 0);
  const headline = copy.requestPage.unitsOfGroup(request.unitsNeeded, request.bloodGroup);
  const closed = CLOSED_STATES[request.status as Exclude<typeof request.status, "open">];

  return (
    <main className={cn(canvas, "flex-1")}>
      <section className={cn(gutter, "py-8")}>
        <BloodGroupTag group={request.bloodGroup} size="lg" />
        <h1 className={cn(measure, "pt-5 text-headline text-ink")}>{headline}</h1>
        <p className={cn("pt-2 text-body-lg", soon ? "font-bold text-garnet" : "text-ink")}>
          {copy.requestPage.by(formatDeadline(request.deadline))}
        </p>
        <div className="flex flex-col gap-1 pt-5">
          <p className="text-body text-ink">{request.hospital.name}</p>
          {request.ward ? <p className="text-body text-slate">{request.ward}</p> : null}
          <p className="text-body-sm text-slate">
            {request.hospital.area}, {request.hospital.city} · {formatDistance(request.distanceKm)}
          </p>
          <p className="pt-2 text-body-sm text-slate">
            {copy.requestPage.postedAgo(formatTimeAgo(request.postedAt), request.requesterName)}
          </p>
        </div>
      </section>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <div>
          <section className={cn(gutter, "border-t border-mist py-8")}>
            <h2 className="text-section text-ink">{copy.requestPage.pledgeStatus}</h2>
            <div className="pt-4">
              <ProgressBar
                value={request.unitsPledged}
                max={request.unitsNeeded}
                label={copy.request.unitsPledged(request.unitsPledged, request.unitsNeeded)}
                status={
                  stillNeeded > 0 ? (
                    <span className={soon ? "text-garnet" : "text-ink"}>
                      {copy.requestPage.stillNeeded(stillNeeded)}
                    </span>
                  ) : (
                    <span className="text-vein">{copy.status.fulfilled}</span>
                  )
                }
              />
            </div>
          </section>

          <WhoCanDonate bloodGroup={request.bloodGroup} />

          {request.note ? (
            <section className={cn(gutter, "border-t border-mist py-8")}>
              <h2 className="text-section text-ink">{copy.request.noteFromRequester}</h2>
              <p className={cn(measure, "mt-3 border-l-2 border-mist pl-4 text-body text-ink")}>
                {request.note}
              </p>
            </section>
          ) : null}
        </div>

        <aside className={cn(gutter, "border-t border-mist py-8 lg:sticky lg:top-6 lg:self-start")}>
          {request.status === "open" ? (
            <div className="flex flex-col gap-3">
              <ButtonLink href="/sign-in" fullWidth>
                {copy.actions.pledge}
              </ButtonLink>
              <ShareButton title={headline} />
              <p className="pt-2 text-body-sm text-slate">{copy.privacy.beforePledge}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <h2 className="text-section text-ink">{closed.title}</h2>
              <p className="text-body text-slate">{closed.body}</p>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
