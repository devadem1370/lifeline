---
name: Lifeline
colors:
  surface: '#f9f9ff'
  surface-dim: '#d2daec'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#e0e8fa'
  surface-container-highest: '#dbe3f5'
  on-surface: '#141c29'
  on-surface-variant: '#594141'
  inverse-surface: '#29313e'
  inverse-on-surface: '#ebf1ff'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#b02a3e'
  primary: '#7b001f'
  on-primary: '#ffffff'
  primary-container: '#9e1b32'
  on-primary-container: '#ffb0b3'
  inverse-primary: '#ffb3b5'
  secondary: '#006b5e'
  on-secondary: '#ffffff'
  secondary-container: '#9cefdf'
  on-secondary-container: '#0a6f62'
  tertiary: '#003c6e'
  on-tertiary: '#ffffff'
  tertiary-container: '#005395'
  on-tertiary-container: '#a1c7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#8f0c28'
  secondary-fixed: '#9ff2e2'
  secondary-fixed-dim: '#83d5c6'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#d3e3ff'
  tertiary-fixed-dim: '#a3c9ff'
  on-tertiary-fixed: '#001c39'
  on-tertiary-fixed-variant: '#004883'
  background: '#f9f9ff'
  on-background: '#141c29'
  surface-variant: '#dbe3f5'
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontSize: 2.75rem
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 2rem
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 1.625rem
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: '1.35'
    letterSpacing: -0.01em
  title:
    fontFamily: Bricolage Grotesque
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.5'
  body-base:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  body-bold:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 1rem
    fontWeight: '700'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.4'
  body-sm-bold:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: '1.4'
  tag:
    fontFamily: Bricolage Grotesque
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: '1'
  caption:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: '1.35'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system serves a critical clinical mission: connecting urgent blood requests with nearby compatible donors in high-stakes moments. The experience must balance urgency with steady reassurance. It rejects alarmist patterns, flashing indicators, and high-strung red palettes that induce panic in family members and donors. Instead, it projects clinical composure, utter clarity, and deep human trustworthiness.

The aesthetic philosophy draws on modern medical editorial design and purposeful utilitarianism:
- Flat visual structure with intentional hairline separators reminiscent of medical charts and clinical logs.
- Absolute legibility under pressure, glare, and emotional distress.
- Tactile, specialized artifacts (like blood bag tag motifs) rooted in physical transfusion practice rather than generic software abstractions.
- Warm linen grounds and ink typography that comfort the eye and eliminate cognitive load.

## Colors

Color is deployed with clinical discipline. Garnet (`#9E1B32`) represents focused agency rather than terror; it is reserved strictly for immediate actions and active urgent calls. It must never dominate full screens or backdrops.

### Palette Roles
- **Background Linen (`#F3F6F7`):** The primary canvas surface across the entire application. It reduces eye fatigue compared to stark white while preserving optical crispness.
- **Text Ink (`#1B2330`):** The single authority for titles, body text, data points, and iconography, ensuring near-maximum contrast ratios exceeding WCAG AAA standards.
- **Primary / Urgency Garnet (`#9E1B32`):** Reserved for primary interactive triggers (e.g., "Confirm availability", "Request donor") and critical alerts. Never used for decorative accents.
- **Confirmed / Success Vein (`#1F7A6D`):** Applied to fulfilled matches, safe status reports, and verified badges. Always paired with explicit text confirmation.
- **Dividers Mist (`#D6DEE2`):** 1px structural hairlines that partition data without visual clutter.

### Blood Group Taxonomy
Specific, immutable color assignments ensure zero cognitive confusion for donor sorting:
- **Group O:** Deep Cerulean (`#2F6FB5`) with white text.
- **Group A:** Golden Amber (`#E3B23C`) with Ink text (`#1B2330`).
- **Group B:** Rose Quartzite (`#D6698F`) with white text.
- **Group AB:** Surgical White (`#FFFFFF`) with 1.5px Ink border (`#1B2330`) and Ink text (`#1B2330`).

Status is never conveyed through color alone; every state change or category includes explicit descriptive copy.

## Typography

The pairing combines the distinctive, assertive character of **Bricolage Grotesque** with the clinical readability of **Atkinson Hyperlegible Next**.

### Editorial & Syntactic Rules
- **Sentence case throughout:** All-caps text is strictly prohibited across buttons, tabs, tags, and status ribbons to reduce reading strain and avoid perceived visual shouting.
- **No decorative glyphs:** Arrows (`→`, `>`), chevrons, or directional icons must not be appended to button text. Clear verbs handle all communication.
- **Left alignment:** All body blocks and headings align strictly to the left margin to create an unbroken scanning anchor.
- **Numerical clarity:** Quantities, blood units, and hospital transit distances must always be rendered in bold body typography to ensure immediate parsing in transit.

## Layout & Spacing

The layout is built mobile-first, targeting donors and hospital dispatchers reading screens in transit or at bedside.

