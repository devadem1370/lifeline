"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/copy";

/**
 * Requests reach people as a link in a chat, so sharing one is the main way it
 * travels. Uses the system share sheet where there is one, and falls back to
 * copying the link.
 */
export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // The person closed the share sheet. Fall through to copying.
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard blocked. The link is in the address bar either way.
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button variant="secondary" fullWidth onClick={share}>
        {copy.actions.shareRequest}
      </Button>
      <p aria-live="polite" className="text-body-sm text-vein">
        {copied ? copy.request.linkCopied : ""}
      </p>
    </div>
  );
}
