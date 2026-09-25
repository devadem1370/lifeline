import { ButtonLink } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { copy } from "@/lib/copy";

export default function RequestNotFound() {
  return (
    <main className="mx-auto w-full max-w-[560px] flex-1">
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
