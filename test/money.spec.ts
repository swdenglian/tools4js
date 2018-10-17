import Money, { money } from '../src/money';

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

test('toString money', () => {
  expect(new Money(1000).toString()).toBe('1,000');
});

test('toString 10000000 money', () => {
  expect(new Money(10000000).toString()).toBe('10,000,000');
});

test('toString("￥") money', () => {
  expect(new Money(1000).toString('￥')).toBe('￥1,000');
});

test('money(1000)', () => {
  expect(money(1000).toString('￥')).toBe('￥1,000');
});
