export const localCurrency = (value: number, ISO3: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: ISO3 ?? "USD",
  }).format(value);
};
