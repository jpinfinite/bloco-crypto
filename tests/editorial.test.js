import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const testDirectory = dirname(fileURLToPath(import.meta.url));
const articleDirectory = resolve(testDirectory, '../src/content/noticias');
const readArticle = (name) => readFileSync(resolve(articleDirectory, name), 'utf8');
const auditedArticles = [
  'analise-responsabilidade-civil-smart-contracts.md',
  'receita-federal-airdrops-staking.md',
  'receita-federal-declaracao-cripto.md',
  'bitcoin-core-vulnerability.md',
  'bitcoin-core-mitigacao-dos.md',
];

test('audited articles declare editorial authorship and primary source URLs', () => {
  for (const name of auditedArticles) {
    const article = readArticle(name);
    const frontmatter = article.match(/^---\n([\s\S]*?)\n---/);
    assert.ok(frontmatter, `${name} must contain frontmatter`);
    assert.match(frontmatter[1], /^author:\s*"Redação BLOCO\\\\CRYPTO"$/m, `${name} must identify editorial authorship`);
    const sourceUrls = [...frontmatter[1].matchAll(/^\s+url:\s*"(https:\/\/[^\"]+)"$/gm)];
    assert.ok(sourceUrls.length >= 2, `${name} must provide at least two HTTPS sources`);
  }
});

test('DeCripto article distinguishes reporting categories from tax treatment', () => {
  const article = readArticle('receita-federal-airdrops-staking.md');
  assert.match(article, /CARF501 — airdrop/);
  assert.match(article, /CARF502 — renda de staking/);
  assert.match(article, /não determina, isoladamente/);
});

test('STJ article limits its conclusion to REsp 2.250.674/MG', () => {
  const article = readArticle('analise-responsabilidade-civil-smart-contracts.md');
  assert.match(article, /REsp 2\.250\.674\/MG/);
  assert.match(article, /não representa uma isenção geral/);
  assert.match(article, /não foi o objeto decidido/);
});

test('Bitcoin Core correction removes unverified vulnerability and release claims', () => {
  const article = readArticle('bitcoin-core-vulnerability.md');
  assert.match(article, /Errata editorial/);
  assert.match(article, /não localizamos um comunicado público/);
  assert.doesNotMatch(article, /OOM killer|versão 30\.5|versão 31\.3|CVE-2026-117348/);
});
