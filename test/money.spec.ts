import Money from '../src/money';

test('add money', () => {
  expect(new Money(1.79).add(0.12).getValue()).toBe(1.91);
});

test('subtract money', () => {
  expect(new Money(2.01).subtract(0.12).getValue()).toBe(1.89);
});
test('multiply money', () => {
  expect(new Money(1.01).multiply(1.3).getValue()).toBe(1.313);
});
test('division money', () => {
  expect(new Money(0.69).division(10).getValue()).toBe(0.069);
});
