export const MARKET_COIN_IDS = [
  'bitcoin',
  'ethereum',
  'solana',
  'binancecoin',
  'ripple',
  'dogecoin',
  'tether',
  'avalanche-2',
  'cardano',
];

function finiteNumber(value) {
  if (typeof value !== 'number' && typeof value !== 'string') return null;
  if (typeof value === 'string' && value.trim() === '') return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function normalizePrices(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return null;

  const normalized = {};
  for (const id of MARKET_COIN_IDS) {
    const coin = payload[id];
    if (!coin || typeof coin !== 'object' || Array.isArray(coin)) continue;

    const brl = finiteNumber(coin.brl);
    const change = finiteNumber(coin.brl_24h_change);
    if (brl === null || brl <= 0) continue;

    normalized[id] = {
      brl,
      brl_24h_change: change,
    };
  }

  return Object.keys(normalized).length ? normalized : null;
}

export function normalizeFearAndGreed(payload) {
  const entry = payload?.data?.[0];
  if (!entry || typeof entry !== 'object') return null;

  const value = finiteNumber(entry.value);
  const label = typeof entry.value_classification === 'string'
    ? entry.value_classification.trim()
    : '';

  if (value === null || !Number.isInteger(value) || value < 0 || value > 100 || !label) return null;
  return { value, label };
}

export function normalizeNetworkStatus(feesPayload, usdPayload) {
  const fee = finiteNumber(feesPayload?.halfHourFee);
  const usd = finiteNumber(usdPayload?.USDBRL?.bid);

  return {
    btcSatVb: fee !== null && fee >= 0 ? fee : null,
    usdBrl: usd !== null && usd > 0 ? usd.toFixed(2) : null,
  };
}

export async function fetchJson(url, timeoutMs = 8000) {
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (!response.ok) {
    throw new Error(`Upstream responded with HTTP ${response.status}`);
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('json')) {
    throw new Error('Upstream response was not JSON');
  }

  return response.json();
}

export function apiJson(payload, { status = 200, cache = true } = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': cache
        ? 'public, max-age=60, s-maxage=300, stale-while-revalidate=60'
        : 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
