type ClassValue = string | false | null | undefined;

/** Joins the class names that are actually set. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
