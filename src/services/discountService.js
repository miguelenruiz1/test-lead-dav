function calculateDiscount(originalAmount, discountAmount) {

  if (discountAmount > originalAmount) {
    return {
      originalAmount,
      discountAmount,
      finalAmount: 0
    };
  }

  const final = originalAmount - discountAmount;

  return {
    originalAmount,
    discountAmount,
    finalAmount: parseFloat(final.toFixed(2))
  };
}

module.exports = { calculateDiscount };
