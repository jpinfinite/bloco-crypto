import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MARKET_COIN_IDS,
  normalizePrices,
  normalizeFearAndGreed,
  normalizeNetworkStatus,
} from '../src/lib/market-data.js';

test('normaliza preços BRL e ignora valores inválidos', () => {
  const result = normalizePrices({
    bitcoin: { brl: 350000, brl_24h_change: 1.25 },
    ethereum: { brl: '18000', brl_24h_change: '-0.5' },
    solana: { brl: 0, brl_24h_change: 2 },
    unknown: { brl: 100, brl_24h_change: 1 },
  });

  assert.deepEqual(result, {
    bitcoin: { brl: 350000, brl_24h_change: 1.25 },
    ethereum: { brl: 18000, brl_24h_change: -0.5 },
  });
  assert.equal(MARKET_COIN_IDS.includes('cardano'), true);
});

test('retorna null quando nenhum preço confiável está disponível', () => {
  assert.equal(normalizePrices({ bitcoin: { brl: 'NaN' } }), null);
  assert.equal(normalizePrices(null), null);
});

test('valida índice Fear & Greed no intervalo de 0 a 100', () => {
  assert.deepEqual(
    normalizeFearAndGreed({ data: [{ value: '72', value_classification: 'Greed' }] }),
    { value: 72, label: 'Greed' }
  );
  assert.equal(normalizeFearAndGreed({ data: [{ value: '120', value_classification: 'Extreme Greed' }] }), null);
  assert.equal(normalizeFearAndGreed({ data: [] }), null);
});

test('normaliza taxa de rede e câmbio sem propagar NaN', () => {
  assert.deepEqual(
    normalizeNetworkStatus(
      { halfHourFee: 12 },
      { USDBRL: { bid: '5.25' } }
    ),
    { btcSatVb: 12, usdBrl: '5.25' }
  );
  assert.deepEqual(
    normalizeNetworkStatus({ halfHourFee: 'invalid' }, { USDBRL: { bid: '0' } }),
    { btcSatVb: null, usdBrl: null }
  );
});
