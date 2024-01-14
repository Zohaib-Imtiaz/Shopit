export const discountPercentage = (originalPrice: number, discountedPrice: number) => {
  const difference = originalPrice - discountedPrice;
  const percentage = ((difference / originalPrice) * 100).toFixed(2)
  return percentage
};
