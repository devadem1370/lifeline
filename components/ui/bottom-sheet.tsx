"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { CloseIcon } from "@/components/ui/icons";

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  /** Pinned to the bottom of the sheet, usually the primary action. */
  footer?: React.ReactNode;
  className?: string;
}

/**
 * A sheet that rises from the bottom of the screen. Built on the dialog
 * element, so Escape, the backdrop and focus handling come from the browser.
 */
export function BottomSheet({
  open,
  onClose,
  title,
  children,
  footer,
  className,
}: BottomSheetProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-labelledby={titleId}
      className={cn(
        "mx-auto mt-auto mb-0 max-h-[85dvh] w-full max-w-[560px] animate-sheet-rise rounded-t-sheet border-t border-mist bg-white p-0 text-ink backdrop:bg-ink/40 motion-reduce:animate-none",
        className,
      )}
    >
      <div className="flex max-h-[85dvh] flex-col">
        <div className="flex items-start justify-between gap-3 border-b border-mist px-4 py-3">
          <h2 id={titleId} className="pt-2 text-title text-ink">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.actions.close}
            className="-mr-2 inline-flex size-12 shrink-0 items-center justify-center rounded-full text-ink hover:bg-row-pressed"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4">{children}</div>
        {footer ? <div className="border-t border-mist px-4 py-3">{footer}</div> : null}
      </div>
    </dialog>
  );
}
