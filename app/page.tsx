import { ButtonLink } from "@/components/ui/button";
import { copy } from "@/lib/copy";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-[560px] flex-1 px-4 py-16">
      <h1 className="text-display text-ink">{copy.app.name}</h1>
      <p className="max-w-prose pt-3 text-body-lg text-slate">{copy.app.description}</p>
      <div className="pt-8">
        <ButtonLink href="/dev/components" variant="secondary">
          View components
        </ButtonLink>
      </div>
    </main>
  );
}
