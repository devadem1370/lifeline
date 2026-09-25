"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import { BellIcon, DropIcon, HomeIcon, PersonIcon } from "@/components/ui/icons";

const items = [
  { href: "/", label: copy.nav.home, Icon: HomeIcon },
  { href: "/requests", label: copy.nav.myRequests, Icon: DropIcon },
  { href: "/notifications", label: copy.nav.notifications, Icon: BellIcon },
  { href: "/profile", label: copy.nav.profile, Icon: PersonIcon },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function BottomNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={copy.app.name}
      className={cn("sticky bottom-0 z-40 border-t border-mist bg-white", className)}
    >
      <ul className="mx-auto flex max-w-[560px] pb-[env(safe-area-inset-bottom)]">
        {items.map(({ href, label, Icon }) => {
          const active = isActive(pathname, href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 px-2 py-2 text-caption",
                  active ? "font-bold text-ink" : "text-slate hover:text-ink",
                )}
              >
                <Icon className="size-6" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
