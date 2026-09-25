# Lifeline

Lifeline is a web app that connects urgent blood requests with nearby, compatible, eligible donors. A requester posts a request (blood group, units, hospital, deadline). Compatible donors nearby are notified. When a donor pledges, both sides see each other's contact details. Contact details are never visible before a pledge. This privacy rule is the core of the product.

Users: stressed families on phones (often opened from a WhatsApp link), ordinary donors, hospital staff, and admins.

## Current phase

Frontend only. Supabase is not connected yet. All data comes from typed mock data behind a small data-access layer, so it can be swapped for Supabase later without touching components.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 (configured in CSS, no tailwind.config file)
- ESLint 9 flat config + Prettier (with prettier-plugin-tailwindcss)
- Husky + lint-staged pre-commit hooks
- Deployed on Vercel; GitHub Actions CI

Next.js 16 changed some APIs from earlier versions. Check the installed version's docs and types before using an API; do not assume older patterns.

## Commands

- `npm run dev`, `npm run build`
- `npm run lint`, `npm run typecheck`, `npm run format`, `npm run format:check`

All four checks (lint, typecheck, format:check, build) must pass before any work is considered done.

## Git workflow (strict)

- `main` is protected. Never commit or push to `main`.
- One branch per task: `feat/...`, `fix/...`, `chore/...`, `refactor/...`.
- Conventional Commits: `feat: add blood group tag component`.
- Small, logical commits.
- When a task is done: run all checks, push the branch, then stop and give me a PR title and description (What / Why / How to test). I open and merge PRs myself. Do not merge.

## Architecture rules

- Server Components by default. Add `"use client"` only for interactivity (toggles, forms, sheets, tabs).
- Route groups: `(public)` for logged-out pages, `(app)` for signed-in pages with bottom nav, `(admin)` for admin.
- Types in `lib/types.ts`. Mock data in `lib/mock/`. Data access functions in `lib/data/` (async, typed, returning mock data for now).
- Product rules in `lib/config.ts` (donation interval default 90 days, default radius 10 km, radius range 5 to 25 km). Never hardcode these in UI copy.
- Blood compatibility in one pure function in `lib/blood.ts`. Red cell donor rules:
  O- gives to all; O+ to O+, A+, B+, AB+; A- to A-, A+, AB-, AB+; A+ to A+, AB+; B- to B-, B+, AB-, AB+; B+ to B+, AB+; AB- to AB-, AB+; AB+ to AB+ only.
- All interface copy in `lib/copy.ts` so wording stays consistent.
- Shared UI components in `components/ui/`. Feature components in `components/<feature>/`.

## Design system (source of truth, overrides design/stitch/lifeline/DESIGN.md)

Colors, defined once as CSS variables and Tailwind theme tokens. No raw hex values anywhere else.

| Token       | Value   | Use                                              |
| ----------- | ------- | ------------------------------------------------ |
| linen       | #F3F6F7 | Page background                                  |
| white       | #FFFFFF | Row bands, inputs, sheets                        |
| ink         | #1B2330 | Text, icons, selected states                     |
| slate       | #4A5563 | Secondary and helper text                        |
| garnet      | #9E1B32 | Primary buttons and deadlines under 3 hours ONLY |
| mist        | #D6DEE2 | 1px dividers, input borders                      |
| vein        | #1F7A6D | Pledged, fulfilled, verified, eligible           |
| row-pressed | #EAEFF1 | Row touch state                                  |

Blood group colors: O #2F6FB5 with white text; A #E3B23C with ink text; B #D6698F with white text; AB white with a 1.5px ink outline and ink text.

Typography via `next/font/google`: Bricolage Grotesque for headings and tags; Atkinson Hyperlegible Next for body and UI. Always include fallback stacks (`system-ui, sans-serif`). No monospace.

BloodGroupTag (the signature component, identical everywhere):

- Rectangle, right corners rounded 6px, left edge straight with a transparent semicircular notch (6px) at vertical center. Build the notch with a CSS mask, not a white dot.
- Sizes: sm 24px, md 32px, lg 56px (hero on the request page).
- Selectable variant: selected = 2px ink ring plus check icon. Never becomes a pill.
- Never clipped by its container.

Layout and shape:

- Mobile-first, left-aligned. Test at 390px width first.
- Lists are flat rows separated by 1px mist hairlines. No floating cards, no shadows anywhere.
- Buttons fully rounded, minimum 48px tall. Rows 0 to 4px radius. Bottom sheets 16px top corners.
- Status is always written as text, never color alone.
- Only one non-user-triggered animation: the pledge progress bar filling. Respect `prefers-reduced-motion`.

Accessibility: WCAG AA contrast, visible keyboard focus, 48px touch targets, semantic HTML, labels on every input.

## Voice and copy rules

- Sentence case everywhere. No all-caps text or `uppercase` classes.
- Plain, calm, specific: "B+ needed by 6 pm today", never "URGENT!!!".
- Never use: dispatch, transit, clinical, bedside, telemetry, appeals.
- Say "near you", "within 10 km", "your code", "requests", "notifications".
- One action keeps one name: button "Pledge to donate", toast "Pledge confirmed", status "Pledged".
- No arrows on buttons. Errors say what happened and how to fix it, without apologizing.

## Hard rules from the design review

Never add anything the system does not actually enforce:

- No HIPAA, Red Cross, certification or compliance claims.
- No testimonials, version numbers, "systems normal" indicators, or invented metrics.
- No "in transit" status, "verified donor" badges, platelet camps, or low-stock alerts.
- Anyone signed in can post a request; verified hospitals only get a check mark.

When using design/stitch/ as reference: take layout and structure, ignore showcase chrome (variant tabs, "State 1" labels, "System Matrix"), and apply this file's tokens and rules instead of Stitch's.
