import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

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
    <div className={cn("flex flex-col items-start gap-3 px-4 py-12", className)}>
      {icon ? <span className="text-slate">{icon}</span> : null}
      <h2 className="text-section text-ink">{title}</h2>
      {body ? <p className="max-w-prose text-body text-slate">{body}</p> : null}
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
}
