export const onRequestGet = async () => {
  try {
    const [pricesRes, fngRes] = await Promise.all([
      fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin,ripple,dogecoin,tether&vs_currencies=brl&include_24hr_change=true',
        { headers: { 'User-Agent': 'BlocoCrypto-Portal/1.0' } }
      ),
      fetch('https://api.alternative.me/fng/?limit=1'),
    ]);

    const prices = await pricesRes.json();
    const fngData = (await fngRes.json()) as { data?: Array<{ value: string; value_classification: string }> };

    const fngEntry = fngData.data?.[0];

    return new Response(
      JSON.stringify({
        prices,
        fearAndGreed: fngEntry
          ? { value: Number(fngEntry.value), label: fngEntry.value_classification }
          : null,
        updatedAt: new Date().toISOString(),
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300',
        },
      }
    );
  } catch {
    return new Response(JSON.stringify({ prices: null, fearAndGreed: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
