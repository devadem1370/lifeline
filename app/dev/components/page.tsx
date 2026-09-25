import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BottomSheetDemo, SelectableTagsDemo, ToggleDemo } from "@/app/dev/components/demos";
import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Button, ButtonLink } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { InboxIcon } from "@/components/ui/icons";
import { List, ListRow } from "@/components/ui/list";
import { ProgressBar } from "@/components/ui/progress-bar";
import { TextArea, TextField } from "@/components/ui/text-field";
import { BLOOD_GROUPS } from "@/lib/blood";
import { copy } from "@/lib/copy";
import { getCurrentUser } from "@/lib/data/donors";
import { listRequestsForDonor } from "@/lib/data/requests";
import { formatDeadline, formatDistance, isDeadlineSoon } from "@/lib/format";

export const metadata: Metadata = {
  title: `Components · ${copy.app.name}`,
  robots: { index: false, follow: false },
};

function Section({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <section className="border-t border-mist pt-6 pb-10">
      <h2 className="px-4 text-section text-ink">{title}</h2>
      {note ? <p className="px-4 pt-1 text-body-sm text-slate">{note}</p> : null}
      <div className="pt-4">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 px-4 py-3">
      <span className="text-caption text-slate">{label}</span>
      {children}
    </div>
  );
}

const swatches = [
  { name: "linen", className: "bg-linen", use: "Page background" },
  { name: "white", className: "bg-white", use: "Row bands, inputs, sheets" },
  { name: "ink", className: "bg-ink", use: "Text, icons, selected states" },
  { name: "slate", className: "bg-slate", use: "Secondary and helper text" },
  { name: "garnet", className: "bg-garnet", use: "Primary buttons, deadlines under 3 hours" },
  { name: "mist", className: "bg-mist", use: "1px dividers, input borders" },
  { name: "vein", className: "bg-vein", use: "Pledged, fulfilled, verified, eligible" },
  { name: "row-pressed", className: "bg-row-pressed", use: "Row touch state" },
];

const typeScale = [
  { name: "display", className: "font-heading text-display" },
  { name: "headline", className: "font-heading text-headline" },
  { name: "section", className: "font-heading text-section" },
  { name: "title", className: "font-heading text-title" },
  { name: "body-lg", className: "text-body-lg" },
  { name: "body", className: "text-body" },
  { name: "body-sm", className: "text-body-sm" },
  { name: "caption", className: "text-caption" },
];

