# TUJL agent notes

Public bilingual AI briefings only. Do not migrate or recreate private memory, login, or a database. Do not commit Sites project ids, deployment ids, tokens, or DNS changes unless the owner explicitly asks to switch `tujl.com`.

## Before writing a new issue

1. Read `source/app/page.tsx` and take the `issueNNN` import. That number is the latest published issue. The homepage is that issue. Archives are `issues/001` through the previous number. There is no separate `issues/` page for the current issue.
2. Research AI news from the last 24 hours before the edition cutoff. Use primary sources with a verifiable publication time. Do not reuse a source URL already linked in `source/app/issues.ts`. Keep facts and editorial judgment distinct, in Chinese and English, matching the existing issue shape.
3. Follow the update steps in `README.md`: data, archive page, homepage, navigation, tests, `npm test`, then `node tools/export-public-static.mjs`.
4. Commit the source edits and the regenerated root static files (`index.html`, `issues/`, `_next/`, and any asset the export copies). Push `main` (or merge a pull request into `main`).

## Check GitHub Pages

Pages should be served from the root of `main`. If https://alzmo.github.io/tujl/ is not live, the owner still needs to set Settings → Pages → Deploy from a branch → `main` → `/ (root)`. See `README.md`. After the push:

- `https://alzmo.github.io/tujl/` shows the new issue title.
- `https://alzmo.github.io/tujl/issues/001/` still opens.
- The stylesheet under `/_next/static/css/` loads (relative URL, so the project path prefix works).
- The page has no login form and no private-memory UI.

`tujl.com` stays on its current DNS until the owner switches it. See `README.md` for the records GitHub Pages will need. Do not add `CNAME` or edit DNS as part of a normal issue update.

## Build notes

- Commands run inside `source/` except the export script, which runs from the repository root.
- Node.js `>=22.13`. `npm test` builds first.
- The export overwrites the published HTML at the repo root. It must not delete `source/` or this file.
- Leave `source/.openai/hosting.json` `project_id` empty.
