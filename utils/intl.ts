export const localCurrency = (value: number, ISO3: string) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: ISO3 ?? "USD",
  }).format(value);
};
