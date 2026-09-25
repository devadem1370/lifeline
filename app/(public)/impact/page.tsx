import type { Metadata } from "next";
import { BarChart } from "@/components/impact/bar-chart";
import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { getImpactSummary } from "@/lib/data/impact";
import { formatNumber } from "@/lib/format";
import { canvas, gutter, measure } from "@/lib/layout";

/** The months on the chart are counted back from today. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `${copy.impact.title} · ${copy.app.name}`,
};

export default async function ImpactPage() {
  const impact = await getImpactSummary();
  const mostRequested = Math.max(...impact.byGroup.map((entry) => entry.requests), 1);

  return (
    <main className={cn(canvas, "flex-1")}>
      <section className={cn(gutter, "pt-10 pb-8")}>
        <h1 className="text-headline text-ink">{copy.impact.title}</h1>
        <p className={cn(measure, "pt-2 text-body text-slate")}>{copy.impact.subtitle}</p>
        <p className="pt-8 text-display text-ink">
          {copy.impact.fulfilled(impact.requestsFulfilled)}
        </p>
        <p className={cn(measure, "pt-2 text-body-lg text-slate")}>
          {copy.impact.fulfilledBy(impact.donors, impact.hospitals)}
        </p>
      </section>

      <section className={cn(gutter, "border-t border-mist py-8")}>
        <h2 className="text-section text-ink">{copy.impact.perMonthTitle}</h2>
        <div className="pt-6">
          <BarChart
            caption={copy.impact.perMonthTitle}
            bars={impact.perMonth.map((entry) => ({
              label: entry.month,
              value: entry.requests,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-mist pt-8 pb-8">
        <h2 className={cn(gutter, "text-section text-ink")}>{copy.impact.byGroupTitle}</h2>
        <ul className="mt-5 border-t border-mist bg-white md:grid md:grid-cols-2">
          {impact.byGroup.map((entry) => (
            <li
              key={entry.bloodGroup}
              className={cn(
                gutter,
                "flex items-center gap-3 border-b border-mist py-3 md:odd:border-r",
              )}
            >
              <BloodGroupTag group={entry.bloodGroup} size="sm" />
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="text-body-sm text-slate">
                  {copy.impact.requestCount(entry.requests)}
                </span>
                <span
                  className="h-1.5 w-full overflow-hidden rounded-full bg-mist"
                  aria-hidden="true"
                >
                  <span
                    className="block h-full rounded-full bg-vein"
                    style={{ width: `${(entry.requests / mostRequested) * 100}%` }}
                  />
                </span>
              </span>
              <span className="shrink-0 text-body font-bold text-ink">
                {formatNumber(entry.requests)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(gutter, "border-t border-mist py-8")}>
        <h2 className="text-section text-ink">{copy.impact.ctaTitle}</h2>
        <p className={cn(measure, "pt-2 text-body text-slate")}>{copy.impact.ctaBody}</p>
        <div className="pt-6">
          <ButtonLink href="/sign-in" className="w-full sm:w-auto">
            {copy.landing.becomeDonor}
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
