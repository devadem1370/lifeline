import Link from "next/link";
import { CompatibilityGrid } from "@/components/public/compatibility-grid";
import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { ButtonLink } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { copy } from "@/lib/copy";
import { listOpenRequests } from "@/lib/data/requests";
import { formatDeadline, formatDistance, isDeadlineSoon } from "@/lib/format";

export default async function LandingPage() {
  const open = await listOpenRequests();
  const soonest = open[0];

  return (
    <main className="mx-auto w-full max-w-[560px] flex-1">
      <section className="px-4 pt-10 pb-8">
        <h1 className="text-display text-ink">{copy.landing.headline}</h1>
        <p className="max-w-prose pt-4 text-body-lg text-slate">{copy.landing.subline}</p>
        <div className="flex flex-col gap-3 pt-8">
          <ButtonLink href="/sign-in" fullWidth>
            {copy.landing.becomeDonor}
          </ButtonLink>
          <ButtonLink href="/sign-in" variant="secondary" fullWidth>
            {copy.landing.requestBlood}
          </ButtonLink>
        </div>
      </section>

      {soonest ? (
        <section className="border-t border-mist pt-8">
          <h2 className="px-4 text-section text-ink">{copy.landing.openNow}</h2>
          <Link
            href={`/r/${soonest.id}`}
            className="mt-4 flex flex-col gap-3 border-y border-mist bg-white px-4 py-4 hover:bg-row-pressed active:bg-row-pressed"
          >
            <span className="flex items-start gap-3">
              <BloodGroupTag group={soonest.bloodGroup} />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-body text-ink">
                  {copy.request.unitsNeeded(soonest.unitsNeeded)}{" "}
                  <span
                    className={
                      isDeadlineSoon(soonest.deadline) ? "font-bold text-garnet" : "text-ink"
                    }
                  >
                    by {formatDeadline(soonest.deadline)}
                  </span>
                </span>
                <span className="text-body-sm text-slate">
                  {soonest.hospital.name} · {formatDistance(soonest.distanceKm)}
                </span>
              </span>
            </span>
            <ProgressBar
              value={soonest.unitsPledged}
              max={soonest.unitsNeeded}
              label={copy.request.unitsPledged(soonest.unitsPledged, soonest.unitsNeeded)}
            />
          </Link>
        </section>
      ) : null}

      <section className="border-t border-mist px-4 py-8">
        <h2 className="text-section text-ink">{copy.landing.howItWorksTitle}</h2>
        <ol className="flex flex-col gap-6 pt-5">
          {copy.landing.howItWorks.map((step, index) => (
            <li key={step.title} className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-mist text-body-sm text-slate">
                {index + 1}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-heading text-title text-ink">{step.title}</span>
                <span className="max-w-prose text-body text-slate">{step.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-mist pt-8 pb-8">
        <div className="px-4 pb-5">
          <h2 className="text-section text-ink">{copy.landing.compatibilityTitle}</h2>
          <p className="max-w-prose pt-2 text-body text-slate">{copy.landing.compatibilityBody}</p>
        </div>
        <CompatibilityGrid />
      </section>

      <section className="border-t border-mist px-4 py-8">
        <h2 className="text-section text-ink">{copy.landing.privacyTitle}</h2>
        <p className="max-w-prose pt-2 text-body text-slate">{copy.landing.privacyBody}</p>
      </section>
    </main>
  );
}
