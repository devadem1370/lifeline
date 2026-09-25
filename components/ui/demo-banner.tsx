import { cn } from "@/lib/cn";
import { config } from "@/lib/config";
import { copy } from "@/lib/copy";
import { canvas, gutter } from "@/lib/layout";

/**
 * Shown on every page while the app runs on mock data. Real hospital names
 * appear in invented requests, so nobody should be able to mistake one for a
 * real request, or think a hospital is involved with Lifeline.
 */
export function DemoBanner() {
  if (!config.usingMockData) return null;

  return (
    <div role="note" className="border-b border-mist bg-white py-2">
      <p className={cn(canvas, gutter, "text-body-sm text-slate")}>
        <span className="font-bold text-ink">{copy.demo.banner}</span> {copy.demo.bannerDetail}
      </p>
    </div>
  );
}
