# Deployment and repository sharing

Sharing the GitHub repository is separate from releasing the toolkit to students. The first push is a review draft. The included Pages deployment runs only when a maintainer manually dispatches it.

## GitHub Pages, when approved

1. Complete and record the required technical, accessibility, and pilot reviews.
2. Open repository **Settings → Pages** and choose **GitHub Actions** as the publishing source.
3. In **Actions**, select **Deploy review draft to Pages**, then **Run workflow** on the reviewed `main` commit.
4. Review the successful deployment job and its actual URL. Do not assume a generated URL is live before the workflow succeeds.
5. Record URL, commit, date, permissions, and known limitations in the club's maintenance record.

The workflow builds with the repository's name as `SITE_BASE` and the repository owner's GitHub Pages origin as `SITE_URL`. No personal token is required. Its build job can read Pages configuration; `pages: write` and `id-token: write` are scoped to the deployment job. The normal CI workflow has read-only repository permissions.

The draft includes `noindex, nofollow`. This is a search-engine hint, not an access control. A public repository and public Pages URL are readable by anyone. Keep proposed instructions visibly labeled until the review process supports a public release.

## Another static host

- Install: `npm ci`
- Build: `npm run build`
- Publish directory: `dist`
- Runtime: Node.js 24
- `SITE_URL`: final site origin, for example an approved organizational domain.
- `SITE_BASE`: `/` at the root, or `/toolkit/` when embedded below a path.

Use your shell or hosting provider's environment settings. PowerShell example:

```powershell
$env:SITE_BASE = '/toolkit/'
$env:SITE_URL = 'https://example.org'
npm.cmd run build
```

`example.org` is an illustrative placeholder, not a project URL. Rebuild after changing a base path. `npm run build` checks local links and anchors against the chosen prefix. Test the deployed 404 behavior because static hosts differ in how they serve not-found pages.

## Later Digital Hub integration

Keep the Markdown guides and canonical verification source files. Import or copy content into the Hub, map every old route to its new destination, verify links and downloads, and then redirect or retire the standalone site. Browser progress is bound to an origin and is not automatically migrated. See [maintenance.md](maintenance.md).

Official deployment reference: [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
