"use client";

import { useEffect, useRef, type ClipboardEvent, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";

const LENGTH = 6;
const POSITIONS = Array.from({ length: LENGTH }, (_, index) => index);

interface CodeInputProps {
  /** The digits entered so far, up to six. */
  value: string;
  onChange: (value: string) => void;
  /** When the code was rejected. Every box shows it, not just the last one. */
  invalid: boolean;
  describedBy?: string;
}

/**
 * Six boxes for a one-time code. Focus follows typing and backspacing, arrow
 * keys move between boxes, and a pasted code fills all six at once, because
 * pasting is how most people move a code out of their email.
 */
export function CodeInput({ value, onChange, invalid, describedBy }: CodeInputProps) {
  const boxes = useRef<(HTMLInputElement | null)[]>([]);
  const digits = POSITIONS.map((index) => value[index] ?? "");

  useEffect(() => {
    boxes.current[0]?.focus();
  }, []);

  function focusBox(index: number) {
    const box = boxes.current[Math.min(Math.max(index, 0), LENGTH - 1)];
    box?.focus();
    box?.select();
  }

  function replaceFrom(index: number, digitsToWrite: string) {
    const next = (value.slice(0, index) + digitsToWrite).slice(0, LENGTH);
    onChange(next);
    focusBox(next.length);
  }

  function handleChange(index: number, raw: string) {
    const entered = raw.replace(/\D/g, "");

    if (entered === "") {
      const next = digits.slice();
      next[index] = "";
      onChange(next.join(""));
      return;
    }

    if (entered.length > 1) {
      replaceFrom(index, entered);
      return;
    }

    const next = digits.slice();
    next[index] = entered;
    onChange(next.join(""));
    if (index < LENGTH - 1) focusBox(index + 1);
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && digits[index] === "" && index > 0) {
      event.preventDefault();
      const next = digits.slice();
      next[index - 1] = "";
      onChange(next.join(""));
      focusBox(index - 1);
      return;
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      focusBox(index - 1);
    }

    if (event.key === "ArrowRight" && index < LENGTH - 1) {
      event.preventDefault();
      focusBox(index + 1);
    }
  }

  function handlePaste(index: number, event: ClipboardEvent<HTMLInputElement>) {
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, LENGTH);
    if (pasted === "") return;
    event.preventDefault();
    replaceFrom(pasted.length === LENGTH ? 0 : index, pasted);
  }

  return (
    <div className="flex gap-2">
      {POSITIONS.map((index) => (
        <input
          key={index}
          ref={(element) => {
            boxes.current[index] = element;
          }}
          value={digits[index]}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={(event) => handlePaste(index, event)}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          maxLength={1}
          aria-label={copy.signIn.digitLabel(index + 1)}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={cn(
            "size-12 rounded-row border-[1.5px] bg-white text-center font-heading text-title text-ink focus:border-ink",
            invalid ? "border-garnet" : "border-mist",
          )}
        />
      ))}
    </div>
  );
}
