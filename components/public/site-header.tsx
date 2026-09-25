import Link from "next/link";
import { copy } from "@/lib/copy";

export function SiteHeader() {
  return (
    <header className="border-b border-mist bg-white">
      <div className="mx-auto flex max-w-[560px] items-center justify-between gap-4 px-4 py-2">
        <Link href="/" className="font-heading text-title text-ink">
          {copy.app.name}
        </Link>
        <Link
          href="/sign-in"
          className="inline-flex min-h-12 items-center rounded-full px-4 text-body font-bold text-ink hover:bg-row-pressed"
        >
          {copy.actions.signIn}
        </Link>
      </div>
    </header>
  );
}
