# Writing a guide

The site and the downloadable guide share the Markdown files in `src/content/guides/`. Edit those source files rather than a generated download.

## Frontmatter

```yaml
---
title: A short action-oriented title
description: One sentence describing what the learner will do.
order: 8
category: reference
duration: 10 min
reviewed: '2026-10-29'
status: proposed
sources:
  - title: Official documentation title
    url: https://docs.python.org/3/
---
```

The schema validates required fields. `status` currently only permits `proposed`; introducing an approved state requires a product decision and recorded evidence. `reviewed` means the official sources were reviewed, not that a device installation was tested or faculty approved the instructions.

## Make steps independently usable

- Start with what the student needs and what they should have at the end.
- Use second-level headings (`##`) for sections. The page provides its own first-level title.
- Use V1 toolkit naming and plain punctuation. Use sentences, commas, colons, or parentheses instead of em dashes.
- Omit helper text that repeats a control's label. Keep details that change a decision, explain a limitation, or help recover from an error.
- Name the terminal before commands: PowerShell, MSYS2 UCRT64, or macOS Terminal.
- Keep commands and expected output in separate fenced blocks. Do not include prompt symbols that beginners might copy.
- Explain placeholders before asking students to run them. Never include real credentials.
- Show how to recognize success and where to go when the result differs.
- Prefer official stable landing pages over hardcoded installer binaries.
- Avoid invented versions, completion statistics, screenshots, and approval claims.
- Keep the main Windows path separate from brief macOS notes. Linux remains outside V1.

## Links and downloads

Use root-relative internal Markdown links such as `[Python guide](/guides/python/)`. The build prefixes the configured site base. External links should use HTTPS and descriptive text.

Sample program files in `public/downloads/` are canonical. Update the matching code blocks in `verify.md` whenever they change; a regression test catches divergence. `npm run dev`, `npm test`, and `npm run build` generate the guide and ZIP from source. Never hand-edit or commit those generated files.

## Review your change

Read the rendered page on a wide and narrow viewport. Check its table of contents, links, keyboard access, copy controls, print view, and downloadable guide if affected. Run the documented checks and state any device-testing limits in the PR. Update the relevant review record when a source or version changes.
