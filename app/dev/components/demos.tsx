"use client";

import { useState } from "react";
import { BloodGroupTag } from "@/components/ui/blood-group-tag";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import { Toggle } from "@/components/ui/toggle";
import { BLOOD_GROUPS, recipientsFor } from "@/lib/blood";
import { copy } from "@/lib/copy";
import type { BloodGroup } from "@/lib/types";

/** The selectable blood group tag, as the request form will use it. */
export function SelectableTagsDemo() {
  const [selected, setSelected] = useState<BloodGroup>("O-");

  return (
    <div className="flex flex-col gap-3">
      <fieldset className="flex flex-col gap-2">
        <legend className="pb-2 text-body-sm font-bold text-ink">
          {copy.form.bloodGroupLabel}
        </legend>
        <div className="grid grid-cols-4 gap-2">
          {BLOOD_GROUPS.map((group) => (
            <button
              key={group}
              type="button"
              aria-pressed={group === selected}
              onClick={() => setSelected(group)}
              className="flex justify-center rounded-row py-1"
            >
              <BloodGroupTag group={group} selected={group === selected} />
            </button>
          ))}
        </div>
      </fieldset>
      <p className="text-body-sm text-slate">
        {selected} can donate to {recipientsFor(selected).join(", ")}.
      </p>
    </div>
  );
}

export function ToggleDemo() {
  const [available, setAvailable] = useState(true);

  return (
    <Toggle
      id="demo-availability"
      label={copy.donor.availableLabel}
      onText={copy.donor.availableOn}
      offText={copy.donor.availableOff}
      checked={available}
      onChange={setAvailable}
    />
  );
}

export function BottomSheetDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-3">
      <Button onClick={() => setOpen(true)}>Open bottom sheet</Button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        title={copy.actions.pledge}
        footer={
          <Button fullWidth onClick={() => setOpen(false)}>
            {copy.actions.pledge}
          </Button>
        }
      >
        <div className="flex flex-col gap-4">
          <p className="text-body text-slate">{copy.privacy.beforePledge}</p>
          <TextField
            id="demo-sheet-phone"
            label={copy.form.phoneLabel}
            hint={copy.form.phoneHint}
            type="tel"
            required
            placeholder="+92 300 0000101"
          />
        </div>
      </BottomSheet>
    </div>
  );
}
