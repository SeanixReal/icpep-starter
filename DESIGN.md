---
name: CpE Starter Toolkit
description: "A chapter-branded engineering field notebook for a beginner's first programming setup."
colors:
  blue: "#004aad"
  blue-hover: "#003b8a"
  sky: "#38b6ff"
  navy: "#07264e"
  rail: "#073679"
  ink: "#152b48"
  muted: "#53657b"
  paper: "#ffffff"
  ground: "#f7f9fc"
  line: "#dce4ee"
  soft-blue: "#edf5ff"
  note-ink: "#365879"
  green: "#126341"
  amber: "#775015"
typography:
  display:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.15rem)"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-.035em"
  section:
    fontFamily: "Manrope, sans-serif"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1.35
    letterSpacing: "-.025em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 800
    lineHeight: 1.35
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  reading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1.5
  navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "Consolas, Cascadia Code, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.85
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  panel: "12px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "36px"
  gutter: "48px"
  gutter-compact: "30px"
  gutter-narrow: "22px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  button-secondary-hover:
    backgroundColor: "{colors.soft-blue}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  search-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 13px"
  nav-link:
    textColor: "#d4e2f7"
    typography: "{typography.navigation}"
    rounded: "{rounded.md}"
    padding: "9px 12px"
  nav-link-hover:
    backgroundColor: "#124586"
    textColor: "{colors.paper}"
  nav-link-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.rail}"
  status-label:
    backgroundColor: "#fff3dc"
    textColor: "{colors.amber}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  progress-note:
    backgroundColor: "{colors.soft-blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "21px"
  path-row:
    textColor: "{colors.ink}"
    padding: "20px 0"
  guide-callout:
    backgroundColor: "{colors.soft-blue}"
    textColor: "{colors.note-ink}"
    rounded: "{rounded.lg}"
    padding: "18px 20px"
  readiness-check:
    textColor: "{colors.ink}"
    padding: "13px 0"
---

# Design System: CpE Starter Toolkit

## Overview

**Creative North Star: "The Engineering Field Notebook"**

The Engineering Field Notebook places a clear, white reading surface beside the chapter's navy navigation rail. Cobalt guides action and orientation; thin rules and numbered rows make the learning sequence easy to scan. The tone is practical, calm, and friendly to a beginner.

Unbounded gives page identities the chapter's distinctive voice, while Manrope carries explanations and controls. The supplied chapter logo and administration banner remain intact. A small terminal example supports the instructional material; the rest of the interface uses familiar documentation patterns.

Extracted from the built source on October 29, 2026. The frontmatter records implemented tokens; the sidecar adds component previews, motion, breakpoints, and synthesized tonal previews. This is a visual record, not a faculty approval or device-test record.

Source references: [global styles](src/styles/global.css), [shared layout and font imports](src/layouts/Base.astro), [chapter navigation](src/components/Sidebar.astro), [overview](src/pages/index.astro), [guide route](src/pages/guides/%5B...id%5D.astro), [browser enhancements](src/scripts/toolkit.ts), [print view](src/pages/print.astro), and [Markdown highlighting configuration](astro.config.mjs). Brand constraints and asset rights are recorded in [PRODUCT.md](PRODUCT.md) and [asset provenance](docs/assets.md). The [surface brief](.impeccable/surfaces/src-pages-index-astro.md) holds page-specific direction.

**Key Characteristics:**

- White reading paper, a persistent blue chapter rail, and restrained cobalt actions.
- Ruled sequences and generous reading margins rather than repeated elevated cards.
- Readable guide prose with an on-page contents margin and visible official references.
- Optional browser enhancements with a complete reading and navigation baseline.

## Colors

Chapter cobalt and navy frame a white reading surface with quiet cool borders and note surfaces. Token names mirror the source custom properties, with Note Ink naming the reused supporting text color.

### Primary

- **Chapter Cobalt: Blue:** primary actions, text links, sequence numbers, and the emphasized line of the welcome title.
- **Deep Cobalt: Blue Hover:** primary-action hover state.
- **Sky:** visible keyboard focus and the chapter's light blue accent.
- **Chapter Rail: Rail:** persistent navigation background and active-item text.
- **Terminal Navy: Navy:** program example and transient feedback backgrounds.
- **Soft Blue:** progress notes, callouts, table headers, and gentle hover feedback.

### Secondary

- **Completion Green: Green:** personal completion state in navigation and the setup sequence. It does not indicate technical verification.

### Tertiary

- **Review Amber: Amber:** the proposed-guide tag's text. Its pale amber surface is specific to that component.

### Neutral

