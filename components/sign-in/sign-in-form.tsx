"use client";

import { useState, type FormEvent } from "react";
import { CodeInput } from "@/components/sign-in/code-input";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import { config } from "@/lib/config";
import { copy } from "@/lib/copy";

type Step = "email" | "code" | "signed-in";

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Sign in is interface only: no account is created and no code is sent. The
 * demo code in config stands in for the real one until auth exists.
 */
export function SignInForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  function submitEmail(event: FormEvent) {
    event.preventDefault();

    if (!looksLikeEmail(email)) {
      setError(copy.errors.emailMissing);
      return;
    }

    setError(null);
    setStep("code");
  }

  function submitCode(event: FormEvent) {
    event.preventDefault();

    if (code.length < 6) {
      setError(copy.errors.codeIncomplete);
      return;
    }

    if (code !== config.demoSignInCode) {
      setError(copy.errors.codeWrong);
      return;
    }

    setError(null);
    setStep("signed-in");
  }

  function changeCode(next: string) {
    setCode(next);
    if (error) setError(null);
  }

  function startOver() {
    setCode("");
    setError(null);
    setStep("email");
  }

  if (step === "signed-in") {
    return (
      <div className="flex flex-col gap-2">
        <h1 className="text-headline text-ink">{copy.signIn.signedInTitle}</h1>
        <p className="max-w-prose text-body text-slate">{copy.signIn.signedInBody}</p>
      </div>
    );
  }

  if (step === "code") {
    return (
      <form onSubmit={submitCode} noValidate className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-headline text-ink">{copy.signIn.checkEmailTitle}</h1>
          <p className="max-w-prose text-body text-slate">{copy.signIn.sentTo(email)}</p>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="pb-3 text-body-sm font-bold text-ink">{copy.signIn.codeLegend}</legend>
          <CodeInput
            value={code}
            onChange={changeCode}
            invalid={error !== null}
            describedBy={error ? "code-error" : "code-hint"}
          />
          {error ? (
            <p id="code-error" role="alert" className="text-body-sm text-garnet">
              {error}
            </p>
          ) : (
            <p id="code-hint" className="text-body-sm text-slate">
              {copy.signIn.demoHint}
            </p>
          )}
        </fieldset>

        <div className="flex flex-col gap-3">
          <Button type="submit" fullWidth>
            {copy.signIn.verify}
          </Button>
          <Button type="button" variant="subtle" fullWidth onClick={() => changeCode("")}>
            {copy.signIn.resend}
          </Button>
          <Button type="button" variant="subtle" fullWidth onClick={startOver}>
            {copy.signIn.useDifferentEmail}
          </Button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={submitEmail} noValidate className="flex flex-col gap-6">
      <h1 className="text-headline text-ink">{copy.signIn.title}</h1>

      <TextField
        id="sign-in-email"
        label={copy.signIn.emailLabel}
        hint={copy.signIn.emailHint}
        error={error ?? undefined}
        type="email"
        autoComplete="email"
        placeholder="name@example.com"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (error) setError(null);
        }}
        required
      />

      <Button type="submit" fullWidth>
        {copy.signIn.sendCode}
      </Button>
    </form>
  );
}
