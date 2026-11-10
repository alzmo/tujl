# TUJL

Bilingual daily AI briefings. Tech Updates, Just Latest.

The public site is a static digest. Issue **067 · 2026-11-10** is the homepage. Issues **001–066** are the archive under `issues/`. Private memory, login, and the database from the previous host are intentionally not part of this repository and are not published.

This repository is the GitHub Pages site. `index.html` is at the repository root, so Pages should be built from the root of `main` (not `/docs`). `.nojekyll` is present so `_next/` is published as-is.

## What is published

- `index.html` — current issue
- `issues/001` … `issues/066` — archive
- `_next/static/css/` — stylesheet
- `favicon.svg`, `og.png`, and the other public icons
- `404.html` — unknown paths stay on the public digest

`source/` is the maintainable app used to write the next issue and rebuild the static files. It is not a second website. `tools/export-public-static.mjs` renders only the public issue routes.

Internal links in the published HTML are relative, so archives and CSS work at `https://alzmo.github.io/tujl/` and, after DNS, at `https://tujl.com/`.

## Add the next issue

Work in `source/`. Node.js 22.13 or newer.

1. Add the new issue in `source/app/issues.ts`. Keep every previously published issue.
2. Add `source/app/issues/<number>/page.tsx` for the issue that is leaving the homepage. Copy the shape of a neighboring archive page.
3. Point `source/app/page.tsx` at the new issue.
4. In `source/app/issue-page.tsx`, update the latest-issue check and the archive navigation list.
5. Update the assertions in `source/tests/rendered-html.test.mjs` (issue number, date, count, previous issue, time window, entries). Do not delete tests to get a green run.
6. Build, test, and export:

```bash
cd source
npm ci
npm test
cd ..
node tools/export-public-static.mjs
```

7. Check the homepage title, one archive page, and that the stylesheet request returns CSS. Commit the updated root HTML, `issues/`, and `_next/` with the source edits.

The export reads the built worker, drops scripts and private routes, and replaces `index.html`, `issues/`, and `_next/` at the repository root. It does not delete `source/`, `tools/`, or these docs.

`source/.openai/hosting.json` keeps the local D1 binding name the build expects. The previous Sites project id is intentionally blank. Do not put that id, deployment ids, or private memory records in this repo.

## GitHub Pages

Publish from branch `main`, folder `/` (repository root). The site URL is:

https://alzmo.github.io/tujl/

The token used to push this repository cannot change Pages settings (`POST /repos/alzmo/tujl/pages` returns 403, and Pages is not enabled yet). The owner turns it on once:

1. Open https://github.com/alzmo/tujl/settings/pages
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to `/ (root)`. Save.
4. Wait until the Pages build is green, then open https://alzmo.github.io/tujl/ and https://alzmo.github.io/tujl/issues/001/

`.nojekyll` is already in the root, so Jekyll will not hide `_next/`.

`tujl.com` is not switched. This repo does not contain a `CNAME` file and does not change DNS.

## What DNS still needs for tujl.com

Do this only when you want the apex domain to serve this GitHub Pages site. Record the current DNS first so you can roll back. Leave mail and other records alone.

1. In the repository, Settings → Pages → Custom domain, add `tujl.com`. GitHub will write a `CNAME` file. Confirm it before merging.
2. At the DNS host, point the apex at GitHub Pages. GitHub’s current apex instructions are four A records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) or an `ALIAS`/`ANAME` to `alzmo.github.io` if the DNS host supports it. Use the values shown in GitHub’s Pages settings on the day you switch. `www` is a CNAME to `alzmo.github.io` if you want it.
3. Wait until Pages reports the domain as verified and the certificate is issued. Then open `https://tujl.com/`, `https://tujl.com/issues/001/`, and `https://tujl.com/issues/065/`.
4. In `404.html`, the GitHub Pages home link is `/tujl/`. After the apex works, `/` is the home link that matches `tujl.com`. The second link in that file is already `/`.
5. Confirm `/memory` and `/api/memories` are not published.

Until that DNS change, `tujl.com` still points wherever it points today. This repository does not claim the domain has moved.