- **Paper:** the main reading shell, masthead, and active navigation item.
- **Ground:** the outer document canvas and compact search trigger.
- **Ink:** principal reading text and control labels.
- **Muted:** descriptions, guide metadata, and secondary links.
- **Line:** thin dividers, table strokes, and secondary-control borders.
- **Note Ink:** supporting text within blue notices and progress notes.

**The Reading Paper Rule.** The reading shell uses Paper. Ground serves the outer canvas and compact search trigger.

## Typography

Interface copy uses V1 toolkit naming. Keep proposed software choices explicit, and use sentences, commas, colons, or parentheses instead of em dashes.

Controls stand on their labels. Do not add subdescriptions that restate an action or explain obvious checkbox behavior. Use helper text for privacy, compatibility, and actionable recovery. Readiness checkboxes use one concise label; live status reports a count after interaction.

**Display Font:** Unbounded, with sans-serif fallback. The build self-hosts the used medium and semibold weights.

**Body Font:** Manrope, with sans-serif fallback. The build self-hosts regular through extra-bold weights.

**Label/Mono Font:** labels use Manrope; commands use Consolas, Cascadia Code, then monospace. These system monospace fonts are not downloaded.

**Character:** the wide display face gives headings a technical chapter identity. The reading face stays open and familiar; weight, spacing, and rules establish hierarchy rather than decorative type treatments.

### Hierarchy

- **Display:** the two-line welcome heading; its second line takes Blue. Responsive overrides are described in Layout.
- **Headline:** guide and secondary-page identities, with a guide-title measure of 24ch.
- **Section:** recurring section headings and guide second-level headings.
- **Title:** guide third-level headings; overview row and resource titles use smaller contextual sizes.
- **Body:** general site text; supporting introductions use Muted.
- **Reading:** guide articles, limited to 70ch, with the frontmatter's reading line height. The print-guide screen view allows 75ch.
- **Label:** primary and secondary action labels.
- **Navigation:** rail links; the active page increases to extra-bold.
- **Code:** guide code blocks. Inline code is scaled relative to prose and wraps long names.

**The Two Font Rule.** Unbounded carries page identities and the chapter statement; Manrope carries reading and controls. Commands use the local monospace stack.

## Layout

Desktop uses a fixed, vertically scrollable chapter rail (252px) beside a flexible reading shell. The masthead is 77px tall. The main container is capped at 1250px, with desktop padding (52px 48px 68px); the footer shares its side gutters. Thin ruled lists carry sequence and resource structure.

The overview starts with a two-column introduction (1.4fr / 1fr, 44px gap), then a setup sequence with a 220px notes margin (38px gap). Guides use a flexible article plus a 170px contents margin (36px gap). The contents margin is sticky (30px from the top). Article paragraphs follow a 19px flow, with more space before headings. These are observed role-specific measurements, not a universal arithmetic spacing scale.

- **At 1700px and wider:** the rail becomes 275px.
- **At 1190px and narrower:** the rail becomes 225px and main side gutters become 30px. The introduction gap narrows; the notes margin becomes 190px. Guides collapse their contents margin into an in-flow native disclosure.
- **At 960px and narrower:** the introduction and setup sequence become single-column, the terminal example is hidden, and the notes become two columns. Search and repository controls reduce to compact icons.
- **At 760px and narrower:** side gutters become 22px, the masthead becomes 65px, and main padding becomes 34px 22px 45px. The welcome heading uses a narrow-screen clamp; guide and page headings use their own smaller clamp. Setup durations are hidden, resource links stack, the community strip becomes one column, and guide completion/download controls stack.
- **Mobile navigation baseline:** without JavaScript, the chapter rail becomes an in-flow, two-column navigation block above the page. With JavaScript, it becomes a fixed drawer up to 300px or 88vw, opened by a labeled button and closed through its button, backdrop, or Escape. Focus remains within the drawer while open.
- **Print:** the rail, masthead, status banner, footer, dialogs, on-page contents, completion controls, pager, copy buttons, and toolbar are hidden. Main margins and padding are removed; the guide grid becomes one column. Articles use 10pt text, tables fill the page, code wraps without splitting where possible, and headings avoid stranded page breaks. HTTPS prose links append their URLs. Each guide in the combined print view begins on a new page. The printable page includes its own review statement.

## Elevation & Depth

Depth is mostly structural: navy framing, white paper, pale blue notes, and thin rules. Ordinary guide sections, resources, and sequence rows have no shadows. Three specific surfaces carry soft shadows: the program example, modal search, and toast feedback.

### Shadow Vocabulary

