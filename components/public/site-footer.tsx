import Link from "next/link";
import { copy } from "@/lib/copy";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-mist bg-white">
      <nav className="mx-auto flex max-w-[560px] flex-col gap-4 px-4 py-6">
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
        <p className="max-w-prose text-body-sm text-slate">{copy.footer.tagline}</p>
      </nav>
    </footer>
  );
}
