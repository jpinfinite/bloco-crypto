/**
 * Calculates a weighted average acquisition price from DCA orders.
 * Empty rows are ignored; partially filled or invalid rows are reported.
 */
export function calculateDcaOrders(rows) {
  let totalQty = 0;
  let totalCost = 0;
  let validOrderCount = 0;
  let invalidOrderCount = 0;
  const invalidOrderIndexes = [];

  rows.forEach((row, index) => {
    const quantityText = String(row.quantity ?? '').trim();
    const unitPriceText = String(row.unitPrice ?? '').trim();

    if (!quantityText && !unitPriceText) return;

    const quantity = Number(quantityText);
    const unitPrice = Number(unitPriceText);
    const lineCost = quantity * unitPrice;

    if (
      !quantityText ||
      !unitPriceText ||
      !Number.isFinite(quantity) ||
      !Number.isFinite(unitPrice) ||
      quantity <= 0 ||
      unitPrice <= 0 ||
      !Number.isFinite(lineCost)
    ) {
      invalidOrderCount += 1;
      invalidOrderIndexes.push(index);
      return;
    }

    totalQty += quantity;
    totalCost += lineCost;
    validOrderCount += 1;
  });

  if (!Number.isFinite(totalQty) || !Number.isFinite(totalCost)) {
    return {
      totalQty: 0,
      totalCost: 0,
      averagePrice: 0,
      validOrderCount: 0,
      invalidOrderCount: rows.length,
      invalidOrderIndexes: rows.map((_, index) => index),
    };
  }

  return {
    totalQty,
    totalCost,
    averagePrice: totalQty > 0 ? totalCost / totalQty : 0,
    validOrderCount,
    invalidOrderCount,
    invalidOrderIndexes,
  };
}
