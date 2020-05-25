export function convert(baseCurrency, changeCurrency, baseAmount) {
  const rates = getRates().rates;
  // All rates are from USD to other currencies
  const usdToBase = parseFloat(rates[baseCurrency]); // E.g: USD/EUR = 0.9
  const usdToChange = parseFloat(rates[changeCurrency]); // E.g: USD/CNY = 7.1
  const baseToChange = usdToChange / usdToBase; // E.g: EUR/CNY = (USD/CNY) / (USD/EUR)

  const convertedAmount = baseToChange * parseFloat(baseAmount);

  if (isNaN(convertedAmount)) return "";

  return convertedAmount.toLocaleString("fullwide", {
    maximumFractionDigits: 2,
  });
}
