import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";

const control =
  "w-full rounded-row border-[1.5px] border-mist bg-white px-3.5 py-2.5 text-body text-ink placeholder:text-slate focus:border-ink";

interface FieldShellProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  /** Adds the word "Optional" next to the label. */
  optional?: boolean;
  /** Adds the word "Required" next to the label. */
  required?: boolean;
  children: ReactNode;
}

function FieldShell({ id, label, hint, error, optional, required, children }: FieldShellProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-body-sm font-bold text-ink">
          {label}
        </label>
        {required ? <span className="text-caption text-slate">{copy.form.required}</span> : null}
        {optional && !required ? (
          <span className="text-caption text-slate">{copy.form.optional}</span>
        ) : null}
      </div>
      {hint ? (
        <p id={`${id}-hint`} className="text-body-sm text-slate">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-body-sm text-garnet">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function describedBy(id: string, hint?: string, error?: string) {
  const ids = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean);
  return ids.length > 0 ? ids.join(" ") : undefined;
}

type TextFieldProps = Omit<ComponentProps<"input">, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
};

export function TextField({
  id,
  label,
  hint,
  error,
  optional,
  required,
  className,
  ...props
}: TextFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      required={required}
    >
      <input
        id={id}
        required={required}
        aria-describedby={describedBy(id, hint, error)}
        aria-invalid={error ? true : undefined}
        className={cn(control, "min-h-12", error && "border-garnet", className)}
        {...props}
      />
    </FieldShell>
  );
}

type TextAreaProps = Omit<ComponentProps<"textarea">, "id"> & {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
};

export function TextArea({
  id,
  label,
  hint,
  error,
  optional,
  required,
  className,
  rows = 3,
  ...props
}: TextAreaProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      required={required}
    >
      <textarea
        id={id}
        rows={rows}
        required={required}
        aria-describedby={describedBy(id, hint, error)}
        aria-invalid={error ? true : undefined}
        className={cn(control, error && "border-garnet", className)}
        {...props}
      />
    </FieldShell>
  );
}
