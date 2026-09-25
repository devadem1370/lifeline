import { ButtonLink } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { canvas } from "@/lib/layout";

export default function RequestNotFound() {
  return (
    <main className={cn(canvas, "flex-1")}>
      <EmptyState
        title={copy.requestPage.notFoundTitle}
        body={copy.requestPage.notFoundBody}
        action={
          <ButtonLink href="/" variant="secondary">
            {copy.actions.goHome}
          </ButtonLink>
        }
      />
    </main>
  );
}
