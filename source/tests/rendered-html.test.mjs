import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { default as worker } from "../dist/server/index.js";

async function render(path = "/") {
  return worker.fetch(new Request("https://tujl.com" + path, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} });
}

test("all editions render with bilingual content, record metadata and promotion", async () => {
  for (let n = 1; n <= 67; n++) {
    const number = String(n).padStart(3, "0");
    const response = await render(n === 67 ? "/" : "/issues/" + number);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp("<title>TUJL " + number));
    assert.ok(html.replace(/<!--.*?-->/g, "").includes("ISSUE " + number));
    assert.match(html, /lang="en"/);
    assert.match(html, /7R92Q79A/);
    assert.match(html, /sponsored noopener noreferrer/);
    assert.match(html, /property="og:title" content="TUJL/);
    assert.match(html, /name="twitter:title" content="TUJL/);
    assert.doesNotMatch(html, /<meta[^>]+(?:property="og:image"|name="twitter:image")/);
    assert.doesNotMatch(html, /Your site is taking shape/);
  }
});

test("private-memory handlers retain authentication checks", async () => {
  const source = await readFile(new URL("../app/api/memories/route.ts", import.meta.url), "utf8");
  assert.equal(source.match(/if \(!user\)/g)?.length, 2);
  assert.equal(source.match(/status: 401/g)?.length, 2);
  assert.match(source, /eq\(memories.userId, user.userId\)/);
});

test("latest edition has four distinct primary-source entries and complete archive links", async () => {
  const html = await (await render()).text();
  assert.match(html, /2026-11-10/);
  assert.equal((html.match(/class="story"/g) ?? []).length, 4);
  const sources = [...html.matchAll(/class="source-link" href="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(sources).size, 4);
  assert.ok(sources.every((url) => url.startsWith("https://")));
  for (let n = 1; n < 67; n++) {
    assert.ok(html.includes('href="/issues/' + String(n).padStart(3, "0") + '"'));
  }
  assert.match(html, /aria-labelledby="briefing-title"/);
});

test("navigation can wrap and keyboard focus is visible", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.topbar nav\s*\{[^}]*flex-wrap:wrap/);
  assert.match(css, /a:focus-visible/);
  assert.match(css, /overflow-wrap:anywhere/);
});


test("public briefing exposes no writing controls", async () => {
  const html = await (await render()).text();
  assert.doesNotMatch(html, /<(?:form|input|textarea)\b/);
});


test("desktop content reserves a clear lane for the fixed promotion", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /@media \(min-width:761px\)\s*\{\s*\.site-shell\s*\{\s*padding-right:clamp\(0px,calc\(\(1420px - 100vw\)\/2\),100px\)/);
  for (const width of [761, 1024, 1180, 1360, 1420, 1920]) {
    const shellWidth = Math.min(1180, width - 40);
    const margin = (width - shellWidth) / 2;
    const reserve = Math.min(100, Math.max(0, (1420 - width) / 2));
    const contentRight = width - margin - reserve;
    const promotionLeft = width - 14 - 82;
    assert.ok(promotionLeft - contentRight >= 24, `Reserved clearance at ${width}px`);
  }
});

test("new edition preserves yesterday and avoids repeated sources", async () => {
  const previous = await (await render("/issues/066")).text();
  assert.match(previous, /2026-11-08/);
  assert.match(previous, /Xinference/);
  const current = await (await render()).text();
  const links = (html) => [...html.matchAll(/class="source-link" href="([^"]+)"/g)].map((m) => m[1]);
  assert.ok(links(current).every((url) => !links(previous).includes(url)));
});

test("small metadata has readable contrast and mobile promotion stays labelled", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const luminance = (hex) => {
    const channels = hex.match(/../g).map((v) => parseInt(v, 16) / 255).map((v) => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
    return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
  };
  const dim = css.match(/--dim:#([0-9a-f]{6})/)[1];
  const ratio = (luminance(dim) + .05) / (luminance('0d0d0f') + .05);
  assert.ok(ratio >= 4.5, 'Metadata contrast on the site background');
  assert.match(css, /\.tujl-promotion-rail small \{ display:block; \}/);
  assert.match(css, /@media \(max-width:760px\)/);
  assert.match(css, /\.bilingual-copy \{ grid-template-columns:1fr;/);
});


test("latest edition distinguishes official reports, date boundaries and editorial judgment", async () => {
  const html = await (await render()).text();
  assert.match(html, /11月9日10:03至11月10日10:03/);
  assert.match(html, /Our editorial view/);
  for (const term of ["Fable", "TPU 8tx", "GR00T", "Ollama", "仅日期", "date only", "datePublished", "published_at"]) {
    assert.ok(html.includes(term), term);
  }
});


test("latest briefing remains focused on technical and research topics", async () => {
  const html = await (await render()).text();
  assert.doesNotMatch(html, /全国人大|世界人工智能合作组织|选举|midterm|ratification|Global governance/);
});


test("latest source timestamps fit a 24-hour window and all source URLs are new", async () => {
  const source = await readFile(new URL("../app/issues.ts", import.meta.url), "utf8");
  const match = source.match(/export const issue067: Issue = ([\s\S]+?);\n\n/);
  assert.ok(match);
  const issue = JSON.parse(match[1]);
  const start = Date.parse(issue.windowStart), end = Date.parse(issue.windowEnd);
  assert.equal(issue.windowStart, "2026-11-09T02:03:00Z");
  assert.equal(issue.windowEnd, "2026-11-10T02:03:00Z");
  assert.equal(end - start, 24 * 60 * 60 * 1000);
  const historical = source.slice(source.indexOf("export const issue066: Issue ="));
  const anthropic = issue.stories.find((story) => story.href.includes("anthropic.com"));
  assert.ok(anthropic);
  assert.equal(anthropic.publishedAt, undefined);
  for (const story of issue.stories) {
    if (story.publishedAt) {
      const published = Date.parse(story.publishedAt);
      assert.ok(published >= start && published <= end, story.href);
    }
    assert.ok(!historical.includes(story.href), story.href);
  }
  assert.equal((source.match(/export const issue\d{3}: Issue =/g) ?? []).length, 67);
});
