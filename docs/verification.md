# V1 implementation verification

Recorded October 29, 2026 for the initial v0.1.0 draft. This record covers repository and interface checks, not a clean student installation, faculty sign-off, or beginner pilot results.

## Completed checks

| Area | Evidence |
| --- | --- |
| Type and content validation | `npm run check`: 0 errors, 0 warnings, 0 hints |
| Regression tests | `npm test`: 7 passing checks covering corrupt/unknown progress, resume order, source/archive consistency, official source domains, subpath rewriting, and search |
| Static output | Root build and `/icpep-starter/` build: 14 pages, 405 local link/asset targets, 11 search entries; anchors validated |
| Source programs | C and C++ compiled with GCC 15.1.0 and `-Wall -Wextra -Werror`; both outputs matched. Python 3.14.0 output matched on the existing local environment. |
| Official guide references | 25 unique official reference URLs returned successful HTTP responses |
| Browser search | Command-level query found the Python guide first; an unmatched query displayed a recovery message |
| Copy control | Browser reported successful code copying |
| Optional progress | Marking a guide survived reload; overview updated, continued at the earliest unfinished prerequisite, and reset removed checkmarks |
| Readiness checklist | Two checks survived reload; overview offered reset even with no guide complete |
| Mobile drawer | Open/close controls, initial close-button focus, and background inert state checked |
| Layout | Home checked at 1440px, 390px, and app-default width (838px content area); guide and checklist checked at phone width; no measured horizontal page overflow |
| Mechanical design checks | One detector run returned no findings |
| Final visual review | The reviewer's sole material fix, the white reading background, was scored resolved from refreshed desktop, phone, guide, and app-default captures. |
| Browser console | No warnings or errors in the inspected session |
| Asset provenance | Both owner-supplied rasters carry embedded origin metadata; no missing provenance reported |
| Dependencies | Audit reported no known vulnerabilities after patched tooling versions were installed |

Screenshots are local development evidence under `.impeccable/review/` and are intentionally ignored. Do not commit screenshots containing personal information. Source references and architecture are retained in this repository.

## Limits and next checks

- Existing local tools were used to run sample programs. This is not evidence that a beginner can install them from scratch.
- Windows clean installation, administrator-limited devices, ARM devices, and macOS installation are not validated.
- Print styles are implemented; physical printing and a complete exported PDF layout review are still pending.
- No-JavaScript static reading/navigation and storage failure recovery are implemented and source-reviewed; disabled-script and denied-storage browser sessions are not part of the recorded interactive run.
- Screen-reader use and a full manual accessibility audit remain club review tasks.
- CI is configured for Linux and Windows; its actual status is visible in GitHub Actions after the repository push.
- Faculty-approved versions and pilot outcomes must be added through the review process, not inferred from these results.

See [review-status.md](review-status.md) and [pilot-testing.md](pilot-testing.md) before changing the public draft status.
