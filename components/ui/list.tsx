import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** A flat list: white rows on the linen page, divided by 1px mist hairlines. */
export function List({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ul className={cn("divide-y divide-mist border-y border-mist bg-white", className)}>
      {children}
    </ul>
  );
}

interface ListRowProps {
  /** Usually a blood group tag. */
  leading?: ReactNode;
  title: ReactNode;
  /** A second line: hospital, distance, deadline. */
  meta?: ReactNode;
  /** Status text or an action, kept to the right. */
  trailing?: ReactNode;
  /** Makes the whole row the target. */
  href?: string;
  className?: string;
}

export function ListRow({ leading, title, meta, trailing, href, className }: ListRowProps) {
  const content = (
    <>
      {leading ? <span className="shrink-0 pt-0.5">{leading}</span> : null}
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-body text-ink">{title}</span>
        {meta ? <span className="text-body-sm text-slate">{meta}</span> : null}
      </span>
      {trailing ? (
        <span className="shrink-0 pt-0.5 text-right text-body-sm">{trailing}</span>
      ) : null}
    </>
  );

  const rowClass = cn("flex min-h-12 w-full items-start gap-3 px-4 py-3 text-left", className);

  return (
    <li>
      {href ? (
        <Link href={href} className={cn(rowClass, "hover:bg-row-pressed active:bg-row-pressed")}>
          {content}
        </Link>
      ) : (
        <div className={rowClass}>{content}</div>
      )}
    </li>
  );
}
