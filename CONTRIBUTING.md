# Contributing to the toolkit

Welcome! Useful contributions include explaining a confusing sentence, reproducing a setup error, improving accessibility, and writing code. You do not need to be a web developer to help.

## Pick a small change

Check existing issues and pull requests first. For a small correction, go straight to a PR. For a new toolchain, supported platform, feature, or content section, open an issue explaining the student problem and proposed outcome so the club can discuss it.

All tool choices are currently **proposed**. Adding an official link does not make a version faculty-approved. Follow [the review checklist](docs/review-status.md) before changing approval wording.

## Edit content in the browser

1. Open the relevant Markdown file in [`src/content/guides/`](src/content/guides/).
2. Select GitHub's edit action. If you do not have write access, GitHub can create a fork for you.
3. Make the smallest useful correction. Preserve frontmatter and cite official references for technical changes.
4. Propose a pull request to `main` and explain what a beginner will experience differently.

A maintainer can help run the local checks for a text-only browser contribution. Do not claim you ran checks you did not run.

## Work locally

1. Fork the repository, then clone **your fork**.
2. Install Node.js 24, then run `npm ci`.
3. Create a branch such as `docs/clarify-python-launcher` or `fix/mobile-navigation`.
4. Run `npm run dev` and make the change.
5. Update related documentation, CHANGELOG.md, and diagrams when the behavior changes.
6. Run `npm run check`, `npm test`, and `npm run build`.
7. Commit, push your branch, and open a PR against this repository's `main` branch.

On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`. No execution-policy change is needed.

## What a good contribution includes

- A concrete student problem and a concise explanation of the resulting behavior.
- Exact filenames, terminal names, and expected output for instructional steps.
- Official references and an updated source-review date where relevant.
- Desktop and narrow-screen screenshots for visual changes, with private information removed.
- A keyboard and no-JavaScript check for navigation or reading changes.
- Tests only when they verify meaningful behavior, data boundaries, or regressions.
- Documentation that a future club officer can understand without the original chat.

Content guidance is in [docs/content-guide.md](docs/content-guide.md). Shared design decisions are in DESIGN.md; architecture is in [docs/architecture.md](docs/architecture.md).

## Report a setup problem

Use the **Guide or setup problem** issue form. Include the guide, operating system and architecture, terminal, command, first error, expected result, and actual result. Redact usernames, private file paths, tokens, student IDs, and unrelated screenshots. Do not attach another student's information.

Repository issues are public and are not an urgent-support channel. If a secret is exposed, revoke it immediately through its provider and privately alert a maintainer; do not paste it into an issue.

## Review and merge

Keep PRs focused. Address review comments with small follow-up commits. Maintainers should review technical sources, required checks, accessibility, and documentation before merging. Avoid force-pushing shared branches. The faculty-review record and student pilot cannot be replaced by CI passing.

The project owner currently manages the repository. The club can later agree on maintainer roles and transfer ownership into an organization without changing the content structure.
