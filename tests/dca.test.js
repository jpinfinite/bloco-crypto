import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateDcaOrders } from '../src/lib/dca.js';

test('calculates weighted average from complete orders', () => {
  const result = calculateDcaOrders([
    { quantity: '0.25', unitPrice: '510000' },
    { quantity: '0.15', unitPrice: '545000' },
  ]);
  assert.equal(result.totalQty, 0.4);
  assert.equal(result.totalCost, 209250);
  assert.equal(result.averagePrice, 523125);
  assert.equal(result.validOrderCount, 2);
  assert.equal(result.invalidOrderCount, 0);
});

test('ignores blank rows and reports partially completed rows', () => {
  const result = calculateDcaOrders([
    { quantity: '', unitPrice: '' },
    { quantity: '0.5', unitPrice: '' },
    { quantity: '1', unitPrice: '100' },
  ]);
  assert.equal(result.totalQty, 1);
  assert.equal(result.totalCost, 100);
  assert.equal(result.averagePrice, 100);
  assert.equal(result.validOrderCount, 1);
  assert.equal(result.invalidOrderCount, 1);
  assert.deepEqual(result.invalidOrderIndexes, [1]);
});

test('rejects zero, negative and non-finite values', () => {
  const result = calculateDcaOrders([
    { quantity: '0', unitPrice: '100' },
    { quantity: '-1', unitPrice: '100' },
    { quantity: '1', unitPrice: 'Infinity' },
    { quantity: '1', unitPrice: 'NaN' },
  ]);
  assert.equal(result.totalQty, 0);
  assert.equal(result.totalCost, 0);
  assert.equal(result.invalidOrderCount, 4);
});

test('rejects overflow instead of displaying infinite totals', () => {
  const result = calculateDcaOrders([{ quantity: '1e308', unitPrice: '1e308' }]);
  assert.equal(result.totalQty, 0);
  assert.equal(result.totalCost, 0);
  assert.equal(result.averagePrice, 0);
  assert.equal(result.invalidOrderCount, 1);
});
