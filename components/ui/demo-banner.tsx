import { config } from "@/lib/config";
import { copy } from "@/lib/copy";

/**
 * Shown on every page while the app runs on mock data. Real hospital names
 * appear in invented requests, so nobody should be able to mistake one for a
 * real request, or think a hospital is involved with Lifeline.
 */
export function DemoBanner() {
  if (!config.usingMockData) return null;

  return (
    <div role="note" className="border-b border-mist bg-white px-4 py-2">
      <p className="mx-auto max-w-[560px] text-body-sm text-slate">
        <span className="font-bold text-ink">{copy.demo.banner}</span> {copy.demo.bannerDetail}
      </p>
    </div>
  );
}
