import { Timer } from '../src';

test('timer helloWorld', () => {
  expect(new Timer().helloWorld()).toBe('helloWorld');
});

test('timer helloWorld2', () => {
  expect(new Timer().helloWorld()).toBe('helloWorld2');
});