# V1 implementation verification

Recorded October 29, 2026 for the initial v0.1.0 implementation. This record covers repository and interface checks, not a clean student installation, faculty sign-off, or beginner pilot results.

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

## Vercel deployment verification: October 31, 2026

The owner requested deployment using the Vercel CLI. CLI 59.16.0 created and linked `seans-projects-e233560c/icpep-starter`, connected the GitHub repository, and deployed the checked working checkout using `vercel deploy --prod --yes --scope seans-projects-e233560c --logs`.

- Production review URL: [icpep-starter.vercel.app](https://icpep-starter.vercel.app).
- Initial CLI deployment: `dpl_JBWdrVYNrYVmvvEykCwFDVs8EFjY`, reported `READY` for production; [deployment record](https://vercel.com/seans-projects-e233560c/icpep-starter/JBWdrVYNrYVmvvEykCwFDVs8EFjY).
- Local checks and the remote Vercel build passed `npm run check`, all 7 tests, and `npm run build`. Local link validation checked 14 pages, 405 local targets, and 11 search entries.
- Unauthenticated HTTPS requests checked 40 deployed files: all 13 regular HTML pages plus their compiled assets, fonts, supplied brand images, search index, and download files. Served bytes matched the checked local build. ZIP entry names and source contents matched; archive timestamps vary between builds, so ZIP container bytes are not deterministic.
- An unknown route returned HTTP 404 with the toolkit's custom page. `/guides/readiness` returned HTTP 308 to `/guides/readiness/`.
- The home page retained the V1 banner and `noindex, nofollow`. The static search index returned 11 entries.
- A CLI dry run confirmed `.env.local`, `.vercel/`, local review captures, installed dependencies, and generated build files were excluded from source uploads. Generated guide/ZIP uploads are also excluded and rebuilt remotely from source.

This validates publication, static file delivery, and routing. Browser interactions were checked in the earlier local run; they were not repeated on Vercel. Faculty approval, clean installation, accessibility review, and pilot testing remain pending. The initial CLI upload preceded the documentation/configuration commit; later Git deployments use the committed configuration.

## Limits and next checks

Copy cleanup on October 31, 2026 uses V1 toolkit naming and the typed `proposed` guide status. Type/content checks, all 7 tests, and the static build passed. A content scan of 16 built HTML, JSON, and Markdown files found none of the retired version wording, em-dash characters/entities, or redundant completion-helper sentences. The cleanup also removes repeated readiness subdescriptions, the search-navigation hint, and unnecessary download explanations. The live C/C++ page was reloaded and its updated version label, reference titles, and completion control were verified in the browser. Software sources and approval state did not change.

The mechanical design detector reported advisory differences between existing style values and the design-system inventory. This copy-only change keeps the existing color and type values. Public-host checks do not establish device compatibility or faculty approval.

The repository requires a pull request and one approving review for `main`. The owner-requested CLI deployment can publish the checked feature-branch checkout while source changes await that review; the main-branch Git integration remains enabled. Merge the hosting/copy PR before making unrelated production changes, so a later deployment from older source does not restore previous copy.

- Existing local tools were used to run sample programs. This is not evidence that a beginner can install them from scratch.
- Windows clean installation, administrator-limited devices, ARM devices, and macOS installation are not validated.
- Print styles are implemented; physical printing and a complete exported PDF layout review are still pending.
- No-JavaScript static reading/navigation and storage failure recovery are implemented and source-reviewed; disabled-script and denied-storage browser sessions are not part of the recorded interactive run.
- Screen-reader use and a full manual accessibility audit remain club review tasks.
- CI is configured for Linux and Windows; its actual status is visible in GitHub Actions after the repository push.
- Faculty-approved versions and pilot outcomes must be added through the review process, not inferred from these results.

See [review-status.md](review-status.md) and [pilot-testing.md](pilot-testing.md) before changing the public proposed status.
