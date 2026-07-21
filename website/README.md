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

## Release data

Public Skill metadata is read from `../releases/skills.json`. The Skill ZIP is not copied into `website/public`; the download button links to the release URL in that manifest.

## Vercel deployment

Create a Vercel project from this repository and set:

- **Root Directory:** `website`
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Install Command:** `npm install`

Prefer deploying with `website` as the Root Directory. The repository also includes a root-level `vercel.json` plus npm workspace scripts as a safety net for projects that were accidentally created from the repository root; those settings delegate the production build to this website app and copy `website/.next` to the root `.next` output expected by that deployment mode.
