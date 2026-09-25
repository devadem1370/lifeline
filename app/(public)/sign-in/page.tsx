import type { Metadata } from "next";
import { SignInForm } from "@/components/sign-in/sign-in-form";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: `${copy.actions.signIn} · ${copy.app.name}`,
};

export default function SignInPage() {
  return (
    <main className="mx-auto w-full max-w-[560px] flex-1 px-4 pt-10 pb-12">
      <SignInForm />
    </main>
  );
}
