interface Bar {
  label: string;
  value: number;
}

/**
 * A plain column chart. Every bar's height is its share of the largest value,
 * so the shapes cannot disagree with the numbers, and each value is also
 * written out so the chart reads without being seen.
 */
export function BarChart({ bars, caption }: { bars: Bar[]; caption: string }) {
  const max = Math.max(...bars.map((bar) => bar.value), 1);

  return (
    <figure className="flex flex-col gap-3">
      <figcaption className="sr-only">{caption}</figcaption>
      <ul className="flex h-48 items-stretch gap-2 md:h-64 md:gap-4">
        {bars.map((bar) => (
          <li key={bar.label} className="flex flex-1 flex-col gap-1.5">
            <span className="text-center text-body-sm font-bold text-ink">{bar.value}</span>
            <span className="relative flex-1" aria-hidden="true">
              <span
                className="absolute inset-x-0 bottom-0 rounded-t-[2px] bg-vein"
                style={{ height: `${(bar.value / max) * 100}%` }}
              />
            </span>
            <span className="text-center text-caption text-slate">{bar.label}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
