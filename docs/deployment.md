# Deployment and repository sharing

Sharing and hosting this toolkit are separate from faculty approval or a completed student pilot. The Vercel deployment is a **V1 toolkit**. Keep the status banner and proposed-tool wording until the review records support changing them.

## Vercel (current host)

Live review URL: **[icpep-starter.vercel.app](https://icpep-starter.vercel.app)**. Project: `icpep-starter` in the owner's `seans-projects-e233560c` scope. The project is connected to `SeanixReal/icpep-starter`. Pushes to `main` can deploy to production; other branches can create previews. These builds run the checks in `vercel.json`; the Git integration does not wait for a separate GitHub Actions result. GitHub permissions and Vercel membership are managed separately, so a GitHub contributor is not automatically a deployment administrator.

Build settings are versioned in `vercel.json`: Astro, `npm ci`, `npm run check && npm test && npm run build`, output `dist`, and trailing slashes. The package engine pins Node.js 24. Vercel's production domain supplies the Astro site origin unless `SITE_URL` overrides it. Leave `SITE_BASE` unset or set it to `/` for this root-hosted project. A plain static build needs no Vercel adapter, student database, or application secrets.

To deploy a reviewed checkout using the CLI:

```sh
vercel login
vercel link --yes --scope seans-projects-e233560c --project icpep-starter
vercel deploy --prod --scope seans-projects-e233560c
```

Use an installed Vercel CLI; on PowerShell, `vercel.cmd` is available if the `.ps1` wrapper is blocked. Stop if the link command offers to create an unexpected project or selects another owner's scope. New club maintainers need access to this Vercel project, or must intentionally create their own project in their own scope. Preview a change with `vercel deploy` before using `--prod` when appropriate. `vercel inspect <deployment-url>` reports deployment state and build information.

The CLI can create `.vercel/` project metadata and a local `.env.local` containing an OIDC token. Both stay ignored. Do not commit or share them. `.vercelignore` also excludes environment files, local captures, caches, and generated output from source uploads. Vercel builds the downloads from their canonical source files.

After deployment, verify the returned production URL, `/guides/readiness/`, `/search.json`, the downloads, and an unknown route (HTTP 404). Check a guide without its trailing slash redirects to the slash route. Confirm the status banner and `noindex, nofollow` remain present. A public production URL is readable by anyone; the indexing hint is not access control. Record the actual URL and results in [verification.md](verification.md).

For a rollback, inspect the project's deployment history and use `vercel rollback <known-good-deployment-url>` for the same project. Revert the source change too so the next Git deployment does not reintroduce it. Check the CLI help before an incident because rollback eligibility depends on the project's current Vercel settings.

## GitHub Pages, when approved

1. Complete and record the required technical, accessibility, and pilot reviews.
2. Open repository **Settings → Pages** and choose **GitHub Actions** as the publishing source.
3. In **Actions**, select **Deploy toolkit to Pages**, then **Run workflow** on the reviewed `main` commit.
4. Review the successful deployment job and its actual URL. Do not assume a generated URL is live before the workflow succeeds.
5. Record URL, commit, date, permissions, and known limitations in the club's maintenance record.

The workflow builds with the repository's name as `SITE_BASE` and the repository owner's GitHub Pages origin as `SITE_URL`. No personal token is required. Its build job can read Pages configuration; `pages: write` and `id-token: write` are scoped to the deployment job. The normal CI workflow has read-only repository permissions.

The toolkit includes `noindex, nofollow`. This is a search-engine hint, not an access control. A public repository and public Pages URL are readable by anyone. Keep proposed instructions visibly labeled until the review process supports a public release.

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

Official references, checked October 31, 2026: [Vercel CLI deployment](https://vercel.com/docs/cli/deploy), [project linking](https://vercel.com/docs/cli/project-linking), [static Astro on Vercel](https://vercel.com/docs/frameworks/frontend/astro), [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json), [system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables), and [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
