import Link from "next/link";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { canvas, gutter } from "@/lib/layout";

export function SiteHeader() {
  return (
    <header className="border-b border-mist bg-white">
      <div className={cn(canvas, gutter, "flex items-center justify-between gap-4 py-2")}>
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