- **Program example** (`0 12px 30px -16px #142c4d70`): supports the navy terminal illustration, which has a slight static rotation.
- **Search dialog** (`0 24px 80px -16px #001b4660`): separates modal search from its dark translucent backdrop.
- **Toast** (`0 5px 20px -8px #001b4660`): distinguishes brief feedback above the page.

**The Working Surface Rule.** Ruled lists and reading content stay flat. Shadows distinguish the program example, modal search, and transient feedback.

## Shapes

Controls and navigation use gently rounded corners; code and callouts use a larger radius, while the terminal example, search dialog, and progress note use the panel radius. Small labels, keyboard hints, and inline code use the smallest radius. Sequence indices are circular. Borders are generally thin (1px); separators remain straight and light.

Icons use the project's inline SVG paths, a 24-unit view box, rounded caps and joins, and a stroke width of 1.7. Chapter raster marks retain their original proportions.

## Components

### Buttons

Compact, confident actions use the primary or outlined secondary tokens. They are inline-flex, at least 43px high, with a 14px icon gap and extra-bold labels. Primary hover deepens the cobalt; secondary hover adds Soft Blue. Icon-only controls are transparent, at least 40px square, with a pale hover surface. Disabled buttons reduce opacity and use the unavailable cursor. Focus uses Sky (3px outline, 4px offset); ordinary buttons have no animated hover treatment.

### Proposed status tag

The small amber tag says “Proposed guide.” It describes review state, not a selected filter or approval badge. Duration and source-check metadata sit beside it and wrap when needed.

### Notes and containers

Progress uses a flat Soft Blue panel with the panel radius. A native progress meter is 5px high and fills with Blue. Supporting notes use Note Ink. Guide callouts use the large radius and a thin blue border; resource collections and guide sections usually use open white space and rules instead of enclosing cards.

### Inputs and search

Search opens a native modal dialog sized to the viewport, with a maximum width of 620px and constrained vertical height. Its labeled search field has a thin cool border and medium radius. Focus-within changes the border to Blue and adds a translucent Sky outline. Results are separated by rules, show a title and description, and gain Soft Blue on hover.

The search button and slash shortcut appear when JavaScript is available. Search loads the local guide index on first use. The field receives focus on opening; Escape closes the dialog and Arrow Down enters the results. Empty, loading, no-result, and failure states use visible status text.

Readiness uses native checkboxes with Blue accent, aligned beside a short bold statement and muted explanation. The checkbox and label remain usable without scripting; browser persistence is optional.

### Navigation

The rail combines the intact chapter logo, chapter statement, grouped links, and contribution link. Normal links are pale against Rail; hover lightens the rail surface and turns text white. The current page uses Paper with Rail text and extra-bold weight, and exposes `aria-current="page"`. Guide breadcrumbs, contents links, and previous/next links share the reading surface's cobalt and muted text.

### Setup sequence and saved state

The signature sequence uses thin top and bottom rules, circular two-digit indices, title, description, estimated time, and an arrow. Hover changes the title to Blue. Personal completion changes the index and duration treatment to green and replaces the duration with explicit “Marked complete” text. It also updates navigation, the progress meter, and the continue action. Completion can be undone; reset requires a second activation. State is stored only in this browser and falls back to page-only behavior if storage is unavailable.

### Guide prose and feedback

Articles retain semantic headings, lists, tables, and official-reference links. Code uses the configured GitHub Dark Shiki theme, horizontal overflow on screen, and relative positioning for the optional Copy control. Copy success and failure appear in polite live feedback. Troubleshooting uses native disclosures; direct fragment links open the corresponding problem when scripting is available.

Motion is limited to smooth anchor scrolling, the mobile drawer's transform (220ms), and progress filling (300ms). Reduced-motion preference removes transitions and animation and restores automatic anchor scrolling. No page-entry motion is defined.

## Do's and Don'ts

### Do:

- **Do** preserve the supplied chapter marks and use the existing chapter palette.
- **Do** keep the reading shell white and distinguish secondary notes with Soft Blue.
- **Do** retain the guide reading measure, generous line height, and visible source links.
- **Do** provide a visible keyboard focus treatment and usable navigation without JavaScript.
- **Do** use the existing inline SVG path language for interface icons.
- **Do** retain the print view's readable code, external URLs, and explicit review status.

### Don't:

- **Don't** redraw, recolor, crop, or distort the supplied institutional marks.
- **Don't** present personal checkmarks or the proposed-guide tag as verified installation or faculty approval.
- **Don't** make reading, guide links, troubleshooting disclosures, or printing depend on JavaScript.
- **Don't** assume HK Modular is available; its font files were not supplied.
