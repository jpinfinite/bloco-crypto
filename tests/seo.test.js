import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('layout inclui canonical, Open Graph, Twitter e JSON-LD', async () => {
  const layout = await read('../src/layouts/BaseLayout.astro');
  for (const marker of ['rel="canonical"', 'property="og:title"', 'property="og:description"', 'property="og:url"', 'property="og:image"', 'name="twitter:card"', 'application/ld+json']) {
    assert.ok(layout.includes(marker), `missing SEO marker: ${marker}`);
  }
});

test('páginas de notícia geram NewsArticle com data de publicação', async () => {
  const page = await read('../src/pages/noticias/[...slug].astro');
  assert.ok(page.includes("'@type': 'NewsArticle'"));
  assert.ok(page.includes('datePublished: post.data.pubDate.toISOString()'));
  assert.ok(page.includes('structuredData={articleSchema}'));
  assert.ok(page.includes('ogType="article"'));
  assert.ok(layout.includes("ogType = 'website'"));
  assert.ok(layout.includes('content={ogType}'));
});

test('home e grade de notícias usam coleção editorial em vez de manchetes fixas', async () => {
  const hero = await read('../src/components/HeroMagazine.astro');
  const grid = await read('../src/components/NewsGrid.astro');
  assert.ok(hero.includes("getCollection('noticias')"));
  assert.ok(grid.includes("getCollection('noticias')"));
  assert.ok(!hero.includes('mitigar vetor de DoS'));
  assert.ok(!grid.includes('21/11/2026'));
});

test('link de ação no cabeçalho descreve corretamente o destino do glossário', async () => {
  const layout = await read('../src/layouts/BaseLayout.astro');
  assert.ok(layout.includes('href="/glossario"'));
  assert.ok(layout.includes('aria-label="Explorar glossário"'));
  assert.ok(!layout.includes('aria-label="Explorar notícias"'));
});

test('robots permite rastreamento e aponta para o sitemap gerado', async () => {
  const robots = await read('../public/robots.txt');
  assert.ok(robots.includes('User-agent: *'));
  assert.ok(robots.includes('Sitemap: https://bloco-crypto.pages.dev/sitemap-index.xml'));
});
