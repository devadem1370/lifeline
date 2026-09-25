import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/request/share-button";
import { WhoCanDonate } from "@/components/request/who-can-donate";
import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { ButtonLink } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { copy } from "@/lib/copy";
import { getRequest } from "@/lib/data/requests";
import { formatDeadline, formatDistance, formatTimeAgo, isDeadlineSoon } from "@/lib/format";

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
    <main className="mx-auto w-full max-w-[560px] flex-1">
      <section className="px-4 pt-8 pb-8">
        <BloodGroupTag group={request.bloodGroup} size="lg" />
        <h1 className="pt-5 text-headline text-ink">{headline}</h1>
        <p className={`pt-2 text-body-lg ${soon ? "font-bold text-garnet" : "text-ink"}`}>
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

      <section className="border-t border-mist px-4 py-8">
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
        <section className="border-t border-mist px-4 py-8">
          <h2 className="text-section text-ink">{copy.request.noteFromRequester}</h2>
          <p className="mt-3 max-w-prose border-l-2 border-mist pl-4 text-body text-ink">
            {request.note}
          </p>
        </section>
      ) : null}

      <section className="border-t border-mist px-4 py-8">
        {request.status === "open" ? (
          <div className="flex flex-col gap-3">
            <ButtonLink href="/sign-in" fullWidth>
              {copy.actions.pledge}
            </ButtonLink>
            <ShareButton title={headline} />
            <p className="max-w-prose pt-2 text-body-sm text-slate">{copy.privacy.beforePledge}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="text-section text-ink">{closed.title}</h2>
            <p className="max-w-prose text-body text-slate">{closed.body}</p>
          </div>
        )}
      </section>
    </main>
  );
}
