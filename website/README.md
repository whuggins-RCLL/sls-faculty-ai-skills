# SLS Faculty AI Skills Website

This is a standalone Next.js TypeScript site using the App Router. It is intentionally contained in `website/` so the existing Skill source, validation, and packaging workflow remain unchanged.

## Local development

```bash
cd website
npm install
npm run dev
```

Open <http://localhost:3000>.

## Quality checks

```bash
cd website
npm run lint
npm run build
```

## Release data and downloads

Public Skill metadata is read from `../releases/skills.json`.

Downloadable Skill ZIPs are built automatically from the `skills/` source folders
at build time by `../scripts/build_site_packages.mjs` (run as the `prebuild` step,
so `npm run build` and every Vercel deploy produce them). Each ZIP is written to
`public/downloads/<slug>.zip` and served from the site itself — no external file
host is involved.

A Skill is published only when its `downloadUrl` in `releases/skills.json` is set
to `"/downloads/<slug>.zip"`. Leave it as `"#coming-soon"` to keep a Skill listed
but not yet downloadable. The generated ZIPs are git-ignored because they are
rebuilt on every deploy.

**To publish or update a Skill's download:** edit the Markdown in `skills/<slug>/`,
make sure its `downloadUrl` is `"/downloads/<slug>.zip"`, then commit and push. The
site rebuilds and serves the fresh ZIP.

## Vercel deployment

Create a Vercel project from this repository and set:

- **Root Directory:** `website`
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Install Command:** `npm install`
- **Output Directory:** `out`

Prefer deploying with `website` as the Root Directory. The repository also includes a root-level `vercel.json` plus npm workspace scripts as a safety net for projects that were accidentally created from the repository root; those settings delegate the production build to this static-exported website app and serve `website/out`.
