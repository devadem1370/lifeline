import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "subtle";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-body font-bold transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-garnet text-white hover:brightness-95 active:brightness-90",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-row-pressed active:bg-row-pressed",
  subtle: "border border-mist bg-white text-ink hover:bg-row-pressed active:bg-row-pressed",
};

const disabled =
  "disabled:cursor-not-allowed disabled:border-mist disabled:bg-mist disabled:text-slate disabled:brightness-100";

function buttonClass(variant: ButtonVariant, fullWidth: boolean, className?: string) {
  return cn(base, variants[variant], fullWidth && "w-full", className);
}

interface ButtonOwnProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  className,
  type = "button",
  ...props
}: ButtonOwnProps & ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn(buttonClass(variant, fullWidth), disabled, className)}
      {...props}
    />
  );
}

/** The same button, for when the action is going somewhere. */
export function ButtonLink({
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonOwnProps & ComponentProps<typeof Link>) {
  return <Link className={buttonClass(variant, fullWidth, className)} {...props} />;
}
