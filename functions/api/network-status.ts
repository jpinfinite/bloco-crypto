export const onRequestGet = async () => {
  try {
    const [btcFeeRes, usdBrlRes] = await Promise.all([
      fetch('https://mempool.space/api/v1/fees/recommended'),
      fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL'),
    ]);

    const btcFees = (await btcFeeRes.json()) as { halfHourFee?: number };
    const usdData = (await usdBrlRes.json()) as { USDBRL?: { bid?: string } };

    const payload = {
      btcSatVb: btcFees.halfHourFee ?? null,
      usdBrl: usdData.USDBRL?.bid ? parseFloat(usdData.USDBRL.bid).toFixed(2) : null,
      updatedAt: new Date().toISOString(),
    };

    return new Response(JSON.stringify(payload), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // Cache na borda da Cloudflare por 5 min
      },
    });
  } catch {
    return new Response(JSON.stringify({ btcSatVb: null, usdBrl: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
