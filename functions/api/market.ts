import {
  apiJson,
  fetchJson,
  normalizeFearAndGreed,
  normalizePrices,
  MARKET_COIN_IDS,
} from '../../src/lib/market-data.js';

export const onRequestGet = async () => {
  const coinIds = MARKET_COIN_IDS.join(',');
  const requests = await Promise.allSettled([
    fetchJson(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=brl&include_24hr_change=true`
    ),
    fetchJson('https://api.alternative.me/fng/?limit=1'),
  ]);

  const prices = requests[0].status === 'fulfilled'
    ? normalizePrices(requests[0].value)
    : null;
  const fearAndGreed = requests[1].status === 'fulfilled'
    ? normalizeFearAndGreed(requests[1].value)
    : null;

  if (!prices && !fearAndGreed) {
    return apiJson(
      { error: 'Dados de mercado temporariamente indisponíveis.', prices: null, fearAndGreed: null },
      { status: 503, cache: false }
    );
  }

  return apiJson({
    prices,
    fearAndGreed,
    sources: {
      coingecko: prices ? 'ok' : 'unavailable',
      alternativeMe: fearAndGreed ? 'ok' : 'unavailable',
    },
    updatedAt: new Date().toISOString(),
  });
};
