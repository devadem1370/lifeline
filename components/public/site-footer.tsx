import Link from "next/link";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { canvas, gutter, measure } from "@/lib/layout";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-mist bg-white">
      <nav
        className={cn(
          canvas,
          gutter,
          "flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:gap-8",
        )}
      >
        <ul className="flex flex-wrap gap-x-6">
          <li>
            <Link
              href="/impact"
              className="inline-flex min-h-12 items-center text-body text-ink hover:underline"
            >
              {copy.footer.impact}
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className="inline-flex min-h-12 items-center text-body text-ink hover:underline"
            >
              {copy.actions.signIn}
            </Link>
          </li>
        </ul>
        <p className={cn(measure, "text-body-sm text-slate md:text-right")}>
          {copy.footer.tagline}
        </p>
      </nav>
    </footer>
  );
}
