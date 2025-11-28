const { calculateDiscount } = require('../src/services/discountService');

describe("Cálculo de descuento", () => {
  
  test("aplica correctamente un descuento fijo al precio original", () => {
    const originalAmount = 100;
    const discountAmount = 20;

    const result = calculateDiscount(originalAmount, discountAmount);

    expect(result.finalAmount).toBe(80);
  });

  test("no permite que el descuento sea mayor al monto original", () => {
    const originalAmount = 50;
    const discountAmount = 100;

    const result = calculateDiscount(originalAmount, discountAmount);

    expect(result.finalAmount).toBe(0);
  });

  test("calcula correctamente con decimales", () => {
    const originalAmount = 99.99;
    const discountAmount = 19.99;

    const result = calculateDiscount(originalAmount, discountAmount);

    expect(result.finalAmount).toBeCloseTo(80.00);
  });

});