### Layout Principles
- **Fluid Structural Stack:** Interfaces follow an intentional vertical stack on mobile screens (viewport under 768px), snapping to a single unified reading column anchored by outer canvas margins of 16px (`margin`).
- **Breakpoint Behavior:**
  - *Mobile (< 768px):* Single column layout. Top-to-bottom procedural sequence. 16px margins, 16px gutters.
  - *Tablet (768px – 1024px):* 6-column fluid grid, 24px margins, 24px gutters. Secondary metadata docks alongside primary donor logs.
  - *Desktop (> 1024px):* Max container width of 1120px, centered on Linen canvas, 12-column fluid grid. Donor directory and map coordination sit side-by-side.
- **Separation Discipline:** Sections and lists do not float in disconnected modular boxes. Instead, they run continuous with 1px Mist (`#D6DEE2`) hairlines dividing them cleanly.

## Elevation & Depth

This design system explicitly eliminates traditional elevation systems:
- **No drop shadows:** Shadows imply synthetic elevation, floating planes, and toy-like physical layers that distract from high-stakes data.
- **Surface plane integrity:** All panels, detail lists, and donor request strips exist on the base Linen plane (`#F3F6F7`) or on crisp flat white (`#FFFFFF`) row bands bordered by 1px Mist lines (`#D6DEE2`).
- **Depth via containment and borderlines:** Visual hierarchy is established exclusively through hairline borders, typography scale, and background tone contrasts. Modals and emergency intervention sheets slide up as full-bleed bottom sheets or flat inset overlays with a solid 1px Mist perimeter rather than diffused blur shadows.

## Shapes

The design system pairs high-roundedness interactive touchpoints with structural rectangular information blocks:
- **Buttons and interactive pills:** Fully rounded (`rounded-full` / pill shape, 9999px border-radius) with a mandatory minimum height of 48px to allow unambiguous thumb targeting in stressful or moving environments.
- **Data containers and list entries:** Crisp 0px to 4px boundaries defined by 1px Mist hairlines, anchoring the information as an official clinical document rather than playful cards.
- **Blood Group Tag Notch:** The signature medical blood bag label tag features a circular cut-out notch (diameter: 6px) punched into the exact vertical center of the left edge, mimicking transfusion pack identification hang-tags.

## Components

### Buttons
- **Primary Urgency Button:** Fully rounded pill shape. Solid Garnet (`#9E1B32`) background, crisp white Atkinson Hyperlegible text (weight: 700). Minimum height: 48px. Left and right inner padding: 24px. No directional arrows, no shadows. Hover/active states darken by 10% without lifting or shifting elevation.
- **Secondary Button:** Fully rounded pill shape. Transparent fill, 1.5px solid Ink (`#1B2330`) border, Ink text. Minimum height: 48px.
- **Subtle Action Button:** Flat Linen surface with 1px Mist border, Ink text.

### Blood Group Tags
The signature component of the interface, inspired by physical medical blood bags:
- **Construction:** Inline-flex, height of 32px, minimum width of 52px. The right side is rounded with a 6px radius. The left side is straight with a punched semicircular notch (diameter: 6px) centered vertically.
- **Padding:** 0 10px 0 14px (extra left padding accounts for the punched notch).
- **Typography:** Bricolage Grotesque, weight: 700, 14px, tag level.
- **Color Variations:**
  - Group O: `#2F6FB5` background, `#FFFFFF` text.
  - Group A: `#E3B23C` background, `#1B2330` text.
  - Group B: `#D6698F` background, `#FFFFFF` text.
  - Group AB: `#FFFFFF` background, 1.5px `#1B2330` border, `#1B2330` text.

### Lists & Request Rows (Flat Cards)
- Floating cards are not permitted. Requests, blood inventory units, and donor profiles are rendered as structured list rows.
- Rows sit edge-to-edge against screen boundaries (mobile) or within a bounded flat container.
- Each row is separated by a 1px Mist (`#D6DEE2`) horizontal hairline.
- Background defaults to transparent or `#FFFFFF`. Touch state turns to a soft neutral tint (`#EAEFF1`).
- Content order within rows: Left-aligned blood group notch tag, donor or hospital details, distance in bold Atkinson Hyperlegible, and explicit textual status.

### Form Inputs & Checkboxes
- **Text Inputs:** Height 48px. Flat `#FFFFFF` surface with 1.5px Mist (`#D6DEE2`) border. Text rendered in Ink. When focused, the border transitions to 1.5px solid Ink (`#1B2330`) with zero glow or blur.
- **Radio Buttons & Checkboxes:** Minimum touch footprint 48x48px (visual control is 20x20px). Border is 1.5px Ink. Selected state fills with solid Ink or Vein (`#1F7A6D`) featuring a crisp white geometric check or inset dot.

### Status Indicators
- Status is never displayed purely as a colored dot. It must always be accompanied by explicit text: "Confirmed by donor", "Pending match", "In transit", or "Fulfilled".
- Verified / Success states utilize Vein (`#1F7A6D`) for subtle inline iconography paired alongside bold descriptive body copy.