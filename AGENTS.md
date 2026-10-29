# Repository guidance

Always document new features throughout the session. Update, create, or remove documentation and diagrams when behavior or architecture changes.

- Read README.md and CONTRIBUTING.md before editing.
- Guide content lives in `src/content/guides/`; use its typed frontmatter schema.
- All software recommendations are proposed until faculty review and Windows pilot testing are recorded. Never label a tool or version approved without evidence.
- Link to official software sources. Record sources and verification dates for instructional changes.
- Keep scripts small and client-side. Do not collect student information or add analytics without a product decision.
- Support keyboard use, narrow screens, reduced motion, and useful pages without JavaScript.
- Run `npm run check`, `npm test`, and `npm run build` before proposing a merge.
- Update relevant docs, CHANGELOG.md, and architecture diagrams with new features. Do not commit secrets, generated output, student records, or local screenshot artifacts.
