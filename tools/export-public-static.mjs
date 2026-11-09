/** Export only the published public news routes. No login, API, DB or private records.

Writes the GitHub Pages site at the repository root (index.html, issues/, _next/,
public assets, 404.html, .nojekyll). Does not delete source/, tools/, or docs.
Internal links are rewritten to relative URLs so the same files work at
https://alzmo.github.io/tujl/ and, later, at https://tujl.com/.
*/
import assert from 'node:assert/strict';
import { readFile, readdir, mkdir, writeFile, cp, rm, stat } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'source');
const staging = join(root, '.export-tmp');
const pagesHome = '/tujl/';

/** depth 0 = site root, depth 2 = issues/NNN/index.html */
export function relativizeHtml(html, depth) {
  const prefix = '../'.repeat(depth);
  return html.replace(
    /(\s(?:href|src|data-rsc-css-href)=["'])(\/(?!\/)[^"']*)(["'])/gi,
    (full, start, url, end) => {
      if (url.startsWith('/api/') || url.startsWith('/memory')) return full;
      if (url === '/') return `${start}${prefix || './'}${end}`;
      let rest = url.slice(1);
      if (rest.startsWith('issues/') && !rest.endsWith('/')) rest += '/';
      return `${start}${prefix}${rest}${end}`;
    },
  );
}

function notFoundHtml() {
  return `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>页面未找到 · TUJL</title><h1>页面未找到</h1><p>本站静态版本只提供公开简报，不提供私人记忆或登录功能。</p><p><a href="${pagesHome}">返回 TUJL（GitHub Pages）</a></p><p><a href="/">返回 tujl.com 上的 TUJL</a>（自定义域名接入后可用）</p></html>\n`;
}

async function publishStaging() {
  await rm(join(root, 'issues'), { recursive: true, force: true });
  await rm(join(root, '_next'), { recursive: true, force: true });
  await cp(join(staging, 'issues'), join(root, 'issues'), { recursive: true });
  const nextDir = join(staging, '_next');
  if (await stat(nextDir).then(() => true, () => false)) {
    await cp(nextDir, join(root, '_next'), { recursive: true });
  }
  const entries = await readdir(staging, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    await cp(join(staging, entry.name), join(root, entry.name));
  }
}

export async function exportPublicStatic() {
  const entry = join(source, 'dist/server/index.js');
  await stat(entry).catch(() => { throw new Error('先在 source/ 运行 npm ci && npm run build。'); });
  const { default: worker } = await import(pathToFileURL(entry));
  const latestSource = await readFile(join(source, 'app/page.tsx'), 'utf8');
  const latest = latestSource.match(/import\s*\{\s*issue(\d{3})\s*\}/)?.[1];
  assert.ok(latest, 'Find the current issue imported by app/page.tsx');
  const archived = (await readdir(join(source, 'app/issues'))).filter(n => /^\d{3}$/.test(n)).sort();
  const routes = [{ path: '/', number: latest, depth: 0 }, ...archived.map(n => ({ path: '/issues/' + n, number: n, depth: 2 }))];
  assert.equal(new Set(routes.map(r => r.number)).size, routes.length, 'Do not export duplicate issues');
  assert.ok(!routes.some(r => r.path.startsWith('/memory') || r.path.startsWith('/api')), 'Public export only');

  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  await cp(join(source, 'public'), staging, { recursive: true });
  const assets = new Set();
  const report = [];
  for (const route of routes) {
    const response = await worker.fetch(new Request('https://tujl.com' + route.path, {
      headers: { accept: 'text/html' },
    }), { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } }, {
      waitUntil() {}, passThroughOnException() {},
    });
    assert.equal(response.status, 200, route.path);
    let html = await response.text();
    html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '')
      .replace(/<link\b[^>]*>/gi, tag => /rel=["']modulepreload["']/i.test(tag) || /as=["']script["']/i.test(tag) ? '' : tag)
      .replace(/<!--[\s\S]*?-->/g, '');
    assert.match(html, new RegExp('<title>TUJL ' + route.number));
    assert.ok(html.includes('ISSUE ' + route.number), route.path);
    assert.doesNotMatch(html, /<(?:script|form|input|textarea)\b/i);
    assert.doesNotMatch(html, /signin-with-chatgpt|\/api\/memories|__vinext/);
    for (const match of html.matchAll(/(?:href|src)=["'](\/[^"']+)["']/g)) {
      const path = match[1].split(/[?#]/)[0];
      if (path === '/' || /^\/issues\/\d{3}\/?$/.test(path)) continue;
      assets.add(path);
    }
    html = relativizeHtml(html, route.depth);
    assert.doesNotMatch(html, /(?:href|src)=["']\/(?:issues|_next|favicon)/);
    const target = join(staging, route.path === '/' ? 'index.html' : route.path.slice(1) + '/index.html');
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html.endsWith('\n') ? html : html + '\n');
    report.push({ path: route.path, issue: route.number, bytes: Buffer.byteLength(html) });
  }
  for (const asset of assets) {
    assert.ok(asset.startsWith('/') && !asset.includes('..'));
    const from = join(source, 'dist/client', asset.slice(1));
    const to = join(staging, asset.slice(1));
    await mkdir(dirname(to), { recursive: true });
    await cp(from, to);
  }
  await writeFile(join(staging, '.nojekyll'), '');
  await writeFile(join(staging, '404.html'), notFoundHtml());
  await publishStaging();
  await rm(staging, { recursive: true, force: true });
  const summary = {
    latestIssue: latest,
    routes: report,
    copiedAssets: [...assets].sort(),
    privateRoutesIncluded: false,
    scriptsIncluded: false,
    linkStyle: 'relative',
    pagesHome,
  };
  await mkdir(join(root, 'tools'), { recursive: true });
  await writeFile(join(root, 'tools/export-report.json'), JSON.stringify(summary, null, 2) + '\n');
  console.log(`Exported ${routes.length} public issues to the repository root. Latest: ${latest}. No private routes, data, scripts or login.`);
  return summary;
}

const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (invokedDirectly) {
  await exportPublicStatic();
}
