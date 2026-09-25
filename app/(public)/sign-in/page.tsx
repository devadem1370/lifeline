import type { Metadata } from "next";
import { SignInForm } from "@/components/sign-in/sign-in-form";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { canvas, gutter } from "@/lib/layout";

export const metadata: Metadata = {
  title: `${copy.actions.signIn} · ${copy.app.name}`,
};

export default function SignInPage() {
  return (
    <main className={cn(canvas, gutter, "flex-1 pt-10 pb-12")}>
      <div className="max-w-[440px]">
        <SignInForm />
      </div>
    </main>
  );
}
