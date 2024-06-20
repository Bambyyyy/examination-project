const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "SEK",
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
