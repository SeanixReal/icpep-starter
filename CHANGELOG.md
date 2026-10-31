# Changelog

## Unreleased - 2026-10-31

### Added

- Vercel static hosting configuration, CLI deployment instructions, and deployment checks before publication.
- Deployment upload exclusions for local credentials, project metadata, generated output, and local review artifacts.

### Changed

- Use V1 toolkit naming across pages, search, print, generated downloads, and contributor documentation.
- Use `proposed` consistently in typed guide frontmatter, and write interface/reference copy without em dashes.
- Remove redundant completion hints, readiness subdescriptions, and repeated search/download helper text. Preserve storage-failure feedback and concise privacy information.
- Pin the build runtime to Node.js 24 and use Vercel's production domain when `SITE_URL` is not provided.
- Document Vercel hosting and automatic deployments from the connected GitHub repository while preserving the V1 review status.

## 0.1.0 - 2026-10-29

First V1 implementation for club review and contribution.

### Added

- Static Astro site with ICpEP.SE CIT-U branding and responsive documentation navigation.
- Seven Markdown guides: six setup steps and a separate macOS note.
- Guide search, optional browser-local progress, readiness checkmarks, code copying, and print view.
- Troubleshooting, learning roadmap, official source links, about/review status, and useful 404 page.
- Generated Markdown download and ZIP containing C, C++, and Python verification sources.
- Contributor documentation, issue/PR templates, CI checks, manual Pages deployment workflow, and dependency update configuration.
- Architecture diagrams, technical review checklist, pilot record template, and maintenance / migration instructions.

### Review status

All software recommendations remain proposed. Faculty verification, clean Windows installation testing, beginner pilot results, approved hosting, and public student launch are not complete. Browser checkmarks are self-reported and are never pilot evidence.