export default async function ComponentsPage() {
  const user = await getCurrentUser();
  const requests = await listRequestsForDonor();

  return (
    <div className="flex min-h-full flex-col bg-linen">
      <main className="mx-auto w-full max-w-[560px] flex-1 pb-10">
        <header className="px-4 pt-8 pb-6">
          <h1 className="text-headline text-ink">Components</h1>
          <p className="pt-2 text-body text-slate">
            Every shared component in every variant. Check this at 390px wide first.
          </p>
        </header>

        <Section title="Colour" note="Defined once as tokens. Nothing else carries a hex value.">
          <List>
            {swatches.map((swatch) => (
              <ListRow
                key={swatch.name}
                leading={
                  <span
                    className={`block size-8 rounded-row border border-mist ${swatch.className}`}
                  />
                }
                title={swatch.name}
                meta={swatch.use}
              />
            ))}
          </List>
        </Section>

        <Section
          title="Type"
          note="Bricolage Grotesque for headings and tags, Atkinson Hyperlegible Next for everything else."
        >
          <div className="flex flex-col gap-4 px-4">
            {typeScale.map((step) => (
              <div key={step.name} className="flex flex-col gap-1">
                <span className="text-caption text-slate">{step.name}</span>
                <span className={step.className}>B+ needed by 6 pm today</span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Blood group tag"
          note="The notch is punched with a mask, so the background shows through it."
        >
          <Row label="Small, 24px">
            <div className="flex flex-wrap gap-2">
              {BLOOD_GROUPS.map((group) => (
                <BloodGroupTag key={group} group={group} size="sm" />
              ))}
            </div>
          </Row>
          <Row label="Medium, 32px">
            <div className="flex flex-wrap gap-2">
              {BLOOD_GROUPS.map((group) => (
                <BloodGroupTag key={group} group={group} size="md" />
              ))}
            </div>
          </Row>
          <Row label="Large, 56px, the hero on a request page">
            <div className="flex flex-wrap gap-3">
              <BloodGroupTag group="O-" size="lg" />
              <BloodGroupTag group="A+" size="lg" />
              <BloodGroupTag group="B+" size="lg" />
              <BloodGroupTag group="AB-" size="lg" />
            </div>
          </Row>
          <Row label="On a white band, to check the notch">
            <div className="flex flex-wrap gap-2 bg-white p-3">
              {BLOOD_GROUPS.map((group) => (
                <BloodGroupTag key={group} group={group} />
              ))}
            </div>
          </Row>
          <Row label="Selectable">
            <SelectableTagsDemo />
          </Row>
        </Section>

        <Section title="Button" note="Fully rounded, at least 48px tall, no arrows.">
          <Row label="Primary">
            <div className="flex flex-wrap items-center gap-3">
              <Button>{copy.actions.pledge}</Button>
              <Button disabled>{copy.actions.pledge}</Button>
            </div>
          </Row>
          <Row label="Secondary">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary">{copy.actions.shareRequest}</Button>
              <Button variant="secondary" disabled>
                {copy.actions.shareRequest}
              </Button>
            </div>
          </Row>
          <Row label="Subtle">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="subtle">{copy.actions.changeDistance}</Button>
              <Button variant="subtle" disabled>
                {copy.actions.changeDistance}
              </Button>
            </div>
          </Row>
          <Row label="Full width">
            <Button fullWidth>{copy.actions.postRequest}</Button>
          </Row>
          <Row label="As a link">
            <ButtonLink href="/dev/components" variant="secondary">
              {copy.actions.viewRequest}
            </ButtonLink>
          </Row>
        </Section>

        <Section title="List rows" note="Flat white bands, 1px mist hairlines, no cards.">
          <List>
            <ListRow title="Title only" />
            <ListRow title="With meta" meta="City General Hospital · 2.4 km" />
            <ListRow
              leading={<BloodGroupTag group="A+" size="sm" />}
              title="With a tag and status"
              meta="City General Hospital · 2.4 km"
              trailing={<span className="text-vein">{copy.status.pledged}</span>}
            />
            <ListRow
              leading={<BloodGroupTag group="O+" size="sm" />}
              title="The whole row is a link"
              meta="Tap anywhere on this row"
              href="/dev/components"
            />
          </List>
        </Section>

        <Section
          title="Progress bar"
          note="The fill is the only animation that runs on its own, and it holds still under reduced motion."
        >
          <div className="flex flex-col gap-6 px-4">
            <ProgressBar value={0} max={2} label={copy.request.unitsPledged(0, 2)} />
            <ProgressBar
              value={1}
              max={2}
              label={copy.request.unitsPledged(1, 2)}
              status={<span className="text-garnet">1 unit still needed</span>}
            />
            <ProgressBar
              value={3}
              max={3}
              label={copy.request.unitsPledged(3, 3)}
              status={<span className="text-vein">{copy.status.fulfilled}</span>}
            />
          </div>
        </Section>

        <Section title="Text field">
          <div className="flex flex-col gap-6 px-4">
            <TextField
              id="demo-hospital"
              label={copy.form.hospitalLabel}
              placeholder="Search for a hospital"
              required
            />
            <TextField
              id="demo-phone"
              label={copy.form.phoneLabel}
              hint={copy.form.phoneHint}
              type="tel"
              required
              defaultValue="+880 1711 234567"
            />
            <TextField
              id="demo-patient"
              label={copy.form.patientNameLabel}
              hint={copy.form.patientNameHint}
              optional
            />
            <TextField
              id="demo-units"
              label={copy.form.unitsLabel}
              type="number"
              defaultValue={9}
              error={copy.errors.unitsOutOfRange}
            />
            <TextArea
              id="demo-note"
              label={copy.form.noteLabel}
              hint={copy.form.noteHint}
              optional
              defaultValue="Reception will point you to the donor room."
            />
          </div>
        </Section>

        <Section title="Toggle" note="The state is written out, never colour alone.">
          <div className="px-4">
            <ToggleDemo />
          </div>
        </Section>

        <Section title="Bottom sheet" note="16px top corners, rises on a tap, closes with Escape.">
          <div className="px-4">
            <BottomSheetDemo />
          </div>
        </Section>

        <Section title="Empty state">
          <EmptyState
            icon={<InboxIcon className="size-8" />}
            title={copy.empty.noRequests.title}
            body={copy.empty.noRequests.body}
            action={<Button variant="subtle">{copy.empty.noRequests.action}</Button>}
          />
          <EmptyState
            title={copy.empty.noNotifications.title}
            body={copy.empty.noNotifications.body}
          />
        </Section>

        <Section
          title="From the data layer"
          note={`Open requests ${user.name} (${user.bloodGroup}) can help with, within ${user.radiusKm} km.`}
        >
          <List>
            {requests.map((request) => (
              <ListRow
                key={request.id}
                href="/dev/components"
                leading={<BloodGroupTag group={request.bloodGroup} size="sm" />}
                title={
                  <>
                    {copy.request.unitsNeeded(request.unitsNeeded)}{" "}
                    <span
                      className={
                        isDeadlineSoon(request.deadline) ? "font-bold text-garnet" : "text-ink"
                      }
                    >
                      by {formatDeadline(request.deadline)}
                    </span>
                  </>
                }
                meta={`${request.hospital.name} · ${formatDistance(request.distanceKm)}`}
                trailing={copy.request.unitsPledged(request.unitsPledged, request.unitsNeeded)}
              />
            ))}
          </List>
          <p className="px-4 pt-4 text-body-sm text-slate">{copy.privacy.beforePledge}</p>
        </Section>
      </main>
      <BottomNav />
    </div>
  );
}
