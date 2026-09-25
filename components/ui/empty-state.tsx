import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { gutter } from "@/lib/layout";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  body?: string;
  /** Usually a Button or ButtonLink. */
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, body, action, className }: EmptyStateProps) {
  return (
    <div className={cn(gutter, "flex flex-col items-start gap-3 py-12", className)}>
      {icon ? <span className="text-slate">{icon}</span> : null}
      <h2 className="text-section text-ink">{title}</h2>
      {body ? <p className="max-w-prose text-body text-slate">{body}</p> : null}
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
}
