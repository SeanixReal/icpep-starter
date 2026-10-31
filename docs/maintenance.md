# Maintenance, migration, and club turnover

RDC is the proposed project owner. Review at least once per academic year and whenever an installer, supported platform, or course requirement changes. Record actual review outcomes; do not infer approval from the age of a guide.

## Review record template

| Field | Record |
| --- | --- |
| Review date / reviewer | |
| Toolkit version and commit | |
| Actual public URL and source repository | |
| Faculty toolchain record | |
| Tested OS, device architecture, tool versions | |
| Official link review results | |
| C, C++, Python output checks | |
| Keyboard, mobile, print, search and downloads | |
| Known limitations and unresolved issues | |
| Revisions and retest evidence | |
| Next review date | |

## Turnover checklist

- [ ] Agree on named maintainers and repository ownership. Prefer organization-managed access when the club is ready.
- [ ] Verify that at least two designated officers can maintain the source and hosting without sharing passwords or tokens.
- [ ] Preserve the source, lockfile, technical sign-off, approved source assets, and private pilot records in appropriate locations.
- [ ] Explain how Markdown, download generation, CI, Vercel Git/CLI deployment, the manual Pages alternative, and local progress work. See [deployment.md](deployment.md).
- [ ] Confirm the Vercel project scope, production branch, and maintainer access. Keep `.vercel/` and CLI-created `.env.local` private; officers should authenticate with their own accounts.
- [ ] Review open issues, dependency updates, platform exclusions, and scheduled academic-year review.
- [ ] Recheck that no secrets or participant records are in Git history or public artifacts.

## Digital Hub migration checklist

- [ ] Confirm the Hub's actual content format, URL structure, branding, hosting, and maintainers.
- [ ] Map every toolkit guide and download to a destination. Preserve official source references and dates.
- [ ] Carry over technical approval records and known limitations; keep participant data private.
- [ ] Re-run sample programs and test navigation, source downloads, search, print, focus, and narrow screens in the destination.
- [ ] Explain that progress stored on the old origin will not automatically follow the user.
- [ ] Verify redirects before retiring any public standalone address.
- [ ] Record the final source location, access, migration date, and responsible officers.

Feature changes should update this document, architecture diagrams, and the changelog when relevant.
