import {
  apiJson,
  fetchJson,
  normalizeNetworkStatus,
} from '../../src/lib/market-data.js';

export const onRequestGet = async () => {
  const requests = await Promise.allSettled([
    fetchJson('https://mempool.space/api/v1/fees/recommended'),
    fetchJson('https://economia.awesomeapi.com.br/json/last/USD-BRL'),
  ]);

  const fees = requests[0].status === 'fulfilled' ? requests[0].value : null;
  const usd = requests[1].status === 'fulfilled' ? requests[1].value : null;
  const payload = normalizeNetworkStatus(fees, usd);

  if (payload.btcSatVb === null && payload.usdBrl === null) {
    return apiJson(
      { error: 'Indicadores de rede temporariamente indisponíveis.', ...payload },
      { status: 503, cache: false }
    );
  }

  return apiJson({
    ...payload,
    sources: {
      mempool: payload.btcSatVb === null ? 'unavailable' : 'ok',
      awesomeApi: payload.usdBrl === null ? 'unavailable' : 'ok',
    },
    updatedAt: new Date().toISOString(),
  });
};
